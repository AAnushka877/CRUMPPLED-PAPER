class paper
{
    constructor(x,y,radius)
    {
        var options={
            isStatic: false,
            restituition: 0.03,
            friction:0.5,
            density: 1.2
        }
        this.image = loadImage("paper.png");
       
       
        
        this.body=Bodies.circle(x,y,radius, options);
        this.x=x;
        this.y=y;
        this.r = radius;
         World.add(world, this.body);
         
         
    }
    display()
    {
        
        ellipseMode(RADIUS);

        var paperPos=this.body.position;		

        circle(paper.position.x,paper.position.y,paper.radius);
       
    }
}