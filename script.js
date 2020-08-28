'use strict';


function getDogImage(breed) {
  fetch('https://dog.ceo/api/breed/'+breed+'/images/random')
    .then(response => response.json())
    .then(responseJson => displayResult(responseJson))
    .catch(error => alert(`It looks like something went wrong. Please try again!`));
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    var breed = $('input[type="text"]').val();
    console.log(breed);
    getDogImage(breed.toLowerCase());
  });
}  

function displayResults(responseJson) {
  console.log(responseJson);
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  )
  $('.results').removeClass('hidden');
}


$(function() {
console.log('App loaded! Waiting for submit!');
watchForm();
});