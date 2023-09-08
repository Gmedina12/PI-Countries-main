
import React, { useState } from 'react'
import Validation from '../Validation/Validation'

const PostActivity = () => {

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

      }
    }
  }


const disableFunction = () => {
  let disabledAux = true;
  for (let err in error) {
    if (error[err] === '') disabledAux = false;
    else {
      disabledAux = true;
      break;
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
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      {/* <input name='difficulty' onChange={handleChange} type="text" /> */}
      <label>{error.difficulty}</label>
      <label>Duration in hours: </label>
      <input name='duration' onChange={handleChange} type="text" />
      <label>{error.difficulty}</label>
      <label>Season: </label>
      <input name='season' onChange={handleChange} type="text" />
      <label>{error.difficulty}</label>
      <input disabled={disableFunction()} type="submit" />
    </form>
  </div>
)

}
export default PostActivity