console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let breedList = []

document.addEventListener("DOMContentLoaded", function(e) {
    fetch(imgUrl)
    .then(function(res){
        return res.json()
    })
    .then(function(json){
        for(const post of json.message){
            addDogImage(post)
        }
    })
    function addDogImage(imgUrl){
        const img = document.createElement('img')
        const div = document.querySelector('#dog-image-container')
        img.src = imgUrl
        div.append(img)
    }
    
    fetch(breedUrl)
    .then(function(res){
        return res.json()
    })
    .then(function(json){
        breedList = Object.keys(json.message)
        Object.keys(json.message).forEach(function (key) { 
            var value = json[key]
            addDogBreed(key)
        })
    })

    function addDogBreed(breed){
        console.log(breed)
        const arr = []
        const li = document.createElement('li')
        const ul = document.querySelector('#dog-breeds')
        li.innerText = breed
        li.addEventListener('click', function(){
            li.style.color = getRandomColor()
            li.style.backgroundColor = getRandomColor()
        })
        arr.push(li)
        ul.append(li)
    }
    
    const breedSelect = document.querySelector('#breed-dropdown')
    breedSelect.addEventListener('change', function(e){
        console.log(breedList.filter(breed => breed.startsWith(e.target.value)))  
        let ul = document.querySelector('#dog-breeds')
        removeChildren(ul)  
        for (i=0; i < breedList.filter(breed => breed.startsWith(e.target.value)).length; i++){
            console.log(breedList.filter(breed => breed.startsWith(e.target.value))[i])
            addDogBreed(breedList.filter(breed => breed.startsWith(e.target.value))[i])
        }
    })
    function removeChildren(e){
        let child = e.lastElementChild
        while (child){
            e.removeChild(child)
            child = e.lastElementChild

        }
    }
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }  
})