const axios = require('axios');

export default function requestHandler({requestType, action, data}) {

    return axios[requestType || 'post'](`http://localhost:3000/${action}`, data)
        .catch(err => {
            console.error(err);
            throw err;
        })
}