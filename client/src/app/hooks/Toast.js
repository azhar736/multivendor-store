import { toast } from "react-toastify";

const useMakeToast = () => {
  const makeToast = (message, type) => {
    const toastOptions = {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    };

    switch (type) {
      case "success":
        toast.success(message, toastOptions);
        break;
      case "error":
        toast.error(message, toastOptions);
        break;
      case "warning":
        toast.warn(message, toastOptions);
        break;
      case "dark":
        toast.dark(message, toastOptions);
        break;
      default:
        toast.info(message, toastOptions);
        break;
    }
  };
  return makeToast;
};

export default useMakeToast;
