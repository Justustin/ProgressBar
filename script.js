const numbers = document.querySelectorAll('.numbers')
var count = 1;

$("#next").click(function(){
  count++
  if(count > 3){
    count = 4
  }
  update()
  
})
$("#prev").click(function(){
  count--
  if(count < 1){
    count = 1
  }
  update()
})

function update(){
  numbers.forEach((number , idx) => {
    if(idx < count){
      number.classList.add('active')
    }else{
      number.classList.remove('active')
  }})
  const actives = document.querySelectorAll('.active')
  progress.style.width = (actives.length - 1)/ (numbers.length - 1) *100 + '%'
  if(count === 1){
    prev.disabled = true
  }else if(count === numbers.length){
    next.disabled = true
  }else{
    prev.disabled = false
    next.disabled = false
  }
}

