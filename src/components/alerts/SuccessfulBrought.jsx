import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import React, { useEffect } from "react";

const SuccessfulBrought = ({ setSuccess }) => {
  useEffect(() => {
    notify();
  }, []);
  const notify = () => {
    toast.success("Successfully brought!", {
      position: "top-center",
      onClose: () => setSuccess((c) => !c),
    });
  };

  return (
    <>
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default SuccessfulBrought;
