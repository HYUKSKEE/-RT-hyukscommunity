import { Route, Routes, Navigate } from "react-router-dom";

import HomePage from "pages/home";
import NotificationsPage from "pages/notifications";
import PostsListPage from "pages/posts";
import PostsDetail from "pages/posts/detail";
import PostsEdit from "pages/posts/edit";
import PostsNew from "pages/posts/new";
import ProfilePage from "pages/profile";
import ProfileEdit from "pages/profile/edit";
import SearchPage from "pages/search";
import LoginPage from "pages/users/login";
import SignupPage from "pages/users/signup";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/posts" element={<PostsListPage />} />
      <Route path="/posts/new" element={<PostsNew />} />
      <Route path="/posts/:id" element={<PostsDetail />} />
      <Route path="/posts/edit/:id" element={<PostsEdit />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/profile/edit" element={<ProfileEdit />} />
      <Route path="/notifications" element={<NotificationsPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/users/login" element={<LoginPage />} />
      <Route path="/users/signup" element={<SignupPage />} />
      <Route path="/*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}
