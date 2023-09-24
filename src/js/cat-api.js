import axios from 'axios';

const URL_BASE = 'https://api.thecatapi.com/v1'

const BREEDS = '/breeds';
const CATS = '/images/search?breed_ids=';

axios.defaults.headers.common['x-api-key'] =
  'live_5mk4uk7oIymTDubuhqQINRqNUC8X0Zetl3TDQAgSoqzETwGXFlk2i4un8QY2oJVc';

  export function fetchBreeds() {
  return axios.get(`${URL_BASE}${BREEDS}`)
  .then(resp => {
    return resp.data;
  });
}

export function fetchCatByBreed(breedId) {
  return axios.get(`${URL_BASE}${CATS}${breedId}`)
  .then(resp => {
    return resp.data;
  });
}
