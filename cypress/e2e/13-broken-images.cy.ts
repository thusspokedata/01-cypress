let img:HTMLImageElement;
describe('Broken images with Demo QA', () => {
    beforeEach(() => {
        // cy.visit(`${Cypress.env("demoQA")}/broken`);
        cy.visit(`${Cypress.env("theInternet")}/broken_images`);
    });
    // it('not Broken Image Assertion', () => {
    //     cy.get('div > img[src="/images/Toolsqa.jpg"]').should('be.visible').and(($img)=>{
    //             // cy.log('This is the img yield', $img)
    //             expect($img[0].naturalWidth).to.be.greaterThan(0) // solution to this typescript problem in line 14
    //         })
    // });
    // it('Broken Image Assertion', () => {
    //     cy.get('div > img[src="/images/Toolsqa_1.jpg"]').should('be.visible').and(($img)=>{
    //         img = $img[0] as unknown as HTMLImageElement
    //         // cy.log('This is the img yield', $img)
    //         expect(img.naturalWidth).to.be.greaterThan(0)
    //     })
    // })
    it('Broken Image Detected(first', () => {
        cy.get('div.example img')
            .last()
            .should('be.visible')
            .and(($img)=>{
            img = $img[0] as unknown as HTMLImageElement
            // cy.log('This is the img yield', $img)
            expect(img.naturalWidth).to.be.greaterThan(0)
        })
    })
});
