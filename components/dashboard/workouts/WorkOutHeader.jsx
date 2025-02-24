import React, { useState } from "react";
import TextHeader from "../TextHeader";
import OptionInput from "@/components/OptionsInput";
import Button from "@/components/Button";
import edit_icon from "@/public/assets/edit_icon.png";

import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link";
import RequestAdminModal from "../modal/RequestAdminModal";

function WorkOutHeader() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const options = ["Filter", "cards", "male", "female"];
  return (
    <>
      <header className="ClientListHeader workoutPageHeader">
        <TextHeader
          title="Workouts"
          text="Lorem ipsum dolor sit amet consectetur adipiscing"
          className="smTextHeader"
        />

        <div className="headerSearchFields">
          <form
            className={`inputHolder  d-flex align-item-center gap-2 headerForm  `}
          >
            <button className="menuBtn" type="submit">
              <IoSearchOutline className="searchIcon" />
            </button>
            <input type="search" placeholder="search" className={`inputArea`} />
          </form>
          <OptionInput options={options} className="filterOptions" />

          <Button
            onClick={handleShow}
            value="Request Admin"
            className={"bg-dark border-0 text-white   capitalizeBtn"}
          />
          <Link href={"/dashboard/workouts/workouts_details"}>
            <Button
              value="Create Plan"
              image={edit_icon}
              className={"  border-0 text-dark capitalizeBtn"}
            />
          </Link>
        </div>
      </header>
      <RequestAdminModal show={show} handleClose={handleClose} />
    </>
  );
}

export default WorkOutHeader;
