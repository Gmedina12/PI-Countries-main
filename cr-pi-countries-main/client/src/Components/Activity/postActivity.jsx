import React from 'react';
import { useDispatch, useState } from 'react-redux';


const postActivity = () => {
      const dispatch = useDispatch();
      const [input, setInput] = useState({
            name: '',
            picture: '',
            reglas: '',
            difficulty: '',
            duration: '',
            season: '',
            
      });
      const [error, setError] = useState({});

      function validation(input) {
            let error = {};

            if (input.nombre.length > 30) {
                  error.nombre = 'Nombre demasiado largo';
            }

            if (input.descripcion.length < 100) {
                  error.descripcion = 'Descripción demasiada corta';
            }
            if (input.reglas.length < 50) {
                  error.reglas = 'El texto de las reglas deben ser más largas'
            }
            return error;
      }

      const handleChange = (event) => {
            const name = event.target.name;
            const value = event.target.value;

            setInput({
                  ...input,
                  [name]: value
            });

            setError(validation({
                  ...input,
                  [name]: value
            }))
      };

      const handleSubmit = (event) => {
            event.preventDefault();

            if (Object.keys(error).length === 0) {
                  dispatch(actions.createDeporte(input));
            }
      };
      return (
            <form onSubmit={handleSubmit}>
                  <label>Nombre: </label>
                  <input type='text' name='Nombre'></input>
                  <input type="text" name="nombre" value={input.nombre} onChange={handleChange} />
                  {error.nombre && <p>{error.nombre}</p>}

                  <label>Descripción: </label>
                  <textarea name="descripcion" value={input.descripcion} onChange={handleChange} />
                  {error.descripcion && <p>{error.descripcion}</p>}

                  <label>Reglas: </label>
                  <input type="text" name="reglas" value={input.reglas} onChange={handleChange} />
                  {error.reglas && <p>{error.reglas}</p>}

                  <label>Imagen: </label>
                  <input type="text" name="imagen" value={input.imagen} onChange={handleChange} />

                  <label>Equipamiento: </label>
                  <input type="text" name="equipamiento" value={input.equipamiento} onChange={handleChange} />

                  <label>Lugar de origen: </label>
                  <input type="text" name="lugar_de_origen" value={input.lugar_de_origen} onChange={handleChange} />

                  <label>Liga destacada: </label>
                  <input type="text" name="liga_destacada" value={input.liga_destacada} onChange={handleChange} />

                  <button type="submit">Crear deporte</button>

            </form>
      );

};

export default postActivity;
