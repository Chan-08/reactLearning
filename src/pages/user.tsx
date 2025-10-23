import { useParams } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";

type userProbs = {
  username?: string;
};

export default function UserPage({ username}: userProbs) {
  const { id } = useParams();

  return <div>
    <h1>User Page</h1>
    <p>Welcome to the user page!</p>
    <h2>The logged-in user is {username}, and their ID is {id}.</h2>

    <Link to="userDetails">Go to User Details Page</Link>
    <Outlet />


      <p className="text-muted" style={{ marginTop: "1rem" }}>
        <strong>Explanation:</strong><br />
        The <code>username</code> value is passed from the parent component as a prop,
        while the <code>id</code> is obtained dynamically from the URL using{" "}
        <code>useParams()</code> from React Router. When a user logs in, their
        details (like <code>id</code> and <code>username</code>) are stored in{" "}
        <code>localStorage</code>. Then, the app reads this data and navigates to a
        dynamic route such as <code>/user/&#123;id&#125;</code>. This allows each
        logged-in user to have a unique route (for example:
        <code>/user/2</code>) that displays their personalized information.
      </p>

  </div>;
}