export class CartPage {
    constructor (page){
        this.pageTitle = page.getByText ('SwagLabs');
        this.menuButton = page.getByRole ('button', {name: 'Open Menu'} );
        this.addtocart = page.getByText ('Add to cart');
        this.checkout = page.page.getByTestId ('[id="shopping_cart_container"]')

    }
    async validateonPage(){
        expect (this.pageTitle).toBeVisible()
        expect (this.menuButton).toBeVisible()
    }

}