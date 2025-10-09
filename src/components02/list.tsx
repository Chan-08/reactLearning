export default function list() {

    const fruits = ["Apple", "Banana", "Cherry", "Date"];
    return <div className="col-12 mx-auto col-lg-4 col-md-6 px-4">
                <h1 className="mt-5">list</h1>
                <p>List using Array</p>
                <ul className="list-group">
                    {fruits.map((fruit, index) => (
                        <li key={index} className="list-group-item">{fruit}</li>
                    ))}
                </ul>
            </div>

}