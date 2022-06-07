type Point = {
  x: number;
  y: number;
};


function printCoord(cord: Point) {
  console.log("O valor da cordenada x é: " + cord.x);
  console.log("O valor da coordenada y é: " + cord.y);
}

printCoord({ x: 100, y: 100 });
//saída:
//O valor da cordenada x é: 100
//O valor da cordenada y é: 100