import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { goForward, goBack } from '../../store/actions';
import PokemonList from '../pokemonList';

const StartPage = () => {
    const [pokemons, setPokemons] = useState([]);
    const dispatch = useDispatch();
    const count = useSelector((state) => state.next.show);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${count}`)
            .then((response) => response.json())
            .then((res) => res.results.map((el) => el.name))
            .then((results) => {
                setPokemons(results);
            });
    }, [count]);

    return (
        <div>
            <h1>hello!</h1>
            <PokemonList list={pokemons} />
            <button onClick={() => dispatch(goBack())}>previosly</button>
            <button onClick={() => dispatch(goForward())}>next</button>
        </div>
    );
};

export default StartPage;
