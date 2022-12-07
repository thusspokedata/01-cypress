describe("basics", () => {
    beforeEach(() => {
        cy.visit('/textinput')
    });
    it("visit explanation text input", () => {
        cy.url().then((url)=>{
            cy.log(`Printing the URL: ${url}`)
            expect(url).to.contains('/textinput')
        });
    });
    it("title validation", () => {
        cy.title().then(title => {
            cy.log(title);
            expect(title).to.be.equal("Text Input")
        });
    });
    it("Input challenge", () => {
    cy.get('input#newButtonName').type("hello from Input");
    cy.get('button#updatingButton').click().should('have.text', 'hello from Input');
    });
});


// it("visit explanation text input", () => {
//     cy.log('Hello from it');
//     });

// input#newButtonName