
import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'

import {postActivity, getCountriesByName} from '../Redux/Action/action-types'
import Validation from '../Validation/Validation'

const PostActivity = () => {

  const allCountries = useSelector (state => state.allCountries)
  const dispatch = useDispatch()
  
  useEffect(() =>{
    dispatch(getCountriesByName())
  }, [])

  const [state, setState] = useState({
    name: '',
    picture: '',
    difficulty: 0,
    duration: 0,
    season: ''
  })

  const [error, setError] = useState({
    name: 'Name is required',
    duration: '',
    picture: ''
  })

  const validate = (stateAux, name) => {
     switch (name) {
      case name: {
        if (!stateAux.name) setError({ ...error, name: 'Name is required' })
        else setError({ ...error, name: '' })
      }
      case picture: {
        const regex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
        if (regex.test(stateAux.picture)) {
          setError({ ...error, picture: '' })
        } else {
          setError({ ...error, picture: 'Invalid URL' })
        }
      }
      case duration: {
        if (isNaN(parseInt(stateAux.duration))) {
          setError({ ...error, duration: 'Invalid entry. It must be a number' })
        } else setError({ ...error, duration: '' })
      }
      default: {
        break;
      }
    }
  }


const disableFunction = () => {
  let disabledAux = true;
  for (let err in error) {
    if (error[err] === '') disabledAux = false;
    else {
      disabledAux = true;
      return
    }
  }
  return disabledAux;
}

const handleChange = (event) => {
  setState({
    ...state,
    [event.target.name]: event.target.value
  })
  validate({
    ...state,
    [event.target.name]: event.target.value
  }, event.target.name)
}

const handleSubmit = (event) => {
  event.preventDefault()

}

return (
  <div>
    {console.log(error)}
    <form onSubmit={handleSubmit}>
      <label>Name: </label>
      <input name='name' onChange={handleChange} type="text" />
      <label>{error.name}</label>
      <label>Picture: </label>
      <input name='picture' onChange={handleChange} type="text" />
      <label>{error.picture}</label>
      <label>Difficulty: </label>
      <select name='difficulty'>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <label>{error.difficulty}</label>
      <label>Duration in hours: </label>
      <input name='duration' onChange={handleChange} type="text" />
      <label>{error.difficulty}</label>
      <label>Season: </label>
      <input name='season' onChange={handleChange} type="text" />
      <label>{error.difficulty}</label>
      <label>Countries: </label>
      <select onChange={handleChange} name = 'countries'>
        {allCountries.map((c) => <option value={c} key={c}>{c}</option>)}
      </select>
      <input disabled={disableFunction()} type="submit" />
    </form>
  </div>
)

}
export default PostActivity