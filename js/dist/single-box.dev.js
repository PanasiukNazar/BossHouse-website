"use strict";

var info = [{
  id: 1,
  images: ['/assets/images/box-info/single-box-1.1.jpg', '/assets/images/box-info/single-box-1.2.jpg', '/assets/images/box-info/single-box-1.3.jpg', '/assets/images/box-info/single-box-1.4.jpg', '/assets/images/box-info/single-box-1.5.jpg'],
  type: 'Середня утеплена',
  name: 'Боніта Комфорт',
  available: true,
  size: {
    small: ['65(ш)', 'x85(д)', 'x85(в)'],
    big: ['75(ш)', 'x105(д)', 'x105(в)']
  },
  price: '4900',
  description: ['Виготовлена з сухої соснової дошки стикованої в четверть.', 'Утеплена зі всіх сторін, включно з дахом і підлогою.', 'Накрита рубероїдом. ', 'Без гострих кутів.', 'На пластикових опорах.', 'Передбачено зручний доступ через дах.', 'Фарбована в 2 шари.', 'Силіконова шторка в комплекті.']
}];
var boxes = info.map(function (singleBox) {
  var images = singleBox.images.map(function (image) {
    return "\n                <img src=\"".concat(image, "\" alt=\"\" />\n            ");
  }).join('');
  var description = singleBox.description.map(function (item) {
    return "\n            <div class=\"description__item\">\n                <img src=\"/assets/images/icons/paw-icon.png\" alt=\"\" />\n                <span>".concat(item, "</span>\n            </div>\n        ");
  }).join('');
  var isAvailable = "singleBox.available\n        ? <p style=\"color: '#45BA89'\">'\u0412 \u041D\u0430\u044F\u0432\u043D\u043E\u0441\u0442\u0456'</p>\n        : <p style=\"color: '#FF0000'\">'\u041D\u0435\u043C\u0430\u0454 \u0412 \u041D\u0430\u044F\u0432\u043D\u043E\u0441\u0442\u0456'</p>";
  return "\n    <div class=\"col-md-6\">\n        <div class=\"images__slider\">\n            <div class=\"preview__image\">\n                ".concat(images, "\n            </div>\n        </div>\n        <div class=\"delivery__content\">\n            <div class=\"price\">\n                ").concat(singleBox.price, " <span class='currency'>\u0433\u0440\u043D</span>\n            </div>\n            <div class=\"memo\">\n                <img src=\"/assets/images/icons/delivery-icon.png\" alt=\"\" />\n                <div class=\"delivery__info\">\n                    <h4>\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u043F\u043E \u0423\u043A\u0440\u0430\u0457\u043D\u0456</h4>\n                    <span>\u0437\u0430 \u0442\u0430\u0440\u0438\u0444\u0430\u043C\u0438 \u043F\u0435\u0440\u0435\u0432\u0456\u0437\u043D\u0438\u043A\u0430 \u0432 \u043C\u0435\u0436\u0430\u0445 200 - 400 \u0433\u0440\u043D</span>\n                </div>\n            </div>\n        </div>\n        <div class=\"box__description\">\n            <h5>\u041E\u043F\u0438\u0441</h5>\n            ").concat(description, "\n        </div>\n    </div>\n\n\n    <div class=\"col-md-6\">\n        <div class=\"single__header\">\n            <div class=\"single__type\">\n                <p>").concat(singleBox.type, "</p>\n                <h3>").concat(singleBox.name, "</h3>\n            </div>\n            <div>\n                ").concat(isAvailable, "\n            </div>\n        </div>\n    </div>\n");
});
document.querySelector('#box-info').innerHTML = boxes.join('\n');