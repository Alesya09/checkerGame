class SiteUpPage{
    get header() { return cy.get('div h1') }
    get message() { return cy.get('#message') }
    get footNote() { return cy.get('.footnote') }

}

export default new SiteUpPage()
