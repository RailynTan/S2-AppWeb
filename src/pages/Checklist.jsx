import '../App.css'
import TrumpWich from '../assets/TrumpWich.png'
import { useNavigate } from 'react-router-dom'

function Checklist(){
    const navigate = useNavigate();
    const irDetails = () => {
        navigate('/details')
    }
    const irDashboard = () => {
        navigate('/dashboard')
    }

    return(

        <section id='center'>
            <div className='hero'>
                <h1>Trumpwich</h1>
                <img src={TrumpWich} className='base' width="170" height="179" alt='' />
                <button onClick={irDetails}>
                    Details
                </button>
                <h2>Trumpwich square</h2>
                <button onClick={irDashboard}>
                    Cancel
                </button>
            </div>
        </section>
    )
}

export default Checklist
