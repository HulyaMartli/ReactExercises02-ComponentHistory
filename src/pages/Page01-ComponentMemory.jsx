import { useState } from "react"

export function Page01() {
    return (
        <section>
            <h2>Memory of A Component</h2>
            <h3>useState Hook</h3>
            <Button/>
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

function Button(){
    // [stateVariable, setterFunction] = useState(initialvalue)
    const [counter, setCounter] = useState(0);

    function handleClick(e){
        setCounter(counter + 1); // trigers a new render
    }

    return(
        <button type="button" onClick={handleClick}>Button {counter}</button>
    )
}

// const [name, setName] = useState();
// const[searchTerm, setSearchTerm] = useState();