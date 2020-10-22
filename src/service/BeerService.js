import axios from 'axios';

export const listBeers = async (page) => {
    let baseUrl = 'http://localhost:8080/api/beers'
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