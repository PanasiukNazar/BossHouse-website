"use strict";

var catalog = [{
  image: '/assets/images/catalog-box-1.jpg',
  type: 'Середня утеплена',
  name: 'Боніта Комфорт',
  size: ['65(ш)', 'x85(д)', 'x85(в)'],
  price: '4900'
}, {
  image: '/assets/images/catalog-box-2.jpg',
  type: 'Середня',
  name: 'Боніта Стандарт',
  size: ['65(ш)', 'x85(д)', 'x85(в)'],
  price: '2900'
}, {
  image: '/assets/images/catalog-box-1.jpg',
  type: 'Велика утеплена',
  name: 'Боніта Комфорт',
  size: ['75(ш)', 'x105(д)', 'x105(в)'],
  price: '6900'
}, {
  image: '/assets/images/catalog-box-2.jpg',
  type: 'Велика',
  name: 'Боніта Стандарт',
  size: ['75(ш)', 'x105(д)', 'x105(в)'],
  price: '3500'
}, {
  image: '/assets/images/catalog-box-3.jpg',
  type: 'Середня утеплена',
  name: 'Бос Комфорт',
  size: ['65(ш)', 'x85(д)', 'x85(в)'],
  price: '6200'
}, {
  image: '/assets/images/catalog-box-3.jpg',
  type: 'Середня',
  name: 'Бос Стандарт',
  size: ['65(ш)', 'x85(д)', 'x85(в)'],
  price: '3500'
}, {
  image: '/assets/images/catalog-box-4.jpg',
  type: 'Велика утеплена',
  name: '"Бос Комфорт"',
  size: ['65(ш)', 'x120(д)', 'x65(в)'],
  price: '6200'
}, {
  image: '/assets/images/catalog-box-4.jpg',
  type: 'Велика',
  name: 'Бос Стандарт',
  size: ['65(ш)', 'x120(д)', 'x65(в)'],
  price: '3500'
}];
var boxes = catalog.map(function (box) {
  var size = box.size.map(function (singleSize) {
    return "\n                <div class=\"single__size\">".concat(singleSize, "</div>\n            ");
  }).join('');
  return "\n        <div class=\"col-md-6\">\n            <div class=\"box\">\n                <div class=\"row\">\n                    <div class=\"col-md-5\">\n                        <div class=\"box__image\">\n                            <img src=\"".concat(box.image, "\" alt=\"\" />\n                        </div>\n                    </div>\n                    <div class=\"col-md-7\">\n                        <div class=\"box__body\">\n                            <div class=\"header\">\n                                <div class=\"box__type\">\n                                    <p>").concat(box.type, "</p>\n                                    <h4>\"").concat(box.name, "\"</h4>\n                                </div>\n                                <div class=\"add-to-card\">\n                                    <i class=\"bi bi-heart\"></i>\n                                    <i class=\"bi bi-heart-fill\" style=\"display: none\"></i>\n                                </div>\n                            </div>\n                            <div class=\"box__size\">\n                                <p class=\"title\">\u0420\u043E\u0437\u043C\u0456\u0440:</p>\n                                <div class=\"size__items\">\n                                    ").concat(size, "\n                                </div>\n                            </div>\n                            <div class=\"box__price\">\n                                <p class=\"title\">\u0426\u0456\u043D\u0430:</p>\n                                <div class=\"price\">\n                                    ").concat(box.price, " <span class='currency'>\u0433\u0440\u043D</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ");
});
document.querySelector('#catalog').innerHTML = boxes.join('\n');