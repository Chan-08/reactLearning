import { useEffect, useState } from "react";
import api from "../services/api";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get<Post[]>("/posts");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <h3 className="text-center mt-5">Loading posts...</h3>;
  }

  return (
    <div className="container my-4">
      <div className="row">
        {posts.map((post) => (
          <div key={post.id} className="col-md-4 col-sm-6 mb-4">
            <div className="card shadow-sm h-100 border-0 rounded-3">
              <img
                src={`https://picsum.photos/300/200?random=${post.id}`}
                alt="Post Thumbnail"
                className="card-img-top rounded-top-3"
              />
              <div className="card-body">
                <h5 className="card-title text-primary text-capitalize">
                  {post.title}
                </h5>
                <p className="card-text text-muted">{post.body}</p>
                <p className="text-secondary small mb-2">
                  <b>Post ID:</b> {post.id}
                </p>
                <button className="btn btn-outline-primary btn-sm">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
