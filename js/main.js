document.querySelector('#darkcyan').addEventListener('click', darkCyan)
document.querySelector('#beige').addEventListener('click', beige)
document.querySelector('#blue').addEventListener('click', blue)
document.querySelector('#gray').addEventListener('click', gray)
document.querySelector('#mustard').addEventListener('click', mustard)

function darkCyan(){
  document.querySelector('body').style.backgroundColor = '#3d7e84'
  document.querySelector('body').style. color = 'white'
}

function beige(){
  document.querySelector('body').style.backgroundColor = '#d3d2b7'
  document.querySelector('body').style. color = 'black'
}

function blue(){
  document.querySelector('body').style.backgroundColor = '#8b9ce4'
  document.querySelector('body').style. color = 'white'
}

function gray(){
  document.querySelector('body').style.backgroundColor = 'lightgray'
  document.querySelector('body').style. color = 'black'
}

function mustard(){
  document.querySelector('body').style.backgroundColor = '#f4d559'
  document.querySelector('body').style. color = 'black'
}
