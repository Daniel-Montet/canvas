var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');


//line
// ctx.beginPath();
// ctx.moveTo(50, 300);
// ctx.lineTo(300,100)
// ctx.stroke();


//multiple circles/ archs
// colors  = ['red', 'blue' , 'green','orange', 'violet','pink', 'brown',]

// for (i=0; i< 100; i++){
//     var x = Math.random() *  window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     ctx.beginPath();
//     ctx.arc(x,y, 30, 0, Math.PI * 2, false);
//     color= colors[Math.floor(Math.random() * 100)]
//     ctx.strokeStyle= color;
//     ctx.stroke();
// }

//moving circle/arch
// var mouse = {
//     x:undefined,
//     y:undefined
// }

// maxRadius = 40;
// minRadius = 2;
// colors  = ['#044BD9', '#0583F2' , '#05AFF2','#05DBF2', '#BF5D39']

// window.addEventListener('mousemove',
//     function(event){
//         mouse.x = event.x;
//         mouse.y = event.y;
//         console.log(mouse)
// })

// window.addEventListener('resize', function(event){
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     init();
// })

// function Circle(x, y, dx,dy,radius) {
//     this.x = x;
//     this.y = y;
//     this.dx = dx;
//     this.dy = dy;
//     this.radius = radius
//     this.minRadius = radius
//     this.color = colors[Math.floor(Math.random() * colors.length)]

//     this.draw = () => {
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//         ctx.fillStyle = this.color;
//         ctx.fill();
//     }

//     this.update = () => {

//         if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
//             this.dx = -this.dx
//         }
//         if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
//             this.dy = -this.dy
//         }
    
//         this.x += this.dx
//         this.y += this.dy

//         //interacticity
//         if(mouse.x - this.x <50 && mouse.x - this.x > -50
//             && mouse.y - this.y <50 && mouse.y - this.y > -50
//             ){
//             if (this.radius < maxRadius){
//                 this.radius += 1
//             }
//         }
//         else if (this.radius > this.minRadius){
//             this.radius -= 1
//         }


//         this.draw();
//     }

// }
// var circles_array = [];

// function init(){
//     circles_array = [];

//     for (i=0; i<800; i++){
//         var radius = Math.random() * 5 + 1;
//         var x = Math.random() * (innerWidth - radius*2)+ radius;
//         var y = Math.random() * (innerHeight - radius*2)+ radius;
//         var dx = (Math.random()-0.5)
//         var dy = (Math.random()-0.5)
//         var circle = new Circle(x, y, dx, dy, radius);
//         circles_array.push(circle)
            
//     }
    
// }

// function animate() {
//     requestAnimationFrame(animate);
//     ctx.clearRect(0, 0, innerWidth, innerHeight)
//     for (var i =0; i< circles_array.length; i++){
//         circles_array[i].update()
//     }
    
    
// }

// animate();
// init();




function rectangles(x,y,height,width){
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;

    this.draw = () => {
        ctx.strokeRect(this.x,this.y,this.height,this.width);
        ctx.stroke();
    }
}