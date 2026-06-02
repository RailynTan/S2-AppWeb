import '../App.css'
import WaldoXd from '../assets/WaldoXd.png'
import { useNavigate } from 'react-router-dom'

function Details(){
    const navigate = useNavigate();
    const irDashboard = () => {
        navigate('/dashboard')
    }

    return(

        <section id='center'>
            <div className='hero'>
                <h1>Momento</h1>
                <img src={WaldoXd} className='base' width="170" height="179" alt='' />
                <button onClick={irDashboard}>
                    Back
                </button>
                <h2>Momento xD</h2>
            </div>
        </section>
    )
}

export default Details
