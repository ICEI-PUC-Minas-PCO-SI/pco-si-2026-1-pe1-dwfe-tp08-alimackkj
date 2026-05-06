const catalogo = [
    {"id": 1,
         "titulo": "Minha Culpa", 
         "tipo": "Filme", 
         "ano": 2023,
         "genero":["romantico", "intenso", "drama", "romance"],
         "nota": 7.8,
         "assistido": true,
    },
    {"id": 2,
        "titulo": "Ela é o cara", 
         "tipo": "Filme", 
         "ano": 2006,
         "genero":["humorado","divertido","comedia", "romance"],
         "nota": 10,
         "assistido": true,
    },
    {"id": 3,
        "titulo": "Herege", 
         "tipo": "Filme", 
         "ano": 2024,
         "genero":["terror", "suspense", "sombrio"],
         "nota": 9,
         "assistido": false,
    },
    {"id": 4,
        "titulo": "Euphoria", 
         "tipo": "Serie", 
         "ano": 2026,
         "genero":["psicologico", "pesado", "drama"],
         "nota": 6,
         "assistido": false,
    }
    
]
console.log("Catalogo:");
console.log(catalogo);
console.log(catalogo[0].titulo);
console.log(catalogo[3].ano);
console.log(catalogo[2].genero[1]);
