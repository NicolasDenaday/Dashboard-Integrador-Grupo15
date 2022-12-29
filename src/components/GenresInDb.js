import React, { useState, useEffect } from "react";
import Grinding from "./Grinding";

function GrindingsInDb() {
  const [grindings, setGrinding] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/api/grinding")
      .then((response) => {
        return response.json();
      })
      .then((grinding) => {
        setGrinding(grinding.data);
      })
      .catch((error) => console.log(error));
  }, []);

  function background() {
    let container = document.querySelector(".backgroundContainer");
    container.classList.toggle("bg-secondary");
  }

  return (
    <React.Fragment>
      <div className="col-lg-6 mb-4 bg-secondary">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6
              className="m-0 font-weight-bold text-gray-800"
              onMouseOver={() => {
                background();
              }}
            >
              Different available grindings...
            </h6>
          </div>
          {grindings.length === 0 && (
            <div className="card-body backgroundContainer">Loading...</div>
            )}
            {console.log(grindings)}
          <div className="card-body backgroundContainer">
            {
              <div className="row">
                {grindings.map((grinding, index) => {
                  return <Grinding {...grinding} key={index} />;
                })}
              </div>
            }
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default GrindingsInDb;
