const catalog = [
    {
        image: '/assets/images/catalog-box-1.jpg',
        type: 'Середня утеплена',
        name: 'Боніта Комфорт',
        size: ['65(ш)', 'x85(д)', 'x85(в)'],
        price: '4900',
    },
    {
        image: '/assets/images/catalog-box-2.jpg',
        type: 'Середня',
        name: 'Боніта Стандарт',
        size: ['65(ш)', 'x85(д)', 'x85(в)'],
        price: '2900',
    },
    {
        image: '/assets/images/catalog-box-1.jpg',
        type: 'Велика утеплена',
        name: 'Боніта Комфорт',
        size: ['75(ш)', 'x105(д)', 'x105(в)'],
        price: '6900',
    },
    {
        image: '/assets/images/catalog-box-2.jpg',
        type: 'Велика',
        name: 'Боніта Стандарт',
        size: ['75(ш)', 'x105(д)', 'x105(в)'],
        price: '3500',
    },
    {
        image: '/assets/images/catalog-box-3.jpg',
        type: 'Середня утеплена',
        name: 'Бос Комфорт',
        size: ['65(ш)', 'x85(д)', 'x85(в)'],
        price: '6200',
    },
    {
        image: '/assets/images/catalog-box-3.jpg',
        type: 'Середня',
        name: 'Бос Стандарт',
        size: ['65(ш)', 'x85(д)', 'x85(в)'],
        price: '3500',
    },
    {
        image: '/assets/images/catalog-box-4.jpg',
        type: 'Велика утеплена',
        name: '"Бос Комфорт"',
        size: ['65(ш)', 'x120(д)', 'x65(в)'],
        price: '6200',
    },
    {
        image: '/assets/images/catalog-box-4.jpg',
        type: 'Велика',
        name: 'Бос Стандарт',
        size: ['65(ш)', 'x120(д)', 'x65(в)'],
        price: '3500',
    },
];

const boxes = catalog.map((box) => {
    const size = box.size
        .map(
            (singleSize) => `
                <div class="single__size">${singleSize}</div>
            `,
        )
        .join('');

    return `
        <div class="col-md-6">
            <div class="box">
                <div class="row">
                    <div class="col-md-5">
                        <div class="box__image">
                            <img src="${box.image}" alt="" />
                        </div>
                    </div>
                    <div class="col-md-7">
                        <div class="box__body">
                            <div class="header">
                                <div class="box__type">
                                    <p>${box.type}</p>
                                    <h4>"${box.name}"</h4>
                                </div>
                                <div class="add-to-card">
                                    <i class="bi bi-heart"></i>
                                    <i class="bi bi-heart-fill" style="display: none"></i>
                                </div>
                            </div>
                            <div class="box__size">
                                <p class="title">Розмір:</p>
                                <div class="size__items">
                                    ${size}
                                </div>
                            </div>
                            <div class="box__price">
                                <p class="title">Ціна:</p>
                                <div class="price">
                                    ${box.price} <span class='currency'>грн</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
});

document.querySelector('#catalog').innerHTML = boxes.join('\n');
