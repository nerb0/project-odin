
const brushes = document.querySelectorAll(".brush");
const tools = document.querySelectorAll(".tool");
const slider = document.getElementById("slider");
const sliderContainer = document.getElementById("sliderContainer");
const output = document.getElementById("output");
const primary = document.getElementById("primaryColor");
const secondary = document.getElementById("secondaryColor");
const overlay = document.getElementById("overlay");
const bgColorPick = document.getElementById("bgColorPick");
const bgTransparent = document.getElementById("bgTransparent");
const background = document.getElementById("background");
const defaultBrush = document.getElementById("defaultBrush");

let grid_array = [];
let state = "custom";
let size = slider.value;
let holding = false;
let primaryColor = primary.value;
let secondaryColor = secondary.value;
let brushColor = primaryColor;
let brushType = 'pencil';
let step = true;
const BGCOLOR = "#dfdfdf";

for(let i = 0; i < 32; i++){
    for(let j = 0; j < 32; j++){
        const cell = document.createElement("div");
        if(step){
            if(j % 2 ==0) cell.style.backgroundColor = BGCOLOR ;
            else cell.style.backgroundColor = "white";
        }
        else{
            if(j % 2 ==0) cell.style.backgroundColor = "white";
            else cell.style.backgroundColor = BGCOLOR;
        }
        background.appendChild(cell);
    }
    step = !step;
}
function saveSketch(){
    const sketch = document.getElementById("main");
    let filename = prompt("Enter filename: ","sketch");
    if(!filename)return;
    html2canvas(sketch,{backgroundColor:null})
        .then(canvas =>{
            document.body.appendChild(canvas);
            canvas.style.display = 'none';
            return canvas;
        })
        .then(canvas => { 
            const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
            const a = document.createElement('a')
            a.setAttribute('download', `${filename}.png`)
            a.setAttribute('href', image)
            a.click();
            canvas.remove();
        });
}

// disable slider after transition to transparent
sliderContainer.addEventListener('transitionend', function() {
    this.style.display = "none";
});

