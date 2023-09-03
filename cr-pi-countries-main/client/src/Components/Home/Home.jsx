import { useState, useEffect } from "react"

const Home = () =>{
    const [countries, setCountries] = useState({})

    useEffect(()=>{
        axios('http://localhost:3001/countries')
        .then(({data})=>{
           setCountries(data)
        })
     }, [])

    return(
        <div id="HomePage">

            <Country countries= {countries}/>
        </div>
    )
    
}

export default Home