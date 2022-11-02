import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const Planets = () => {

    //STATE
    const [planets, setPlanets] = useState(null)

    //Grabbing Path Variable
    const{planets_id} = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${planets_id}`)
        .then(res => setPlanets(res.data))
        .catch(error => console.log(error))

    }, [planets_id])

  return (
    <fieldset>
        <legend>Planets.jsx</legend>

        {/*Ternary operators*/}
        {
            (planets) ? <>
            <h1>{planets.name}</h1>
            <h2>Rotation Period: {planets.rotation_period}</h2>
            <h2>Orbital Period: {planets.orbital_period}</h2>
            <h2>Diameter: {planets.diameter}</h2>
            <h2>Climate: {planets.climate}</h2>
            <h2>Gravity: {planets.gravity}</h2>
            <h2>Terrain: {planets.terrain}</h2>
            <h2>Surface Water: {planets.surface_water}</h2>
            <h2>Population: {planets.population}</h2>
            </> : <h1>Loading....</h1>
        }
    </fieldset>
  )
}

export default Planets