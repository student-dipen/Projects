const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

let selects = document.querySelectorAll(".country-code select");
let btn=document.querySelector("#btn");
let fromCurr=document.querySelector(".from select");
let toCurr=document.querySelector(".to select");
let msg=document.querySelector("#amtVal");


for (let select of selects) {
  //directly gives value
  for (key in countryList) {
    //to travesre in key
    let newOption = document.createElement("option");
    newOption.innerText = key;
    newOption.value = key;

    if(select.name=="from" && key=="USD")
        newOption.selected="selected";
    else if(select.name=="to" && key=="INR")
        newOption.selected="selected";

    select.append(newOption);
  }
  select.addEventListener("change",(evt)=>{
    updateFlag(evt.target);
  })
}


const updateFlag=(element)=>{
    let currCode=element.value;
    let countryCode=countryList[currCode];
    let newSRC=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=element.parentElement.parentElement.querySelector("img");
    img.src=newSRC;
}

const updateExchangeRate=async()=>{
    let amount=document.querySelector(".amount input");
    let amtVal=amount.value;

    if(amtVal=="" || amtVal<1){
        amtVal=1;
        amount.value=1;
    }

    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
  
    let response= await fetch(URL);
    let data=await response.json();
    let rate=data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];

    let finalAmt=rate*amtVal;
    msg.innerText=`${amtVal} ${fromCurr.value}= ${finalAmt} ${toCurr.value}`;

}

btn.addEventListener("click",(evt)=>{
     evt.preventDefault();
     updateExchangeRate()
})

window.addEventListener("load",()=>{
    updateExchangeRate();
})




