class Drop {

    constructor (x,y){
  
        var options = {
            isStatic:false,
            //restitution:0.3,
            friction:0.1,
           }
  
        this.body = Bodies.circle (x,y,3.5,options);
        World.add(world,this.body);
        this.radius = 3.5;
        
    }
  
    display(){
  
        var pos = this.body.position;
        var angle = this.body.angle;
       
        push();
        
        translate(pos.x,pos.y);
        rotate(angle);
        
        fill("blue");
        ellipseMode(RADIUS);
       ellipse(0,0,this.radius,this.radius);
  
       pop();
  
      
    
    }

    resetPosition(){
        if(this.body.position.y > height)
        {
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
        }
  
    }
  
    
}

  
  