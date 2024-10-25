import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

const AlertInsufficientCoins = ({ setInsufficientCoins }) => {
  useEffect(() => {
    notify();
  }, []);
  const notify = () => {
    toast.error("Please add more coins!", {
      position: "top-center",
      onClose: () => setInsufficientCoins((c) => !c),
    });
  };

  return (
    <>
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default AlertInsufficientCoins;
