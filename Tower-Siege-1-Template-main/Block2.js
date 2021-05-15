class Block2{
   
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      //translate(this.body.position.x, this.body.position.y);
      translate(pos.x, pos.y)
      rotate(angle);
      rectMode(CENTER);
      fill("Red");
      rect(0, 0, this.width, this.height);
      
      pop();
    }
  };
