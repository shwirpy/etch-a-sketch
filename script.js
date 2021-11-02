console.log("hello")
//Creating Pixel through JS
pixelBox=[];
drawingBox=document.querySelector('#drawingBox');
let pixelCount;
let pixelSize;
let toggle=0;
let selectedColor="rgb(58, 58, 58)";


function drawPixels(num){
    pixelBox=[];
    pixelCount=num**2;
    pixelSize=100/num;
    for(i=0;i<pixelCount;i++){
        pixelBox[i]=document.createElement('div');
        pixelBox[i].classList.add('pixelBox');
        pixelBox[i].style.height=pixelSize+'%';
        pixelBox[i].style.width=pixelSize+'%';
        drawingBox.appendChild(pixelBox[i]);
    }
    console.log('drawing pixels')
    drawFunction();
    
}

function addPaint(e){

    if(toggle) this.style.backgroundColor=selectedColor;

    //this.classList.add('painted');
}

function clearAll(){
    pixelBox.forEach(pB=>pB.style.backgroundColor='gray')
}

function changeResolution(e){
    num=prompt('Enter dimensions (4-128)?');
    pixelBox.forEach(pB=>pB.remove());
    drawPixels(num);
}
function drawFunction(){
    toggle=0;
    window.addEventListener('mousedown', () => toggle=1 );
    window.addEventListener('mouseup',()=>toggle=0);
    pixelBox.forEach(pB=>pB.addEventListener('mouseover',addPaint));
}


resolutionButton=document.querySelector('#resolutionButton')
resolutionButton.addEventListener('click',changeResolution);

pencilButton=document.querySelector('#pencilButton');
pencilButton.addEventListener('click',()=>selectedColor="rgb(58, 58, 58)")

eraserButton=document.querySelector('#eraserButton');
eraserButton.addEventListener('click',()=>selectedColor='gray')

clearButton=document.querySelector('#clearButton');
clearButton.addEventListener('click', (clearAll));


drawPixels(16);
drawFunction();





