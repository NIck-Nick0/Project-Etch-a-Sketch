
const parentDiv = document.getElementById('parentDiv');


const myDiv = document.createElement("div");
document.body.append(myDiv) ;

myDiv.textContent = "Red";
myDiv.classList.add("red");
const red = document.querySelector(".red");
myDiv.style.color = "red" ;






for (let i = 0; i < 100; i++) {
  const myDiv = document.createElement("div");

  myDiv.classList.add("red");
  
  // التنسيق
  myDiv.style.border = "1px solid black";
  myDiv.style.width = "48px";
  myDiv.style.height = "48px";

    myDiv.style.margin = "0"
  myDiv.style.padding = "0"

  // الآن يتم إضافة نسخة جديدة في كل مرة
  parentDiv.appendChild(myDiv);





  myDiv.addEventListener('mouseenter', function() {
  this.classList.add('active-hover');
    myDiv.style.opacity += "10"

});
}






