var mailTb = document.querySelector('#mailTb');
var sifreTb = document.querySelector('#sifreTb');
document.querySelector('#button').addEventListener('click', button);
var mesajElement =document.querySelector('#mesaj')

function button() {
    if (mailTb.value === 'admin@erkut.com' && sifreTb.value === '123') {
        console.log('Doğru Giriş');
        mesaj('Doğru Giriş Yaptınız👍')
    } else {
        console.log('Yanlış bilgiler');
        mesaj('lütfen bilgileriniz kontrol ediniz❗')
    }
}

function mesaj(mesaj_){
    mesajElement.textContent = mesaj_; // Değişken adı güncellendi
}