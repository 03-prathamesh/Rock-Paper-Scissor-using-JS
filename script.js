let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".imag");
const get=document.querySelector(".msg-container");
const msg=document.querySelector(".cp");
let disp=document.querySelector(".display");
let p1=document.querySelector("#one");
let p2=document.querySelector("#two");
let comp=document.querySelector("#Comp-Score");
let user=document.querySelector("#user-score");

let count1=0;
let count2=0;


const generateCompChoice=()=>{
       const options=["rock","paper","scissor"];
       const randInd=Math.floor(Math.random()*3);
       return options[randInd];     //now return the computers choice
}
const playGame=(userChoice)=>{
    // alert("This is the users choice:"+userChoice);
    //generate the computers choice
   const compt_choice=generateCompChoice();
//    console.log(compt_choice); / 
//    alert(compt_choice);
}

const drawGame=(u,c)=>{
    // alert("Game is Draw");
    msg.innerText="Game is Draw! Play Again";
    msg.style.backgroundColor="Blue";
    p1.innerText=`Your Choice wass: ${u}`;
    p2.innerText=`Computers Choice Was: ${c}`;
    disp.classList.remove("hide");
}

const showWinner=(w,u,c)=>{
   if(w){
    //   alert("you Won!");
    msg.innerHTML="You Won!";
    msg.style.backgroundColor="green";
    p1.innerText=`your choice was: ${u}`;
    p2.innerText=`Computers Choice Was: ${c}`;
    disp.classList.remove("hide");
    count1++;
    user.innerHTML=count1;

   }
   else{
    // alert("You Lost");
    msg.innerHTML="You Lost!";
    msg.style.backgroundColor="red";
    p1.innerText=`Your Choice was: ${u}`;
    p2.innerText=`Computers Choice Was: ${c}`;
    disp.classList.remove("hide");
    count2++;
    comp.innerHTML=count2;
   }
}

choices.forEach((choice)=>{
      choice.addEventListener("click",()=>{
        //  alert("Choice was clicked!");
        // console.log("Clicked");
        const userChoice=choice.getAttribute("id");
        const c_choice=generateCompChoice();

        playGame(userChoice);
        console.log("user:"+userChoice);
        console.log("compt:"+c_choice);
       
        if(userChoice===c_choice){
            //draw game
            drawGame(userChoice,c_choice);
        }
        else{
            let userWin=true;
            if(userChoice==="paper"){
                if(c_choice==="scissor"){
                    userWin=false;
                }
                else{
                    userWin=true;
                }
            }
            else if(userChoice==="rock"){
                if(c_choice==="paper"){
                    userWin=false;
                }
                else{
                    userWin=true;
                }
                
            }
            else if(userChoice==="scissor"){
                if(c_choice==="rock"){
                    userWin=false;
                }
                else{
                    userWin=true;

                }
            }
            showWinner(userWin,userChoice,c_choice);
        }

      })
})


get.addEventListener("click",()=>{
    
})