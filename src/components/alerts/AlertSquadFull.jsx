import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

const AlertSquadFull = ({ setSquadFull }) => {
  useEffect(() => {
    notify();
  }, []);
  const notify = () => {
    toast.error("Squad is full!", {
      position: "top-center",
      onClose: () => setSquadFull((c) => !c),
    });
  };

  return (
    <>
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default AlertSquadFull;
