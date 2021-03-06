import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from '../loader';

const Ability = () => {
    const abilityUrl = useSelector((state) => state.ability.url);

    const abilityUrlBack = useSelector((state) => state.ability.urlBack);
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(abilityUrl)
            .then((res) => res.json())
            .then((result) => setData(result));
    }, [abilityUrl]);

    if (data.effect_changes) {
        const reserveData = {
            name: data.name,
            discription: data.effect_entries[0].effect,
            effect: data.effect_entries[0].short_effect,
        };
        localStorage.setItem('reserveData', JSON.stringify(reserveData));
        return (
            <div className="ability-box">
                <div>
                    <span className="name">name:</span>
                    {data.name}
                </div>
                <div>
                    <span className="discription">discription:</span>
                    {data.effect_entries[0].effect}
                </div>
                <div>
                    <span className="effect">effect:</span>
                    {data.effect_entries[0].short_effect}
                </div>
                <div>
                    <Link to={abilityUrlBack}>Назад к покемону</Link>
                </div>
            </div>
        );
    } else {
        if (localStorage.getItem('reserveData')) {
            const reserveData = JSON.parse(localStorage.getItem('reserveData'));

            return (
                <div className="ability-box">
                    <div>
                        <span className="name">name:</span>
                        {reserveData.name}
                    </div>
                    <div>
                        <span className="discription">discription:</span>
                        {reserveData.discription}
                    </div>
                    <div>
                        <span className="effect">effect:</span>
                        {reserveData.effect}
                    </div>
                    <div>
                        <Link to="/">На главную</Link>
                    </div>
                </div>
            );
        }
    }
    return <Loader />;
};

export default Ability;
