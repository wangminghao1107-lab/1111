const steps=document.querySelectorAll('.step');

let index=0;

setInterval(()=>{

steps.forEach(step=>step.classList.remove('active'));

for(let i=0;i<=index;i++){
steps[i].classList.add('active');
}

index++;

if(index>=steps.length){
index=0;
}

},1200);
