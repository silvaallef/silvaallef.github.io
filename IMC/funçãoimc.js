function Calculoimc() {


        var peso = document.getElementById("peso");
        var altura = document.getElementById("altura");


        var quadrado = ((altura.value*altura.value)/ 100);
        console.log("quadrado = " + quadrado);

        var imc = peso.value / quadrado;
        console.log("imc = " + imc);
        
        if (imc < 18.5) {
          alert("CATEGORIA : BAIXO!");
        }
        else if((imc> 18.5) || (imc < 24.9)){
          alert("CATEGORIA : PESO NORMAL!");
        }
        else if (imc > 25 || imc <30) {
          alert("CATEGORIA : SOBREPESO!");
        }
        else if (imc > 30){
          alert("CATEGORIA : OBESO!");
        }
        else alert("ERRO!");
      }