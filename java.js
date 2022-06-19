const images = document.querySelectorAll(".image img")
const prev = document.querySelector(".control_prev")
const next = document.querySelector(".control_next")
const close = document.querySelector(".close")
const gallaryimg = document.querySelector(".gallery_inner img")
const gallery =  document.querySelector(".gallery")

var curenindex = 0
images.forEach((item, index) =>{
      item.addEventListener("click", function(){
               curenindex = index
              gallaryimg.src =images[curenindex].src
              gallery.classList.add("show")
              
      })
})
close.addEventListener("click",function(){
      gallery.classList.remove("show")
})
document.addEventListener("keydown",function(e){
    if (e.keyCode == 27){
        gallery.classList.remove("show")
    }
})
prev.addEventListener("click",function(){
    if(curenindex>0){
        curenindex--
        gallaryimg.src =images[curenindex].src
        gallery.classList.add("show")
    }
    if(curenindex==0){
        prev.classList.add("hide")
    }else{
        prev.classList.add("hide")
    }
})
next.addEventListener("click", function(){
    if(curenindex < images.length-1){
        curenindex++
        gallaryimg.src =images[curenindex].src
        gallery.classList.add("show")
    }
    if(curenindex == images.length-1){
        next.classList.add("hide")
    }else{
        next.classList.remove("hide")
    }
   
})



// var currentIndex = 0;

//   function showGalalery() {
//      // them xoa prev
//      if(currentIndex == 0){
//         prev.classList.add("hide")
//     }else{
//         prev.classList.remove("hide")
//     } 
//     // them xoa nut next
//      if (currentIndex == images.length-1){
//          next.classList.add("hide")
//      }else{
//          next.classList.remove("hide")
//      }

//     // hien thi galary
//     gallaryimg.src = images[currentIndex].src
//     gallery.classList.add("show")
// }

//   function removeShow(){
//     gallery.classList.remove("show")
//   }

// images.forEach((item, index) => {
//       item.addEventListener("click", function(){
//         currentIndex = index
//         showGalalery()
//       })
// });

// close.addEventListener("click", function(){
//     removeShow();
// })
 
// document.addEventListener("keydown", function(e){
//     if(e.keyCode == 27){
//         removeShow();
//     }
// })

// prev.addEventListener("click", function(){
//     if(currentIndex > 0){
//         currentIndex--
//         showGalalery();
//     }
// })

// next.addEventListener("click", function(){
//     if(currentIndex < images.length-1){
//         currentIndex++
//         showGalalery()
//     }
// })


