"use strict";

var data = [{
  image: '/assets/images/review.png',
  author: 'Анна Гордієнко',
  stars: 5,
  content: 'Будка підвищеного стандарту з дерева для маленького або середнього собаки. Внутрішня кімната + відчинена веранда. Виготовлена ​​із струганих пиломатеріалів.'
}, {
  image: '/assets/images/review.png',
  author: 'Анна Гордієнко',
  stars: 5,
  content: 'Будка підвищеного стандарту з дерева для маленького або середнього собаки. Внутрішня кімната + відчинена веранда. Виготовлена ​​із струганих пиломатеріалів.'
}, {
  image: '/assets/images/review.png',
  author: 'Анна Гордієнко',
  stars: 5,
  content: 'Будка підвищеного стандарту з дерева для маленького або середнього собаки. Внутрішня кімната + відчинена веранда. Виготовлена ​​із струганих пиломатеріалів.'
}, {
  image: '/assets/images/review.png',
  author: 'Анна Гордієнко',
  stars: 5,
  content: 'Будка підвищеного стандарту з дерева для маленького або середнього собаки. Внутрішня кімната + відчинена веранда. Виготовлена ​​із струганих пиломатеріалів.'
}, {
  image: '/assets/images/review.png',
  author: 'Анна Гордієнко',
  stars: 5,
  content: 'Будка підвищеного стандарту з дерева для маленького або середнього собаки. Внутрішня кімната + відчинена веранда. Виготовлена ​​із струганих пиломатеріалів.'
}, {
  image: '/assets/images/review.png',
  author: 'Анна Гордієнко',
  stars: 5,
  content: 'Будка підвищеного стандарту з дерева для маленького або середнього собаки. Внутрішня кімната + відчинена веранда. Виготовлена ​​із струганих пиломатеріалів.'
}, {
  image: '/assets/images/review.png',
  author: 'Анна Гордієнко',
  stars: 5,
  content: 'Будка підвищеного стандарту з дерева для маленького або середнього собаки. Внутрішня кімната + відчинена веранда. Виготовлена ​​із струганих пиломатеріалів.'
}];
var posts = data.map(function (review) {
  // Generate the stars HTML
  var stars = Array(review.stars).fill().map(function () {
    return "\n        <div class=\"stars\">\n            <i class=\"bi bi-star-fill\"></i>\n        </div>\n    ";
  }).join(''); // Return the review HTML

  return "\n        <div class=\"col-md-6\">\n            <div class=\"single__review\">\n                <div class=\"review__header\">\n                    <img src=\"".concat(review.image, "\" alt=\"\" />\n                    <h4 class=\"author\">").concat(review.author, "</h4>\n                    ").concat(stars, "\n                </div>\n                <div class=\"review__body\">\n                    <p>\n                        ").concat(review.content, "\n                    </p>\n                </div>\n            </div>\n        </div>\n    ");
});
document.querySelector('#all-reviews').innerHTML = posts.join('\n');