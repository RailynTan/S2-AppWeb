import { useState } from "react";

const valLogin = ({onAgregar}) => {

    const  [rut, setRut] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        if (rut.trim() || pass.trim()  || (rut.trim() && pass.trim()) == "" ){
            setError("Campo de datos incompleto")
            return;
        }

  //      if

        onAgregar(rut.trim());
        setRut("");
        onAgregar(pass.trim());
        setPass("");
        setError("");
    }

    // Unico rut valido para login: 93.035.466-2
    // Contraseña: 0000
    return(
        <form onSubmit={handleSubmit}>

            <h2>Bienvendido</h2>
            <div style={{display: "flex", gap: "8px", marginBottom: "8px"}}>
                <input type="text" value={rut} 
                onChange={(e) => setRut(e.target.value)}
                placeholder="Ej: 0.000.000-0"
                style={{ flex: 1, padding: "8px", borderRadius: "6px", border: "1px solid #cbd5e1"}} />
                <input type="text" value={pass} 
                onChange={(e) => setPass(e.target.value)}
                placeholder="Ej: 12345"
                style={{ flex: 1, padding: "8px", borderRadius: "6px", border: "1px solid #cbd5e1"}} />
                <button type="submit">Ingresar</button>
            </div>
            {error && <p style={{color: "red", fontSize: "0875rem"}}>{error}</p>}
        </form>
    )
}

export default valLogin;