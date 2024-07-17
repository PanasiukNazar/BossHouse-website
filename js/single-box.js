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
            'Фарбована в 2 шари.',
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

    const isAvailable = `singleBox.available
        ? <p style="color: '#45BA89'">'В Наявності'</p>
        : <p style="color: '#FF0000'">'Немає В Наявності'</p>`;
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
                <img src="/assets/images/icons/delivery-icon.png" alt="" />
                <div class="delivery__info">
                    <h4>Доставка по Україні</h4>
                    <span>за тарифами перевізника в межах 200 - 400 грн</span>
                </div>
            </div>
        </div>
        <div class="box__description">
            <h5>Опис</h5>
            ${description}
        </div>
    </div>


    <div class="col-md-6">
        <div class="single__header">
            <div class="single__type">
                <p>${singleBox.type}</p>
                <h3>${singleBox.name}</h3>
            </div>
            <div>
                ${isAvailable}
            </div>
        </div>
    </div>
`;
});

document.querySelector('#box-info').innerHTML = boxes.join('\n');
