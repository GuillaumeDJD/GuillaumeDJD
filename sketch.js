let largeur = 20
 let haiteur = 20
 const minLargeur = 20;
  const maxLargeur = 40;
  const minHauteur = 20
  const maxHauteur = 40
 let gettingLarger = true;
 let gettingHigher = true;

 function setup() {
   createCanvas(1265, 670);
   background(240);
 }

 function draw() {
     ellipse(20, 20, largeur, hauteur);
     fill(35,30,98);
 } 

 if(gettingLarger){
   largeur = largeur + 2;    
 }else{
   largeur = largeur - 2;
 }
 if(gettingLarger){
   hauteur = hauteur + 2;    
 }else{
  hauteur = hauteur - 2;
 }

 if(largeur < minLargeur){
   gettingLarger = true;   
 }else if(largeur > maxLargeur){
   gettingLarger = false;
 }
 if(hauteur < minHauteur){
   gettingHigher = true;   
 }else if(hauteur > maxHauteur){
   gettingHigher = false;
 }  