class Ground{
  constructor(){
    var ground_option={
        isStatic:true
      }
     this.ground = Bodies.rectangle(200,390,400,10,ground_option);
      World.add(world,this.ground);
  }
  display(){
    rectMode(CENTER);
    fill("black")
    rect(this.ground.position.x,this.ground.position.y,400,10);
  }
}