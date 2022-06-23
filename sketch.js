var student1
function setup() {
  createCanvas(400,400);
  student1 = new Student("john",12,6);

}

function draw() 
{
  background(30);
  student1.display();
}