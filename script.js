let Question = function (content, anwser, correctAnswer, money) {
    this.content = content;
    this.answer = anwser;
    this.money = money;
    this.correctAnswer = correctAnswer;
    this.checkAnswer = function (cautraloi) {
        return cautraloi == correctAnswer;
    }
}
let op1 = new Question("Cau 1 : Ai là nguời đep trai nhất?", ["Phan Văn Công", "Phan Văn Tường An", "Phan Tường Lâm", "Vũ Thị Hà"], "Phan Văn Công", "bạn đã dànnh đuựoc phầnn thưởng 10000usd.");
let op2 = new Question("Cau 2 : Ai là nguời lập trinh giỏi nhất?", ["Phan Văn Công", "Phan Văn Tường An", "Phan Tường Lâm", "Vũ Thị Hà"], "Vũ Thị Hà", "ban da danh duoc phan thuong 20000usd.");
let op3 = new Question("Cau 3 :Ten cua ido gioi tre", ["to", "zang", "maria", "aoki"], "zang", "ban da danh duoc phan thuong 50000usd.");
let op4 = new Question("Cau 4 :Ten cua nguoi tre nhat", ["Phan Văn Công", "Phan Văn Tường An", "Phan Tường Lâm", "Vũ Thị Hà"], "Phan Văn Tường An", "ban da tro thanh trieu phu.");
let Cauhoi = [op1, op2, op3, op4];
let getQestId = document.getElementById('question');
showQuestion(op1);
let index = 1;

function next(index) {
    ++index;
    showQuestion(Cauhoi[index]);
}

function showQuestion(question) {
    getQestId.innerHTML = question.content;
    getQestId.setAttribute("idQuestion", Cauhoi.indexOf(question));
    for (let i = 0; i < 4; i++) {
        let getaswId = document.getElementById('asw' + (i + 1));
        getaswId.innerHTML = question.answer[i];
    }
}

function chooseAswer(id) {
    if (!confirm("Day co phai dap an cuoi cung cua ban khong")) {
        return;
    }
    let cautraloi = document.getElementById(id).innerHTML;
    let getQestId1 = document.getElementById('question');
    let idQuestion = parseInt(getQestId1.getAttribute("idQuestion"));
    if (Cauhoi[idQuestion].checkAnswer(cautraloi)) {
        alert('cau tra loi dung');
        alert(Cauhoi[idQuestion].money);
        next(idQuestion);
    } else {
        alert('cau tra loi sai, moi ban quay lai cau 1');
        window.location.reload();
    }
}