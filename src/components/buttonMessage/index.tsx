import { useState } from "react";

const ButtonMessage = () => {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage("Se hizo click");
  };

  return (
    <>
      <p>{message}</p>
      <button onClick={handleClick}>Hacer click</button>
    </>
  );
};

export default ButtonMessage;
