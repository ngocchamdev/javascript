var flag=true; //de chon nhan x o;
var count =0;
function mark(index){
    var button =document.getElementsByTagName("button")[index];
    button.innerText=flag?"X":"O";
    button.style.backgroundColor=flag?"aqua":"yellow";
    button.setAttribute("disabled","true");
    flag=!flag;
    if(count==8){
        alert("Hết Game Rồi")
        location.reload();
    }else{
    count ++;
    }
}

//kiểm soát kết thúc game 

