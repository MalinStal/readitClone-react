import { Link } from "react-router-dom";
import "./main.css";
import { RecoilRoot, useRecoilState } from "recoil";
import { userState, allDatasState, searchBarState, likeCommentsState } from "../states/atoms";
import { FilterItem } from "../utils/filterlist";
import React from "react";

export function Main() {
  const [searchBar, setSearchBar] = useRecoilState(searchBarState);
  const [users, setUser] = useRecoilState(userState);
  const [allData, setAllData] = useRecoilState(allDatasState);
  const [likeComment,setLikeComment] = useRecoilState(likeCommentsState);


  const filterData = FilterItem(searchBar, allData);

  if (Object.keys(allData).length === 0) {
    return (
      <div>
        <p>User data is not available.</p>
      </div>
    );
  } else {
    return (
      <main className="main">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to="/addnewpost">
            <input
              placeholder="Create Post"
              style={{ marginLeft: "5%" }}
              className="add-btn"
            />
          </Link>
          <div style={{ display: "flex", gap: "2rem", marginRight: "5px" }}>
            <span className="btn-right">
              <p>Hot</p>
              <i className="arrow down"></i>
            </span>
            <span className="btn-right">
              <p>Sweden</p>
              <i className="arrow down"></i>
            </span>
            <span className="btn-right">
              <p>⚙️</p>
              <i className="arrow down"></i>
            </span>
          </div>
        </div>

        <ul style={{ listStyle: "none" }}>
          {filterData.map((holder, index) => {
            let idIsInvalid = 0;
            if (holder.id === 151) {
              idIsInvalid = holder.userId;
            } else {
              idIsInvalid = holder.id;
            }
            return (
              <li
                key={Math.random()}
                style={{ borderBottom: "1px solid black" }}
              >
                <Link
                  to={`/post/${holder.id}/${filterData[index]?.firstName}/${filterData[index]?.lastName}/${index}`}
                  style={{ color: "black", textDecoration: "none" }}
                  className="hover-link"
                  onClick={() => {}}
                >
                  <h3>Title: {holder.title}</h3>
                  <main>{holder.body}</main>
                  {holder && <img src={holder.image} width={25} height={25} />}
                  <h4>
                    Creator: {holder.firstName} {holder.lastName}
                  </h4>
                  <h5>
                    Tags:{" "}
                    {Array.isArray(filterData[index]?.tags)
                      ? filterData[index].tags.map((tag) => tag + " / ")
                      : "Life / History / Random"}
                  </h5>
                  Read More
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}
