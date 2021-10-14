document.querySelector('#LTC').addEventListener('click', flipCoin);
document.querySelector('#BTC').addEventListener('click', flipCoin);

function flipCoin(event) {
  let userChoice = event.target.id; 
  fetch(`api?playerGuess=${userChoice}`)
  .then(response => response.json())
  .then((data) => {
    //if bug appears console.log(data)
    document.querySelector('#coin').innerHTML = data.flipImg
    document.querySelector('#choice').innerText = '';
    document.querySelector('#outcome').innerText = '';
    document.querySelector('#result').innerText = '';
    setTimeout(() => results(), 1500)

    function results() {
      document.querySelector('#choice').innerText = `You selected ${userChoice}`;
      document.querySelector('#outcome').innerText = `The coin landed on ${data.flipResult}`;
      document.querySelector('#result').innerText = `${data.flipResult} To the Moon!`;
    };
  });
};










// const tailsScore = 0
// const headsScore = 0
// const result = ''
// document.querySelector("button").addEventListener('click', flipCoin)

// function flipCoin() {
//   const randomChoice = Math.floor(Math.random() * 2)

//   if(randomChoice < 1 ) {
//     tailsScore +=1
//     document.querySelector('img').src = ''
//     result = "tails"
//   }else {
//     headsScore +=1
//     document.querySelector('img').src
//     result = "head"
//   }
// }