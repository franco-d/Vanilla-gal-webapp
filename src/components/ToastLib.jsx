import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastLib = () => {
  const Notify = () => toast(
		"Wow so easy!",
		{
			position: "bottom-left",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light"
		}
	);
  return (
    <>
      <Notify/>
      <ToastContainer />
    </>
  )
}

export default ToastLib