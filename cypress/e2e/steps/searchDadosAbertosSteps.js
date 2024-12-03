import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import validaCPFPage from '../../pages/searchDadosAbertosPage';

Given('que eu acesso portal Brasileiro de dados abertos', () => {
    validaCPFPage.acessarPagina();
});

When('eu digito {string} na barra de pesquisa', (dado) => {
    validaCPFPage.informarCPF(dado);
});

When('eu clico no botão "Buscar"', () => {
    validaCPFPage.clicarBotaoBuscar();
});

Then('um conjunto de dados é apresentado como resultado', () => {
    validaCPFPage.validaConjuntoDeDadosListados();
});

Then('uma mensagem informa que nenhum resultado foi encontrado', () => {
    validaCPFPage.validaNenhumDadoEncontrado();
});