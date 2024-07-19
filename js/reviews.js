const data = [
    {
        image: '/assets/images/review.png',
        author: 'Анна Гордієнко',
        stars: 5,
        content:
            'Будка підвищеного стандарту з дерева для маленького або середнього собаки. Внутрішня кімната + відчинена веранда. Виготовлена ​​із струганих пиломатеріалів.',
    },
    {
        image: '/assets/images/review.png',
        author: 'Анна Гордієнко',
        stars: 5,
        content:
            'Будка підвищеного стандарту з дерева для маленького або середнього собаки. Внутрішня кімната + відчинена веранда. Виготовлена ​​із струганих пиломатеріалів.',
    },
    {
        image: '/assets/images/review.png',
        author: 'Анна Гордієнко',
        stars: 5,
        content:
            'Будка підвищеного стандарту з дерева для маленького або середнього собаки. Внутрішня кімната + відчинена веранда. Виготовлена ​​із струганих пиломатеріалів.',
    },
    {
        image: '/assets/images/review.png',
        author: 'Анна Гордієнко',
        stars: 5,
        content:
            'Будка підвищеного стандарту з дерева для маленького або середнього собаки. Внутрішня кімната + відчинена веранда. Виготовлена ​​із струганих пиломатеріалів.',
    },
    {
        image: '/assets/images/review.png',
        author: 'Анна Гордієнко',
        stars: 5,
        content:
            'Будка підвищеного стандарту з дерева для маленького або середнього собаки. Внутрішня кімната + відчинена веранда. Виготовлена ​​із струганих пиломатеріалів.',
    },
    {
        image: '/assets/images/review.png',
        author: 'Анна Гордієнко',
        stars: 5,
        content:
            'Будка підвищеного стандарту з дерева для маленького або середнього собаки. Внутрішня кімната + відчинена веранда. Виготовлена ​​із струганих пиломатеріалів.',
    },
    {
        image: '/assets/images/review.png',
        author: 'Анна Гордієнко',
        stars: 5,
        content:
            'Будка підвищеного стандарту з дерева для маленького або середнього собаки. Внутрішня кімната + відчинена веранда. Виготовлена ​​із струганих пиломатеріалів.',
    },
];

const posts = data.map((review) => {
    // Generate the stars HTML
    const stars = Array(review.stars)
        .fill()
        .map(
            () => `
        <div class="stars">
            <i class="bi bi-star-fill"></i>
        </div>
    `,
        )
        .join('');

    // Return the review HTML
    return `
        <div class="col-md-6">
            <div class="single__review">
                <div class="review__header">
                    <div class="author__image">
                        <img src="${review.image}" alt="" />
                    </div>
                    <div class="author__bio">
                        <h4 class="author">${review.author}</h4>
                        <div class="reviews__wrapper">
                            ${stars}
                        </div>
                    </div>
                </div>
                <div class="review__body">
                    <p>
                        ${review.content}
                    </p>
                </div>
            </div>
        </div>
    `;
});

document.querySelector('#all-reviews').innerHTML = posts.join('\n');
