describe('Main page', () => {
 
 
    it('Is strona Glowna is visible', () => {
      cy.visit('')
      cy.get('#menu-item-197 a').contains("Strona główna");
    })
   
    it('Are headers names displayed correctly in Popularne section', () => {
      cy.visit('')
      cy.get("h2").contains("Fuerteventura – Sotavento");
      cy.get("h2").contains("Windsurfing w Lanzarote (Costa Teguise)");
      cy.get("h2").contains("Grań Kościelców");
      cy.get("h2").contains("Grecja – Limnos");
    })
   
      it('Are hearders names displayed correctly in Nowości section', () => {
      cy.visit('')
      cy.get("h2").contains("Fuerteventura – Sotavento");
      cy.get("h2").contains("Windsurfing w Lanzarote (Costa Teguise)");
      cy.get("h2").contains("Grań Kościelców");
      cy.get("h2").contains("Grecja – Limnos");
      })
   
  it('Are headers names displayed correctly in W Promocji section', () => {
    cy.visit('')
      cy.get("h2").contains("Wakacje z yogą w Kraju Kwitnącej Wiśni");
      cy.get("h2").contains("Yoga i pilates w Portugalii");
      cy.get("h2").contains("Kurs żeglarski na Mazurach");
      cy.get("h2").contains("Wspinaczka Via Ferraty");
    })
   
    it("Are the elements should be in the correct order", () => {
      cy.visit('')
      cy.get(".nav-menu>li").should('have.length', 6)
      .then(($el) => {
        return Cypress.$.makeArray($el).map((el) => el.innerText)
      })
      .should('deep.equal', ['Strona główna', 'Sklep', 'Zamówienie', 'Koszyk', 'Moje konto', 'Lista życzeń'])
      })

    it("Can add Gran Koscielow to the basket", () => {
      cy.visit('')
      cy.get('[data-product_id="4114"]').first().click()
    })

    it("Validate basket value", () => {

    })
   
   /*
    it("There should be 4 sections on the page", () => {
     
      cy.visit('')
      cy.get('ul.columns-4').should('have.length', 4);
    })
     
      it("Every section should have 4 items", () => {
     
        cy.visit('')
        cy.get('ul.columns-4>li').should('have.length', 16);
   
    })
   */
   
   
   
   
  });