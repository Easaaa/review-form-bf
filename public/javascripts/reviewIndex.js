// Selectors
const foodQualityRate = document.querySelectorAll('.foodQualityRate');
const serviceRate = document.querySelectorAll('.serviceRate');
const atmosphereRate = document.querySelectorAll('.atmosphereRate');
const cleanlinessRate = document.querySelectorAll('.cleanlinessRate');
const priceRate = document.querySelectorAll('.priceRate');
const totalRate = document.querySelectorAll('.totalRate');

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