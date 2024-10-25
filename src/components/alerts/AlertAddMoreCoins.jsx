import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

const AlertAddMoreCoins = ({ setAddMoreCoinsAlert }) => {
  useEffect(() => {
    notify();
  }, []);
  const notify = () => {
    toast.success("Coins added!", {
      position: "top-center",
      onClose: () => setAddMoreCoinsAlert((c) => !c),
    });
  };

  return (
    <>
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default AlertAddMoreCoins;
