const ur="https://randomuser.me/api/";
let age = document.querySelector('[data-attr="age"]');
let email = document.querySelector('[data-attr="email"]');
let phone = document.querySelector('[data-attr="phone"]');
const li=document.getElementById("li");
const img=document.getElementById("img");
let ad1=document.getElementById("ad1");
let ad2=document.getElementById("ad2");
let ad3=document.getElementById("ad3");



async function myFunction(){
    const dt=await fetch(ur);
   const data=await dt.json();
   const r=data.results;
   //console.log(r);
   ad1.textContent="";
   ad2.textContent="";
   ad3.textContent="";
    r.map((item)=>{
        const o=item.name.first+" " +item.name.last;
        const p=item.picture.large;
        img.src=p;
        li.textContent=`The name is ${o}`;

        age.addEventListener("click",()=>{ 
            ad1.textContent="";
            ad2.textContent="";
            ad3.textContent="";
            ad1.textContent=`The Age of  ${o} is ${item.dob.age}.`;
        })
        email.addEventListener("click",()=>{
            ad1.textContent="";
            ad2.textContent="";
            ad3.textContent="";
            ad2.textContent=`The Email of  ${o} is ${item.email}.`;
        });
        phone.addEventListener("click",()=>{
            ad1.textContent="";
            ad2.textContent="";
            ad3.textContent="";
            ad3.textContent=`The Phone Number of  ${o} is ${item.phone}.`;
        });
    })
}









