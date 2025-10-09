import { useState } from "react";

export default function eventLearning() {
    const [formData, setText] = useState({name: "", email: "" });

    function handleChange(event:any) {
        const { name, value } = event.target;
        setText((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const [age, setAge] = useState(0);

    function ageChange(event:any) {
        setAge(event.target.value);
    }

    return <div className="container mt-4">
                <h1 className='mt-5'>On Change Event</h1>
                <label className="form-label">Name:</label>
                <input className="form-control w-50" type="text" placeholder="name" name="name" onChange={handleChange} />
                <p className="mt-3">Name: {formData.name}</p>
                <label className="form-label">Email:</label>
                <input className="form-control w-50" type="email" placeholder="email" name="email" onChange={handleChange} />
                <p className="mt-3">Email: {formData.email}</p>

                <label className="form-label">Age:</label>
                <input className="form-control w-50" type="number" min={0} placeholder="age" name="age" onChange={ageChange} />
                <p className="mt-3">Age: {age}</p>
            </div>
    }