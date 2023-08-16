function sagKutu(bilgi,durum){
    $.notify(bilgi, {
        position: "right-bott",
        className: durum
    });
    

}


      



window.addEventListener('load', function () {
    if (!window.Notification) return;
});

const sendNotification = (permission) => {

    let Notification_ = new Notification('yeni bildirim', {
        body: 'Hoşgeldiniz',
        icon: 'LinkBicimlendirmesi.png'
    })
    console.log(Notification_)

}



var mailTb = document.querySelector('#mailTb');
var sifreTb = document.querySelector('#sifreTb');
document.querySelector('#button').addEventListener('click', button);
var mesajElement = document.querySelector('#mesaj')
var place = document.querySelector('#PlaceHolder')

function button() {
    if (mailTb.value === 'admin@erkut.com' && sifreTb.value === '123') {
        // console.log('Doğru Giriş');
        // mesaj('Doğru Giriş Yaptınız👍');
        sagKutu('Doğuru Giriş Yaptınız👍','success')
    } else {
        console.log('Yanlış bilgiler');
        // mesaj('Lütfen bilgilerinizi kontrol ediniz❗');
        sagKutu('Lütfen bilgilerinizi kontrol ediniz❗','error');
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((json) => {
                const adlar = json.map(user => user.username); // Sadece "ad" kısmını al
                console.log(adlar);
            })

    }
}


function mesaj(mesaj_) {
    mesajElement.textContent = mesaj_; // Değişken adı güncellendi
}