import '../App.css'
import WaldoBros from '../assets/WaldoBros.png'
import ButtonNav from '../components/ButtonNav';


function Login(){


    return(

        <section id='center'>
            <div className='hero'>
                <h1>Lore ipsum</h1>
                <img src={WaldoBros} className='base' width="170" height="179" alt='' />
                <ButtonNav ruta={'/dashboard'} texto={'dashboard'} />
            </div>
        </section>
    )
}

export default Login
