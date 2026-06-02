import '../App.css'
import { useNavigate } from 'react-router-dom'

function ButtonNav({ ruta, texto}){

    const navigate = useNavigate();

    return(
        <button className='Navbutton' style={{backgroundColor: '#3534BF'}}
        onClick={() => navigate(ruta)}>
            {texto}
        </button>

    )
}

export default ButtonNav