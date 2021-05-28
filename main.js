const pigLatin = () => {
  let inputVal = document.getElementById("latin").value.toLowerCase().trim();

  const vowels = ["a", "e", "i", "o", "u"];
  let vowelIndex = 0;
  if (vowels.includes(inputVal[0])) {
    return (document.getElementById("newWord").innerHTML = inputVal + "yay");
  } else {
    for (let char of inputVal) {
      if (vowels.includes(char)) {
        vowelIndex = inputVal.indexOf(char);
        break;
      }
    }

    return (document.getElementById("newWord").innerHTML =
      inputVal.slice(vowelIndex) + inputVal.slice(0, vowelIndex) + "ay");
  }
};
