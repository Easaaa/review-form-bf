const foodQualityRate = document.getElementById('foodQualityRate');
const newFoodQualityRate = parseFloat(foodQualityRate.textContent).toPrecision(2);
foodQualityRate.textContent = newFoodQualityRate;

const serviceRate = document.getElementById('serviceRate');
const newServiceRate = parseFloat(serviceRate.textContent).toPrecision(2);
serviceRate.textContent = newServiceRate;

const atmosphereRate = document.getElementById('atmosphereRate');
const newAtmosphereRate = parseFloat(atmosphereRate.textContent).toPrecision(2);
atmosphereRate.textContent = newAtmosphereRate;

const cleanlinessRate = document.getElementById('cleanlinessRate');
const newCleanlinessRate = parseFloat(cleanlinessRate.textContent).toPrecision(2);
cleanlinessRate.textContent = newCleanlinessRate;

const priceRate = document.getElementById('priceRate');
const newPriceRate = parseFloat(priceRate.textContent).toPrecision(2);
priceRate.textContent = newPriceRate;

document.getElementById('totalRate').textContent = (parseInt(newFoodQualityRate) + parseInt(newServiceRate) + parseInt(newAtmosphereRate) + parseInt(newCleanlinessRate) + parseInt(newPriceRate)) / 5;