import { LoginPage } from '../../pages/loginpage.cy';
import credentials from '../../fixtures/credentials.json';

const loginOBJ = new LoginPage();

describe('Admin login', () => {

    it('login with valid credentials', () => {
        loginOBJ.OpenURL();
        loginOBJ.Enter_UserName(credentials.Username);
        loginOBJ.Enter_Password(credentials.Password);
        loginOBJ.Click_Login();
    });
});
