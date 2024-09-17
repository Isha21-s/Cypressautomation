import {loginpage} from '../../pages/loginpage.cy';
import credentials from '../../fixtures/credentials.json';


const loginOBJ=new loginpage();

describe('Admin login',()=>{
    
    it('login with Valid credentials',()=>{
        loginOBJ.OpenURL();
        loginOBJ.Enter_UserName();
        loginOBJ.Enter_Password();
        loginOBJ.Click_Login();
    

    } )
})