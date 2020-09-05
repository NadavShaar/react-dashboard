const axios = require('axios');

export default function requestHandler({requestType, action, data}) {

    return axios[requestType || 'post'](`https://shielded-wildwood-86962.herokuapp.com/${action}`, data)
        .catch(err => {
            console.error(err);
            throw err;
        })
}