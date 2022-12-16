// Select color input
// Select size input
let canvas = document.getElementById("pixelCanvas");
let height = document.getElementById("inputHeight");
let width = document.getElementById("inputWidth");
let sizePicker = document.getElementById("sizePicker");
let colorChoice = document.getElementById("colorPicker");

colorChoice.addEventListener("click", function() {});

sizePicker.onsubmit = function(event) {
    event.preventDefault();
    clearGrid();
    makeGrid();
};
// function to make the grid
function makeGrid() {
    for (let r = 0; r < height.value; r++) {
        const row = canvas.insertRow(r);
        for (let c = 0; c < width.value; c++) {
            const cell = row.insertCell(c);
            cell.addEventListener("click", fillSquare);
        }
    }
}
// Clear the grid
function clearGrid() {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}
// cell color
function fillSquare() {
    this.setAttribute("style", `background-color: ${colorChoice.value}`);
}