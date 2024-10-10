import { Toaster } from "react-hot-toast";

const ToasterMes = () => {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        className: "",
        style: {
          padding: "16px",
          color: "#121417",
        },
      }}
    />
  );
};

export default ToasterMes;
