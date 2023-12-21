let input = document.getElementById("input");
let spans = document.querySelectorAll("span");
let bar = document.querySelector(".bar")
let random = 0;



spans.forEach((span) => {
  span.addEventListener("click", (e) => {
    let number = e.target.textContent;
    if (number == "✖") {
      input.value = input.value.slice(0, -1);
    } else if (number == "✓") {
      showResult();
    } else {
      input.value += number;
    } 
  });
});

function showResult(){
    if(!input.value) return
    let accuracy = 100 - Math.abs(input.value - random);
    if(accuracy<0) accuracy = 0;
    alert("Your accuracy is " +accuracy+"%\nYou have entered "+input.value+ " and actual value is " +random)
    fillAquarium()
}

function fillAquarium(){
    input.value = null
random = Math.floor(Math.random()*100)
bar.style.height = `${random}%`
// console.log(random)
}

fillAquarium()