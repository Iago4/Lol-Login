const inputs = document.querySelectorAll(".input")

const handlefocus = ({ target }) => {
  const span = target.previousElementSibling
  span.classList.add("span-active")
}

inputs.forEach((input) => input.addEventListener("focus", handlefocus))
