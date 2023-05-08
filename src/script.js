function Change() {
    let city = prompt("What city do you live in?");
    let temperature = prompt("What temperature is it?");
    let h1 = document.querySelector("h1");
    if (temperature >= 0) {
      h1.innerHTML = `😄 <br /> Currently ${temperature} ° in  ${city}`;
    } else {
      h1.innerHTML = `☹️ <br /> Currently ${temperature}° in  ${city}`;
    }
  }
  let contactButton = document.querySelector("button");
  contactButton.addEventListener("click", Change);