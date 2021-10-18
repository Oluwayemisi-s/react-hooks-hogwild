

export default function PigDetails ({ selectedPig}){
    console.log(selectedPig[0].greased)
return(
    <div >
        <h2>Name: {selectedPig[0].name}</h2>
        <img src = {selectedPig[0].image} alt ='hog' /> 
        <p>Speciality: {selectedPig[0].specialty}</p>
        <p>Greased: "{selectedPig[0].greased}"</p>
        <p>Weight: {selectedPig[0].weight}</p>
        <p>Highest Medal Achieved: {selectedPig[0].['highest medal achieved']}</p> 
    </div>
)
}