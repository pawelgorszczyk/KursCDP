describe('module 5 homework', () => {
    it('visit page, click button and take a screenshot',  () => {

        cy.visit('https://fabrykatestow.pl/')
        cy.get('#nv-primary-navigation-main').contains('Kursy').click()
        cy.get('.elementor-button-text').contains('POKAŻ CZEGO SIĘ NAUCZĘ').click()
        cy.get('.elementor-column.elementor-col-100.elementor-top-column.elementor-element.elementor-element-8bbdcf1').scrollIntoView().screenshot()
    })
})