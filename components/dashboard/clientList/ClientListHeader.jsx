import React from "react";
import TextHeader from "../TextHeader";
import OptionInput from "@/components/OptionsInput";
import Button from "@/components/Button";
import plus_icon from "../../../public/assets/plus_icon.svg";
import edit_icon from "../../../public/assets/edit_icon.png";

import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link";

export default function ClientListHeader() {
  const options = ["Filter", "cards", "male", "female"];
  return (
    <header className="ClientListHeader">
      <TextHeader
        title="Clients"
        text="Lorem ipsum dolor sit amet consectetur adipiscing"
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

        <Link href={"/dashboard/client_list/new_client"}>
          <Button
            value="Add Client"
            image={plus_icon}
            className={"active capitalizeBtn"}
          />
        </Link>
      </div>
    </header>
  );
}
