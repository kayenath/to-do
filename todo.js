// let inp=document.querySelector('input');
// let btn=document.querySelector('button');
// let li=document.querySelector('ul');
// btn.addEventListener('click',function(){
//     console.log("clicked");
//     btn.style.color='green';
//     let i=document.createElement('li');
//     i.innerText=inp.value;
//     console.log(`${inp.value} is added`);
//     li.insertAdjacentElement("beforeend",i);
// });

// let del=document.querySelector('li');
// for(d in del){
// del.addEventListeners('click',function(){
//     this.remove();
//     console.log("deleted");
// });};

let inp=document.querySelector('input');
let btn=document.querySelector('.add');


let ul=document.querySelector('ul');
let d=document.getElementById('list');
let h=document.createElement('h3');
   

btn.addEventListener('click',function(){
    this.style.color='green';
    let a=0;
    if(a==0){
      d.classList.add("style");
      h.innerText='Your Saved Task';
      h.style.color='#f7fff7';
       d.prepend(h);
       a=1;
    }
    
 
   
    let li=document.createElement('li');
    let del=document.createElement('button');
    del.id='db';
    li.appendChild(del);
    li.innerText=inp.value;
    console.log(`${inp.value} is Added`);
    li.appendChild(del);
    del.innerText='Completed';
    ul.append(li);
    li.style.color='#f7fff7';

   
});


ul.addEventListener('click',function(event){
  if(event.target.nodeName=='BUTTON'){
    let del=event.target.parentElement;
    del.remove();
    console.log(`${event.target.parentElement.innerText} is Deleted`);
  }
});
