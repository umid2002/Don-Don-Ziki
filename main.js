 const formElement = document.querySelector("#form-element")
 const inputElement = document.querySelector("#input")
 const btnElement = document.querySelector('.btn')
 const selectElement = document.querySelector('#selec')
 const myScoreBallElement = document.createElement("p") // my score
 myScoreBallElement.classList.add("score")
 const kompScoreBallElement = document.createElement("p") // kompyuter score
 kompScoreBallElement.classList.add("score")
 const chooseKompElement = document.createElement("p") // kompyuter choose element
 chooseKompElement.classList.add(".variant-komp")
 const myBallElement = document.querySelector('.my-ball')
 const kompBallElement = document.querySelector('.komp-ball')
 const winnerBoxElement = document.querySelector('.winner-box')
 const winnerElement = document.createElement('span')
 winnerElement.classList.add('winner')
 const kompChooseElement = document.createElement('p')
 kompChooseElement.classList.add('variant-komp')
 const chooseElement = document.querySelector('.choose-komp')
 chooseElement.appendChild(kompChooseElement)
 console.log(selectElement.value);
 kompChooseElement.textContent = 'random'
 

 btnElement.addEventListener("click", event =>{
   event.preventDefault()
   random()
  })
  
  const rowElement = document.querySelector('.row')
  const finalResultElement = document.createElement("h3")
  rowElement.appendChild(finalResultElement)
  rowElement.appendChild(winnerElement)
  finalResultElement.classList.add("final")
  myBallElement.appendChild(myScoreBallElement)
  kompBallElement.appendChild(kompScoreBallElement)
  myScoreBallElement.textContent = 0
  kompScoreBallElement.textContent = 0
  console.log(myScoreBallElement.textContent);
  function random(arr){
    let kompyuter = ['tosh', 'qaychi', 'qogoz']
    let randomNumber = Math.floor(Math.random(kompyuter) * kompyuter.length)
    let choosed = kompyuter[randomNumber]
    console.log(choosed);
    if(selectElement.value == choosed){
      finalResultElement.textContent = 'Durrang'
      kompChooseElement.textContent = choosed
    }
    else if(selectElement.value == 'tosh' && choosed == 'qogoz'){
      kompChooseElement.textContent = choosed
      finalResultElement.textContent = 'Loose'
      kompScoreBallElement.textContent++
    }
    else if(selectElement.value == 'tosh' && choosed == 'qaychi'){
      kompChooseElement.textContent = choosed
      finalResultElement.textContent = 'win'
      myScoreBallElement.textContent++
    }
    else if(selectElement.value == 'qogoz' && choosed == 'tosh'){
      kompChooseElement.textContent = choosed
      finalResultElement.textContent = 'win'
      myScoreBallElement.textContent++
    }
    else if(selectElement.value == 'qogoz' && choosed == 'qaychi'){
      kompChooseElement.textContent = choosed
      finalResultElement.textContent = 'Loose'
      kompScoreBallElement.textContent++
    }
    else if(selectElement.value == 'qaychi' && choosed == 'qogoz'){
      kompChooseElement.textContent = choosed
      finalResultElement.textContent = 'win'
      myScoreBallElement.textContent++
    }
    else if(selectElement.value == 'qaychi' && choosed == 'tosh'){
      kompChooseElement.textContent = choosed
      finalResultElement.textContent = 'Loose'
      kompScoreBallElement.textContent++
    }
    if(myScoreBallElement.textContent == 2){
      winnerElement.classList.add('active')
      btnElement.disabled = true
      winnerElement.textContent = "You Win"
    }else if(kompScoreBallElement.textContent == 2){
      winnerElement.classList.remove('active')
      btnElement.disabled = true
      winnerElement.classList.add('actived')
      winnerElement.textContent = "You Loose"
    }
  }
  random()
