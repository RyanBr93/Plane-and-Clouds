const canvas = document.getElementById("canvas1")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let particlesArray = []
let clouds = []
let trail = []

const plane = new Image()
plane.src = "plane.png"
let x = 0



window.addEventListener('resize', function(){
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})

class Cloud{
    constructor(){
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
    }
}

class Particle {
    constructor(){
        this.x = null
        this.y = null
        this.size = Math.random() * 25 + 1
        this.color = "rgba(255, 255, 255, 0.8)"
    }
    draw(){
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI *2)
        ctx.shadowColor = "rgba(255, 255, 255, 0.8)"
        ctx.shadowBlur = 50;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.fill()
        
    }
}

function cloudCreater(){
    for (let i = 0; i < 20; i++){
        clouds.push(new Cloud)
        for (let j = 0; j < 50; j++){ 
            particlesArray.push(new Particle)
            particlesArray[j].x = clouds[i].x - Math.random() * 50
            particlesArray[j].y = clouds[i].y - Math.random() * 50
            particlesArray[j].draw()
        }
    } 
}

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    cloudCreater()
    if (x === canvas.width){
        x = 0
        ctx.drawImage(plane, x ,canvas.height/6, 150, 100)
        x += 15
        requestAnimationFrame(animate)
    } else {
    ctx.drawImage(plane, x ,canvas.height/6, 150, 100)
    x += 15
    requestAnimationFrame(animate)
    }
}
animate()



