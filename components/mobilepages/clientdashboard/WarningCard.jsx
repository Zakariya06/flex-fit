import { FaXmark } from "react-icons/fa6";
import { useState } from "react";

function WarningCard() {
  const [isShow, setIsShow] = useState(true);
  if (isShow) {
    return (
      <div className="warningCard">
        <div className="warningCardHeader d-flex align-items-center justify-content-between">
          <h5 className="mdHeading">New Workout Assigned!!</h5>
        <FaXmark className="closewarning" onClick={() => setIsShow(false)} />
      </div>
      <p className="mainText">
        Check the updated workout plan on your dashboard.
      </p>
      </div>
    );
  }
}

export default WarningCard;
