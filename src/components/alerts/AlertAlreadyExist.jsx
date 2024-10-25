import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

const AlertAlreadyExist = ({ setAlreadyExist }) => {
  useEffect(() => {
    notify();
  }, []);
  const notify = () => {
    toast.error("Player already brought!", {
      position: "top-center",
      onClose: () => setAlreadyExist((c) => !c),
    });
  };

  return (
    <>
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default AlertAlreadyExist;
