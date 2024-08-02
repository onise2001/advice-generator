const adviceNumber = document.querySelector(".advice-number");
const adviceText = document.querySelector(".advice-text");
const dice = document.querySelector(".dice");

dice.addEventListener("click", () => {
  try {
    let newAdvice = getAdvice();
    newAdvice.then((advice) => {
      console.log(advice);

      adviceNumber.textContent = `# ${advice.slip.id}`;
      adviceText.textContent = `" ${advice.slip.advice} "`;
    });
  } catch {}
});

async function getAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice");
  if (response.ok) {
    const data = await response.json();
    return data;
  }
  throw new Error(response.error);
}
