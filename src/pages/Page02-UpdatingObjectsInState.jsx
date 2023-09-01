import { useState } from "react";

export function Page02(){
    return (
        <section>
            <h2>Page 02: Updating Objects of State</h2>
            <MovingDot/>
        </section>
    )
}

function MovingDot(){
    //onPointerMove e.clientX, e.clientY
    const [position, setPosition] = useState({x:0,y:0});
    const stageStyles = {
        border: "2px solid #F6F7F9",
        padding: "24px",
        position:"relative",
        width: "200px",
        height:"200px",
    };
    const dotStyle = {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        backgroundColor: "#097DA5",
        position:"absolute",
        transform: `translate( ${position.x}px, ${position.y}px)`
    }

    function handlePointerMove(e){
        console.log(e);
        /*
        state obje ya da arrayini mutate etme. React algılamıyor
        position.x = e.clientX;
        position.y = e.clientY;
        */

/*         const newPos = {x:e.clientX,y:e.clientY}
        setPosition(newPos) */

        setPosition({x:e.clientX - 70,y:e.clientY - 220});
    }

    return(
        <div style={stageStyles} onPointerMove={handlePointerMove}>
            <div style={dotStyle}></div>
        </div>
    )
}

function FormMessage (){
    return(
        <form>
            <input type="text" name="firstName" placeholder="Your name"/>
            <input type="text" name="lastName" placeholder="Your last name" />
            <input type="email" name="email" placeholder="Your email" />
        </form>
    )
}