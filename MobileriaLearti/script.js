/* ALERT - perdoret si njoftim ne kuader te faqes */
//window.alert("Mobileria Learti ofron zbritje nga data 13 - 20 Qershor!")

//Inicializimi i konstanteve per buttona te filterit dhe fotografi te kategorive

const butoni = document.querySelectorAll(".button");
const image = document.querySelectorAll(".image");


//Kushtezimi i cili grumbullon te gjitha fotografite e kategorive permes klases image dhe i dallon apo i filtron ne baze te klases femije, nese prindi klase eshte image atehere femiu i prindit eshte kuzhina dmth mirret apo zgjedhet image ne crast e ka fotografine e vete te kuzhines, tash kushti jon eshte qe kudo qe ka klase te thirrur image kuzhina te shfaqet vetem ajo ndersa tjerat jo.

//kushtezimi per filtrimin dhe kategorizimin e fotografive

for (i = 0; i < butoni.length; i++) //Nese jane 4 butona ne faqe sic eshte rasti butoni te gjitha, kuzhina, dhomagjumi, komodina... i grumbullon qe te gjitha i = 0, ska ose nuk gjen butona, krahasimi per me gjate butona  i<butoni.length dhe ne fund i++ per ti marr(grumbullu) te gjithe butonat ekzistues.
{
    butoni[i].addEventListener("click", (e) => {
        e.preventDefault();

        const filter = e.target.dataset.filter;
        image.forEach((image) => {
            if (filter === "tegjitha") {
                image.style.display = "block";
            } else {
                if (image.classList.contains(filter)) {
                    image.style.display = "block";
                } else {
                    image.style.display = "none";
                }
            }
        })
    })
}


//Ndryshimi i fotografive tek sektori rreth nesh
function mousimbi() {
    document.getElementById("first-photo").style.display = "none";
}

function mousijasht() {
    document.getElementById("second-photo").style.display = "block"
}


//shfaqja e permbajtjes tek sektori i informatave
function shfaqpunimet() {
    document.getElementById("shfaq").style.display = "block";
    document.getElementById("butoni").style.display = "none";
}

//ndryshimi i titullit tek sektori i heroit
function ndryshotitullin() {
    document.getElementById("titulli-i-ri").innerHTML = "Modelet e fundit i gjeni tek ne!";
}

//funksioni per te ekzekutuar animacionin e kartave pra rrotullisjen e tyre
const cards = document.querySelectorAll(".card")

function flipCard() {
    this.classList.toggle("flip");
}

cards.forEach((card) => card.addEventListener("click", flipCard));

//llogaritja e cmimit per meter
const metri = document.getElementById("input1");
const cmimimeter = document.getElementById("input2");

function ndryshoinput2() {
    cmimimeter.value = metri.value * 300;
}

metri.addEventListener("input", ndryshoinput2);


//validimi apo kushtezimi i fushave kontaktuese
const emriInput = document.getElementById("emriInput");
const emailInput = document.getElementById("emailInput");
const pershkrimiInput = document.getElementById("pershkrimiInput");
const sendButton = document.getElementById("send-button");

function dergo() { //operatori OSE || operatori DHE &&
    if (emriInput.value === "" || emailInput.value === "" || pershkrimiInput.value === "") {
        window.alert("Ju lutem mbushini fushat kontaktuese me te dhenat e kerkuara");
    } else {
        sendButton.value = "Duke u procesuar...";
    }
}
sendButton.addEventListener("click", dergo);

//Vendosja e ores ne fund te nav
// thirrja e funksionit te shfaqjes se ores ne cdo sekonde
setInterval(showTime, 1000);
 
// percaktimi apo definimi i shfaqjes se ores
function showTime() {
    // marrja e ores
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
 
    // vendosja e ores per formatin 24 ore
    if (hour >= 24) {
        if (hour > 24) hour -= 24;
        am_pm = "PM";
    } else if (hour == 0) {
        hr = 24;
        am_pm = "AM";
    }
 
    hour =
        hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
 
    let currentTime =
        hour +
        ":" +
        min +
        ":" +
        sec +
        am_pm;
 
    //kjo bene shfaqjen e ores
    document.getElementById(
        "clock"
    ).innerHTML = currentTime;
}
 
showTime();