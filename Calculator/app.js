let buttons=document.querySelectorAll("button");
let display=document.querySelector("input");

let string="";
for(let button of buttons){
    button.addEventListener("click",()=>{
        currText=button.innerText;

        if(currText=="AC"){
            string="";
            display.value="0";
        }
        else if(currText=="DEL"){
        string=string.slice(0,-1);
        display.value=string || "0";
        }

        else if(currText=="="){
            try{
                display.value=eval(string);
                string=display.value;
            }catch{
                display.value="Error";
                string="";
            }
        }
        else{
            string+=currText;
            display.value=string;
        }

    })
}