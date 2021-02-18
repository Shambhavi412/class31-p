class Umbrella {

    constructor (x,y){
  
        var options = {
            isStatic:true,
            //restitution:0.3,
           // friction:0.6,
           }
  
        this.body = Bodies.circle (x,y,50,options);
        this.radius = 50;
        this.image = loadImage("images/Walking Frame/walking_1.png")
        World.add(world,this.body);
        //images/Walking Frame/walking_1.png,walking_2.png,walking_3.png,walking_4.png,walking_5.png,walking_6.png,walking_7.png,walking_8.png"
    }
  
    display(){
  
        var pos = this.body.position;
        var angle = this.body.angle;
       
        
        imageMode(CENTER);
       image(this.image,pos.x,pos.y+30,200,200);
  
  
      
    
    }

}
  
  