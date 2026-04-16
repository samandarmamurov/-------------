// 1- masala                 sonning juft yoki toq son ekanligini aniqlovchi dastur yozing
// let son = prompt("sonni kiriting");
// son = Number(son);

// if(son % 2 ===0) {
//     console.log("juft son");
// } else{
//     console.log("toq son");
// }

// ==================================================================================================================

//2     foydalanuvchidan 3-xonalik son oling ular ichida eng kattasi qaysi honada ekanligi aniqlovchi dastur yozing va consolega chiqaring
// let son1 = prompt("3 xonali son kiriting");
// son1 = Number(son1);

// let yuzlik = Math.floor(son1 / 100);
// let onlik = Math.floor((son1 % 100) /10);
// let birlik = son1  %10;

// if (yuzlik >= onlik && yuzlik >= birlik) {
//     console.log("eng katta raqam yuzlikda");
// } else if (onlik >= yuzlik && onlik >= birlik) {
//     console.log("eng katta raqam onlikda");
// } else {
//     console.log("eng katta raqam birlikda");
// };

// ====================================================================================================================
// 3        sonning ishorasini aniqlovchi dastur yozing bunda console.log musbat manfiy yoki nol degan stringlar qaytarsin
let son2 = prompt("son kiriting");
son2 = Number(son2);

if(son2 > 0){
console.log("musbat");

} else if (son2 < 0){
    console.log("manfiy");
    
} else{
    console.log("nol");
    
}
