import Welcome from "../components02/welcome"
import Image from "../assets/react.svg"

export default function About () {
    return <>
    <h1>About page</h1>
    <img src={Image} alt="" />
    <Welcome/>
    </>
}