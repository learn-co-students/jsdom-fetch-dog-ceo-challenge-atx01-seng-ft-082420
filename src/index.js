console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', function() {
    loadImage();
    loadBreed();
    addAlphabet();
    
    const dropBox = document.querySelector("#breed-dropdown")
    const list = document.getElementsByClassName('breed-item')
    // console.log(list[0].innerHTML)
    dropBox.addEventListener("change", function(e) {
        for (let i = 0; i < list.length; i++) {
            let first = list[i].innerText[0]
            console.log(first)
            // checkLetter(first)
        // }
        // function checkLetter(first) {
            if (first == e.target.value) {
                list[i].style.display = "block"
            } else {
                list[i].style.display = "none"
            }
            //console.log(e.target.value)
            //console.log(list[i])
        }
        
    })
    
})
function loadImage() {
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(function(response){
        return response.json()
    })
    .then(function(json){
        for(let i = 0; i < json.message.length; i++){
        json.message[i]
        addImage(json.message[i])
        }
    })
}
function addImage(imgUrl) {
    let container = document.querySelector('#dog-image-container');
    let img = document.createElement('img');
    img.src = imgUrl;
    container.appendChild(img);
  }
   
function loadBreed() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(function(response){
        return response.json()
    })
    .then(function(json){
        breeds = Object.keys(json.message)
        for(let i = 0; i < breeds.length; i++){
            // object.addEventListener("change", myScript);
            // addBreed(breeds[i][0]) == document.getElementById("breed-dropdown")[i].value
            // breeds[i]
            addBreed(breeds[i])
            // debugger
        }
    })
}
function addBreed(breed){
let container = document.querySelector('#dog-breeds');
let li = document.createElement('li');
li.innerHTML = breed
li.className = 'breed-item'
container.appendChild(li);
li.style.cursor = 'pointer'
li.addEventListener("click", changeColor)
//document.addEventListener("click", changeColor)
//is document the element where the event is likely to take place
//should this eventListener be attached to a more specific element
}
function changeColor(event){
    event.target.style.color = 'blue';
}
function addAlphabet(){
alphabetArray = "efghijklmnopqrstuvwxyz".split("")
for(let i = 0; i < alphabetArray.length; i++){
    let container = document.querySelector('#breed-dropdown');
let option = document.createElement('option');
option.value = alphabetArray[i]
option.innerHTML = alphabetArray[i] 
container.appendChild(option);
    }
}
