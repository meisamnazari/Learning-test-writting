describe('My First Test', function() {
    it('Visits the Kitchen Sink', function() {
        cy.visit('http://localhost:3000/');

        cy.get('.textInput')
            .type('bokhorrrrrrr')
            .should('have.value','bokhorrrrrrr')
            cy.contains('Summit').click()
    })
});

