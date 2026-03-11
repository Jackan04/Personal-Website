import SpinnerIcon from "../assets/icons/spinner.svg?react";

export default function Loading({ message = "Loading..." }) {
  return (
    <div className="loading-container">
      <SpinnerIcon className="spinner-icon" />
      <p>{message}</p>
    </div>
  );
}
