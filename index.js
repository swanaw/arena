// create a program that has 10 gladiators, and there is a mysterious god that selects two random
//gladiators to fight, only one winner emerges and the loser is eliminated.

//10 gladiators (array of strings)
const gladiators = ['Spatacus', 'Dominos', 'Tim', 'Stoopio', 'Randy', 'Bruv', 'Rocky', 'Rambo', 'Swana', 'Jay'];
//god to summon two random ones
//console.log('WINNER ==>', gladiators[0]);






const fight = (a, b) => {
  //eliminate the looser
  //way to determine the winner
  const eliminate = Math.random() > 0.5 ? a : b;
  //returns the looser of the gladiator
  return eliminate;
}

//got to summon two random gladiators
const summonGladiators = () => {
  let RG = gladiators.length;
  const length = gladiators.length;

  for(let i = 1; i < length; i++){
    //console.log('REMAINING GLADIATOR', RG);
    //two random gladiators
    const a = Math.floor(Math.random() * RG);
    const b = Math.floor(Math.random() * RG);

    //console.log('fighters =>',gladiators[a], 'VS', gladiators[b]);

    const looser = fight(a, b);
    gladiators.splice(looser, 1);
    RG --;
  }
  //everyone fights anad we have champion
  console.log('**** WINNER ==>', gladiators);
  return gladiators;
}

//Invoke our gladiator god
//const howManyFights = (num) => {
 // let i = 0;
 // while(i < num){
summonGladiators();
  //  i++;
  //}

//}

//specify how many fights we want
//howManyFights(10);
//const summonGladiaors = (a, b) => {

//}
