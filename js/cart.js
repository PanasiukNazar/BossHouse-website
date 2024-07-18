const cart = [
    {
        image: '/assets/images/catalog-box-1.jpg',
        type: 'Середня утеплена',
        name: 'Боніта Комфорт',
        size: ['65(ш)', 'x85(д)', 'x85(в)'],
        price: '4900',
    },
];

const items = cart.map((item) => {
    const size = item.size
        .map(
            (singleSize) => `
            <div class="single__size">${singleSize}</div>
        `,
        )
        .join('');
    return `
        <div class="product">
            <div class="product__image">
                <div class="cart__image">
                    <img src="${item.image}" alt="" />
                </div>
            </div>
            <div class="product__body">
                <div class="product__info">
                    <div class="product__type">${item.type}</div>
                    <div class="product__name">"${item.name}"</div>
                    <div class="product__size">${size}</div>
                </div>

                <div class="product__details">
                    <div class="product__quantity">
                        <div class="product__remove">-</div>
                        <div class="product__current">0</div>
                        <div class="product__add">+</div>
                    </div>
                    <div class="product__price">
                        ${item.price} грн
                    </div>
                    <div class="product__delete">
                        <i class="bi bi-trash3"></i> Видалити
                    </div>
                </div>
            </div>
        </div>
    `;
});

document.querySelector('#cart').innerHTML = items.join('\n');
