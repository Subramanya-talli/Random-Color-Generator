const colorCode = document.querySelector(".color-code");
const btn = document.querySelector(".btn");

// The color code will alwyas in HexaDecimal Format

const changeColor = () => {
  const randomNumber = Math.floor(Math.random() * 16777215);
  const randomCode = "#" + randomNumber.toString(16);
  document.body.style.backgroundColor = randomCode;
  colorCode.style.color = randomCode;
  colorCode.innerHTML = randomCode;
};

btn.addEventListener("click", changeColor);
