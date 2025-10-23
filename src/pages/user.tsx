import { useParams } from "react-router-dom";

type userProbs = {
  username?: string;
};

export default function UserPage({ username}: userProbs) {
  const { id } = useParams();

  return <div>
    <h1>User Page</h1>
    <p>Welcome to the user page!</p>
    <h2>The logged-in user is {username}, and their ID is {id}.</h2>
  </div>;
}