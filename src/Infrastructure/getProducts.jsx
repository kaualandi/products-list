import axios from 'axios';

async function getProducts() {
    const response = await axios.get('https://us-central1-api-desafio.cloudfunctions.net/list');
    if (response.error) {
        throw new Error(response.error);
    } else {
        return response.data;
    }
}

export default getProducts;