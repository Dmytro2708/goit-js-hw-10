import axios from "axios";
import { fetchBreeds, fetchCatByBreed } from './cat-api';
import { Notify } from "notiflix";

const selectBreed = document.querySelector('.breed-select');
const infoCat = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const pageLoader = document.querySelector('.loader-p');
const error = document.querySelector('.error');

selectBreed.addEventListener('change', selectCat);

hidePageLoaderHandler();

function createList() {
    pageLoader.classList.remove('is-hidden')
    selectBreed.classList.add('is-hidden')
    error.classList.add("is-hidden")

    fetchBreeds().
    then(data => {
        const markupOption = data.map(({ id, name }) => `<option value="${id}">${name}</option>`).join('')
        selectBreed.innerHTML = markupOption

        pageLoader.classList.add("is-hidden")
        selectBreed.classList.remove("is-hidden")
    })
    .catch(_error => {Notify.failure('Oops! Something went wrong! Try reloading the page!')})
}

createList()


function selectCat(e) {
    pageLoader.classList.remove('is-hidden')
    infoCat.classList.add('is-hidden')

    const selectedId = e.currentTarget.value

    showPageLoaderHandler();

    fetchCatByBreed(selectedId)
        .then(data => {
            renderInfo(data)
            pageLoader.classList.add('is-hidden')
            infoCat.classList.remove('is-hidden')
        })
        .catch(_error => { Notify.failure('Oops! Something went wrong! Try reloading the page!') })
}

function renderInfo(data) {
    const { breeds, url } = data[0]
    const {name, temperament, description} = breeds[0]
    const infoCard = `
    <img class="cat-img" width="300px" src="${url}" alt="${name}">
    <div class="text-block">
        <h2 class="cat-name">${name}</h2>
        <p class="cat-description">${description}</p>
        <p class="cat-temperament">${temperament}</p>
    </div>
    `
    infoCat.innerHTML = infoCard
}

function showPageLoaderHandler() { 
    pageLoader.style.display = 'block';
    loader.style.display = 'block';
  }
  
  function hidePageLoaderHandler() {
    pageLoader.style.display = 'none';
    loader.style.display = 'none';
   }