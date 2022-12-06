describe('empty spec', () => {
  before(()=> {
    cy.log("Hello from before hook")
  })
  after(()=> {
    cy.log("Hello from after hook")
  })
  beforeEach(()=> {
    cy.log("Hello from beforeEach hook")
  })
  afterEach(()=> {
    cy.log("Hello from afterEach hook")
  })
  it('testcase #1', () => {
    cy.log("hello world")
  });
  it.skip('testcase #2', () => {
    cy.log("hello world")
  });
  it.only('testcase #3', () => {
    cy.log("hello world")
  })
})