import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/posts">게시글 리스트</Link>
        </li>
        <li>
          <Link to="/posts/:id">게시글 상세 페이지</Link>
        </li>
        <li>
          <Link to="/posts/new">게시글 생성 페이지</Link>
        </li>
        <li>
          <Link to="/posts/edit/:id">게시글 수정 페이지</Link>
        </li>
        <li>
          <Link to="/profile">프로필 페이지</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<h1>홈 페이지</h1>} />
        <Route path="/posts" element={<h1>게시글 리스트</h1>} />
        <Route path="/posts/:id" element={<h1>게시글 상세 페이지</h1>} />
        <Route path="/posts/new" element={<h1>게시글 생성 페이지</h1>} />
        <Route path="/posts/edit/:id" element={<h1>게시글 수정 페이지</h1>} />
        <Route path="/profile" element={<h1>프로필 페이지</h1>} />
        {/* 이상한 경로로 들어오면 홈 페이지로 이동하도록 변경 */}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
}

export default App;
