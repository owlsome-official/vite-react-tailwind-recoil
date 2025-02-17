import PlainCenterLayout from "layouts/PlainCenterLayout";
import React from "react";
import { useNavigate } from "react-router";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <PlainCenterLayout>
      <div className="text-h1 text-center font-bold">
        <div className="leading-none">404</div>
        <div>Not Found</div>
      </div>
      <div className="text-p mb-4">Go back to the home.</div>
      <button className="btn-primary btn" onClick={() => navigate("/")}>
        Go Home
      </button>
    </PlainCenterLayout>
  );
};

export default NotFoundPage;
