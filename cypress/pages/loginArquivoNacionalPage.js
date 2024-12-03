class LoginArquivoNacionalPage {
    acessarArquivoNacional() {
      cy.visit('https://consulta.an.gov.br/entrar');
    }
  
    preencherEmail(email) {
      cy.get('input[type="email"]').clear().type(email);
    }
  
    preencherSenha(senha) {
      cy.get('input[type="password"]').clear().type(senha);
    }
  
    entrar() {
      cy.get('#btn-entrar-login').click();
    }
  
    validaMensagemErro(mensagemErro) {
      cy.get('.alert > ul > li').should('have.text', mensagemErro);
    }
  }

  export default new LoginArquivoNacionalPage();