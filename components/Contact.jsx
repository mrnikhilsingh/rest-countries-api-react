import { useParams } from "react-router-dom";

export const Contact = () => {
  {
    const params = useParams();
    console.log(params);
  }
  return <h1>Contact Us !</h1>;
};
