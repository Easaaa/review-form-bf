// Selectors
const foodQualityRate = document.querySelectorAll('.foodQualityRate');
const serviceRate = document.querySelectorAll('.serviceRate');
const atmosphereRate = document.querySelectorAll('.atmosphereRate');
const cleanlinessRate = document.querySelectorAll('.cleanlinessRate');
const priceRate = document.querySelectorAll('.priceRate');
const totalRate = document.querySelectorAll('.totalRate');

// Function to loop through 
function trasformToArray(selectors) {
  Array.from(selectors).forEach(function (select) {
    selectParse = parseFloat(select.innerText).toPrecision(2);
    select.textContent = selectParse;
  });
}

trasformToArray(foodQualityRate);
trasformToArray(serviceRate);
trasformToArray(atmosphereRate);
trasformToArray(cleanlinessRate);
trasformToArray(priceRate);
trasformToArray(totalRate);

// UI Effect hover color
const placeRaw = document.querySelectorAll('.place-list');
Array.from(placeRaw).forEach(function (row) {
  row.addEventListener('mouseover', function () {
    row.style.background = "wheat";
  });
  row.addEventListener('mouseout', function () {
    row.style.background = "transparent";
  });
});