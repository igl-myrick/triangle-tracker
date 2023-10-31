// business logic
function triangleCheck(side1, side2, side3) {
  if (((side2 + side3) <= side1) || ((side3 + side1) <= side2) || ((side1 + side2) <= side3)) {
    return "NOT a triangle.";
  } else if (side1 === side2 && side2 === side3) {
    return "an Equilateral triangle.";
  } else if ((side1 === side2 && side2 !== side3) || (side1 !== side2 && side2 === side3) || (side1 === side3 && side2 !== side3)) {
    return "an Isosceles triangle.";
  } else if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
    return "a Scalene triangle.";
  }
}

// ui logic
function resetInputs() {
  result.setAttribute("class", "hidden");
  document.getElementById("side1Input").value = null;
  document.getElementById("side2Input").value = null;
  document.getElementById("side3Input").value = null;
}

window.addEventListener("load", function() {
  let form = document.querySelector("form");
  let reset = document.querySelector("button#reset");

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("result").removeAttribute("class");

    const side1Input = parseInt(document.getElementById("side1Input").value);
    const side2Input = parseInt(document.getElementById("side2Input").value);
    const side3Input = parseInt(document.getElementById("side3Input").value);

    const triangleResult = triangleCheck(side1Input, side2Input, side3Input);
    document.getElementById("resultText").innerText = triangleResult;
  });

  reset.addEventListener("click", resetInputs);
});