
const parentDiv = document.getElementById('parentDiv');


const myDiv = document.createElement("div");
document.body.append(myDiv) ;

let myNumber ;

function Grid() {
    let myNumber = prompt("Please enter number of boxes per side (e.g., 10):");
    
    if (myNumber !== null && myNumber !== "") {
        let num = parseInt(myNumber);
        
     
        let size = 500 / num;
        
        draw(num, size);
    }
}



function draw (elm , px){
  parentDiv.innerHTML = '';
for (let i = 0; i < elm*elm; i++) {
  const myDiv = document.createElement("div");

  myDiv.classList.add("red");
  
  myDiv.style.border = "1px solid black";
  myDiv.style.width = px+"px";
  myDiv.style.height = px+"px";

    myDiv.style.margin = "0"
  myDiv.style.padding = "0"

  parentDiv.appendChild(myDiv);

  myDiv.style.boxSizing = "border-box";
   myDiv.addEventListener('mouseenter', function() {
  this.classList.add('active-hover');

});

}

 
}






