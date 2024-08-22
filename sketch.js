//variaveis da bolinha

let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2 ;

//velocidade da bolinha

let VelocidadeXBolinha = 6;
let VelocidadeYBolinha = 6;

//variaveis da raquete

let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBordas();
   mostraRaquete();
  movimentaMinhaRaquete();
   }

 function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro); 
 }

 function movimentaBolinha(){
   xBolinha  += VelocidadeXBolinha;
  yBolinha += VelocidadeYBolinha;
 }

 function verificaColisaoBordas(){
   if (xBolinha + raio > width ||
      xBolinha - raio < 0){
    VelocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height ||
     yBolinha - raio < 0){
    VelocidadeYBolinha *= -1;
  }
 }

function mostraRaquete(){
  rect(xRaquete ,yRaquete , raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}