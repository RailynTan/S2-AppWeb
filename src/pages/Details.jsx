import '../App.css'
import WaldoXd from '../assets/WaldoXd.png'
import ButtonNav from '../components/ButtonNav';

function Details(){

    return(

        <section id='center'>
            <div className='hero'>
                <h1>Momento</h1>
                <img src={WaldoXd} className='base' width="170" height="179" alt='' />
                <ButtonNav ruta={'/dashboard'} texto={'return'} />
                <h2>Momento xD</h2>
            </div>
        </section>
    )
}

export default Details
