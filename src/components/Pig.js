export default function Pig ({name, image, handleClick}){
    //console.log(name)
return(
    <div onClick = {() => handleClick(name)}>
        <h2>Name: {name}</h2>
        <img src = {image} alt ='hog' />
    </div>
)
}