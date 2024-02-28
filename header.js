import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import "../css/style.css";
import data from "../data/data";

export default function Header() {
    const [searchTerm, setSearchTerm] = useState('');
    const [listFilm, setListFilm] = useState([]);

    useEffect(() => {
        setListFilm(data);
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredFilm = listFilm.filter((film) =>
        film.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <nav className='nav-list'>
                <input
                    type='text'
                    placeholder='search'
                    className='input'
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </nav>
            <div className='image-grid'>
                {filteredFilm.map((el, index) => (
                    <div key={index} className='image-container'>
                        <img src={el.image} alt={el.title} className='img-film' />
                        <div className="overlay">
                            <h3>{el.title}</h3>
                        </div>
                        <Link to={{ pathname: `/detail/${el.id}` }}>
                            <button type='button' className='detail-button'>Plus</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
