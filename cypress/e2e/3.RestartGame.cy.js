import SiteUpPage from "../pages/siteUp.page";

describe('Verify Checkers game', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fixture("url.json").as("urlData")
    })

    it('3. Restart game after 5 legal moves', function () {

        SiteUpPage.footNote.should('contain', 'Restart...').and('be.visible')
        SiteUpPage.footNote.contains('Restart...').click()
        cy.url().should('be.equal', this.urlData.homePage)
    })

})