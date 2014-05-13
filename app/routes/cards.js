'use strict';

var _ = require('lodash');

exports.oneCard = (req, res)=>{
  res.render('cards/onecard', {title: 'Deal!'});
};

exports.deal = (req, res)=>{
  var cardType = Math.floor(Math.random() * 13) * -92;
  var cardFamily = Math.floor(Math.random() * 4) * -123;

  res.send({cardType: cardType, cardFamily: cardFamily});
};

exports.cards = (req, res)=>{
  res.render('cards/cards', {title: 'Deal!'});
};

exports.dealHand = (req, res)=>{
  var cards = _.range(0, 52);
  var hand = _(cards).sample(5).value();
  var handPos = hand.map(c=>{
    
  });
  console.log('-------------------');
  console.log(hand);

  // console.log(cards);
  // for(var i = 0; i > 5; i++){
  //   Math.floor(Math.random() * 13) * -92;);
  // }

  // var cardType = [];
  // var cardFamily = [];
  // for(var i = 0; i > 5; i++){
  //   cardType.push(Math.floor(Math.random() * 13) * -92;);
  // }
  // for(var i = 0; i > 5; i++){
  //   cardFamily.push(Math.floor(Math.random() * 4) * -123);
  // }
};
