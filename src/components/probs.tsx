type varProps = {
  name: string;
  age: number;
};

export default function probsExample({name , age}: varProps) {
  //console.log("Welcome to the application!");
  return <div>
    <h1 className="">Welcome {name} {age}</h1>
    <p>This is a simple React application. probs implemented</p>
  </div>;
}
