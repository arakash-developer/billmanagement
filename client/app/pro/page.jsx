import React from 'react'
const axios = require('axios');


const page = () => {
  axios.get('https://billmanagement-server.vercel.app/pro', {
    withCredentials: true
  })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  return (
    <div>page</div>
  )
}

export default page