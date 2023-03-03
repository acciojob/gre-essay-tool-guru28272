//your code here
const input = document.querySelector(`#evaluatedText`);
const h3 = document.querySelector(`#wordCount`);

function countWords(e) {
  e.preventDefault();

  const inputVal = input.value;
  let arr = inputVal.split(` `);

  h3.textContent = arr.length;
}

input.addEventListener(`input`, countWords);