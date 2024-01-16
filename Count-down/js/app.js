const endDate="29 Dec 2024 01:59 AM"
document.getElementById("end-date").innerText = endDate
const input=document.querySelectorAll("input")

function clock() {
    const end =new Date(endDate)
    const now =new Date()
    const diff = Math.abs(end-now)/1000;
   if (diff<0) return;
   //covert into day
   input[0].value = Math.floor(diff/3600/24);
   // convert into hr
   input[1].value = Math.floor(diff/3600)%24;
    // convert into Minute   
   input[2].value = Math.floor(diff/60)%60;
   //convert into Second
   input[3].value = Math.floor(diff)%60;
   
}


setInterval(
    ()=>{
        clock()
    },
    1000
)


/*
* 1 day =24 hrs
* 1 hrs =60min
* 60 min = 3600 sec
*/