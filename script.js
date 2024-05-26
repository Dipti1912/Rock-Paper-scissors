let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".icon")
const msg=document.querySelector("#msg")
const use_scor=document.querySelector("#user_score")
const comp_scor=document.querySelector("#comp_score")


const gen_choice=()=>{
    const options=["rock","paper","scissor"];
    const num=Math.floor(Math.random()*3);
    return options[num];
}
const draw=()=>{
    console.log("game is drawn");
    msg.innerText="Game Drawn";
    msg.style.backgroundColor="blue"
}
const showWinner=(userwin,userchoice,comp_choice)=>{
 if(userwin){
    userscore++;
    use_scor.innerText=userscore;
    console.log("You Win");
    msg.innerText=`You Win!! your ${userchoice} beats ${comp_choice}`;
    msg.style.backgroundColor="Green"
 }
 else{
    console.log("You Lose");
    compscore++;
    comp_scor.innerText=compscore;
    msg.innerText=`You Lose ${comp_choice} beats your ${userchoice}`;
    msg.style.backgroundColor="Red"
 }
}
const playgame=(userchoice)=>{
   console.log("user  has clicked ",userchoice);
   //genarate computer choice
   const comp_choice=gen_choice();
   console.log("comp  has clicked ",comp_choice);

   if(userchoice===comp_choice){
    //draw condition
    draw();
   }
   else{
    let userwin=true;
    if(userchoice==="rock"){
        //comp has two choice paper or scissor if paper then comp win and if scissor then user win
        /*if(comp_choice==="paper")
        {
            userwin=false;
        }
        userwin=true;*/
        userwin=comp_choice==="paper" ?false:true;
    }
    else if(userchoice==="paper"){
        //comp has two choice rock or scissor if paper then comp win and if scissor then user win
        /*if(comp_choice==="scissor")
        {
            userwin=false;
        }
        userwin=true;*/
        userwin=comp_choice==="scissor" ? false:true;
    }
    else {
        //comp has two choice paper or scissor if paper then comp win and if scissor then user win
       /* if(comp_choice==="rock")
        {
            userwin=false;
        }
        userwin=true;*/
        userwin=comp_choice==="rock" ? false:true;
    }
    showWinner(userwin,userchoice,comp_choice);
    }
};
choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
 });