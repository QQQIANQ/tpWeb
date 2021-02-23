function Pencil(ctx, drawing, canvas) {
	this.currentShape = 0;
	this.ctx = ctx;
	this.circle = false;
	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);


	this.onInteractionStart = function(dnd) {
		if (document.getElementById("butRect").checked){
			this.currentShape  = new Rectangle(dnd.initX,dnd.initY,dnd.finalX,dnd.finalY,
				document.getElementById("spinnerWidth").value, document.getElementById("colour").value);

		}else if (document.getElementById("butLine").checked){
			this.currentShape  = new Line(dnd.initX,dnd.initY,dnd.finalX,dnd.finalY,
				document.getElementById("spinnerWidth").value, document.getElementById("colour").value);
		}
		else if (document.getElementById("butCircle").checked){
			var abPow = Math.pow(Math.abs(dnd.initX-dnd.finalX),2);
			var acPow = Math.pow(Math.abs(dnd.initY-dnd.finalY),2);
			var rayon = Math.sqrt(abPow + acPow);

			this.currentShape = new Circle(dnd.initX,dnd.initY,rayon,
				document.getElementById("spinnerWidth").value, document.getElementById("colour").value);
			this.circle = true;
		}
		else{
			this.currentShape.paint(ctx, canvas);
		}



	}.bind(this) ;

	this.onInteractionUpdate = function(dnd) {
		if (this.currentShape != 0 && !this.circle){
			this.currentShape.finalX = dnd.finalX;
			this.currentShape.finalY = dnd.finalY;

		}

		else if(this.currentShape != 0&&this.circle){

			var abPow = Math.pow(Math.abs(dnd.initX-dnd.finalX),2);
			var acPow = Math.pow(Math.abs(dnd.initY-dnd.finalY),2);
			var rayon = Math.sqrt(abPow + acPow);

			this.currentShape = new Circle(dnd.initX,dnd.initY,rayon,
				document.getElementById("spinnerWidth").value, document.getElementById("colour").value);


		}
		//this.currentShape.clear(this.ctx)
		drawing.paint(this.ctx);
		this.currentShape.paint(this.ctx);

	}.bind(this) ;

	this.onInteractionEnd = function(dnd) {
		if (this.currentShape != 0 && !this.circle){
			this.currentShape.finalX = dnd.finalX;
			this.currentShape.finalY = dnd.finalY;
		}
		else if(this.currentShape != 0&&this.circle){

			var abPow = Math.pow(Math.abs(dnd.initX-dnd.finalX),2);
			var acPow = Math.pow(Math.abs(dnd.initY-dnd.finalY),2);
			var rayon = Math.sqrt(abPow + acPow);

			this.currentShape = new Circle(dnd.initX,dnd.initY,rayon,
				document.getElementById("spinnerWidth").value, document.getElementById("colour").value);
			this.circle = false;
		}
		this.currentShape.clear(this.ctx)
		drawing.addForms(this.currentShape);
		drawing.paint(this.ctx);
		drawing.updateShapeList(this.currentShape);
		this.currentShape = null;

	}.bind(this) ;


	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
};
