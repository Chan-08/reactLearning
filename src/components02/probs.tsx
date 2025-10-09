type Props = {
  name?: string;
  age?: number;
  show?: boolean;
};

export default function ProbsExample({ name, age, show }: Props) {
  return (<>
    {show ? (
      <div>
        <h1>Welcome {name} {age}</h1>
        <p>This is a simple React application. Props implemented.</p>
      </div>
    ) : (
      <div>
        <h1>Welcome {name} {age}</h1>
        <p>This is a simple React application. Props implemented. here show is false</p>
      </div>
    )}
  </>
  );
}

ProbsExample.defaultProps = {
  name: "Name not given",
  age: 0,
};
