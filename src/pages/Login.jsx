import '../App.css'
import WaldoBros from '../assets/WaldoBros.png'
import { useNavigate } from 'react-router-dom'

function Login(){
    const navigate = useNavigate();
    const irDashboard = () => {
        navigate('/dashboard')
    }

    return(

        <section id='center'>
            <div className='hero'>
                <h1>Lore ipsum</h1>
                <img src={WaldoBros} className='base' width="170" height="179" alt='' />
                <button onClick={irDashboard}>
                    Dashboard
                </button>
            </div>
        </section>
    )
}

export default Login
