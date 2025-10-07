export default function list() {

    const fruits = ["Apple", "Banana", "Cherry", "Date"];
    return <div className="col-12 mx-auto col-lg-4 col-md-6 px-4">
                <h1>hello this is list</h1>
                <ul className="list-group">
                    {fruits.map((fruit, index) => (
                        <li key={index} className="list-group-item">{fruit}</li>
                    ))}
                </ul>
            </div>

}