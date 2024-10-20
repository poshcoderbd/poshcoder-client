import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { axiosReq } from "../../utils/axiosReq";

const VerifyEmail = () => {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      const query = new URLSearchParams(location.search);
      const token = query.get("token");

      if (!token) {
        setMessage("Invalid verification link.");
        setLoading(false);
        return;
      }

      try {
        const response = await axiosReq.post(
          `/auth/verify-email?token=${token}`
        );
        setMessage(response.data);
        toast.success(response.data);
        setLoading(false);
        navigate("/login");
      } catch (error) {
        setMessage(error.response.data || "Verification failed.");
        toast.error(error.response.data || "Verification failed.");
        setLoading(false);
      }
    };

    verifyToken();
  }, [location.search, history]);

  return (
    <div className="p-100">
      {loading ? <p>Verifying your email...</p> : <p>{message}</p>}
    </div>
  );
};

export default VerifyEmail;
