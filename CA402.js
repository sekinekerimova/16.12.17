var a1 = Number(prompt("1ci çadir cəkisi"));
var a2 = Number(prompt("2ci çadir cəkisi"));
var a3 = Number(prompt("3ci çadir cəkisi"));
var b1 = Number(prompt("1ci çadir tutumu"));
var b2 = Number(prompt("2ci çadir tutumu"));
var b3 = Number(prompt("3ci çadir tutumu"));
var k = Number(prompt("Toplam uşaq sayı"));
var w = Number(prompt("Aparıla bilinəcək max çadir çəkisi"));
if (a1 > 0 && a2 > 0 && a3 > 0 && b1 > 0 && b2 > 0 && b3 > 0 && k > 0 && w > 0) {
    if ((a1 + a2 ) <= w && (b1 + b2 ) >= k) {
        console.log("1ve2 aparilsin");
    } 
     else if ((a1+a3)<=w && (b1+b3)>=k){
        console.log("1ve3 aparilsin");
    }
    else if ((a2+a3)<=w && (b2+b3)>=k)
    {console.log("2ve3 aparilsin");
}
    else if ((a1 + a2 + a3) <= w && (b1 + b2 + b3) >= k) {
    console.log("her ucu aparilsin");
}
}
    else {
    console.log("uygun çadir yoxdur");
}
   