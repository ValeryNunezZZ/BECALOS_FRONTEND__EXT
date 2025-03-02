const checkListItems = document.querySelectorAll(".check_list_item");
const bars = document.querySelectorAll(".bar"); 
let checked = 0;

checkListItems[0].addEventListener("click",()=>{
    
    if(checkListItems[0].checked || checkListItems[1].checked || checkListItems[2].checked || checkListItems[3].checked){
        checked++;
        
    }else{
        checked--;
    }

    if(checked == 1){
        bars[0].style.backgroundColor = "white";
        bars[1].style.backgroundColor = "transparent";
        bars[2].style.backgroundColor = "transparent";
        bars[3].style.backgroundColor = "transparent";
    }else if(checked == 2){
        bars[0].style.backgroundColor = "white";
        bars[1].style.backgroundColor = "white";
        bars[2].style.backgroundColor = "transparent";
        bars[3].style.backgroundColor = "transparent";
    }else if(checked == 3){
        bars[0].style.backgroundColor = "white";
        bars[1].style.backgroundColor = "white";
        bars[2].style.backgroundColor = "white";
        bars[3].style.backgroundColor = "transparent";
    }else if(checked == 4){
        bars[0].style.backgroundColor = "white";
        bars[1].style.backgroundColor = "white";
        bars[2].style.backgroundColor = "white";
        bars[3].style.backgroundColor = "white";
    }
    }
);
