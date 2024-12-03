class searchBancoData {
    visitHome() {
      cy.visit('https://bancodata.com.br/');
    }
  
    searchForInstitution(institutionName) {
      cy.get('#i').type(institutionName);
    }

    searchButtonClick(){
        cy.get('.col-md-12.text-center > .btn').click();
    }

    verifyInstitutionInResults(institutionName) {
        cy.contains(institutionName).should('exist');
      }

    selectInstitutionInResults() {
        cy.get('.col-md-10 > .title > span > a').click();
      }

    notFoundSearchMessage(){
        cy.get('.alert > strong').should('be.visible');
    }

    getInstitutuionStatistics(){
        cy.get('.statistics').should('be.visible');
    }

  }
  
  export default new searchBancoData();