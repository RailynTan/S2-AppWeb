// src/pages/Contact.jsx
import { useState, useEffect } from 'react';
import Mensaje from '../components/Mensaje';
import ButtonNav from '../components/ButtonNav';
import { useNavigate } from 'react-router-dom';
import '../styles/Contact.scss'; 

const Contact = () => {
  // Requisito 4.2: useEffect para cambiar el título de la página
  useEffect(() => {
    document.title = "s2 | Contacto";
  }, []);

  // Requisito 4.2: useState para manejar el formulario
  const [formData, setFormData] = useState({
    operador: 'Juan Pérez', 
    sede: 'Sede Central',
    fechaHora: new Date().toLocaleString(),
    categoria: '',
    descripcion: '',
    urgencia: 'Baja'
  });

  const [mensajeData, setMensajeData] = useState({ tipo: '', texto: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación requerida para lanzar el Mensaje
    if (formData.categoria === '' || formData.descripcion.trim() === '') {
      setMensajeData({
        tipo: 'error',
        texto: 'Por favor, selecciona una categoría y describe el problema.'
      });
      return;
    }

    setMensajeData({
      tipo: 'exito',
      texto: 'Reporte enviado correctamente. El equipo lo revisará pronto.'
    });

    setFormData({
      ...formData,
      categoria: '',
      descripcion: '',
      urgencia: 'Baja'
    });
  };

  // ==========================================
  // PASO A: Arreglo de datos estáticos para el historial
  // Requisito: Datos hardcodeados (estáticos)
  // ==========================================
  const historialEstatico = [
    { id: 1, fecha: 'Hoy 10:00', categoria: 'Red', estado: 'Resuelto' },
    { id: 2, fecha: 'Ayer 15:30', categoria: 'Hardware', estado: 'En progreso' },
    { id: 3, fecha: 'Lunes 09:15', categoria: 'Software', estado: 'Pendiente' },
    { id: 4, fecha: 'Viernes 16:45', categoria: 'Red', estado: 'Resuelto' }
  ];

  return (
    <main className="pagina-contacto">
      {/* Botón de navegación implementado en la cabecera */}
      <div className="cabecera-contacto">
        <ButtonNav 
          ruta="/dashboard" 
          texto="← Volver al Dashboard" 
          claseExtra="btn-volver"
        />
      </div>

      <section className="soporte-urgente">
        <h2>Urgente (hay un cliente esperando)</h2>
        <div className="botones-urgencia">
          <button type="button" className="btn-llamar">Llamar Soporte</button>
          <button type="button" className="btn-chat">Chat Soporte</button>
        </div>
      </section>

      <section className="formulario-soporte">
        <Mensaje tipo={mensajeData.tipo} texto={mensajeData.texto} />

        <form onSubmit={handleSubmit} className="grid-formulario">
          
          <fieldset className="columna-datos">
            <legend>Datos del operador</legend>
            <div className="campo">
              <label htmlFor="operador">Operador</label>
              <input type="text" id="operador" name="operador" value={formData.operador} readOnly disabled />
            </div>
            <div className="campo">
              <label htmlFor="sede">Sede</label>
              <input type="text" id="sede" name="sede" value={formData.sede} readOnly disabled />
            </div>
            <div className="campo">
              <label htmlFor="fechaHora">Fecha y hora</label>
              <input type="text" id="fechaHora" name="fechaHora" value={formData.fechaHora} readOnly disabled />
            </div>
          </fieldset>

          <fieldset className="columna-detalles">
            <legend>Detalles del problema</legend>
            <div className="campo">
              <label htmlFor="categoria">Categoría del problema</label>
              <select id="categoria" name="categoria" value={formData.categoria} onChange={handleChange}>
                <option value="">Seleccione una categoría...</option>
                <option value="hardware">Falla de Hardware</option>
                <option value="software">Falla de Software</option>
                <option value="red">Problemas de Red</option>
              </select>
            </div>
            <div className="campo">
              <label htmlFor="descripcion">Descripción del problema</label>
              <textarea 
                id="descripcion" 
                name="descripcion" 
                rows="3" 
                value={formData.descripcion} 
                onChange={handleChange}
                placeholder="Describa el problema aquí..."
              ></textarea>
            </div>
          </fieldset>

          <fieldset className="columna-urgencia">
            <legend>Nivel de urgencia</legend>
            <div className="opciones-urgencia">
              <label className={`radio-btn ${formData.urgencia === 'Baja' ? 'activo' : ''}`}>
                <input type="radio" name="urgencia" value="Baja" checked={formData.urgencia === 'Baja'} onChange={handleChange} />
                Consulta (Baja)
              </label>
              <label className={`radio-btn ${formData.urgencia === 'Media' ? 'activo' : ''}`}>
                <input type="radio" name="urgencia" value="Media" checked={formData.urgencia === 'Media'} onChange={handleChange} />
                Parcial (Media)
              </label>
              <label className={`radio-btn ${formData.urgencia === 'Alta' ? 'activo' : ''}`}>
                <input type="radio" name="urgencia" value="Alta" checked={formData.urgencia === 'Alta'} onChange={handleChange} />
                Urgente (Alta)
              </label>
            </div>
          </fieldset>

          <div className="footer-formulario">
            <article className="historial-reportes">
              <h3>Historial reciente de la sede</h3>
              <table>
                <thead>
                  <tr>
                    <th>Fecha</th>
                    <th>Categoría</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                {/* ========================================== */}
                {/* PASO B: Renderizado dinámico de la tabla */}
                {/* ========================================== */}
                <tbody>
                  {historialEstatico.map((reporte) => (
                    <tr key={reporte.id}>
                      <td>{reporte.fecha}</td>
                      <td>{reporte.categoria}</td>
                      <td>{reporte.estado}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </article>

            <button type="submit" className="btn-enviar">Enviar Reporte</button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Contact;
