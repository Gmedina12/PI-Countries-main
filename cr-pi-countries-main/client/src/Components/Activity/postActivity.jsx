import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postActivity, getCountries } from '../Redux/Action/index'
import style from './PostActivity.module.css'

const PostActivity = () => {

  const allCountries = useSelector(state => state.countries)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getCountries())
  }, [])

  const [state, setState] = useState({
    name: '',
    picture: '',
    difficulty: 0,
    duration: 0,
    season: '',
    countries: []
  })

  const [error, setError] = useState({
    name: '*',
    difficulty: '*',
    duration: '*',
    picture: '',
    season: '*',
    countries: 'Where will we do this activity? Choose at least one country'
  })

  const validate = (stateAux, name) => {
    //Manejo de errores por campo
    console.log(stateAux)
    console.log(name)
    switch (name) {
      case 'name':
        const REGEX_SYMBOL = /[^\w\s]/
        console.log(REGEX_SYMBOL.test(stateAux.Name))
        if (REGEX_SYMBOL.test(stateAux.Name)) setError({ ...error, name: 'Symbols are not allowed' })
        else if (!stateAux.name.length) setError({ ...error, name: 'name is required' })
        else if (stateAux.name.length > 30) setError({...error, name: 'Activity name too long'})
        else setError({ ...error, name: '' })
        break;

      case 'duration':
        if (isNaN(parseInt(stateAux.duration))) {
          setError({ ...error, duration: 'Invalid entry. It must be a number' })
        }
        if (!stateAux.duration) setError({ ...error, duration: 'How long is your activity? It must be typed' })
        else setError({ ...error, duration: '' })
        break;

      case 'picture':
        const REGEX_URL = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
        if (!REGEX_URL.test(stateAux.picture)) {
          setError({ ...error, picture: 'Invalid URL' })
        } else {
          setError({ ...error, picture: '' })
        }
        break

      case 'season':
        if (!stateAux.season) setError({ ...error, season: 'Please, select a season. We need to know when to enjoy this activity' })
        else setError({ ...error, season: '' })
        break;

      case 'countries':
        if (stateAux.countries.length === 0) setError({ ...error, countries: 'Where will we do this activity? Choose at least one country' })
        else setError({ ...error, countries: [] })
        break;

      default:
        break;

    }
  }

  //Submit solo cuando estén los campos obligatorios

  const [handlerDisable, setHandlerDisable] = useState(true)

  const disableFunction = () => {
    let disabledAux = false; //HABILITADO EL BOTÓN

    for (let err in error) {
      if (err.length) disabledAux = true
      //   if (!error[err]) disabledAux = false;
      //   else {
      //     disabledAux = true;
      //   }
    }
    disabledAux = Object.values(error).some((err) => err.length !== 0)
    console.log(error)
    setHandlerDisable(disabledAux)
  }

  useEffect(() => {
    disableFunction()
  }, [error])

  //Eliminar selección de países
  const handleDelete = (event) => {
    if (state.countries.length <= 1) setError({ ...error, countries: 'Select a new country' })
    setState({
      ...state,
      [event.target.name]: state.countries.filter(c => c !== event.target.id)
    })
  }

  //Manejador de cambios de los países seleccionados
  const handleChange = (event) => {

    if (event.target.name === 'countries') {
      if (!state.countries.includes(event.target.value)) {
        setState({
          ...state,
          [event.target.name]: [...state[event.target.name], event.target.value]
        })
      }
    } else {
      setState({
        ...state,
        [event.target.name]: event.target.value
      })
    }

    validate({
      ...state,
      [event.target.name]: event.target.value
    }, event.target.name)
  }

  //Control del envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(postActivity(state))
    setState({
      name: '',
      picture: '',
      difficulty: 0,
      duration: 0,
      season: '',
      countries: []
    })
    setError({
      name: '*',
      difficulty: '*',
      duration: '*',
      picture: '',
      season: '*',
      countries: 'Where will we do this activity? Choose at least one country'
    })
  }

  return (
    //Render form
    <div className={style.formContainer}>
      <form onSubmit={handleSubmit} className={style.form}>

        <div>
          <label>Activity: </label>
          <input name='name' onChange={handleChange} type="text" value={state.name} placeholder="Activity's name" />
          <label>{error.name}</label>
        </div>

        <div>
          <label>Picture: </label>
          <input name='picture' onChange={handleChange} type="text" value={state.picture} placeholder='Insert URL'/>
          <label>{error.picture}</label>
        </div>

        <div>
          <label>Difficulty: </label>
          <select name='difficulty' onChange={handleChange}>
            <option value=''>-</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
          <label>{error.difficulty}</label>
        </div>

        <div>
          <label>Duration in hours: </label>
          <input name='duration' onChange={handleChange} type="text" value={state.duration} placeholder='Type how many hours avg.' />
          <label>{error.duration}</label>
        </div>

        <div>
          <label>Season:</label>
          <select onChange={handleChange} name='season'>
            <option value=''>Select Season</option>
            <option value='Summer'>Summer</option>
            <option value='Spring'>Spring</option>
            <option value='Winter'>Winter</option>
            <option value='Fall'>Fall</option>
          </select>
          <label>{error.season}</label>
        </div>
        <div>
          <label>Countries: </label>
          <select onChange={handleChange} name='countries'>
            <option>- Select a Country -</option>
            {allCountries?.map((c) => <option value={c.ID} key={c.ID}>{c.name}</option>)}
          </select>
          <div>
            {
              state.countries?.map((c) => <div>
                <label key={state.name}>{c}</label> <button name='countries' id={c} type='button' onClick={handleDelete}>x</button>
              </div>)
            }
          </div>
          <label>{error.countries}</label>
        </div>

        {handlerDisable ? <input disabled type="submit" /> : <input type="submit" />}
      </form>
    </div>
  )

}
export default PostActivity
