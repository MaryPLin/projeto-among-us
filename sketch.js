var amongus1, yellow, cyan, purple, red;
var amongus2;

//carregar as imagens
function preload(){
    yellow = loadImage("among us - amarelo.png");
    cyan = loadImage("among us - ciano.png");
    purple = loadImage("among us - roxinho.png");
    red = loadImage("among us - vermelho.png");
}

//inicializa variaveis/executa uma vez
function setup(){
    createCanvas(1200,800);

    amongus1 = createSprite(300,150,50,50);
    amongus1.addImage("amarelo", yellow);
    amongus1.scale = 2;

    amongus1.addImage("roxinho", purple);

    amongus2 = createSprite(550,300,50,50);
    amongus2.addImage("ciano", cyan);
    amongus2.scale = 2;

    amongus2.addImage("vermelho", red);
}

function draw(){
    background("black");

    amongus1.x = Word.mouseX;
    amongus1.y = word.mouseY;

    if (amongus1.x - amongus2.x < amongus2.width / 2 + amongus1.width / 2
        && amongus2.x - amongus1.x < amongus2.width / 2 + amongus1.width / 2
        && amongus1.y - amongus2.y < amongus2.height / 2 + amongus1.height / 2
        && amongus2.y - amongus1.y < amongus2.height / 2 + amongus1.height / 2) {
            amongus1.changeImage = ("purple");
            amongus2.changeImage = ("red");
  }
   // else{
   //     yellow.addImage = "yellow";
   //     cyan.addImage = "cyan";
   // }

    drawSprites();
}