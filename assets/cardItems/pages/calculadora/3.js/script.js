//Botão de Apagar:
    function Apagar(){
        document.querySelector("#x").value = "";
        document.querySelector("#y").value = "";
        document.querySelector("#result").value = "";
    }

//Botões de Operações:
    //Primeira:
        function somar(#x, #y){
            return eval(num1)+eval(num2);
        }
    
    //Segunda:
        function subtrair(num1, num2){
            return num1-num2;
        }

    //Terceira:
        function multiplicar(num1, num2){
            return num1*num2;
        }

    //Quarta:
        function dividir(num1, num2){
            return num1/num2;
        }
    
    //Quinta:
        function potência(num1, num2){
            resultado = Math.pow(num1, num2);
            return resultado;
        }

    //Sexta:
        function raiz(num1, num2){
            if(num2==2){
            resultado = Math.sqrt(num1);
            }else{
                resultado = Math.pow(num1, 1/num2);
            }
            return resultado;
        }
    
    //Sétima:
        function fatorial(num1){
            resultado = 1;

            for (var i = 1; i<=num1; i++){
                resultado*= i;
            }
            return resultado;
        }

    //Oitava:
        function log(num1, num2){
            var j = 0;
            do{
                num1 = num1/num2;
                j++;
            }while(num1>1);
            return j;
        }

    //Nona:
        function e(num1){
            resultado = 1;
            if (num1==1){
            return 1;
            }else if (num1==2){
                return 2;
            }else{
                for (var j =3; j<=num1; j++){
                    resultado += 1/fatorial(j-1);
                }
            }
            return 1+resultado;
        }

    //Décima:
        function sen(num1){
            resultado = Math.sin(num1);
            return resultado;
        }

    //Décima primeira:
        function cos(num1){
            number = (num1*Math.PI/180);
            resultado = Math.cos(number);
            return resultado;
        }

    //Décima segunda:
        function tg(num1){
            number = (num1*Math.PI/180);
            resultado = Math.tan(number);
            return resultado;
        }

    //Décima terceira
        function fibonacci(num1){
            resultado = [];
            resultado[0] = 1;
            resultado[1] = 1;
        
            for(var i=2; i<num1; i++){
                resultado[i] = resultado[i-2] + resultado[i-1];
            }
            return resultado;
        }

    //Décima quarta:
        function binário(num1){
            resultado = [];

            for (var i=0; 1<num1; i++){
                resultado[i] = num1%2;
                num1 = Math.trunc(num1/2);
            }
            resultado[resultado.length] = 1;
            return resultado.reverse();
        }

    //Décima quinta:
        function octal(num1){
            resultado = [];
            if(num1<8){
                return num1;
            }

            var j = 0;

            if(num1>=8){
                do{
                    resultado [j] = num1%8;
                    num1 = Math.trunc (num1/8);
                    j++
                }while(num1!=0)
                return resultado.reverse();
            }
        }

//Impressões:
    function imprime(num1, num2, op){
        if(op == 1){
            document.getElementById("result").value = somar(num1, num2);
        }

        if(op == 2){
            document.getElementById("result").value = subtrair(num1, num2);
        }

        if(op == 3){
            document.getElementById("result").value = multiplicar(num1, num2);
        }

        if(op == 4){
            document.getElementById("result").value = dividir(num1, num2);
        }

        if(op == 5){
            document.getElementById("result").value = potência(num1, num2);
        }

        if(op == 6){
            document.getElementById("result").value = raiz(num1, num2);
        }

        if(op == 7){
            document.getElementById("result").value = fatorial(num1);
        }

        if(op == 8){
            document.getElementById("result").value = log(num1, num2);
        }

        if(op == 9){
            document.getElementById("result").value = e(num1);
        }

        if(op == 10){
            document.getElementById("result").value = sen(num1);
        }

        if(op == 11){
            document.getElementById("result").value = cos(num1);
        }

        if(op == 12){
            document.getElementById("result").value = tg(num1);
        }

        if(op == 13){
            document.getElementById("result").value = fibonacci(num1);//.join('');
        }

        if(op == 14){
            document.getElementById("result").value = binário(num1).join('');
        }

        if(op == 15){
            if(num1){
                document.getElementById("result").value = octal(num1); 
            }
            if(resultado){
                document.getElementById("result").value = octal(num1).join(''); 
            } 
        }
    }

//Fim do código.