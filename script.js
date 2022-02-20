
window.onload=function()
{
setTimeout(()=>{
let p=document.querySelector("#loading");
p.style.display="none";
document.querySelector(".main").style.display="block";},
1500); 
let output=document.querySelector("#Output"); 
let exec=document.querySelector("#cmd_exec"); 
exec.onclick=()=>{ 

  switch(cmd.value)
   {  
   case "1":output.textContent="you selected ip lookup\n";  
    var xhr = new XMLHttpRequest();
        xhr.open('GET','https://ipapi.co/json/',false); 
        xhr.send();
        var res=JSON.parse(xhr.response); 
        output.innerHTML=`You live in a place called <mark>${res["city"]}</mark> which located in <mark>${res['region']},${res["country_name"]}</mark>and you are still using the same network <mark>${res["org"]}</mark> .Oh and i forgot to mention that your ip address is  <mark> ${res["ip"]}</mark>`;
   break;  
   case "2":output.textContent="Black Market not available right now\n";
   break;  
   case "3":output.textContent="you selected store\n";
   break;  
   case "4":output.textContent="you selected fb hack\n";
   break;  
   case "5":output.textContent="you selected specs\n"; 
   
   break; 
   default:output.textContent="you selected something that i don't know\n";
   }
                    
};


}