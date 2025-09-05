import { toast } from "react-toastify";

class Toaster {
  static async success(message) {
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      closeOnClick: true,
    });
  }

  static async error(message) {
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      closeOnClick: true,
    });
  }

  static info(message) {
    toast.info(message, {
      position: "top-right",
      autoClose: 5000,
      closeOnClick: true,
    });
  }

  static warning(message) {
    toast.warning(message, {
      position: "top-right",
      autoClose: 5000,
      closeOnClick: true,
    });
  }
}

export default Toaster;
