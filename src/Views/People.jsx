import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const People = () => {

    //STATE
    const [people, setPeople] = useState(null)


    //Grabbing Path Variable
    const{people_id} = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${people_id}`)
        .then(res => setPeople(res.data))
        .catch(error => console.log(error))

    }, [people_id])




    return (
    <fieldset>
        <legend>People.jsx</legend>

        {/* Ternary operators */}
        {
            (people) ? <>
            <h1>{people.name}</h1>
            <h2>Height: {people.height} cm</h2>
            <h2>Mass: {people.mass} kg</h2>
            <h2>Hair Color: {people.hair_color}</h2>
            <h2>Skin Color: {people.skin_color}</h2>
            <h2>Eye Color: {people.eye_color}</h2>
            <h2>Birth Year: {people.birth_year}</h2>
            <h2>Gender: {people.gender}</h2>
            </> : <h1>Loading....</h1>


        }

    </fieldset>
  )
}

export default People