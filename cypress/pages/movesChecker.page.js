class MovesCheckerPage {
    elements = {
        blueCheckers: () => cy.get('[src="me1.gif"]'),
        orangeCheckers: () => cy.get('[src="you1.gif"]'),
        cell22: () => cy.get('[name="space22"]'),
        cell13: () => cy.get('[name="space13"]'),
        cell31:() => cy.get('[name="space31"]'),
        cell40:() => cy.get('[name="space40"]'),
        cell33:() => cy.get('[name="space33"]'),
        cell42:() => cy.get('[name="space42"]'),
        cell24:() => cy.get('[name="space24"]'),
        cell62:() => cy.get('[name="space62"]'),
        cell73:() => cy.get('[name="space73"]')


    }

    countAllBlueCheckers() {
        this.elements.blueCheckers().should('have.length', 12)
    }

    countAllOrangeCheckers() {
        this.elements.orangeCheckers().should('have.length', 12)
    }
    cell22HaveOrangeChecker() {
        this.elements.cell22().should("have.attr", "src").and("include", "you1.gif")
    }
    cell13Empty() {
        this.elements.cell13().should("have.attr", "src").and("include", "gray.gif")
    }
    clickOrangeCheckerCell22ForMove(){
        this.elements.cell22().click({force: true})
    }
    clickOnEmptyCell13PutChecker(){
        this.elements.cell13().click({force: true})
    }
    cell22ChangeColorAfterClickLight(){
        this.elements.cell22().should("have.attr", "src", "you2.gif")
    }
    cell13NowHaveOrangeChecker(){
        this.elements.cell13().should("have.attr", "src").and("include", "you1.gif")
    }
    cell31HaveOrangeChecker(){
        this.elements.cell31().should("have.attr", "src").and("include", "you1.gif")
    }
    cell22Empty() {
        this.elements.cell22().should("have.attr", "src").and("include", "gray.gif")
    }
    clickOrangeCheckerCell31ForMove(){
        this.elements.cell31().click({force: true})
    }
    cell31ChangeColorAfterClickLight(){
        this.elements.cell31().should("have.attr", "src", "you2.gif")
    }
    clickOnEmptyCell22PutChecker(){
        this.elements.cell22().click({force: true})
    }
    cell22NowHaveOrangeChecker(){
        this.elements.cell22().should("have.attr", "src").and("include", "you1.gif")
    }
    clickOrangeCheckerCell40ForMove(){
        this.elements.cell40().click({force: true})
    }
    cell40ChangeColorAfterClickLight(){
        this.elements.cell40().should("have.attr", "src", "you2.gif")
    }
    clickOnEmptyCell31PutChecker(){
        this.elements.cell31().click({force: true})
    }
    cell31NowHaveOrangeChecker(){
        this.elements.cell31().should("have.attr", "src").and("include", "you1.gif")
    }
    cell31HaveBlueChecker(){
        this.elements.cell33().should("have.attr", "src", "me1.gif")
    }
    cell42HaveOrangeChecker() {
        this.elements.cell42().should("have.attr", "src").and("include", "you1.gif")
    }
    cell24Empty() {
        this.elements.cell24().should("have.attr", "src").and("include", "gray.gif")
    }
    clickOrangeCheckerCell42ForMove(){
        this.elements.cell42().click({force: true})
    }
    cell42ChangeColorAfterClickLight(){
        this.elements.cell42().should("have.attr", "src", "you2.gif")
    }
    clickOnEmptyCell24PutChecker(){
        this.elements.cell24().click({force: true})
    }
    cell24NowHaveOrangeChecker(){
        this.elements.cell24().should("have.attr", "src").and("include", "you1.gif")
    }
    cell33Empty() {
        this.elements.cell33().should("have.attr", "src").and("include", "gray.gif")
    }
    clickOrangeCheckerCell62ForMove(){
        this.elements.cell62().click({force: true})
    }
    cell62ChangeColorAfterClickLight(){
        this.elements.cell62().should("have.attr", "src", "you2.gif")
    }
    clickOnEmptyCell73PutChecker(){
        this.elements.cell73().dblclick({force: true})
    }
    cell73NowHaveOrangeChecker(){
        this.elements.cell73().should("have.attr", "src").and("include", "you1.gif")
    }
    clickOrangeCheckerCell13ForMove(){
        this.elements.cell13().click({force: true})
    }
    clickOnEmptyCell22PutChecker(){
        this.elements.cell73().dblclick({force: true})
    }



}

export default new MovesCheckerPage()