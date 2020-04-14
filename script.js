window.onload = function(){
  const caixaTexto = document.querySelector('#text-input');
  const textToDisplayContainer = document.querySelector('#meme-text');
  caixaTexto.addEventListener('keyup', trocaTexto);
    function trocaTexto () {
      textToDisplayContainer.innerText = caixaTexto.value;
    }

    //Add image
  const caixaImagem = document.querySelector('#meme-image-container');
  const memeinsertvalue = document.querySelector('#meme-insert');
  const buttonevent = document.querySelector('#buttonLoadImage');
	let imageElement = document.querySelector('.classNemeImage');
  //buttonevent.addEventListener('click', addImageToContainer);
  memeinsertvalue.addEventListener('change',addImageToContainer);

    function addImageToContainer(event){
			const caixaImagem = document.querySelector('#meme-image-container');
			const idname = event.target.id;
			const imgage = document.getElementById("meme-image");
			let imageElement = document.querySelector('.classNemeImage');
			if (!imageElement){
				let img;
				let imgpath;
				console.log('existe PAS');
				img = document.createElement("img");
				img.id = "meme-image"
				img.className = "classNemeImage"
				img.src = '/imgs/meme1.jpeg';
				caixaImagem.appendChild(img);
			}
			imgpath = memeinsertvalue.files[0].name;
			imgage.src = imgpath;
			}



  //   if (!img){
	// 		//alert('dentro de if !img');
  //   img = document.createElement("img");
  //   img.id = "meme-image"
  //   img.className = "classNemeImage"
  //     }
  //   imgpath = memeinsertvalue.files[0].name;
  //   console.log(imgpath);
  //   img.src = imgpath;
  //   caixaImagem.appendChild(img);
  // }
}
//button 1 change border style
const button1event = document.querySelector('#button1');
button1event.addEventListener('click',button1changestyle);
	function button1changestyle (){
		document.getElementById("meme-image-container").style.borderColor = "red";
		document.getElementById("meme-image-container").style.borderStyle = "dashed";
		document.getElementById("meme-image-container").style.borderWidth = '3px';
	}
//button 2 change border style
const button2event = document.querySelector('#button2');
button2event.addEventListener('click',button2changestyle);
	function button2changestyle (){
		document.getElementById("meme-image-container").style.borderColor = "blue";
		document.getElementById("meme-image-container").style.borderStyle = "double";
		document.getElementById("meme-image-container").style.borderWidth = '5px';
	}
	//button 3 change border style
const button3event = document.querySelector('#button3');
button3event.addEventListener('click',button3changestyle);
	function button3changestyle (){
		document.getElementById("meme-image-container").style.borderColor = "green";
		document.getElementById("meme-image-container").style.borderStyle = "groove";
		document.getElementById("meme-image-container").style.borderWidth = '6px';
	}
	//function to display inside image the clicked meme pic
	document.body.addEventListener('click', function (event) {
		const caixaImagem = document.querySelector('#meme-image-container');
		const idname = event.target.id;
		let imageElement = document.querySelector('.classNemeImage');
		if (!imageElement){
			console.log('existe PAS');
			img = document.createElement("img");
			img.id = "meme-image"
			img.className = "classNemeImage"
			caixaImagem.appendChild(img);
		}
		for (i = 1; i < 5; i += 1){
			const imgage = document.getElementById("meme-image");
			if (idname.includes('meme-' + i)) {
				imgage.src = '/imgs/meme' + i + '.jpeg';
			}
		}	
		})


		