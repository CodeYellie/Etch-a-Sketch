const container = document.querySelector("#container");

    function createDiv(promptNumber){
        for (let i = 0; i < promptNumber * promptNumber; i++){
            const div = document.createElement("div");
            container.appendChild(div);
            div.style.height = 600 / promptNumber + "px";
            div.style.width = 600 / promptNumber + "px";
            div.addEventListener('mouseenter', () => {
            div.classList.add('active-hover');
            });
        }
    }

createDiv(16);

const button = document.getElementById('gridButton');

button.addEventListener('click', () => {
  const promptNumber = prompt("Give me a number between 1 and 100!");
    if (promptNumber === null) {
    alert("Come one I need atleast something to work with!");
    return;
  }
  else if (isNaN(promptNumber)) {
    alert("Only numbers please!");
    return;
  }
  else if (promptNumber > 100) {
    alert("Under or equal to 100 please!");
    return;
  }
  else if (promptNumber < 1) {
    alert("Come one I need atleast positive numbers to work with!");
    return;
  }
  container.innerHTML = "";
  createDiv(promptNumber);
});
