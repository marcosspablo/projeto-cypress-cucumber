import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import bancoDataHomePage from '../../pages/searchBancoData'

Given('que eu esteja na página inicial do BancoData', () => {
  bancoDataHomePage.visitHome();
});

When('eu digitar o nome da instituição {string} no campo de busca', (institutionName) => {
  bancoDataHomePage.searchForInstitution(institutionName);
});

When('clico no botão de pesquisar', () => {
  bancoDataHomePage.searchButtonClick();
});

And('escolho a instituicao desejada', () => {
  bancoDataHomePage.selectInstitutionInResults();
})

Then('no resultado da busca devem conter a instituição {string}', (institutionName) => {
  bancoDataHomePage.verifyInstitutionInResults(institutionName);
});

Then('uma mensagem de erro e exibida', () => {
  bancoDataHomePage.notFoundSearchMessage();
})

Then('os dados da instituição são exibidos', () => {
  bancoDataHomePage.getInstitutuionStatistics();
})