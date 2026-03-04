import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function PaymentPage() {

  const [searchParams] = useSearchParams();

  const orderId = searchParams.get("orderId");
  const amount = searchParams.get("amount");
  const courseId = searchParams.get("courseId");

  useEffect(() => {

    if (!orderId || !amount || !courseId) {
      alert("Invalid Payment Request");
      return;
    }

    if (!window.Razorpay) {
      alert("Razorpay SDK failed to load.");
      return;
    }

    const options = {

      key: "rzp_test_SMLRZcjww63oCH",

      amount: Number(amount) * 100,

      currency: "INR",

      name: "Spardha Director",

      description: "Course Purchase",

      order_id: orderId,

      handler: async function (response) {

        try {

          await fetch(
            "https://api.spardhadirectorapp.online/api/v1/payment/verify",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                orderId: response.razorpay_order_id,
                paymentId: response.razorpay_payment_id,
                signature: response.razorpay_signature,
                courseId: courseId
              })
            }
          );

        } catch (e) {
          console.error("Verify error", e);
        }

        window.location.href =
          "spardhadirector://payment-success?courseId=" +
          courseId +
          "&paymentId=" +
          response.razorpay_payment_id;

      },

      modal: {
        ondismiss: function () {
          window.location.href =
            "spardhadirector://payment-cancelled";
        }
      },

      theme: {
        color: "#2563eb"
      }

    };

    const rzp = new window.Razorpay(options);

    rzp.open();

  }, []);

  return (

    <div style={containerStyle}>

      <div style={cardStyle}>

        <h2 style={{ marginBottom: "10px" }}>
          Processing Payment...
        </h2>

        <p style={{ fontSize: "14px", color: "#555" }}>
          Please wait while we open the secure payment gateway.
        </p>

      </div>

    </div>

  );

}

const containerStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f3f4f6",
  padding: "20px"
};

const cardStyle = {
  width: "100%",
  maxWidth: "400px",
  backgroundColor: "#ffffff",
  padding: "30px",
  borderRadius: "12px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  textAlign: "center"
};