// 1) Criar um vetor com 5 livros contendo as seguintes propriedades: ID, titulo, tema, preco.


const livros = [
    {
        id: 1,
        titulo: "A menina que roubava livros",
        tema: 'Fantasia',
        preco: 100.00

    },
        {
        id: 2,
        titulo: "A bruxa tá solta",
        tema: 'Suspense',
        preco: 144.99

    },
        {
        id: 3,
        titulo: "O Brasil fez gol",
        tema: 'Esporte',
        preco: 10.00

    },
        {
        id: 4,
        titulo: "O Cangaço",
        tema: 'Suspense',
        preco: 90.90

    },
        {
        id: 5,
        titulo: "Cara e Coroa",
        tema: 'Mitologia',
        preco: 67.00

    }
]

// 2) [Básico] Crie uma função que receba o ID de um livro e retorne o seu titulo. Exemplo de chamada da função:
//    buscarTituloDoLivroPorID(99) -> 'Titulo do Livro de ID 99'
// 3) Escreva um test automatizado de unidade para testar a condição de busca do titulo por ID.

// 4) [Avançado] Validar se o ID foi informado e é maior que 0.
// 5) Escreva dois testes automatizados de unidade para testar as condições de envio incorreto de ID.
// 6) Adicionar o Mochawesome para gerar relatórios em HTML.
export function buscarTituloDoLivroPorID(id) {
    if ( id == undefined || id<= 0 || id == null) {
        throw new Error('ID deve ser informado e maior que 0')
    }

    for ( let i =0; i< livros.length; i++){
        if (livros[i].id == id){
            return livros.at(i).titulo;
        }

    }
    
}