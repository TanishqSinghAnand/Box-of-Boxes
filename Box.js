class Box{
  constructor(x, y, width, height){
      this.body = Bodies.rectangle(x, y, width, height);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      
  }
  display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      var boxcolor = ["red","green","blue","#FF6600","#E6FB04","#33FF00","#0033FF","#CC00FF","#6E0DD0"];
      var no = Math.random(0,8);
      fill("#6E0DD0");
      rect(0, 0, this.width, this.height);
      pop();
  }
}