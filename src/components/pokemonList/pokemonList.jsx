import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PokemonList = (props) => {
    const [list, setList] = useState(props.list);
    useEffect(() => setList(props.list), [props]);
    const filtration = (e) =>
        setList(list.length && e.target.value ? list.filter((el) => el.match(e.target.value)) : props.list);
    const mapPokemonsToDom = list.map((el, ind) => {
        const link = `/pokemon/${el}`;
        return (
            <div key={ind} className="flip-container">
                <div className="flipper">
                    <Link to={link}>
                        <div className="pokemon_box">
                            <div className="pokemon-name">{el[0].toUpperCase() + el.slice(1)}</div>
                        </div>
                    </Link>
                </div>
            </div>
        );
    });
    return (
        <>
            <div className="input-box">
                {' '}
                <input type="text" onInput={filtration} placeholder="поиск по покемону" />
            </div>
            <div className="pokemon_cards__wrapper">{mapPokemonsToDom}</div>
        </>
    );
};

export default PokemonList;
