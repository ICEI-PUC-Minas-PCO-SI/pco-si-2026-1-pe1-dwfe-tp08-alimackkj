// Definição dos dados
const catalogo = [
    {
"id": 1,"titulo": "Minha Culpa",  "tipo": "filme", "ano": 2023,"genero":["romantico", "intenso", "drama", "romance"],"nota": 7.8,"assistido": true
    },
    {
"id": 2,"titulo": "Ela é o cara", "tipo": "filme", "ano": 2006,"genero":["humorado","divertido","comedia", "romance"], "nota": 10,         "assistido": true
    },
    {
"id": 3, "titulo": "Herege", "tipo": "filme", "ano": 2024, "genero":["terror", "suspense", "sombrio"], "nota": 9,"assistido": false
    },
    {
"id": 4, "titulo": "Euphoria", "tipo": "serie", "ano": 2026,"genero":["psicologico", "pesado", "drama"],"nota": 6,"assistido": false
    },
    {
"id": 5, "titulo":"the boys", "tipo": "serie", "ano": 2024, "genero": "ficçao cientifica", "nota": 8,"assistido": true
    },
    {
 "id": 6, "titulo":"jujutso kaisen", "tipo": "serie", "ano": 2023, "genero": "açao", "nota": 9, "assistido": true
    }
    
]
console.log("Catalogo:");
console.log(catalogo);
console.log(catalogo[0].titulo); //título do primeiro item
console.log(catalogo[5].ano); //ano do último item
console.log(catalogo[2].genero[1]); // segundo gênero do terceiro item
//Listagem com forEach
catalogo.forEach(item => {
    console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
})
//Transformação com map
const titulosEmCaixaAlta = catalogo.map(item => item.titulo.toUpperCase());
    console.log(titulosEmCaixaAlta);
//Seleção com filter
const naoAssistidos = catalogo.filter(item => !item.assistido);
console.log(`Quantidade de itens não assistidos: ${naoAssistidos.length}`);
//Busca com find
const notaAlta = catalogo.find(item => item.nota >= 9);
if (notaAlta) {
    console.log(`Item nota >= 9 encontrado: ${notaAlta.titulo} (Nota: ${notaAlta.nota})`);
} else {
    console.log("Nenhum item com nota maior ou igual a 9 foi encontrado.");
}
