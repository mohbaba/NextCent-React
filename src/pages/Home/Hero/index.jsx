import FilledButton from "../../../component/FilledButton";
import {useState} from "react";

const Hero = () =>{
    const [color, setColor] = useState("red");
    const [car,setCar] = useState({
        model: "Ford",
        year: "1964",
        color: "black",
        brand: "Mustang"
    });

    const updateColor = () =>{
        setCar(prevState => {
            return{
                ...prevState, color: "blue"
            }
        })
    }
    return(
        <>
            <FilledButton color={"red"} text={"John"}/>
            <FilledButton color={"blue"} text={"Stack"}/>
            <FilledButton color={"green"} text={"Moh"} textColor={"white"}/>
            <h1>Moh likes {color} color!</h1>
            <button onClick={updateColor}BLUE></button>
            <h1>This is a {car.model} {car.brand} with {car.color}</h1>
            <p>Hello Mavericks</p>
        </>
    )
}

export default Hero;