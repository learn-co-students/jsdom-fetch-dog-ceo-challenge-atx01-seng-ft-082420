console.log('%c HI', 'color: firebrick');
// const dogContainer = document.querySelector('#dog-image-container');

fetch('https://dog.ceo/api/breeds/image/random/4')
  .then(function(res) {
    return res.json();
  })
  .then(function(json) {
    for (const dog of json.message) {
      //   console.log(dog);
      const dogContainer = document.querySelector('#dog-image-container');
      const div = document.createElement('div');
      const img = document.createElement('img');
      img.setAttribute('src', dog);
      div.append(img);
      //   console.log(div);
      //   console.log(dogContainer);
      dogContainer.append(div);
    }
  });

fetch('https://dog.ceo/api/breeds/list/all')
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    // console.log(data.message);
    const keys = Object.keys(data.message);
    keys.forEach(function(breed) {
      //   console.log(breed);
      const ul = document.querySelector('#dog-breeds');
      const li = document.createElement('li');
      li.innerHTML = breed;
      li.className = 'breed-item';
      ul.append(li);
      li.addEventListener('click', function(e) {
        li.style = 'color: green';
      });
    });
    const sorter = document.querySelector('#breed-dropdown');
    const lis = document.getElementsByClassName('breed-item');
    // console.log(lis[0].innerHTML)
    // sorter.addEventListener('change', function(e) {
    //   for (i = 0; i < lis.length; i++) {
    //     letter = lis[i].innerHTML.charAt(0);
    //     checkLetter(letter);
    //   }
    //   function checkLetter(letter) {
    //     if (letter == e.target.value) {
    //       lis[i].style.display = 'block';
    //     } else {
    //       lis[i].style.display = 'none';
    //     }
    //   }
    // });
    sorter.addEventListener('change', function() {
      console.log(sorter.value);
      for (let li of lis) {
        if (li.innerHTML.charAt(0) != sorter.value) {
          li.style.display = 'none';
        } else {
          li.style.display = 'block';
        }
      }
    });
  });
//   dropDown.addEventListener('change', function() {
//     console.log(dropDown.value)
//     list = document.querySelectorAll('li')
//     for( let li of list){
//         li.style.display = "block"
//         console.log(li.id[0])
//         if(li.id[0] != dropDown.value){
//             li.style.display = "none"
//         }
//     }
//   }
