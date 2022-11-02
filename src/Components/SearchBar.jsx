import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {

    //STATE

    const [id, setId] = useState(null)
    const [category, setCategory] = useState("people")

    //useNavigate

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/${category}/${id}`)
    }

    



    return (
        <fieldset>
            <legend>SearchBar.jsx</legend>
            <form onSubmit={submitHandler}>
            <label htmlFor="">Search for:</label>
            <select onChange={(e) => setCategory(e.target.value)}>
            <option value="people">People</option>
            <option value="planets">Planets</option>
            </select>
            <label htmlFor=""> ID:</label>
            <input type="number" onChange={(e) => setId(e.target.value)}/>
            <button> Search</button>
            </form>
        </fieldset>
  )
}

export default SearchBar