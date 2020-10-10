const axios=require('axios')
const apiKey="1d80b49df2e288ae25e5a52e239f9c03"


//get weather city:London

axios.get(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`)
.then(res => console.log(res))
.catch(err => console.log(err))