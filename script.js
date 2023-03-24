/*
    99 Bottles of Beer
    S Dowling 21189994
    24 03 2023
*/

function print(){
    for(i=99;i>=3;i--){
        document.getElementById("main").innerHTML+="<br />"+i+" bottles of beer on the wall, "+i+" bottles of beer. Take one down and pass it around, "+(i-1)+" bottles of beer on the wall";
    }
    document.getElementById("main").innerHTML+="<br />"+"2 bottles of beer on the wall, 2 bottles of beer. Take one down and pass it around, 1 bottle of beer on the wall";
    document.getElementById("main").innerHTML+="<br />"+"1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottles of beer on the wall";
    document.getElementById("main").innerHTML+="<br />"+"No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall";
}