console.log('js is here....')

const headline = document.getElementById("da-headline");
// headline.innerHTML = "testing"
const addButton = document.getElementById("da-button");
// const listItems = document.getElementById("da-list").getElementsByTagName("li");
// const listItems = document.querySelectorAll("#da-list li");
const ourList = document.querySelector("#da-list");
let counter = 0
// console.log(listItems)

const activateItem = function(e){
  if (e.target.nodeName == 'LI'){
    // console.log('clicked')
    headline.innerHTML = e.target.innerHTML;
    for (let i = 0; i < e.target.parentNode.children.length; i++){
      // listItems[i].innerHTML = "Hello World"
      e.target.parentNode.children[i].classList.remove("active");
    }
    e.target.classList.add("active");
  }
}
ourList.addEventListener("click", activateItem)
// // refactoring for new items
// for (let i = 0; i < listItems.length; i++){
//   // listItems[i].innerHTML = "Hello World"
//   listItems[i].addEventListener("click", activateItem)
// }

addItemToList = function(){
  // console.log("clicked")
  ourList.innerHTML += `<li>something new @ ${counter}</li>`
  counter++
}
addButton.addEventListener("click", addItemToList)
