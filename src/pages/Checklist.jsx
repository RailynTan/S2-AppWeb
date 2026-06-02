import '../App.css'
import TrumpWich from '../assets/TrumpWich.png'
import ButtonNav from '../components/ButtonNav';


function Checklist(){

    return(

        <section id='center'>
            <div className='hero'>
                <h1>Trumpwich</h1>
                <img src={TrumpWich} className='base' width="170" height="179" alt='' />
                <ButtonNav ruta={'/details'} texto={'confirmar'} />
                <h2>Trumpwich square</h2>
                <ButtonNav ruta={'/dashboard'} texto={'Cancel'} />
            </div>
        </section>
    )
}

export default Checklist
