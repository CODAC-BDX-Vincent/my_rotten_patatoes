import React, {useEffect} from 'react';
import Image from "next/image";
import axios from "axios";
import {useState} from "react";
import Link from "next/link";

export default function MoviesDisplayAdmin(){
    const [top_moviesadmin, setTop_moviesadmin] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3000/api/movies')
            .then(response => setTop_moviesadmin(response.data.data));

        console.log(top_moviesadmin);
    },[])

    return (
        <div>
            <ul>
                { top_moviesadmin.map( top_moviesadmin =>
                    <li key={top_moviesadmin._id}>
                        <Link href={`/moviesadmin/${top_moviesadmin._id}`}>
                            <a>
                                <h3>{top_moviesadmin.title}</h3>
                            </a>
                        </Link>
                        <div>Vote Average{top_moviesadmin.vote_average}</div>

                    </li>)}
            </ul>
        </div>
    );
};
