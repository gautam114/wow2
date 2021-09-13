var count=0;
function theme(){
    let btn=document.getElementById('chng_btn');
    let stars=document.querySelectorAll('.star');
   let header= document.querySelector('header');
   let body=document.querySelector('body');
 //  let a=document.querySelectorAll('a');
    if(count==0){
        for(let i of stars){
            i.style.color='white';
        }
body.style.background='black';
        header.style.background='black';
        btn.style.background='white';
count=1;


    }

    else if(count==1){
        for(let i of stars){
            i.style.color='black';
        }
        body.style.background='white';
        
        header.style.background='rgba(149, 123, 149,0.5)';
        btn.style.background='black'
count=0;
    }
}


window.onscroll=function(){scroling_nav();}
function scroling_nav(){
    
    let navbar=document.querySelector('.navbar');
    if(document.documentElement.scrollTop>20 || document.body.scrollTop>20){
        navbar.style.background='rgb(149, 123, 149)';
    }else{
        navbar.style.background='transparent';
    }
}



function owl_hover(){
    let ho=document.querySelectorAll('.ho');
    let icons=['circle-fill','circle-half','star-half'];
    for(let i of ho){
    var count='a';
for(let j in icons){
    count+=1;
let span=document.createElement('span');
span.className=`bi bi-${icons[j]} ${count}`;


i.appendChild(span);
}
    }
}


function featured(){
    let bg=['danger','primary','secondary','info'];
    let no=['2000','1000','500','250'];
    let text=['downloads','likes','awards','ratings'];
    for(let i in bg){
        let col=document.createElement('div');
        let card=document.createElement('div');
        col.className='col-6';
        card.className=`card p-2 bg-${bg[i]} text-center text-white`;
        card.innerHTML=`
        <div class='card-body  '>
        <p>${no[i]}</p>
        </div>
        <div class='card-footer'>
       <p> ${text[i]}</p>
        </div>
        `;
        col.appendChild(card);
        document.getElementById('ro').appendChild(col);
    }
}


function Work(){
    let store=['google play store','microsoft store','apple store'];
    let para=['Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis praesentium bl'];
    for(let i in store){
        let icon=['google','app','window'];
        let col=document.createElement('div');
        let card=document.createElement('div');
        col.className='col-4';
        card.className='card p-0 bg-dark text-white text-center';
        card.innerHTML=`
        <div class='card-header'>
        <span class='bi bi-${icon[i]}'></span><br>
        <p>${store[i]}</p>
        </div>
        <div class='card-body'>
        <p>${para}</p>
        </div>
        <div class='card-footer'>
        <button class='btn btn-outline-danger text-white'>Download</button>
        </div>
        `;
        col.appendChild(card);
        document.getElementById('work_ro').appendChild(col);
    }
}

function load(){
   owl_hover();
   featured();
   Work();
}