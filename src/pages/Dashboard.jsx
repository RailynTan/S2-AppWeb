import '../App.css'
import ButtonNav from '../components/ButtonNav';
import WalDog from '../assets/WalDog.png'

function Dashboard(){

    return(

        <section id='center'>
            <div className='hero'>
                <h1>Esto esta quedando</h1>
                <img src={WalDog} className='base' width="170" height="179" alt='' />
                <ButtonNav ruta={'/checklist'} texto={'checklist'} />
                <h2>Certero sipo</h2>
                <ButtonNav ruta={'/details'} texto={'detalles'} />
                <h2>Como que no socio?</h2>
                <ButtonNav ruta={'/contact'} texto={'contacto'} />
                <h2>Yo me voy noma' entonces</h2>
                <ButtonNav ruta={'/'} texto={'log off'} />
            </div>
        </section>
    )
}

export default Dashboard