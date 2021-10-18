import { truncateSync } from 'fs'
import { useState} from 'react'
import Pig from "./Pig"
import PigDetails from "./PigDetails"

export default function PigContainer ({hogs}){
    const [selectedPig, setSelectedPig] = useState(null)


    function handleClick(name){
        console.log(name)
        const pigDetails = hogs.filter(hog => {
            if (hog.name === name){
                return true
            } else return false
        })
        setSelectedPig(pigDetails)
    }

    const pigCard = hogs.map(hog => {
       return( <>
        <Pig key = {hog.name} name ={hog.name}  image = {hog.image} handleClick = {handleClick}/>
        {/* <PigDetails key = {hog.name} handleClick = {handleClick} name = {hog.name} speciality = {hog.speciality} greased = {hog.greased} weight = {hog.weight} medal = {hog["highest medal achieved"] }/> */}
        </>
       )
     })
    return(
        <div className = "ui grid container">
            {selectedPig ? <PigDetails selectedPig = {selectedPig} /> : null}
            {pigCard}
        </div>
    )
}