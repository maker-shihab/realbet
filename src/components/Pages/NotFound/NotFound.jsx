import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center max-h-fit text-center
    ">
      <div className="container">
        <h2 className="text-4xl font-bold">
          404 not found
        </h2>
        <Link to="/">
          <button type="button" className="btn btn-primary">Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;