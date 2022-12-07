describe("Locators", () => {
    beforeEach(() => {
        cy.visit("/dynamicid");
    });
    it("Cy.Contains example", () => {
        cy.contains("Button with Dynamic ID").should('have.text', 'Button with Dynamic ID');
    });
    it("Cy.get + cy.find", () => {
        cy.get('div').find('button').should('have.text', 'Button with Dynamic ID');
    });
    it("CSS selector using an attribute", () => {
        cy.get('button[class="btn btn-primary"]').should('have.text', 'Button with Dynamic ID');
    });
    it("CSS selector using a class", () => {
        cy.get('.btn-primary').should('have.text', 'Button with Dynamic ID');
    });

});


// it("", () => {
//     cy.('');
//     });

// button[class="btn btn-primary"]