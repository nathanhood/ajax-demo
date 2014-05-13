'use strict';

var traceur = require('traceur');
var dbg = traceur.require(__dirname + '/route-debugger.js');
var initialized = false;

module.exports = (req, res, next)=>{
  if(!initialized){
    initialized = true;
    load(req.app, next);
  }else{
    next();
  }
};

function load(app, fn){
  var home = traceur.require(__dirname + '/../routes/home.js');
  var calc = traceur.require(__dirname + '/../routes/calc.js');
  var dice = traceur.require(__dirname + '/../routes/dice.js');
  var cards = traceur.require(__dirname + '/../routes/cards.js');

  app.get('/', dbg, home.index);
  app.get('/help', dbg, home.help);

  app.get('/sum', dbg, calc.addition);
  app.post('/sum', dbg, calc.sum);

  app.get('/power', dbg, calc.power);
  app.post('/power', dbg, calc.pow);

  app.get('/sumlist', dbg, calc.sumList);
  app.post('/sumlist', dbg, calc.sumAll);

  app.get('/dice', dbg, dice.dice);
  app.post('/dice', dbg, dice.roll);

  app.get('/pairs', dbg, dice.pairs);
  app.get('/pairs/roll', dbg, dice.roll2);

  app.get('/card', dbg, cards.oneCard);
  app.get('/card/deal', dbg, cards.deal);

  app.get('/cards', dbg, cards.cards);
  app.get('/cards/deal', dbg, cards.dealHand);

  console.log('Routes Loaded');
  fn();
}