function saveAs(uri, filename){
    var link = document.createElement('a');
    if(typeof link.download === 'string'){
        link.setAttribute('href', uri);
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        window.open(uri);
    } 
}
// Set opacity of slider-container to 1 and display to 'flex'
function showSlider(){
    sliderContainer.style.display = "flex";
    sliderContainer.style.opacity = "1";
}
// Set opacity of slider-container to 0
function hideSlider(){
    sliderContainer.style.opacity = "0";
}
slider.oninput = function() {
    size = this.value;
    output.innerHTML = size + " x " + size;
};
function initiateGridSize(){
    hideSlider();
    createGrid(slider.value);
}
function createGrid(size){
    const GRID_SIZE = size * size;
    const container = document.getElementById("container");
    if(container){
        while(container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }
    const grid = document.createElement("div");
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    const border = grid.cloneNode(true);
    border.className = "grid-border";
    border.id = "gridBorder";
    grid.className = "grid";
    grid.id = "main";
    container.appendChild(border);
    container.appendChild(grid);

    let temp = [];
    grid_array = []
    for (let i = 0,j = 0; i < size; i++) {
        temp = [];
        for(let j = 0; j < size; j++){
            const cell = document.createElement("div");
            const borderCell = document.createElement("div");
            if(j!= 0) borderCell.classList.add("left-border"); // Disable left border for left cells
            if(i < size - 1)borderCell.classList.add("bottom-border"); // Disable bottom border for bottom cells
            cell.onmouseenter = (c) => customPass(c);
            cell.onmousedown = (c) => customPass(c);
            cell.style.backgroundColor = "transparent";
            temp.push(cell);
            cell.setAttribute('data-key', `${i} ${j}`);
            grid.appendChild(cell);
            border.appendChild(borderCell);
        }
        grid_array.push(temp);
    };
    
}
function setActive(brush){
    brushes.forEach((btn) => {
        btn.classList.remove('active');
    });
    brush.classList.add('active');
}
function setTool(brush){
    tools.forEach((btn) => {
        btn.classList.remove('currentBrush');
    });
    brush.classList.add('currentBrush');
    if(state != 'custom'){
        overlay.style.backgroundColor = '#7c7c7c85';
        overlay.style.pointerEvents = 'visible';
    }
}
function disableColorPick(){
    overlay.style.backgroundColor = '#7c7c7c85';
    overlay.style.pointerEvents = 'visible';
}
function setRGB(button){
    state = "rgb";
    setActive(button);
    disableColorPick()
    const grid = document.getElementById("main");
    grid.childNodes.forEach((cell) => {
        cell.onmouseenter = (c) => rgbPass(c);
        cell.onmousedown = (c) => rgbPass(c);
    });
}
function setDark(button){
    state = "dark";
    setActive(button);
    disableColorPick()
    const grid = document.getElementById("main");
    grid.childNodes.forEach((cell) => {
        cell.onmouseenter = (c) => darkerPass(c);
        cell.onmousedown = (c) => darkerPass(c);
    });
}
function setLight(button){
    state = "light"
    setActive(button);
    disableColorPick()
    const grid = document.getElementById("main");
    grid.childNodes.forEach((cell) => {
        cell.onmouseenter = (c) => lighterPass(c);
        cell.onmousedown = (c) => lighterPass(c);
    });
}

/* 
    Set Brush Type

    set brushType is to allow some pass functions to work with 
    fill function and draw function respectively
*/
function setCustom(button){
    state = "custom";
    setActive(button);
    const grid = document.getElementById("main");
    overlay.style.backgroundColor = 'transparent';
    overlay.style.pointerEvents = 'none';
    grid.childNodes.forEach((cell) => {
        cell.onmouseenter = (c) => customPass(c);
        cell.onmousedown = (c) => customPass(c);
    });
}
function setErase(button){
    brushType = 'pencil';
    setTool(button);
    const grid = document.getElementById("main");
    grid.childNodes.forEach((cell) => {
        cell.onmouseenter = (c) => erasePass(c);
        cell.onmousedown = (c) => erasePass(c);
    });
}
function setFill(button){
    brushType = 'fill';
    setBrush(button);
}
function setPencil(button){
    brushType = 'pencil';
    setBrush(button);
}
function setBrush(button){
    setTool(button);
    const grid = document.getElementById("main");
    switch(state){
        case "rgb":
            grid.childNodes.forEach((cell) => {
                cell.onmouseenter = (c) => rgbPass(c);
                cell.onmousedown = (c) => rgbPass(c);
            });
            break;
        case "dark":
            grid.childNodes.forEach((cell) => {
                cell.onmouseenter = (c) => darkerPass(c);
                cell.onmousedown = (c) => darkerPass(c);
            });
            break;
        case "light":
            grid.childNodes.forEach((cell) => {
                cell.onmouseenter = (c) => lighterPass(c);
                cell.onmousedown = (c) => lighterPass(c);
            });
            break;
        case "custom":
            grid.childNodes.forEach((cell) => {
                cell.onmouseenter = (c) => customPass(c);
                cell.onmousedown = (c) => customPass(c);
            });
            break;
    }
}
// 10% darker
function darkerPass(c){
    if(holding || c.type == 'mousedown'){
        let color = c.currentTarget.style.backgroundColor;
        if(color != 'transparent'){
            let rgb = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
            let R = parseInt(rgb[1]);
            let G = parseInt(rgb[2]);
            let B = parseInt(rgb[3]);
            R =  (R>=25)? R - 25 : 0;
            G =  (G>=25)? G - 25 : 0;
            B =  (B>=25)? B - 25 : 0;
            draw(c, `rgb(${R},${G},${B})`);
        }
    }
}
// 10% lighter
function lighterPass(c){
    if(holding || c.type == 'mousedown'){
        let color = c.currentTarget.style.backgroundColor;
        if(color != 'transparent'){
            let rgb = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
            let R = parseInt(rgb[1]);
            let G = parseInt(rgb[2]);
            let B = parseInt(rgb[3]);
            R =  (R<=230)? R + 25 : 255;
            G =  (G<=230)? G + 25 : 255;
            B =  (B<=230)? B + 25 : 255;
            draw(c, `rgb(${R},${G},${B})`);
        }
        
    }
}
// Random RGB
function rgbPass(c){
    if(holding || c.type == 'mousedown'){
        const R = (Math.random()*255);
        const G = (Math.random()*255);
        const B = (Math.random()*254);
        draw(c, `rgb(${R},${G},${B})`);
    }
}
// Custom color pass
function customPass(c){
    if(c.buttons == 1) brushColor = primaryColor;
    else brushColor = secondaryColor;
    if((holding || c.type == 'mousedown')){
        draw(c, brushColor);
    }
} 
// Eraser pass
function erasePass(c){
    if(holding || c.type == 'mousedown') draw(c, 'transparent');
    
} 
// Clear all pixel on canvas
function emptyCanvas(){
    const cells = document.getElementById("main").childNodes;
    cells.forEach((cell) => cell.style.backgroundColor = 'transparent');
}
// Draw pixel on canvas
function pencilCanvas(c, set){
    c.currentTarget.style.backgroundColor = set;
}
// Fill function
function fillCanvas(c, set){ 
    if(holding || c.type == 'mousedown'){
        let visited = []
        for(let i = 0; i < size; i++){
            visited.push([]);
            for(let j = 0; j < size; j++){
                visited[i].push(false);
            }
        }
        let pos = c.currentTarget.getAttribute('data-key').split(" ");
        let x = parseInt(pos[0]);
        let y = parseInt(pos[1]);
        let target = c.currentTarget.style.backgroundColor;
        pencilCanvas(c, set);
        fill(x, y, target, visited, set);
    }
}
function fill(i, j, color, visited, set ){
    for(let x = Math.max(0, i-1); x <= Math.min(i+1, size - 1); x++){
        if(!visited[x][j] && x !== i && grid_array[x][j].style.backgroundColor == color){
            visited[x][j] = true;
            grid_array[x][j].style.backgroundColor = set;
            fill(x, j, color, visited, set);
        }
        visited[x][j] = true;
    }
    for(let y = Math.max(0, j-1); y <= Math.min(j+1, size - 1); y++){
        if(!visited[i][y]  && y !== j && grid_array[i][y].style.backgroundColor == color){
            visited[i][y] = true;
            grid_array[i][y].style.backgroundColor = set;
            fill(i, y, color, visited, set);
        }
        visited[i][y] = true;
    }
}
function draw(c, set){
    if(brushType == 'pencil') pencilCanvas(c, set);
    else fillCanvas(c, set);
}


function toggleGrid(){
    const gridBorder = document.getElementById('gridBorder');
    if(gridBorder.style.display == 'none'){
        gridBorder.style.display = 'grid';
    }else{
        gridBorder.style.display = 'none';
    }
}
function setTransparent(){
    const grid = document.getElementById('main');
    grid.style.backgroundColor = 'transparent';
    bgColorPick.style.opacity = 0.5;
    bgTransparent.style.opacity = 1;
}
bgColorPick.onchange = function(c){
    const grid = document.getElementById('main');
    grid.style.backgroundColor = this.value;
    bgColorPick.style.opacity = 1;
    bgTransparent.style.opacity = 0.5;
}
primary.oninput = function(){
    primaryColor = this.value;
};
secondary.oninput = function(){
    secondaryColor = this.value;
};
// Allow only to draw when clicking
document.onmousedown = (c) => {
    holding = true;
};
document.onmouseup = (c) => {
    holding = false;
};
window.onload = () =>{
    createGrid(size);
};
