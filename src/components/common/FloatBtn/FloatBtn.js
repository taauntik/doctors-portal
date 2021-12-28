import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function FloatBtn() {
  return (
    <div>
      <div className="float-btn" onClick={() => window.scroll(0, 0)}>
        <FontAwesomeIcon className="float-icon" icon={faArrowUp} />
      </div>
    </div>
  );
}

export default FloatBtn;
