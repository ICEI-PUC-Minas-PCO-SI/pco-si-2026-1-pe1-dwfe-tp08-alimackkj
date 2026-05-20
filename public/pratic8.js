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
"id": 5, "titulo":"the boys", "tipo": "serie", "ano": 2024, "genero": ["ficçao cientifica"], "nota": 8,"assistido": true
    },
    {
 "id": 6, "titulo":"jujutso kaisen", "tipo": "serie", "ano": 2023, "genero": ["açao"], "nota": 9, "assistido": true
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
// E) Agregação com reduce
console.log("\nE) Médias de Notas (Reduce):");
// Média geral
const somaNotasGeral = catalogo.reduce((acc, item) => acc + item.nota, 0);
const mediaGeral = somaNotasGeral / catalogo.length;
console.log(`Média geral das notas: ${mediaGeral.toFixed(2)}`);

// Média dos assistidos
const assistidos = catalogo.filter(item => item.assistido);
const somaNotasAssistidos = assistidos.reduce((acc, item) => acc + item.nota, 0);
const mediaAssistidos = assistidos.length > 0 ? somaNotasAssistidos / assistidos.length : 0;
console.log(`Média das notas dos assistidos: ${mediaAssistidos.toFixed(2)}`);

// F) Checagens com some e every
console.log("\nF) Checagens (Some/Every):");
const temAntigo = catalogo.some(item => item.ano < 2000);
console.log(`Existe algum item antes do ano 2000? ${temAntigo ? "Sim" : "Não"}`);

const todosComGenero = catalogo.every(item => item.generos && item.generos.length >= 1);
console.log(`Todos os itens têm pelo menos 1 gênero? ${todosComGenero ? "Sim" : "Não"}`);

const totalItens = catalogo.length;
const qtdFilmes = catalogo.filter(item => item.tipo === "filme").length;
const qtdSeries = catalogo.filter(item => item.tipo === "serie").length;
const qtdNaoAssistidos = naoAssistidos.length;

// Criando o ranking das 3 maiores notas
// Usamos o [...catalogo] para clonar o array original e não alterar a ordem dele
const ranking = [...catalogo]
    .sort((a, b) => b.nota - a.nota) // Ordena do maior para o menor
    .slice(0, 3); // Pega os 3 primeiros

// Seleciona a div output e injeta o conteúdo formatado
const outputDiv = document.getElementById("output");

outputDiv.innerHTML = `
    <h2>Resumo do Catálogo</h2>
    <p><strong>Total de itens:</strong> ${totalItens}</p>
    <p><strong>Filmes:</strong> ${qtdFilmes} | <strong>Séries:</strong> ${qtdSeries}</p>
    <p><strong>Não assistidos:</strong> ${qtdNaoAssistidos}</p>
    <p><strong>Média geral de notas:</strong> ${mediaGeral.toFixed(2)}</p>
    
    <h1>Os 3 Melhores Avaliados</h1>
    <ol>
        ${ranking.map(item => `<li>${item.titulo} - Nota: <strong>${item.nota}</strong></li>`).join('')}
    </ol>
`;