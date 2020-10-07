console.log('%c HI', 'color: firebrick')

fetch("https://dog.ceo/api/breeds/image/random/4")
.then(function(res){
    return res.json()
})
.then(function(json){
   for(const image of json.message) {
    //    console.log(image);
       const dogContainer = document.querySelector('#dog-image-container');
       const img = document.createElement('img');
       const div = document.createElement('div');
       img.src = image
       div.append(img);
       dogContainer.append(div);
    //    console.log(div);
   }
});

fetch('https://dog.ceo/api/breeds/list/all')
.then(function(res){
    return res.json()
})
.then(function(json){
    // console.log(json)
    // for(const breed of json.message) {
    //     // const ul = document.querySelector('#dog-breeds');
    //     // const li = document.createElement('li');
    //     console.log(breed)
    // }
    const keys = Object.keys(json.message)
    keys.forEach(function(breed) {
        const li = document.createElement('li');
        const ul = document.querySelector('#dog-breeds');
        li.innerHTML = (breed);
        li.className = 'breed-item';
        ul.append(li);
        li.addEventListener('click', function(e) {
            li.style = "color: green"
        
        // const sorter = document.querySelector('#breed-dropdown')
        // sorter.addEventListener('click', function(e) {
        //     // const letter = e.target.value
        //     //     if (letter == a)
        //     console.log(e.target.value)
        // })
        })
    })
        const sorter = document.querySelector('#breed-dropdown')
        const lis = document.getElementsByClassName('breed-item');
        // console.log(lis[0].innerHTML)
        sorter.addEventListener('click', function(e) {
            // breeds = [];
                for (i = 0; i < lis.length; i++){ 
                    letter = lis[i].innerHTML.charAt(0);
                    checkLetter(letter)
                }
        function checkLetter(letter) {
            if (letter == e.target.value) {
                // breeds[i] = lis[i].innerHTML;
                lis[i].style.display = "block";
            } else {
                lis[i].style.display = "none";
            }
          
        }
        // console.log(breeds)
        })
});



// const lis = document.getElementsByClassName('breed-item');
//     for(const breed of lis) {
//         console.log(breed.innerHTML);
//     }
    // breeds = [];
    // for (i = 0; i < lis.length; i++){
    //     breeds = lis[i]["innerHTML"];
    // }

    // breeds = lis.map(function(value) {
    //     return value.innerHTML;
    // });

//    })
// console.log(lis)
// });
