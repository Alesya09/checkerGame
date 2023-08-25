import SiteUpPage from "../pages/siteUp.page";
import MovesCheckerPage from "../pages/movesChecker.page";

describe('Verify Checkers game', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fixture("url.json").as("urlData")
    })

    it('3. Restart and reload the game after moving the checker', function () {

        MovesCheckerPage.clickOrangeCheckerCell22ForMove()
        MovesCheckerPage.clickOnEmptyCell13PutChecker()
        MovesCheckerPage.cell13NowHaveOrangeChecker()
        SiteUpPage.footNote.should('contain', 'Restart...').and('be.visible')
        SiteUpPage.footNote.contains('Restart...').click()
        cy.url().should('eq', this.urlData.homePage) // we see the correct home page

        MovesCheckerPage.clickOrangeCheckerCell22ForMove()
        MovesCheckerPage.clickOnEmptyCell13PutChecker()
        MovesCheckerPage.cell13NowHaveOrangeChecker()
        cy.reload()
        cy.url().should('eq', this.urlData.homePage)
    })
})
