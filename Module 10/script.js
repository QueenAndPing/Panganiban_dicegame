var x = 5;
if(x > 1){
    document.writeln("<h1> X is greater than 1 </h1>");
}
var y = 3;
if(y < 15){
    document.writeln("<h1> Y is lesser than 15 </h1>");
}
else{
    document.writeln("<h1> Y is greater than 15 </h1>");
}
var a = 60;
if(a >= 18 && a <= 59){
    document.writeln("<h1> You may come in</h1>");
}
else if(a >= 60){
    document.writeln("<h1> You are too old for this old man</h1>");
}
else if(a <= 17 && a >= 0){
    document.writeln("<h1> May gatas ka pa sa labi</h1>");
}
else{
    document.writeln("<h1> Is that even an age?</h1>");
}
var months = 10;
switch(months){
    case 1:
        months = "January";
        break;
    case 2:
        months = "February";
        break;
    case 3:
//...
    default:
        months = "Invalid Value";
        break;
}
document.writeln(months);