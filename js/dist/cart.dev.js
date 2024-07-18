"use strict";

var cart = [{
  image: '/assets/images/catalog-box-1.jpg',
  type: 'Середня утеплена',
  name: 'Боніта Комфорт',
  size: ['65(ш)', 'x85(д)', 'x85(в)'],
  price: '4900'
}];
var items = cart.map(function (item) {
  var size = item.size.map(function (singleSize) {
    return "\n            <div class=\"single__size\">".concat(singleSize, "</div>\n        ");
  }).join('');
  return "\n        <div class=\"product\">\n            <div class=\"product__image\">\n                <div class=\"cart__image\">\n                    <img src=\"".concat(item.image, "\" alt=\"\" />\n                </div>\n            </div>\n            <div class=\"product__body\">\n                <div class=\"product__info\">\n                    <div class=\"product__type\">").concat(item.type, "</div>\n                    <div class=\"product__name\">\"").concat(item.name, "\"</div>\n                    <div class=\"product__size\">").concat(size, "</div>\n                </div>\n\n                <div class=\"product__details\">\n                    <div class=\"product__quantity\">\n                        <div class=\"product__remove\">-</div>\n                        <div class=\"product__current\">0</div>\n                        <div class=\"product__add\">+</div>\n                    </div>\n                    <div class=\"product__price\">\n                        ").concat(item.price, " \u0433\u0440\u043D\n                    </div>\n                    <div class=\"product__delete\">\n                        <i class=\"bi bi-trash3\"></i> \u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438\n                    </div>\n                </div>\n            </div>\n        </div>\n    ");
});
document.querySelector('#cart').innerHTML = items.join('\n');