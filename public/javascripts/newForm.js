// SELECTORS INPUT
const place_input = document.getElementById('placeName');
const submitBtn_input = document.getElementById('btn');
const allInput_select = document.querySelectorAll('select');

// EVENT LISTENER NAME
place_input.addEventListener('change', function () {
  if (place_input.value !== "") {
    place_input.style.background = "#d9f3cc";
  } else {
    place_input.style.background = "rgb(254, 206, 206)";
  }
});

/* // FUNCTION FOR INPUT 
function changeColorInput(selector, title) {
  selector.addEventListener('change', function () {
    if (selector.value !== "") {
      title.style.color = "#4f555b";
    } else {
      title.style.color = "rgb(255, 97, 97)";
    }
  });
}
 */