import axios from 'axios';

export const listBeers = async () => {
    var result = await axios.get('http://localhost:8080/api/beers')
    .then(resp => {
        return resp.data;
    })
    .catch((error) => {
        console.error(error);
        return null;
    });
    return result;
}