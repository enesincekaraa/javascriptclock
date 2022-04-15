
//İsim Alma
let isim = prompt ("Lütfen İsminizi Giriniz:")


let info = document.querySelector('#myName')

info.innerHTML=`${isim} ` 

//Saat Ama

let zaman ;
tarih =()=>{
          date = new Date()
          date.toDateString();
 
         zaman  = document.querySelector('#myClock')

         zaman.innerHTML=`${date}`

}

onload = tarih;