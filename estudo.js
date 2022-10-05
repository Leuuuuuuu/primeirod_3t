let tabuada = 2;


function escreva(){
    document.write(tabuada + " x 1 = "+(tabuada*1)+"<BR>");
    document.write(tabuada + " x 2 = "+(tabuada*2)+"<BR>");
    document.write(tabuada + " x 3 = "+(tabuada*3)+"<BR>");
    document.write(tabuada + " x 4 = "+(tabuada*4)+"<BR>");
    document.write(tabuada + " x 5 = "+(tabuada*5)+"<BR>");
    document.write(tabuada + " x 6 = "+(tabuada*6)+"<BR>");
    document.write(tabuada + " x 7 = "+(tabuada*7)+"<BR>");
    document.write(tabuada + " x 8 = "+(tabuada*8)+"<BR>");
    document.write(tabuada + " x 9 = "+(tabuada*9)+"<BR>");
    document.write(tabuada + " x 10 = "+(tabuada*10)+"<BR>");
}


function repete(){
    for(let i = 0; i <= 10; i++){
        document.write("<br>")
        document.write("Tabuada do " + i + "<br>")
        document.write("<br>")
       for(let j =1; j <= 10; j++){
        document.write(i + " x " + j + " = "+(i*j)+"<br>");
       }
     document.write("<br>")
    }
    
}

let lista = ["Bananão","Uva","Abacate","Abacaxi"]

function minhaLista(){
    document.write(lista[0]);
    document.write("<br>")
    document.write(lista[1]);
    document.write("<br>")
    document.write(lista[3]);
}
