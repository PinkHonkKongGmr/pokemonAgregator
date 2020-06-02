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
        <div className="main_container">
            <div className="logo-box">
                <img src={require('../../assets/pokelogo.png').default} />
            </div>

            <div className="button-box">
                <button onClick={() => dispatch(goBack())}>previosly</button>
                <button onClick={() => dispatch(goForward())}>next</button>
            </div>
            <PokemonList list={pokemons} />
        </div>
    );
};

export default StartPage;
