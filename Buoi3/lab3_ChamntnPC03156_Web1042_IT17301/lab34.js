alert("ChamntnPC03156");
var a=null;
var b=null;
var o=null;
function lam_lai(){
    a=null;
    b=null;
    o=null;
}
function toan_tu(x){
    o=x;
    input_num+=o;
}
function toan_hang(x){
    if(a==null){
        a=x;
    }else{
        b=x;
    }
    console.log(`a=${a} b=${b}`);
}
    function thuc_hien(){
        switch(o){
            case '+':
                 var kP=a+b;
                 alert(a+"+"+b+"="+kP);
                 break;
            case '-':
                var kP=a-b;
                alert(a+"-"+b+"="+kP);
                break;
            case 'x':
                var kP=a*b;
                alert(a+"x"+b+"="+kP);
                break;
            case ':':
                var kP=a/b;
                alert(a+":"+b+"="+kP);
                break;
            default:
                alert(o+"Không phải toán tử");
                break;
        }
        lam_lai();
    }
