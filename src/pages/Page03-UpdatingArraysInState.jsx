import { useState } from "react"

export function Page03(){
    return(
        <section>
            <h2>Updating Arrays In State</h2>
            <InspiringArtistsList/>
            <hr />
            <FamousMusicians/>
            <hr />
            <MovingCircles/>
        </section>
    )
}

let i = 0;
function InspiringArtistsList(){
    const [artistName, setArtistName] = useState("");
    const [artistList, setArtistList] = useState([]);

    console.log(artistList);

    function handleChange(e) {
        setArtistName(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        // artistList.push(artistName); ==> YAPMA: state'teki diziyi mutasyona uğratma
        // Yeni bir dizi yarat ve onunlla güncelle:
        setArtistList([...artistList, <li key={i++}>{artistName}</li>]);
        
    }


    return (
        <div>
            <form>
                <h3>Add your inspiring artist!</h3>
                <input 
                type="text" 
                name="artistName"
                id="artistName"
                placeholder="Please write the artist name..."
                onChange={handleChange}
                value={artistName}
                />
                <button 
                type="submit"
                onClick={handleSubmit}
                >Add Artist</button>
                <p>Artist added: {artistName}</p>
            </form>
            <h4>Inspiring Artists</h4>
            <ul>
                {artistList}
            </ul>
        </div>
    )
}

const famousMusiciansList = [
    {id:0, name:"Tarkan"},
    {id:1, name:"Dave Mustain"},
    {id:2, name:"James Hetfield"},
    {id:3, name:"Jason Newsted"},
    {id:4, name:"Kibariye"},
    {id:5, name:"Ezhel"},
]

function FamousMusicians(){
    const [artists, setArtists] = useState(famousMusiciansList);
    return (
        <>
        <h3>Famous Musicians</h3>
        <ul>
            {artists.map((musician)=>{
                return <li key={musician.id}>{musician.name} <button onClick={()=>{
                    setArtists(artists.filter(a=>a.id!=musician.id))
                }}>Delete</button></li>
            })}
        </ul>
        {console.log(artists)}
        </>
        
    )
}

function FamousMusicians2(){
    const [artists, setArtists] = useState(famousMusiciansList);
    function handleDelete(artistId){
        setArtists(artists.filter((a)=>a.id !== artistId));
    }
    return (
        <>
        <h3>Famous Musicians</h3>
        <ul>
            {artists.map((musician)=>{
                return <li key={musician.id}>{musician.name} <button onClick={()=>{
                    handleDelete(musician.id);
                }}>Delete</button></li>
            })}
        </ul>
        {console.log(artists)}
        </>
        
    )
}

const DATA_SHAPES = [
    {id:0,type: "circle", x:0, y:60},
    {id:1,type: "square", x:100, y:60},
    {id:2,type:"circle", x:200, y:60}
]

function MovingCircles(){
    const [shapes, setShapes] = useState(DATA_SHAPES);

    function handleCircleMove(){
        const newData = shapes.map((shape)=>{
            if(shape.type === "circle"){
                return {...shape, y:shape.y + 50};
            }
            return shape;
        });

        setShapes(newData);
    }

    return(
        <>
        <h3>Moving Circles</h3>
        <div style={ {position:"relative", height:"300px"} }>
            <button type="button" onClick={handleCircleMove}>Move circles!</button>
            {shapes.map(shape=><div key={shape.id} style={ {
                width:"40px", 
                height:"40px", 
                backgroundColor:"white", borderRadius:shape.type === 'circle' ? "50%" : "0", 
                position:"absolute" ,
                top: shape.y,
                left: shape.x
                } }></div>)}
        </div>
        </>
    )
}