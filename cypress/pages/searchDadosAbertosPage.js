class validaCPFPage {
    acessarPagina() {
      cy.visit('https://dados.gov.br/home');

    }
  
    informarCPF(dado) {
      cy.get('#search2').clear().type(dado);
    }
  
    clicarBotaoBuscar() {
      cy.get('.search-btn').click();
    }

    validaConjuntoDeDadosListados() {
      cy.get('#conjunto-dados > .grid-with-hover').should('be.visible');
    }

    validaNenhumDadoEncontrado() {
      cy.get('.col-12 > h3').should('have.text', 'Nenhum resultado encontrado');
    }
  }
  
  export default new validaCPFPage;
  