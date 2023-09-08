let accordion = document.getElementsByClassName("acc");

// console.log(accordion);
let i;

for(i=0;i<accordion.length;i++){
   accordion[i].addEventListener("click",function(){
    console.log(accordion[i]);
    this.classList.toggle('active');

    let panel = this.nextElementSibling;
    console.log(panel);
    
    if(panel.style.display === "block"){
        panel.style.display = "none";
    }else{
        panel.style.display = "block";
    }
    
   })
}
