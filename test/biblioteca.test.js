import { buscarTituloDoLivroPorID } from '../src/biblioteca.js';
import assert from 'node:assert';

describe('Testes de validação da bibliotexa', function () {
    it('Validar que ao inserir indice válido retorna o título do livro', function () {
        //assert
        const indiceInformado = 1;
        const tituloDoLivroEsperado = "A bruxa tá solta";

        //act
        const resultadoFuncao = buscarTituloDoLivroPorID(indiceInformado);

        //assert
        assert.equal(tituloDoLivroEsperado, resultadoFuncao)
    });
    it('Validar que ao inserir indice menor que zero, mensagem de erro é exibido', function () {
        //assert
        const indiceInformado = -1;
        const mensagemDeErroEsperada = 'ID deve ser maior que 0';

        //act & assert
        assert.throws(function () { buscarTituloDoLivroPorID(indiceInformado) },
            { message: mensagemDeErroEsperada }
        )
    })
    it('Validar que ao inserir indice igual a zero, mensagem de erro é exibido', function () {
        //assert
        const indiceInformado = 0;
        const mensagemDeErroEsperada = 'ID deve ser maior que 0';

        //act & assert
        assert.throws(function () { buscarTituloDoLivroPorID(indiceInformado) },
            { message: mensagemDeErroEsperada }
        )
    })

})