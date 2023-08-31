import { useState } from "react"
import { sculptureList } from "../data";
import "../assets/styles/gallery.css";

export function Page01() {
    return (
        <section>
            <h2>Memory of A Component</h2>
            <h3>useState Hook</h3>
            <Button />
            <Gallery />
            <FormRegisterUser />
        </section>
    )
}

/* React içerideki counter değerini güncelleyemiyor
function Button(){
    let counter=0;
    function handleClick(){
        counter++;
        console.log(counter);
        Button();
    }
    return (
        <button type="button" onClick={handleClick}>{counter}</button>
    )
}
*/

function Button() {
    // [stateVariable, setterFunction] = useState(initialvalue)
    const [counter, setCounter] = useState(0);

    function handleClick(e) {
        setCounter(counter + 1); // trigers a new render
        setCounter(counter + 1);
        setCounter(counter + 1);
        setCounter(counter + 2); // sadece en sondakini renderlar
    }

    return (
        <>
        <h4>Button Example</h4>
        <button type="button" onClick={handleClick}>Button {counter}</button>
        </>
    )
}

// const [name, setName] = useState();
// const[searchTerm, setSearchTerm] = useState();

function Gallery() {
    // 1. mümkünse dom.api'yi kullanmayın örn: e.target.style.background
    // 2. component hafızasına gereksiz kayıtlar yapmayın
    /**
     * const [index, setIndex] = useState(0);
     * 
     * const [buttonDisabled, setButtonDisabled] = useState(true) // gereksiz
     */

    console.log(sculptureList.length)
    const [index, setIndex] = useState(0);
    const [displayDetail, setDisplayDetail] = useState("none");
    function handleNext() {
        setIndex(index + 1);
    }
    function handlePrevious() {
        setIndex(index - 1);
    }
    function handleShowDetail(){
        setDisplayDetail("block");
        if(displayDetail==="block"){
            setDisplayDetail("none");
        }
    }
    return (
        <>
            <h4>Gallery Example</h4>
            <div className="gallery">
                <span>{index + 1} / {sculptureList.length}</span>
                <div className="sculpture">
                <h5>{sculptureList[index].name}</h5>
                <figure>
                    <img src={sculptureList[index].url} alt="" />
                    <figcaption>Artist: {sculptureList[index].artist}</figcaption>
                </figure>
                </div>
                <p style={{display:displayDetail}}>{sculptureList[index].description}</p>
            <div className="button-container">
                <button type="button" onClick={handleShowDetail}>Show/Hide Detail</button>
                <button type="button" onClick={handlePrevious} disabled={index <= 0 ? true : false}>Previous Sculpture</button>
                <button type="button" onClick={handleNext} disabled={index > sculptureList.length - 2 ? true : false}>Next Sculpture </button>
                </div>
            </div>
        </>
    )
}

function FormRegisterUser() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const fullName = firstName+" "+lastName
    function handleSubmit(e){
        e.preventDefault();
        /* Bunu yapmayın. React'ta doma ulaşmak tercih edilmez
        const inputNameEl = document.querySelector("input[name=firstName]");
        const inputFirstNameVal = inputNameEl.value; 
        */
    }

    function handleFirstNameChange(e){
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e){
        setLastName(e.target.value);
    }

    return (
        <>
            <h4>Register Form Example</h4>
            <form onSubmit={handleSubmit}>
                <input type="text" name="firstName" placeholder="First Name" value={firstName} onChange={handleFirstNameChange}/>
                <input type="text" name="lastName" placeholder="Last Name" value={lastName} onChange={handleLastNameChange}/>

                <button type="submit">Register</button>

                <p>
                    Hi {fullName}!
                </p>
            </form>
        </>
    )
}