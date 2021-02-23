
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing () {
    this.forms = new Array();
    this.getForms = function()  {
        return this.forms;
    }.bind(this);

    this.addForms = function(form){
        this.forms.push(form);
    }.bind(this);


    //Supprimer la forme de la liste de formes
    this.removeForm = function(index) {
        this.forms.splice(index,1);
    }.bind(this);


    //Fonction qui etourne la liste des formes
    this.getForms = function(){
        return this.forms;
    }.bind(this);
}


function MyForm(initX,initY,finalX,finalY,epaisseur,couleur) {
    this.initX = initX;
    this.initY = initY;
    this.finalX = finalX;
    this.finalY = finalY;
    this.epaisseur = epaisseur;
    this.couleur = couleur;

    this.getInitX = function() {
        return   this.initX;
    }.bind(this) ;

    this.getInitY = function() {
        return   this.initY;

    }.bind(this) ;
    this.getFinalX = function() {
        return   this.finalX;

    }.bind(this) ;
    this.getFinalY = function() {
        return   this.finalY;

    }.bind(this) ;

    this.getEpaisseur = function() {
        return   this.epaisseur;

    }.bind(this) ;

    this.getCouleur = function() {
        return   this.couleur;
    }.bind(this) ;

}

function Line(initX,initY,finalX,finalY,epaisseur,couleur){
    MyForm.call(this, initX,initY,finalX,finalY,epaisseur,couleur);
};
Line.prototype = new MyForm();

function Rectangle(initX,initY,finalX,finalY,epaisseur,couleur){
    MyForm.call(this, initX,initY,finalX,finalY,epaisseur,couleur);
};
Rectangle.prototype = new MyForm();

function Circle(initX,initY,rayon,epaisseur,couleur){
    MyForm.call(this, initX,initY,0,0,epaisseur,couleur);
    this.rayon = rayon;
    this.getRayon = function(){
        return this.rayon;
    }.bind(this);
};
Circle.prototype = new MyForm();