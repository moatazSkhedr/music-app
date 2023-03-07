import React from "react";
import { FaPlus } from "react-icons/fa";
import { BsMusicNoteList, BsTrash } from "react-icons/bs";

import "../Style/LeftMenu.css";
import { PlayList } from "./PlayList";
function MenuPlayList() {
  return (
    <div className="playlistContainer">
      <div className="nameContainer">
        <p>PlayList</p>
        <i>
          <FaPlus />
        </i>
      </div>
      <div className="playlistScroll">
        {PlayList &&
          PlayList.map((ele) => (
            <div className="playlist">
              <i className="list">
                <BsMusicNoteList />
              </i>
              <p key={ele.id}>{ele.name}</p>
              <i className="trash">
                <BsTrash />
              </i>
            </div>
          ))}
      </div>
    </div>
  );
}

export default MenuPlayList;
