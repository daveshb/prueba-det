import { ContextDet } from "../../context/Context";
import { useContext } from "react";
import FetchData from "../../components/fetchComponent";

export const Home = () => {
  const { loggedUser } = useContext(ContextDet);

  return (
    <div>
      <h1>Home</h1>
      <p>Usuario logueado:</p>
      <p>{loggedUser}</p>
      <FetchData />
    </div>
  );
};
