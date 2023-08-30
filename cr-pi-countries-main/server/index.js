const axios = require('axios')
const server = require("./src/server");
const { conn } = require('./src/db.js');
const {Country} = require('./src/db');

const PORT = 3001;

conn.sync({ force: true }).then(() => {
server.listen(PORT, async () => {
  console.log(`Server listening on port ${PORT}`);
  const {data} = await axios.get('http://localhost:5000/countries');

  data.map(async({cca3,name,flags,continents,capital,subregion,area,population}) =>{
    await Country.findOrCreate({
      where: {
       ID: cca3
      },
      defaults:{
        name: name.common,
        flags: flags.png,
        continents:continents?continents[0]:'undefined',
        capital: capital?capital[0]:'undefined',
        subregion:subregion,
        area: area,
        population: population
      }
    })
  })
  
})
}).catch(error => console.error(error))
