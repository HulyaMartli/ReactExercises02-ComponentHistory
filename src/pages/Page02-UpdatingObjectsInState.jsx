import { useState } from "react";

export function Page02() {
    return (
        <section>
            <h2>Page 02: Updating Objects of State</h2>
            <MovingDot />
            <hr />
            <FormPerson2 />
        </section>
    )
}

function MovingDot() {
    //onPointerMove e.clientX, e.clientY
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const stageStyles = {
        border: "2px solid #F6F7F9",
        padding: "24px",
        position: "relative",
        width: "200px",
        height: "200px",
    };
    const dotStyle = {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        backgroundColor: "#097DA5",
        position: "absolute",
        transform: `translate( ${position.x}px, ${position.y}px)`
    }

    function handlePointerMove(e) {
        console.log(e);
        /*
        state obje ya da arrayini mutate etme. React algılamıyor
        position.x = e.clientX;
        position.y = e.clientY;
        */

        /*         const newPos = {x:e.clientX,y:e.clientY}
                setPosition(newPos) */

        setPosition({ x: e.clientX - 70, y: e.clientY - 209 });
    }

    return (
        <div style={stageStyles} onPointerMove={handlePointerMove}>
            <div style={dotStyle}></div>
        </div>
    )
}



function FormPerson() {
    const [person, setPerson] = useState(
        {
            firstName: "Hulya",
            lastName: "Martli",
            email: "hulyamartli@gmail.com"
        }
    )


    function handleFirstName(e) {
        const newPerson = {
            ...person,
            firstName: e.target.value,
        }

        setPerson(newPerson);
    }

    function handleLastName(e){
        setPerson({...person, lastName: e.target.value});
    }

    function handleEmail(e) {
        setPerson({...person, email: e.target.value});
    }


    return (
        <form>
            <input type="text" name="firstName" placeholder="Your name" onChange={handleFirstName} value={person.firstName} />
            <input type="text" name="lastName" placeholder="Your last name" onChange={handleLastName} value={person.lastName} />
            <input type="email" name="email" placeholder="Your email" onChange={handleEmail} value={person.email} />
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button type="submit">Send Message</button>
        </form>
    )
}

function FormPerson2() {
    const [person, setPerson] = useState(
        {
            firstName: "Hulya",
            lastName: "Martli",
            email: "hulyamartli@gmail.com"
        }
    )


    function handleInputChange(e) {
        const newPerson = {
            ...person,
            [e.target.name]: e.target.value,
        };
        setPerson(newPerson);
    }

    return (
        <form>
            <p>Welcome {person.firstName} {person.lastName} !</p>
            <input type="text" name="firstName" placeholder="Your name" onChange={handleInputChange} value={person.firstName} />
            <input type="text" name="lastName" placeholder="Your last name" onChange={handleInputChange} value={person.lastName} />
            <input type="email" name="email" placeholder="Your email" onChange={handleInputChange} value={person.email} />
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button type="submit">Send Message</button>
        </form>
    )
}