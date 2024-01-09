import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "pages/home";
import PostListPage from "pages/posts";
import PostNew from "pages/posts/new";
import PostEdit from "pages/posts/edit";
import LoginPage from "pages/login";
import SignupPage from "pages/signup";
import PostDetailPage from "pages/posts/detail";
import ProfilePage from "pages/profile";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/posts" element={<PostListPage />} />
      <Route path="/posts/:id" element={<PostDetailPage />} />
      <Route path="/posts/new" element={<PostNew />} />
      <Route path="/posts/edit/:id" element={<PostEdit />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      {/* 이상한 경로로 들어오면 홈 페이지로 이동하도록 변경 */}
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}
