let number = document.getElementById("input")
let btn = document.getElementById("btn")
let right_number = 6    // Cho ket qua xo so la 6
let turn = 3
btn.addEventListener("click", () => {
    if (number.value < 0 || number.value > 10) {
        alert("Số đã nhập không thỏa yêu cầu. Mời bạn nhập lại")
    }
    if (number.value == 6) {
        alert("Xin chúc mừng, bạn đã đoán đúng!")
    }
    else {
        turn -= 1
        if (turn <= 0) {
            alert("Rất tiếc. Bạn đã hết 3 lượt thử. Chúc bạn may mắn lần sau!")
        }
        else {
            alert("Rất tiếc. Bạn còn " + turn + "/3 lượt thử")
        }
    }


}) // leduchuy