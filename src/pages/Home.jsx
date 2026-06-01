import '../App.css'
import Peru from '../assets/Peru.jpg'
import { useNavigate } from 'react-router-dom'

function Home(){
    const navigate = useNavigate();
    const irLogin = () => {
        navigate("/login")
    };

    return(

        <section id='center'>
            <div className='hero'>
                <h1>No tenia otra imagen, asi que es place holder nomas</h1>
                <img src={Peru} className='base' width='170' height='179' alt='' />
                <button onClick={irLogin}>
                    Login 
                </button>

                
            </div>
        </section>
    )
}

export default Home
