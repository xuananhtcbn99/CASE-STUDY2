class Product {
    constructor(name, image, price) {
        this.name = name;
        this.image = image;
        this.price = price
    }
    getHtml() {
        let html =`<div class="product-item">
                <img style="width: 200px; height: 150px" src="${this.image}" alt="">
                <div class="product-item-text">
                    <p><span>${this.price}</span><sup>đ</sup></p>
                    <h1 style="font-weight: boil; font-size: 16px;">${this.name}</h1>
                </div>
                <button>Thêm vào giỏ hàng</button>
            </div>`;
        return html;
    }
}