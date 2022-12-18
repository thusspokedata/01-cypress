describe('Upload a file i the QA Demo site', () => {
    beforeEach(() => {
        // cy.visit(`${Cypress.env("demoQA")}/upload-download`);
        cy.visit(`${Cypress.env("theInternet")}/upload`);
    });
    it('Upload the file', () => {
        // cy.get('input#uploadFile').attachFile('example.json')
        // cy.get('p#uploadedFilePath').should('contain', 'example.json')
        cy.get('input#file-upload').attachFile('example.json')
        cy.get('input#file-submit').click()
        cy.get('div#uploaded-files').should('contain', 'example.json')
    });
});