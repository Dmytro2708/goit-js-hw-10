import axios from 'axios';
const URL_BREEDS = 'https://api.thecatapi.com/v1/breeds';
const URL_CATS = 'https://api.thecatapi.com/v1/images/search?breed_ids=';

axios.defaults.headers.common['x-api-key'] =
  'live_5mk4uk7oIymTDubuhqQINRqNUC8X0Zetl3TDQAgSoqzETwGXFlk2i4un8QY2oJVc';

function fetchBreeds() {
  return axios.get(URL_BREEDS)
  .then(resp => {
    return resp.data;
  });
}

function fetchCatByBreed(breedId) {
  return axios.get(`${URL_CATS}${breedId}`)
  .then(resp => {
    return resp.data;
  });
}

export { fetchBreeds, fetchCatByBreed };
