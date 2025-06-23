let randomNumber=parseInt((Math.random()*100)+1);
const submit=document.querySelector('#subt');
const guessField=document.querySelector('#guessField');
const guesses=document.querySelector('.guesses');
const lastResult=document.querySelector('.lastResult');
const lowOrHi=document.querySelector('.lowOrHi');
const resultParas=document.querySelector('.resultParas');
const p=document.createElement('p');
let prevGuess=[];
let numGame=1;
let playGame=true;

if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault()

       const guess= parseInt(guessField.value)

       
       validateGuess(guess)


    });
};
function validateGuess(guess){
    if(guess===''||   isNaN(guess)){
        alert('Please Enter a valid number!')
        

    }else if(guess<=0 ){
        alert('Please enter number more than 1!')
    }
    else if(guess>100){
        alert('please enter number less than 100 !')
    }
    else{
        prevGuess.push(guess)
        if(numGame===11){
            displayGuess(guess)
            displayMsg(`game over ,Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }


};
//
function checkGuess(guess){
    if(guess===randomNumber){
        displayMsg('You guessed it right')
        endGame()
    }
    else if(guess < randomNumber){
        displayMsg('Mumber is too low');
    }
    else if(guess > randomNumber){
        displayMsg('Mumber is too high');
    }

};
//
function displayGuess(guess){
    guessField.value='';
    guesses.innerHTML+=`${guess} `;
    numGame++;
    lastResult.innerHTML=`${10-numGame}`


};
function displayMsg(mag){
    lowOrHi.innerHTML=`<h3>${mag}</h3>`

};
//
function newGame(){
    const newGame1=document.querySelector('#newgame');
    newGame1.addEventListener('click',(e)=>{
        console.log(e)
        randomNumber=parseInt((Math.random()*100)+1);
         numGame=1
         
        prevGuess=[]
        guesses.innerHTML=''
        lastResult.innerHTML=`${10-numGame}`
        guessField.removeAttribute('disabled')
        resultParas.removeChild(p)

        playGame=true;
    

})

}
function endGame(){

    guessField.value=''
    guessField.setAttribute("disabled",'')
    p.classList.add('button');
    p.innerHTML=`<h2 id='newgame'>Start new Game</h2>`;
    lowOrHi.appendChild(p)
    playGame=false;
    newGame()
    

    



};

