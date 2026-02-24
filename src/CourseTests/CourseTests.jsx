import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api";

export default function CourseTests() {

  const { courseId } = useParams();
  const navigate = useNavigate();

  const [isPurchased, setIsPurchased] = useState(false);
  const [loadingPayment, setLoadingPayment] = useState(false);

  const tests = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Test ${i + 1}`
  }));

  const subjects = [
    { label: "मराठी", key: "Marathi" },
    { label: "गणित", key: "Math" },
    { label: "सामान्य ज्ञान", key: "GeneralKnowledge" },
    { label: "बुद्धिमत्ता चाचणी", key: "Reasoning" },
  ];

  useEffect(() => {
    checkPurchase();
  }, []);

  const checkPurchase = async () => {
    try {
      const res = await API.get("/user/my-courses");
      const purchased = res.data.some(
        c => c.courseId === Number(courseId)
      );
      setIsPurchased(purchased);
    } catch {
      navigate("/login");
    }
  };

  const handlePayment = async () => {
    try {
      setLoadingPayment(true);

      const res = await API.post(`/payment/create/${courseId}`);
      const order = res.data;

      const options = {
        key: "rzp_test_YOUR_REAL_KEY",
        amount: order.amount,
        currency: order.currency,
        name: "Spardha Director",
        description: "Course Purchase",
        order_id: order.id,
        handler: async function (response) {

          await API.post("/payment/verify", {
            orderId: response.razorpay_order_id,
            paymentId: response.razorpay_payment_id,
            signature: response.razorpay_signature,
            courseId
          });

          alert("Payment Successful 🎉 All Tests Unlocked!");
          setIsPurchased(true);
          setLoadingPayment(false);
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch {
      alert("Payment failed");
      setLoadingPayment(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">

      <h2 className="text-2xl font-bold mb-8">
        Course Tests
      </h2>

      <div className="space-y-8">

        {tests.map(test => {

          const isLocked = !isPurchased && test.id !== 1;

          return (
            <div
              key={test.id}
              className="bg-white rounded-3xl shadow-lg p-6"
            >

              <h3 className="text-xl font-semibold mb-6">
                {test.name}
                {isLocked && (
                  <span className="ml-2 text-red-500 text-sm">
                    🔒 Locked
                  </span>
                )}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {subjects.map(subject => (

                  <div
                    key={subject.key}
                    onClick={() => {
                      if (isLocked) {
                        handlePayment();
                      } else {
                        navigate(`/quiz/${test.id}/${subject.key}`);
                      }
                    }}
                    className={`rounded-xl p-4 flex justify-between items-center transition
                    ${isLocked
                        ? "bg-gray-200 cursor-pointer"
                        : "bg-gray-100 hover:bg-blue-100 cursor-pointer"}
                    `}
                  >
                    <span>{subject.label}</span>
                    {isLocked ? "🔒" : "▶"}
                  </div>

                ))}

              </div>

            </div>
          );
        })}

      </div>

      {!isPurchased && (
        <div className="mt-8 text-center">
          <button
            onClick={handlePayment}
            disabled={loadingPayment}
            className="bg-indigo-600 text-white px-8 py-3 rounded-xl"
          >
            {loadingPayment ? "Processing..." : "Buy Course ₹49"}
          </button>
        </div>
      )}

    </div>
  );
}