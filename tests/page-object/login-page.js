const { expect } = require("@playwright/test");
export class LoginPage {

    constructor(page){
        this.page = page
        this.usernameTextBox = page.getByPlaceholder ('Username')
        this.passwordTexBox = page.getByPlaceholder ('Password')
        this.LoginButton = page.getByText ('Login')

    }
    async inputUsername(Username){
       await this.usernameTextBox.fill(Username)
    }  
    async inputPassword(Password){
       await this.passwordTexBox.fill(Password)
    } 
    async clickLoginButton(){
       await this.LoginButton.click()

    }

    async login(username,password){
        await this.inputUsername(username)
        await this.inputPassword(password)
        await this.clickLoginButton()
    }
}