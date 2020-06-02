import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAbilityUrl, getUrlToGoBack } from '../../store/actions';
import Loader from '../loader';

const Pokemon = (props) => {
    const [pokemonInfo, setPokemonInfo] = useState({});
    const dispatch = useDispatch();
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${props.id}`)
            .then((res) => res.json())
            .then((about) => setPokemonInfo(about));
    }, []);
    if (pokemonInfo.abilities) {
        const sprite = (
            <div className="pokemon__info">
                <img src={pokemonInfo.sprites.front_default} />
                <img src={pokemonInfo.sprites.back_default} />
                <div>Type: {pokemonInfo.types[0].type.name}</div>
                <div>Base experience: {pokemonInfo.base_experience}</div>
                <div>Height: {pokemonInfo.height}</div>
                <div>Weight: {pokemonInfo.weight}</div>
            </div>
        );
        const abilityList = pokemonInfo.abilities.map((el, ind) => {
            const link = `/abilities/${el.ability.name}`;
            const linkback = `/pokemon/${pokemonInfo.name}`;
            return (
                <li className="pokemon_info_list" key={ind}>
                    <Link
                        to={link}
                        onClick={() => {
                            dispatch(getUrlToGoBack(linkback));
                            dispatch(getAbilityUrl(el.ability.url));
                        }}>
                        {el.ability.name}
                    </Link>
                </li>
            );
        });
        return (
            <div>
                <h2>{props.id.toUpperCase()}</h2>
                {sprite}
                <h3>Способности:</h3>
                <ul>{abilityList}</ul>
                <Link to="/">На главную</Link>
            </div>
        );
    } else return <Loader />;
};

export default Pokemon;
