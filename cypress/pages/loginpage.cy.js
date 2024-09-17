export class loginpage{

    weblocator={
        or_UserName:'input[placeholder="Username"]',
        or_Password:'input[placeholder="Password"]',
        or_login:'button[type="Submit"]'

    }

    OpenURL()
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    Enter_UserName(username)
        {
            cy.get(this.weblocators.or_UserName).type(username);
        }
    
    Enter_Password(password)

    {
        cy.get(this.weblocators.or_Password).type()
    }

    Click_Login()
    {
        cy.get(this.weblocators.or_login).click
    }
}
