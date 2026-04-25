import { buscarTituloDoLivroPorID } from '../src/biblioteca.js';
import assert from 'node:assert';

describe('Testes de validação da bibliotexa', function () {
    it('Validar que ao inserir indice válido retorna o título do livro', function () {
        //assert
        const idInformado = 2;
        const tituloDoLivroEsperado = "A bruxa tá solta";

        //act
        const resultadoFuncao = buscarTituloDoLivroPorID(idInformado);

        //assert
        assert.equal(tituloDoLivroEsperado, resultadoFuncao)
    });
    it('Validar que ao inserir indice menor que zero, mensagem de erro é exibido', function () {
        //assert
        const idInformado = -1;
        const mensagemDeErroEsperada = 'ID deve ser informado e maior que 0';

        //act & assert
        assert.throws(function () { buscarTituloDoLivroPorID(idInformado) },
            { message: mensagemDeErroEsperada }
        )
    })
    it('Validar que ao inserir indice igual a zero, mensagem de erro é exibido', function () {
        //assert
        const idInformado = 0;
        const mensagemDeErroEsperada = 'ID deve ser informado e maior que 0';

        //act & assert
        assert.throws(function () { buscarTituloDoLivroPorID(idInformado) },
            { message: mensagemDeErroEsperada }
        )
    });
    it('Validar que ao inserir id nao existente, mensagem de erro é exibido', function () {
        //assert
        const mensagemDeErroEsperada = 'ID deve ser informado e maior que 0';

        //act & assert
        assert.throws(function () { buscarTituloDoLivroPorID() },
            { message: mensagemDeErroEsperada }
        )
    });
    it('Validar que ao inserir indice igual a zero, mensagem de erro é exibido', function () {
        //assert
        const idInformado = '';
        const mensagemDeErroEsperada = 'ID deve ser informado e maior que 0';

        //act & assert
        assert.throws(function () { buscarTituloDoLivroPorID(idInformado) },
            { message: mensagemDeErroEsperada }
        )
    })
})