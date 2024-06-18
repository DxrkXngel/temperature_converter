let temp_input = document.getElementById("i_temp");
let radio_cTof = document.getElementById("i_cTof");
let radio_fToc = document.getElementById("i_fToc");
let submit_button = document.getElementById("s_button");
let text_result = document.getElementById("p_result");
let temp;

const forms = document.querySelectorAll("form")
forms.forEach(form => {
  form.addEventListener("submit", event => {
    event.preventDefault()
  })
})

function convert() {

    if (radio_cTof.checked) {

        temp = Number(temp_input.value);
        temp = (temp * 1.8) + 32;
        text_result.textContent = `${temp}` + "°F";

    }
    else if (radio_fToc.checked) {

        temp = Number(temp_input.value);
        temp = (temp - 32) / 1.8;
        text_result.textContent = `${temp}` + "°C";

    }
    else{

        text_result.textContent = "Please select a unit"

    }
}