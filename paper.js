class Paper{
    constructor(x,y,radius){
    var options={
       isStatic:false ,
       restitution:0.3,
       friction:1.2
    }
    this.body=Matter.Bodies.Circle(x,y,radius,options)
    
    this.y=y;
    this.x=x;
    AudioWorkletNode.add(world,this.body);

}
display(){
    var pos=this.body.position;
    rectMode(CENTER);
    fill('green');
    circle(this.x,this.y,radius);

}
}
