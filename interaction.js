
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
    this.initX = 0;
    this.initY = 0;
    this.finalX = 0;
    this.finalY = 0;
    this.press = false;
    this.finish = true;
	// Définir ici les attributs de la 'classe'
    this.canvas = canvas;

    this.interactor = interactor;
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
	// Developper les 3 fonctions gérant les événements
    this.maFctGerantLaPression = function(evt){
        this.press = true;
        this.initX = getMousePosition(this.canvas,evt).x;
        this.initY = getMousePosition(this.canvas,evt).y;
        this.finalX = getMousePosition(this.canvas,evt).x;
        this.finalY = getMousePosition(this.canvas,evt).y;
        this.interactor.onInteractionStart(this);

    }.bind(this);

    this.maFctGerantLeDeplacement = function (evt){
        if(this.press){
            this.finalX = getMousePosition(this.canvas,evt).x;
            this.finalY = getMousePosition(this.canvas,evt).y;
            this.interactor.onInteractionUpdate(this);
        }

    }.bind(this);

    this.maFctGerantLaRelachement = function(evt){
        this.press = false;
        this.finalX = getMousePosition(this.canvas,evt).x;
        this.finalY = getMousePosition(this.canvas,evt).y;
        this.interactor.onInteractionEnd(this);
    }.bind(this);
	// Associer les fonctions précédentes aux évènements du canvas.
    canvas.addEventListener('mousedown',this.maFctGerantLaPression,false);
    canvas.addEventListener('mousemove',this.maFctGerantLeDeplacement,false);
    canvas.addEventListener('mouseup',this.maFctGerantLaRelachement,false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};





