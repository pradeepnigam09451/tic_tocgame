let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");

let turn0 = true;

const winPatterns = [
         [0,1,2],
         [3,4,5],
         [6,7,8],
         [0,4,8],
         [0,3,6],
         [2,4,6],
         [2,5,8],
         [2,4,6],
];

boxes.forEach((box)=> {
         box.addEventListener("click", ()=>{
                  console.log("box was clicked");
                  if(turn0===true){
                   box.innerHTML = 'prince';
                   turn0 = false;
                  }else{
                           box.innerHTML = 'nigam' ;
                           turn0 = true;
                  }
                  box.disabled = true;

                  checkWinner();
         })
})

// const checkWinner = ()=>{
//          for(let pattern of winpatterns){
//                   console.log(boxes[pattern[0]] , boxes[pattern [1]],boxes[pattern[2]]);
//          }
// }

// const checkWinner = () => {
//          for (let pattern of winPatterns) {
//                   let pos1val =  boxes[pattern[0]].innerHTML;
//                   let pos2val =  boxes[pattern[1]].innerHTML;
//                   let pos3val =  boxes[pattern[2]].innerHTML;

//                   if(pas1val!="" && pas2val !="" && pas3val !=""){
//                            if(pas1val === pas2val && pas2val === pas3val){
//                                     console.log("winner");

//                            }
                                    
//                   }

// }
// };
function showwinner(winner){
         alert("")
}

const checkWinner = () => {
         for (let pattern of winPatterns) {
           let pos1Val = boxes[pattern[0]].innerText;
           let pos2Val = boxes[pattern[1]].innerText;
           let pos3Val = boxes[pattern[2]].innerText;
       
           if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
             if (pos1Val === pos2Val && pos2Val === pos3Val) {
               console.log("winner" , pos1Val);
               showwinner(pos1Val);
               /// pos1val winner ka naam batata hai 
             }
           }
         }
}       

