describe('module 4 homework', () => {

    it('Get elements by id, class, text, attribute', () => {

        cy.visit('https://fabrykatestow.pl/')

        //ID

        cy.get('#menu-item-3992')
        cy.get('#header-grid')
        cy.get('#custom_html-3')
        cy.get('#header-menu-sidebar')
        cy.get('#gallery-1')

        //class

        cy.get('.elementor-widget-wrap')
        cy.get('.brand')
        cy.get('.elementor-image')
        cy.get('.elementor-image-gallery')
        cy.get('.site-footer')

        //text

        cy.get('a').contains('Koszulki')
        cy.get('div').contains('Regulamin')
        cy.get('span').contains('ZAPISZ MNIE NA NEWSLETTER!')
        cy.get('span').contains('Sprawdź nasze kursy')
        cy.get('a').contains('naszej liście mailowej.')


        //attribute

        cy.get('img[class="attachment-large size-large wp-image-4462"]')
        cy.get('a[href="https://fabrykatestow.pl/polityka-prywatnosci"]')
        cy.get('div[class="elementor-background-overlay"]')
        cy.get('div[data-id="6d0737f"]')
        cy.get('div[class="site-logo"]')

    })
})