import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <section className="flex flex-column items-center justify-center text-center">
        <h1>
          Error 404 <span>The page you are looking for does not exist</span>
        </h1>
        <Link to="/">&larr; Back to homepage</Link>
      </section>
    </>
  );
};

export default Error;
