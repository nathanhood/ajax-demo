'use strict';

exports.dice = (req, res)=>{
  res.render('dice/onedie', {title: 'Roll!'});
};

exports.roll = (req, res)=>{
  var number = Math.ceil(Math.random() * 6);
  res.send({side: number});
};

exports.pairs = (req, res)=>{
  res.render('dice/twodie', {title: 'Roll!'});
};

exports.roll2 = (req, res)=>{
  var number = Math.ceil(Math.random() * 6);
  var number2 = Math.ceil(Math.random() * 6);
  var winner;
  if(number === number2){
    winner = 'You Won!';
  }else{
    winner = 'You Lost!';
  }
  res.send({side1: number, side2: number2, winner: winner});
};
