const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const damageDragon = () => {
  const dano = Math.floor(Math.random() * (50 - 15) + 15)
  battleMembers.dragon.damage = dano
  battleMembers.mage.healthPoints -= dano
  battleMembers.warrior.healthPoints -= dano
  console.log(`O dragão causou ${dano} de dano ao Warrior e Mage
Vida atual do Warrior ${battleMembers.warrior.healthPoints}
Vida atual do Mage: ${battleMembers.mage.healthPoints}`)
}

const damageWarrior = () => {
    const dano = Math.floor(Math.random() * (60 - 30) + 30)
    battleMembers.warrior.damage = dano
    battleMembers.dragon.healthPoints -= dano
    console.log(`O warrior causou ${dano} de dano ao Dragão
Vida atual: ${battleMembers.dragon.healthPoints}`)
    console.log()
    return dano
}

const damageMage = () => {
    if (battleMembers.mage.mana < 15) {
      console.log('Mana insuficiente!')
      console.log()
    } else {
      const dano = Math.floor(Math.random() * (90 - 45) + 45)
      battleMembers.mage.mana -= 15
      battleMembers.mage.damage = dano
      battleMembers.dragon.healthPoints -= dano
      console.log(`O mage causou ${dano} de dano ao Dragão
Vida atual: ${battleMembers.dragon.healthPoints}
O mago ainda tem ${battleMembers.mage.mana} de mana!`)
      console.log()
    }
}

const resultado = () => {
  console.log()
  console.log('=== Resultado do turno ===')
  console.log()
  console.log(battleMembers)
  console.log()

}

const turno = (i) => {
  console.log(`Inicio do turno ${i}!`)
  console.log()

  let gameActions = {
    warrior: damageWarrior(),
    mage: damageMage(),
    dragon: damageDragon(),
    resultadoDoTurno: resultado()
  };
}

for (let i = 1; i < 100; i += 1) {
  if (battleMembers.mage.healthPoints <= 0) {
    console.log("O mago morreu, portanto o Dragão ganhou!!")
    i = 150
  } else if (battleMembers.warrior.healthPoints <= 0) {
    console.log("O Warrior morreu, portanto o Dragão ganhou!!")
    i = 150
  } else if (battleMembers.dragon.healthPoints <= 0) {
    console.log("O Dragão morreu, portanto o Warrior e o Mage ganharam!!")
    i = 150
  } else {
    turno(i)
  }
}