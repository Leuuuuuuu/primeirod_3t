
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
    document.getElementById("Resultado").innetHTML = r;
  }
  
