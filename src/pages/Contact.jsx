import '../App.css'
import Walter from '../assets/Walter.jpg'
import { useNavigate } from 'react-router-dom'

function Contact(){
    const navigate = useNavigate();
    const irDashboard = () => {
        navigate('/dashboard')
    }

    return(

        <section id='center'>
            <div className='hero'>
                <img src={Walter} className='base' width="400" height="400" alt='' />
                <button onClick={irDashboard}>
                    Return
                </button>
            </div>
        </section>
    )
}

export default Contact
