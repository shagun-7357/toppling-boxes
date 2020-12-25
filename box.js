class Box{
    constructor(x,y,width,height){
        var box_option = {
            restitution:1
          }
          this.box=Bodies.rectangle(x,y,width,height,box_option);
          this.width=width
          this.height=height
          World.add(world,this.box);
    }
display(){
    push()
    translate(this.box.position.x,this.box.position.y) 
     rotate(this.box.angle) 
    rectMode(CENTER);
    fill("blue")
    rect(0,0,this.width,this.height);
    pop()
}
}