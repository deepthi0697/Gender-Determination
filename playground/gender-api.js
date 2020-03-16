const axios = require('axios')

axios.get(`https://api.genderize.io?name=geetha`)
.then((response) => {
  const gender = response.data
  console.log(gender)
})
.catch((err) => {
  console.log(err)
})