import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

const AlertRemovePlayer = ({ setRemoveAlert }) => {
  useEffect(() => {
    notify();
  }, []);
  const notify = () => {
    toast.success("Player removed!", {
      position: "top-center",
      onClose: () => setRemoveAlert((c) => !c),
    });
  };

  return (
    <>
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default AlertRemovePlayer;
