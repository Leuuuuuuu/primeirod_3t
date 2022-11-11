
function moeda(atual){
  return atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }
  
  function total(){
    let c = document.getElementById("valor").value;
    let j = document.getElementById("juros").value;
    let t = document.getElementById("meses").value;
    let r = moeda;
  
  
    if(!Number(c)){
        
     alert("O capital deve ser numeros.");
     document.getElementById("valor").value = "";
     document.getElementById("valor").focus();
     return;
    }
  
    if(!Number(j)){   
      alert("O juros deve ser numeros.");
      document.getElementById("juros").value = "";
      document.getElementById("juros").focus();
      return;
     }
  
     if(!Number(t)){
      alert("O meses deve ser numeros.");
      document.getElementById("meses").value = "";
      document.getElementById("meses").focus();
      return;
     }
   let mes = "";
    for(let i = 1; i <= t; i++){
        r = c * (1 + (j/100));
  
       mes += "Mês " + i + " / " + " valor: " +moeda(r) + "<br>";
  
        c = r;
    }
    document.getElementById("mes").innerHTML=mes
  
    document.getElementById("total").innerHTML="Total: "+moeda(r);
    
  }
    

  function adicao() {
    let val1 = document.getElementById("v1").value;
    let val2 = document.getElementById("v2").value;
    let r = Number(val1) + Number(val2);
    document.getElementById("resultado").innerHTML = r;
  }

  function subtracao() {
    let val1 = document.getElementById("v1").value;
    let val2 = document.getElementById("v2").value;
    let r = Number(val1) - Number(val2);
    document.getElementById("resultado").innerHTML = r;
  }

  function divisao() {
    let val1 = document.getElementById("v1").value;
    let val2 = document.getElementById("v2").value;
    let r = Number(val1) / Number(val2);
    document.getElementById("resultado").innerHTML = r;
  }

  function multiplicacao() {
    let val1 = document.getElementById("v1").value;
    let val2 = document.getElementById("v2").value;
    let r = Number(val1) * Number(val2);
    document.getElementById("resultado").innerHTML = r;
  }
  function porcentagem() {
    let val1 = document.getElementById("v1").value;
    let val2 = document.getElementById("v2").value;
    let c = 100
    let p = Number(val2) / Number(c)
    let r = Number(val1) * Number(p);
    document.getElementById("resultado").innerHTML = r;
  }


  function calculaRaiz() {
    let a  = document.getElementById("a").value;
    let b  = document.getElementById("b").value;
    let c  = document.getElementById("c").value;
    let delta, raiz, x1, x2;
    delta = (b*b) - (4*a*c);
    if (delta >= 0){
      raiz = Math.sqrt(delta);
      x1 = ((-b)+raiz)/(2*a);
      x2 = ((-b)-raiz)/(2*a);
      raiz = "x1="+x1+" X2="+x2;

    }else{
      raiz = "NAO TEM RAIZ REAL "

    }

    document.getElementById("raiz").innerHTML = raiz;
  }




