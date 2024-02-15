import { FiImage } from "react-icons/fi";
import { FaUserCircle, FaRegComment } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

export interface PostProps {
  id: string;
  email: string;
  content: string;
  createdAt: string;
  uid: string;

  // optional properties
  profileUrl?: string;
  likes?: string[];
  likeCount?: string;
  comments?: any;
}

const posts: PostProps[] = [
  {
    id: "1",
    email: "gin280833@gmail.com",
    content: "1일째 포스트입니다.",
    createdAt: "2024-02-15",
    uid: "1234567",
  },
  {
    id: "2",
    email: "gin280833@gmail.com",
    content: "2일째 포스트입니다.",
    createdAt: "2024-02-15",
    uid: "1234567",
  },
  {
    id: "3",
    email: "gin280833@gmail.com",
    content: "3일째 포스트입니다.",
    createdAt: "2024-02-15",
    uid: "1234567",
  },
  {
    id: "4",
    email: "gin280833@gmail.com",
    content: "4일째 포스트입니다.",
    createdAt: "2024-02-15",
    uid: "1234567",
  },
  {
    id: "5",
    email: "gin280833@gmail.com",
    content: "5일째 포스트입니다.",
    createdAt: "2024-02-15",
    uid: "1234567",
  },
  {
    id: "6",
    email: "gin280833@gmail.com",
    content: "6일째 포스트입니다.",
    createdAt: "2024-02-15",
    uid: "1234567",
  },
  {
    id: "7",
    email: "gin280833@gmail.com",
    content: "7일째 포스트입니다.",
    createdAt: "2024-02-15",
    uid: "1234567",
  },
  {
    id: "8",
    email: "gin280833@gmail.com",
    content: "8일째 포스트입니다.",
    createdAt: "2024-02-15",
    uid: "1234567",
  },
  {
    id: "9",
    email: "gin280833@gmail.com",
    content: "9일째 포스트입니다.",
    createdAt: "2024-02-15",
    uid: "1234567",
  },
  {
    id: "10",
    email: "gin280833@gmail.com",
    content: "10일째 포스트입니다.",
    createdAt: "2024-02-15",
    uid: "1234567",
  },
];

function HomePage() {
  const handleFileUpload = () => {};
  const handleDelete = () => {};

  return (
    <div className="home">
      <div className="home_title">Home</div>
      <div className="home_tabs">
        <div className="home_tab home_tab--active">For you</div>
        <div className="home_tab">Following</div>
      </div>

      {/* Post form */}
      <form className="post-form">
        <textarea
          className="post-form_textarea"
          required
          name="content"
          id="content"
          placeholder="What is happening?"
        />
        <div className="post-form_submit-area">
          <label htmlFor="file-input" className="post-form_file">
            <FiImage className="post-form_file-icon" />
          </label>

          <input
            type="file"
            name="file-input"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />
          <input
            type="submit"
            value="Tweet"
            className="post-form_submit-button"
          />
        </div>
      </form>

      {/* Tweet post */}
      <div className="post">
        {posts.map((post) => (
          <div className="post_box" key={post.id}>
            <Link to={`/posts/${post.id}`}>
              <div className="post_box-profile">
                {post.profileUrl ? (
                  <img
                    src={post?.profileUrl}
                    alt="profile"
                    className="post_box-profile-image"
                  />
                ) : (
                  <FaUserCircle />
                )}

                <div className="post_email">{post?.email}</div>
                <div className="post_createdAt">{post?.createdAt}</div>
              </div>
              <div className="post_box-content">{post?.content}</div>
            </Link>
            <div className="post_box-footer">
              {/* if post.uid === user.uid */}

              <>
                <button
                  type="button"
                  className="post_delete"
                  onClick={handleDelete}
                >
                  Delete
                </button>
                <button type="button" className="post_edit">
                  <Link to={`/posts/${post.id}`}>Edit</Link>
                </button>
              </>

              <button type="button" className="post_likes">
                <AiFillHeart />
                {post?.likeCount || 0}
              </button>
              <button type="button" className="post_edit">
                <FaRegComment />
                {post?.comments?.length || 0}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
