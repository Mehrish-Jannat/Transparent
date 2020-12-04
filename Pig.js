class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.transparent = 255
  }

  //tint(color(255 : no change in image color), transperancy(0-255))
  //if transperancy is 255 = completely visible
//if transperancy is 0 = completely invisible
display(){
  if(this.body.speed<3){
    super.display()
  }
  else{
    World.remove(world,this.body)
    //255,250,245,240....0
    push()
    this.transparent = this.transparent-5
    tint(255,this.transparent)
    image(this.image,this.body.position.x,this.body.position.y,50,50)
    pop()
  }
}
};