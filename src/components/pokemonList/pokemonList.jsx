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
            <div key={ind}>
                <div>
                    <img src={require('../../assets/pokemon.jpg').default} />
                </div>
                <Link to={link}>{el}</Link>
            </div>
        );
    });
    return (
        <>
            <input type="text" onInput={filtration} />
            {mapPokemonsToDom}
        </>
    );
};

export default PokemonList;
