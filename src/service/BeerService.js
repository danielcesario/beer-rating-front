import axios from 'axios';

let baseUrl = 'http://localhost:8080/api/beers'

export const listBeers = async (page) => {
    if (page && page > 0) {
        baseUrl = baseUrl + '?page=' + page;
    }
    var result = await axios.get(baseUrl)
        .then(resp => {
            return resp.data;
        })
        .catch((error) => {
            console.error(error);
            return null;
        });
    return result;
}

export const saveBeer = async (beer) => {
    return axios.post('http://localhost:8080/api/beers', beer);
}