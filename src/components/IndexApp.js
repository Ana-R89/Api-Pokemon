import React, { useEffect, useState } from 'react';
import axios from 'axios';

const IndexApp = () => {
    const [pokemons, setPokemons] = useState([])
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        console.log("in onSubmitHandler")
        try {
            const { data: { results } } = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=1118')
            console.log("results")
            setPokemons(results)
            console.log("pokemons")
            console.log("pokemons")

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <input type="submit" value="APP pokemos Api" onClick={onSubmitHandler} />


            {pokemons.map(({ name }, key) => (
                <p key={key}>{name}</p>
            ))}
        </div>
    )


}


export default IndexApp