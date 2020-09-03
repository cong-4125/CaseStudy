let Question = function (content, anwser, correctAnswer,money) {
    this.content = content;
    this.answer = anwser;
    this.money = money;
    this.correctAnswer = correctAnswer;
    this.checkAnswer = function (cautraloi){
        return cautraloi == correctAnswer;
    }
}
let op1 = new Question("Cau 1 : Ai la nguoi dep trai nhat?", ["pvc", "pta", "ptl", "vth"], "pvc","ban da danh duoc phan thuong 100usd.");
let op2 = new Question("Cau 2 : Ai la nguoi lap trinh gioi nhat?", ["pvc", "pta", "ptl", "vth"], "vth","ban da danh duoc phan thuong 200usd.");
let op3 = new Question("Cau 3 :Ten cua ido gioi tre",["to", "zang", "maria", "aoki"], "zang","ban da danh duoc phan thuong 500usd.");
let op4 = new Question("Cau 4 :Ten cua nguoi tre nhat", ["pvc", "pta", "ptl", "vth"], "pta","ban da tro thanh trieu phu.") ;
let Cauhoi = [op1, op2,op3,op4];
let getQestId = document.getElementById('question');
showQuestion(op1);
let index =1;
function next(index){
    ++index;
    showQuestion(Cauhoi[index]);
}
function showQuestion(question){
    getQestId.innerHTML = question.content;
    getQestId.setAttribute("idQuestion", Cauhoi.indexOf(question));
    for(let i =0; i< 4; i++){
        let getaswId = document.getElementById('asw'+(i+1) );
        getaswId.innerHTML = question.answer[i];
    }
}
function chooseAswer(id) {
    if(!confirm("Day co phai dap an cuoi cung cua ban khong")){
        return ;
    }
    // lay ra cau tra loi
    let cautraloi = document.getElementById(id).innerHTML;
    // alert(cautraloi);
    //lay ra cau hoi
    let getQestId1 = document.getElementById('question');
    let idQuestion = parseInt(getQestId1.getAttribute("idQuestion"));
    // Cauhoi[idQuestion].checkAnswer(cautraloi) ? alert("cau tra loi dung") : alert("sai");
    // window.location.reload();
    if (Cauhoi[idQuestion].checkAnswer(cautraloi) ) {
        alert( 'cau tra loi dung');
        alert(Cauhoi[idQuestion].money);
        next(idQuestion);
    }else {
        alert('cau tra loi sai, moi ban quay lai cau 1');
        window.location.reload();
    }
}