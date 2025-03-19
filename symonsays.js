// let one = document.querySelector('.one')
// let two = document.querySelector('.two')
// let three = document.querySelector('.three')
// let four = document.querySelector('.four')  

// one.addEventListener('click' , (e)=>{

// })
// two.addEventListener('click' , (e)=>{
    
// })
// three.addEventListener('click' , (e)=>{
    
// })
// four.addEventListener('click' , (e)=>{
    
// })

// function startGame() {

// }


let userchoice = [];
let compChoice = [];
let started = false;
let level =0;
let p = document.querySelector('p')

let btns = ["one" , "two" , "three" , "four"];
 document.addEventListener('keyup' , (e)=> {
    if(started == false){
        started = true;

        levelup();
    }
});

function flashbtn(btn){
    btn.classList.add("flash")
    setTimeout(()=>{
        btn.classList.remove("flash")
    }, 300)
}

function levelup(){
userchoice = [];
level++;
p.innerText = `level ${level}`;


let randidx = Math.floor(Math.random() * 4);
let randcolor = btns[randidx];
let color = document.querySelector(`.${randcolor}`);
compChoice.push(randcolor);
flashbtn(color);
}

//yaha tk sab thik hai 
//step one ho gya
function check(idx){
    if(userchoice[idx] === compChoice[idx]){
        if(userchoice.length === compChoice.length){
            setTimeout(levelup,1000)
        }
    }
    else{
        p.innerText = `Opps! Game over.Press any key to restart.`;
        reset();
    }
}

function pressedbtn(){
    let btn = this;
    flashbtn(btn);
    userbtn = btn.getAttribute("id")
    userchoice.push(userbtn);

    check(userchoice.length-1);
}

let allbuttons = document.querySelectorAll('.button')
for (let btn of allbuttons){
    btn.addEventListener('click' , pressedbtn);
}

function reset(){
    started = false;
    compChoice = [];
    userchoice = [];
    level =0;
}

