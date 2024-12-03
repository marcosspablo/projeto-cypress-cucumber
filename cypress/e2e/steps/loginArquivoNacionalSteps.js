import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginArquivoNacionalPage from '../../pages/loginArquivoNacionalPage'

Given('que eu acesse a página do arquivo nacional', () => {
    LoginArquivoNacionalPage.acessarArquivoNacional();
    });

When('eu preencher o campo e-mail com {string}', (email) => {
    LoginArquivoNacionalPage.preencherEmail(email);
    });

When('preencher o campo senha com {string}', (senha) => {
    LoginArquivoNacionalPage.preencherSenha(senha);
    });

When('clicar no botão Entrar', () => {
    LoginArquivoNacionalPage.entrar();
    });

Then('a seguinte mensagem de erro deve ser exibida {string}', (mensagemErro) => {
    LoginArquivoNacionalPage.validaMensagemErro(mensagemErro);
    });
    