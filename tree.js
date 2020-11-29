class Tree{
    constructor(x,y){
        var options = {
            isStatic:true
        }
        this.x=x;
		this.y=y;
        this.image = loadImage("tree.png");
    }
    display(){
        imageMode(CENTER);
		image(this.image,this.x, this.y,800,800);
    }
}