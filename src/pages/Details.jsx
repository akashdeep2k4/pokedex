import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  return (
    <div>
      <p>Details Component</p>
    </div>
  );
};

export default Details;
