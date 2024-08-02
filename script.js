const adviceNumber = document.querySelector(".advice-number");
const adviceText = document.querySelector(".advice-text");
const loader = document.querySelector("#load");
const dice = document.querySelector(".dice");
const error = document.querySelector("#error-text");
dice.addEventListener("click", () => {
  error.classList.add("hide");
  adviceNumber.classList.add("hide");
  adviceText.classList.add("hide");
  loader.classList.remove("hide");

  try {
    let newAdvice = getAdvice();
    newAdvice.then((advice) => {
      adviceNumber.textContent = `# ${advice.slip.id}`;
      adviceText.textContent = `" ${advice.slip.advice} "`;
      adviceNumber.classList.remove("hide");
      adviceText.classList.remove("hide");
      loader.classList.add("hide");
    });
  } catch {
    adviceNumber.classList.add("hide");
    adviceText.classList.add("hide");
    loader.classList.add("hide");
    error.classList.remove("hide");
  }
});

async function getAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice");
  if (response.ok) {
    const data = await response.json();
    return data;
  }
  throw new Error(response.error);
}
