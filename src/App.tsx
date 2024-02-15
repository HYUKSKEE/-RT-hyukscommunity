import "./App.css";

import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/posts" element={<div>Posts page</div>} />
      <Route path="/posts/new" element={<div>Post new page</div>} />
      <Route path="/posts/:id" element={<div>Post detail page</div>} />
      <Route path="/posts/edit/:id" element={<div>Post edit page</div>} />
      <Route path="/profile" element={<div>Profile page</div>} />
      <Route path="/profile/edit" element={<div>Profile edit page</div>} />
      <Route path="/notifications" element={<div>Notifications page</div>} />
      <Route path="/search" element={<div>Search page</div>} />
      <Route path="/users/login" element={<div>Login page</div>} />
      <Route path="/users/signup" element={<div>Signup page</div>} />
      <Route path="/*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}

export default App;
