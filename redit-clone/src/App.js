import "./App.css";
import "./components/aside.css";
import React from "react";
import { useEffect } from "react";

import { Home } from "./pages/home";
import { AddNewPost } from "./pages/addnewpost";
import { OnePost } from "./pages/post";
import { getAllPosts, getAllComments, getAllUsers } from "./api/fetch";
import { AsideLeft } from "./components/asideleft";
import { AsideRight } from "./components/asideright";

import Navigator from "./components/navigator";
import { Route, Routes, useLocation } from "react-router-dom";

import { useRecoilState } from "recoil";
import {
  postState,
  userState,
  commentState,
  allDatasState,
} from "./states/atoms";

function App() {
  const [posts, setPosts] = useRecoilState(postState);
  const [comments, setComments] = useRecoilState(commentState);
  const [users, setUsers] = useRecoilState(userState);
  const [allData, setAllData] = useRecoilState(allDatasState);

  const location = useLocation();
  const isAddNewPostRoute = location.pathname === "/addnewpost";

  const scrollBackTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    getAllPosts().then((result) => setPosts(result.posts));
    getAllComments().then((result) => setComments(result.comments.map(comment => ({...comment, like : Math.floor(Math.random() * 20)}))));
    getAllUsers().then((result) => setUsers(result.users));
   
    //  funktion för o kombinera users och "posts" i samma array med objekt.
    let userData = [];
    let postData = [];

    const fetchData = async () => {
      try {
        const usersResult = await getAllUsers();
        userData = usersResult.users;

        const postsResult = await getAllPosts();
        postData = postsResult.posts;

        //sätter ihop userdatan med postdatan via deras gemensamma id, till samma objekt.
        const mergedData = userData.map((user) => ({
          ...user,
          ...postData.find((post) => post.id === user.id),
        }));

        setAllData(mergedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navigator />
      <div className="container-appjs">
        {!isAddNewPostRoute && <AsideLeft />}
        <Routes>
          <Route path="/addnewpost" element={<AddNewPost />} />
          <Route path="/" element={<Home posts={posts} users={users} />} />
          <Route
            path="/post/:id/:firstName/:lastName/:index"
            element={<OnePost />}
          />
        </Routes>
        {!isAddNewPostRoute && <AsideRight />}
      </div>
      <div className="content-container"></div>
      <button className="scroll-btn" onClick={scrollBackTop}>
        Back to top
      </button>
    </>
  );
}

export default App;
