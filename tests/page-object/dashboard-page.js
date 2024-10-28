export class DashboardPage {

    constructor (page){
        this.pageTitle = page.getByText ('SwagLabs');
        this.menuButton = page.getByRole ('button', {name: 'Open Menu'} )

    }
    async validateonPage(){
        expect (this.pageTitle).toBeVisible()
        expect (this.menuButton).toBeVisible()
    }
}