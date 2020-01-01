class Person {
  constructor(name, type) {
    this.name = name,
    this.type = type,
    this.health = 50,
    this.level = 1,
    this.attack = 40,
    this.defence = 10
  }
}

class Team {
  constructor(...args) {
    this.team = args;
  }

  [Symbol.iterator]() {
    let i = 0;
    let current = this.team[i];
    let last = this.team[this.team.length]
    const iterator = {
      next() {
        if (current <= last) {
          return 
            {
              done: false,
              value: current++
            };
        } else {
          return
            {
              done: true
            };
        }
      }
    }
    return iterator;
  }
  

}

const bowman = new Person('Лучник', 'Bowman');
const warrior = new Person('Воин', 'Swordsman');
const mage = new Person('Маг', 'Magician');

const newTeam = new Team(bowman, warrior, mage);

