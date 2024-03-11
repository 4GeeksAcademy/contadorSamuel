import React from "react";
import Contador from "./Contador";

const Home = () => {
  return (
    <div className="container-fluid bg-dark text-light">
      <div className="row">
        <div className="col-md-2 text-center bordered-box">
          
        </div>
        <div className="col-md-1 bordered-box">
          <h2>0</h2>
        </div>
        <div className="col-md-1 bordered-box">
          <h2>0</h2>
        </div>
        <div className="col-md-1 bordered-box">
          <h2>0</h2>
        </div>
        <div className="col-md-1 bordered-box">
          <h2>0</h2>
        </div>
        <div className="col-md-1 bordered-box">
          <h2>
            <Contador />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;