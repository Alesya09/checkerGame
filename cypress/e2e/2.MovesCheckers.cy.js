import MovesCheckerPage from "../pages/movesChecker.page";
import SiteUpPage from "../pages/siteUp.page";

describe('Verify Checkers game', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('1.Five legal moves as orange checkers', () => {

// #TODO Count all checkers blue and orange on the board

        MovesCheckerPage.countAllBlueCheckers()
        MovesCheckerPage.countAllOrangeCheckers()

        SiteUpPage.message.should('have.text', 'Select an orange piece to move.')

// #TODO Checking that there is a checker in the cell
        MovesCheckerPage.cell22HaveOrangeChecker()

// #TODO Checking that there is no checker in the cage
        MovesCheckerPage.cell13Empty()
// #1
        MovesCheckerPage.clickOrangeCheckerCell22ForMove()

// #TODO Wait for the src attribute to change after clicking
        MovesCheckerPage.cell22ChangeColorAfterClickLight()
        cy.contains('Please wait.').should('not.exist')

// #TODO When we do dblclick we see message -Please wait
        // cy.get('[name="space13"]').dblclick({force:true})
        // cy.get('#message').should('have.text','Please wait.').and('be.visible')

// #TODO When we do a single click we don't see message -Please wait
        MovesCheckerPage.clickOnEmptyCell13PutChecker()
        cy.contains('Please wait.').should('not.exist')

// #TODO The src attr changed after moving the checker
        MovesCheckerPage.cell13NowHaveOrangeChecker()

        SiteUpPage.message.should('have.text', 'Make a move.').and('be.visible')

// #2
// #TODO We have to wait for the blue checker to become inactive
        cy.wait(1000)

        MovesCheckerPage.cell31HaveOrangeChecker()
        MovesCheckerPage.cell22Empty()

        MovesCheckerPage.clickOrangeCheckerCell31ForMove()
        MovesCheckerPage.cell31ChangeColorAfterClickLight()

        MovesCheckerPage.clickOnEmptyCell22PutChecker()
        MovesCheckerPage.cell22NowHaveOrangeChecker()
        SiteUpPage.message.should('have.text', 'Make a move.').and('be.visible')

// #3
        cy.wait(1000)
        MovesCheckerPage.clickOrangeCheckerCell40ForMove()
        MovesCheckerPage.cell40ChangeColorAfterClickLight()
        MovesCheckerPage.clickOnEmptyCell31PutChecker()
        MovesCheckerPage.cell31NowHaveOrangeChecker()
        SiteUpPage.message.should('have.text', 'Make a move.').and('be.visible')

// #4 We get blue checker
        cy.wait(1000)
        MovesCheckerPage.cell42HaveOrangeChecker()
        MovesCheckerPage.cell24Empty()

//  # TODO Taking a blue checker
        MovesCheckerPage.cell31HaveBlueChecker() //here stay blue checker
        MovesCheckerPage.clickOrangeCheckerCell42ForMove()
        MovesCheckerPage.cell42ChangeColorAfterClickLight()
        MovesCheckerPage.clickOnEmptyCell24PutChecker()
        MovesCheckerPage.cell24NowHaveOrangeChecker()
        SiteUpPage.message.should('have.text', 'Make a move.').and('be.visible')

//  # TODO Check the cell after taking the blue checker that it is empty
        MovesCheckerPage.cell33Empty()

//  # TODO When expected count is not known
        cy.get('[src="me1.gif"]').then(($value) => {
            length = $value.length
        })
// #5
        cy.wait(1000)
        MovesCheckerPage.clickOrangeCheckerCell62ForMove()
        MovesCheckerPage.cell62ChangeColorAfterClickLight()
        MovesCheckerPage.clickOnEmptyCell73PutChecker()
        SiteUpPage.message.should('have.text', 'Please wait.').and('be.visible')
        MovesCheckerPage.cell73NowHaveOrangeChecker()
        SiteUpPage.message.should('have.text', 'Make a move.').and('be.visible')
    })

    it('2. Negative test: moves as orange checkers not the rule', () => {

// #TODO Count all checkers blue and orange on the board
        MovesCheckerPage.countAllBlueCheckers()
        MovesCheckerPage.countAllOrangeCheckers()

// #1
        MovesCheckerPage.clickOrangeCheckerCell22ForMove()

// #TODO Wait for the src attribute to change after clicking
        MovesCheckerPage.cell22ChangeColorAfterClickLight()

        cy.contains('Please wait.').should('not.exist')

// #TODO When we do a single click we don't see message -Please wait
        MovesCheckerPage.clickOnEmptyCell13PutChecker()
        cy.contains('Please wait.').should('not.exist')

// #TODO The src attr changed after moving the checker
        MovesCheckerPage.cell13NowHaveOrangeChecker()
        SiteUpPage.message.should('have.text', 'Make a move.').and('be.visible')

// #2
        cy.wait(1000)
// #TODO Checker move back
        MovesCheckerPage.clickOrangeCheckerCell13ForMove()
        MovesCheckerPage.dblclickOnEmptyCell22PutChecker()
        SiteUpPage.message.should('have.text', 'Please wait.').and('be.visible')
    })
})
