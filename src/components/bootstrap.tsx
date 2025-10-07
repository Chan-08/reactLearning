

export default function bootstrap() {
  //console.log("Welcome to the application!");

  const name = "Chandrakumar";
  return <div className="container-fluid m-0 p-4 d-flex flex-column align-items-center">
    <h1 className="">Welcome {name} </h1>
    <p>This is a simple React application. (bootstrap implemented)</p>
    
    <div className="col-12 mx-auto col-lg-4 col-md-6 px-4">
        <h1>hello this is list</h1>
        <ul className="list-group">
            <li className="list-group-item">Item 1</li>
            <li className="list-group-item">Item 2</li>
            <li className="list-group-item">Item 3</li>
        </ul>
    </div>
  </div>;
}