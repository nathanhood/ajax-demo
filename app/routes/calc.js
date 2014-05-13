'use strict';

exports.addition = (req, res)=>{
  res.render('calc/addition', {title: 'Get Sum!'});
};

exports.sum = (req, res)=>{
  var answer = (req.body.num1 * 1) + (req.body.num2 * 1);//accessing jquery request from browser
  res.send({sum: answer});//sends objects instead of rendering whole documentation
};

exports.power = (req, res)=>{
  res.render('calc/power', {title: 'Get Power!'});
};

exports.pow = (req, res)=>{
  var answer = Math.pow((req.body.num1 * 1), (req.body.num2 * 1));
  res.send({power: answer});
};

exports.sumList = (req, res)=>{
  res.render('calc/sumlist', {title: 'Get Sum!'});
};

exports.sumAll = (req, res)=>{
  var answer = req.body.numbers.split(',').reduce(function(a,b){
    return (a * 1) + (b * 1);
  });

  res.send({sumAll: answer});
};
