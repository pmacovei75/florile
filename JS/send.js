emailjs.init("5dZhF7y-4y5_Dgq8e");
function send() {
    var date={
        nume: document.getElementById("nume").value,
        prenume: document.getElementById("prenume").value,
        email: document.getElementById("email").value,
        tema: document.getElementById("tema").value,
        mesaj: document.getElementById("mesaj").value
    };
    emailjs.send("service_6cl19qs", "template_xr0bvg7", date)
    .then(function (raspuns) {
        alert("Ваше письмо отправлено")
        document.getElementById("formular").reset();
    },
    function (eror) {
        alert("ошибка при отправке")
    })

}