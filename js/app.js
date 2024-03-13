//camelCase - Amigo secreto

//Passo1: Fazer uma lista e uma maneira de inserir os nomes nela
//Passo2: Sortear os nomes aleatóriamente: 1 por pessoa: Sem repetir, sem sortear o proprio nome

//let listaAmigos = [];
let amigos = [];

function adicionar(){ 
    //let nomes = document.getElementById('nome-amigo').value; //*** Funciona também, mas v
    //listaAmigos.push(nomes);                                 //*** Fica sem o espaço e adiciona na lista declarada acima
    //document.getElementById('lista-amigos') = listaAmigos;   //*** aqui funciona normal, nem precisava trocar
//Todo o código acima funciona se for retirado os comentários 

    let nomes = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');

    if (nomes.value == ''){                                    //Desafio: Checando se ta vazio
        alert("INFORME UM NOME");
        return;
    }

    if(amigos.includes(nomes.value)){                          //Desafio: Impedir nomes repetidos
        alert("NOME JÁ ADICIONADO");
        return;
    }

    amigos.push(nomes.value);
    if(lista.textContent == ''){                               //Todo esse IF só adiciona no espaço entre os nomes
        lista.textContent = nomes.value;
    }else{
        lista.textContent = lista.textContent + ', ' + nomes.value;
    }
    nomes.value = '';
}

function sortear(){
    
    if (amigos.length <= 3){                                  //Desafio: Limitar os amigos
        alert('Adicione pelo menos 4 amigos para participar');
        return;
    }

    embaralhar(amigos);                                       //ja como array embaralhado é só ligar um ao outro
    let sorteio = document.getElementById('lista-sorteio');
    
    for (let i = 0; i < amigos.length; i++){
        if (i == amigos.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br/>'; //concatenado
        }else{
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i+1] + '<br>'; //pega o 1 com o 2 e pula linha
        }
    }  
}

function embaralhar(lista){                                        //minha ideia de embaralhar o array estava correta
    for (let indice = lista.length; indice; indice--){

        const indiceAleatorio = Math.floor(Math.random() * indice); // do jeito que eu tinha feito

        //atribuição via destructing - não sei oq é
        [lista[indice-1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice-1]];
    }
}

function reiniciar(){                                              // só as listas
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';

}