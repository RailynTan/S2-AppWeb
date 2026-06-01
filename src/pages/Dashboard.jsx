import '../App.css'
import WalDog from '../assets/WalDog.png'
import { useNavigate } from 'react-router-dom'

function Dashboard(){
    const navigate = useNavigate();
    const irChecklist = () => {
        navigate("/checklist")
    }
    const irDetails = () => {
        navigate('/details')
    }
    const irHome = () => {
        navigate('/')
    }
    const irContact = () => {
        navigate('/contact')
    }

    return(

        <section id='center'>
            <div className='hero'>
                <h1>Esto esta quedando</h1>
                <img src={WalDog} className='base' width="170" height="179" alt='' />
                <button on onClick={irChecklist}>
                    Checklist
                </button>
                <h2>Certero sipo</h2>
                <button onClick={irDetails}>
                    Details
                </button>
                <h2>Como que no socio?</h2>
                <button onClick={irContact}>
                    Contact
                </button>
                <h2>Yo me voy noma' entonces</h2>
                <button onClick={irHome}>
                    Log off
                </button>
            </div>
        </section>
    )
}

export default Dashboard