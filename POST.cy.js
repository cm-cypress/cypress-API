


const fixtureFile = require('../../cypress/fixtures/fixture1.json') ;
// const baseUrl = Cypress.config().baseUrl;

describe("Add new user" , ()=> {

    it( 'GET Bearer Token' , ()=> {  
     cy.api ({
        method: 'POST',
        url: 'url',
        headers: {
            'Content-Type': 'application/json',        
          },
        body : {
            "client_id": "**********",
            "client_secret": "***********",
            "type" : "client"
        }
     }).then((response) => {
        expect(response.status).to.eq(200)
        const client_token = response.body.client_token
        return client_token
       // cy.log(client_token)

    }).then((client_token) => {
        cy.api({
            method: 'POST',
            url: 'Post-EndPoint-url',
            headers:{
                Authorization: `Bearer ${client_token}`,
            },
            body: fixtureFile,
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })
})

})