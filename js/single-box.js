const info = [
    {
        id: 1,
        images: [
            '/assets/images/box-info/single-box-1.1.jpg',
            '/assets/images/box-info/single-box-1.2.jpg',
            '/assets/images/box-info/single-box-1.3.jpg',
            '/assets/images/box-info/single-box-1.4.jpg',
            '/assets/images/box-info/single-box-1.5.jpg',
        ],
        type: 'Середня утеплена',
        name: 'Боніта Комфорт',
        available: true,
        size: {
            small: ['65(ш)', 'x85(д)', 'x85(в)'],
            big: ['75(ш)', 'x105(д)', 'x105(в)'],
        },
        price: '4900',
        description: [
            'Виготовлена з сухої соснової дошки стикованої в четверть.',
            'Утеплена зі всіх сторін, включно з дахом і підлогою.',
            'Накрита рубероїдом. ',
            'Без гострих кутів.',
            'На пластикових опорах.',
            'Передбачено зручний доступ через дах.',
            'Фарбується в 2 шари.',
            'Силіконова шторка в комплекті.',
        ],
    },
];

const boxes = info.map((singleBox) => {
    const images = singleBox.images
        .map(
            (image) => `
                <img src="${image}" alt="" />
            `,
        )
        .join('');

    const description = singleBox.description
        .map(
            (item) => `
            <div class="description__item">
                <img src="/assets/images/icons/paw-icon.png" alt="" />
                <span>${item}</span>
            </div>
        `,
        )
        .join('');

    const isAvailable = singleBox.available
        ? `<p style="color: #45BA89;">В Наявності</p>`
        : `<p style="color: #d20000;">Немає В Наявності</p>`;

    return `
        <div class="col-md-6">
            <div class="images__slider">
                <div class="preview__image">
                    ${images}
                </div>
            </div>
            <div class="delivery__content">
                <div class="price">
                    ${singleBox.price} <span class='currency'>грн</span>
                </div>
                <div class="memo">
                    <img class="memo__icon" src="/assets/images/icons/delivery-icon.png" alt="" />
                    <div class="memo__info">
                        <h4>Доставка по Україні</h4>
                        <span>за тарифами перевізника в межах 200 - 400 грн</span>
                    </div>
                </div>
            </div>
            <div class="box__description">
                <h6>Опис</h6>
                ${description}
            </div>
        </div>
    
        <div class="col-md-6">
            <div class="single__header">
                <div class="single__type">
                    <span>${singleBox.type}</span>
                    <h3>"${singleBox.name}"</h3>
                </div>
                <div class="availability">
                    ${isAvailable}
                </div>
            </div>
    
            <div class="single__body">
                <div class="box__size">
                    <span>Розмір:</span>
                    <div class="select active">
                        <div class="select__options">
                            <div class="first__option">${singleBox.size.small.join(
                                ' ',
                            )}</div>
                            <div class="second__option">${singleBox.size.big.join(
                                ' ',
                            )}</div>
                        </div>
                        <div class="select__opener"><i class="bi bi-chevron-down"></i></div>
                    </div>
                </div>
                <div class="box__material">
                    <span>Матеріал:</span>
                    <p>Дерево, рубероїд, пінополістирол, фанера/0513</p>
                </div>
                <div class="box__color">
                    <span>Колір:</span>
                    <div class="color__options">
                        <div class="checkbox__wrapper">
                            <div class="checkbox checked">
                                <i class="bi bi-check2"></i>
                            </div>
                            <label for="color1">Не фарбована</label>
                        </div>
                        <div class="checkbox__wrapper">
                            <div class="checkbox">
                                <i class="bi bi-check2"></i>
                            </div>
                            <label for="color2">Світлий Дуб</label>
                        </div>
                        <div class="checkbox__wrapper">
                            <div class="checkbox">
                                <i class="bi bi-check2"></i>
                            </div>
                            <label for="color3">Темний Дуб</label>
                        </div>
                        <div class="checkbox__wrapper">
                            <div class="checkbox">
                                <i class="bi bi-check2"></i>
                            </div>
                            <label for="color4">Сосна</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="single__footer">
                <div class="actions">
                    <button class="buy__ation">
                        <i class="bi bi-cart-fill"></i> Купити
                    </button>
                    <button class="contact__ation">
                       <i class="bi bi-telephone-fill"></i> Контакти
                    </button>
                </div>
                <div class="more__info__wrapper">
                    <a class="more__info">Більше інформації</a>
                    <i class="bi bi-heart"></i>
                </div>
            </div>
        </div>
    `;
});

document.querySelector('#box-info').innerHTML = boxes.join('\n');
