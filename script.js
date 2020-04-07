const inputImage = document.getElementById('meme-insert'); //imagem do input file.
const inputText = document.getElementById('text-input');
const container = document.getElementById('meme-image-container'); // container da imagem.
const txt = document.getElementById('meme-text'); // tag p da imagem.
const img = document.getElementById('meme-image'); //

inputImage.addEventListener('change', addImage); // evento para o input file.
inputText.addEventListener('keyup', addText);

function addImage() {
    img.src = URL.createObjectURL(event.target.files[0]);
    container.appendChild(img);
    img.style.display = 'block';
    txt.style.display = 'block';
}

function addText() {
    let memeTxt = inputText.value;
    txt.innerText = memeTxt;
}

/*function addImage(event) {
    if(!img){
        img = document.createElement('img');
    } else {

    }
    img.src = URL.createObjectURL(event.target.files[0]);
    img.alt = 'Imagem do meme escolhido';
    img.id = 'meme-image';
    container.appendChild(img);
    img.style.display = 'block';
}*/