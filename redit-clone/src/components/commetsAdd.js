import { commentState, userState } from "../states/atoms";
import { useRecoilState } from "recoil";
import { addAComment } from "../api/fetch";
import { useState } from "react";
import { Article, ImageSquare, Link } from "@phosphor-icons/react";

export function AddComment() {
  const [allComments, setAllComments] = useRecoilState(commentState);
  const [users, setUsers] = useRecoilState(userState);
  const [input, setInput] = useState({ user: "", id: "", body: "" });

  const handelChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  function PeopleList() {
    return (
      <select
        name="id"
        value={input.id}
        onChange={handelChange}
        style={{ width: "20%", height: "30px", border: "none" }}
      >
        <option>Choose a user:</option>
        {users.map((person) => (
          <option key={Math.random()} value={person.id}>
            {person.username}
          </option>
        ))}
      </select>
    );
  }
  const handelClick = (e) => {
    e.preventDefault();

    if (input.body.trim() === "") {
      alert("You have to put down som text");
      return;
    }

    addAComment(input.body, input.user, input.id).then((input) =>
      setAllComments([input, ...allComments])
    );
    setInput(() => ({ body: "" }));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h5>Comment as </h5>
        <PeopleList />
      </div>
      <textarea
        className="comment-container"
        name="body"
        value={input.body}
        onChange={handelChange}
        style={{ width: "auto", height: "100px" }}
      />
      <div
        className="bottom div"
        style={{
          display: "flex",
          backgroundColor: "whitesmoke",
          alignItems: "center",
        }}
      >
        <button
          style={{
            fontSize: "larger",
            fontWeight: "bolder",
            border: "None",
            backgroundColor: "whitesmoke",
          }}
        >
          B
        </button>
        <button
          style={{
            fontStyle: "italic",
            fontSize: "large",
            border: "None",
            backgroundColor: "whitesmoke",
          }}
        >
          i
        </button>
        <button
          className="choose-post-btn"
          style={{ border: "none", backgroundColor: "whitesmoke" }}
        >
          <Link size={20} />
          Link
        </button>
        <button
          className="choose-post-btn"
          style={{ border: "none", backgroundColor: "whitesmoke" }}
        >
          <Article size={20} />
          Post
        </button>
        <button
          className="choose-post-btn"
          style={{ border: "none", backgroundColor: "whitesmoke" }}
        >
          <ImageSquare size={20} />
          Image & video
        </button>

        <button
          className="choose-post-btn "
          style={{ border: "none", backgroundColor: "whitesmoke" }}
        >
          <Article size={20} />
          Poll
        </button>
        <button
          style={{
            fontSize: "larger",
            fontWeight: "bolder",
            border: "none",
            backgroundColor: "whitesmoke",
          }}
        >
          ...
        </button>
        <button
          style={{
            width: "100px",
            fontSize: "",
            fontWeight: "bolder",
            border: "none",
            backgroundColor: "whitesmoke",
            color: "orange",
          }}
        >
          Markdown Mode
        </button>
        <button
          className="comment-btn"
          onClick={handelClick}
          style={{
            width: "100px",
            borderRadius: "20px",
            height: "30px",
            backgroundColor: "darkgoldenrod",
            border: "none",
            marginRight: "1%",
          }}
        >
          Comment
        </button>
      </div>
    </div>
  );
}
