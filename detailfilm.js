import React from 'react';
import { Link, useParams } from 'react-router-dom';

import data from "../data/data";


export default function Film() {
    const { id } = useParams();
    const film = data.find((film) => film.id === Number(id));
    return (
        <div className="film-detail">
 
           
            <div className="table-container">
                <table className="film-table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Category</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src={film.image} alt="" className="table-image" /></td>
                            <td>{film.title}</td>
                            <td>{film.description}</td>
                            <td>{film.category}</td>
                           
                        </tr>
                    </tbody>
                </table>
            </div>
            <Link to='/'><button className='button-detail'>Home</button></Link>
            
   </div>
 );
}