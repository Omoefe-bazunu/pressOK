import React from "react";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className="flex flex-col w-5/6 h-fit gap-4 bg-inherit">
      <p className=" text-neutral-600">
        Seems you stumbled to a wrong page. No probs
      </p>
      <Link to="/">
        <p className=" text-neutral-600 underline font-medium">
          Return to the Home Page
        </p>
      </Link>
    </div>
  );
};
