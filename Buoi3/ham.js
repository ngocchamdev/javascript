function xacNhan(traloi){
    var ketQua="";
    if(traloi){
        ketQua="Tuyệt vời";
    }else{
        ketQua="Hẹn gặp lại"
    }
    return ketQua;
}
    var traLoi=confirm("Bạn sẽ chơi game chứ");
    var thongBao=xacNhan(traLoi);
        alert(thongBao);