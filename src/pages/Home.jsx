import '../App.css'
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Peru from '../assets/Peru.jpg'
import { useNavigate } from 'react-router-dom'

function Home(){

    useEffect(() => {
        document.title = "s2 | Inicio";
    }, []);

    return(
        <div className='hero'>
        <Header ruta={"/login"} texto={"login"} />
        <img src={Peru} className='base' width="170" height="179" alt='' />
        </div>

    )
}

export default Home
