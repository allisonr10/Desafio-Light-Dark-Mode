
    let botao = document.getElementById('btn');       
    let body = document.querySelector('body');
    let texto = document.getElementById('texto')

    console.log(body.className)
    

    let contador = 0
        botao.onclick = function(){
            if(contador % 2 === 0){
                body.className = "dark";
                botao.innerHTML = 'Light'
                texto.innerHTML = 'Modo Escuro'
                contador ++
            }else{
                body.className = "light";
                botao.innerHTML = 'Dark'
                texto.innerHTML = 'Modo Claro'
                contador ++
            }
                
            console.log(contador) 
        }                   

        
           
                           
       