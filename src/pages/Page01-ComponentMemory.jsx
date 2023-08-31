import { useState } from "react"

export function Page01() {
    return (
        <section>
            <h2>Memory of A Component</h2>
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
    function handleClick(e){
        
    }
    return(
        <button type="button" onClick={handleClick}>Button</button>
    )
}