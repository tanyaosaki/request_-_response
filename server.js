const express = require('express');
const app = express();

const goods = [
  { name: "Велотренажер Family FB 25", price: "24900", amount: "35", id: "21135" },
  { name: "Электробритва Panasonic ES-GA21", price: "10499", amount: "85", id: "12564" },
  { name: "Мобильный телефон Poco X3 Pro", price: "24449", amount: "13", id: "324234" },
  { name: "Бойлер Hotpoint-Ariston SGA 200", price: "48000", amount: "8", id: "76541" },
  { name: "Электрокамин Electrolux EFP/W-2000S", price: "29900", amount: "8", id: "65123" },
  { name: "Радиатор отопления Royal Thermo BiLiner Bianco Traffico", price: "15249", amount: "7", id: "93475" },
  { name: "Стиральная машина Indesit IWSB 5085", price: "16037", amount: "25", id: "12334" },
  { name: "Монитор HP X27", price: "17999", amount: "16", id: "32554" },
  { name: "Объектив Nikon 50mm f/1.4G AF-S Nikkor", price: "43080", amount: "38", id: "53441" },
  { name: "Компьютерное кресло Noblechairs Hero", price: "58990", amount: "28", id: "74123" },
];

app.get('/goods/:id', function (req, res) {
  const product = goods.find((product) => product.id === req.params.id);
  if (!product) {
    res.status(404).send('404');
  }
  res.status(200).json(product);
});

app.get('/goods', function(req, res) {
  console.log(req.query.count)
  if(!req.query.count && !req.query.offset){
    res.send(goods);
  } else {
    const count = parseInt(req.query.count);
    const offset = parseInt(req.query.offset);
    res.send({ goods: goods.slice(offset, offset + count), count: goods.length });
  }
})

app.listen(4005, function () {
  console.log('Example app listening on port 4005!');
});