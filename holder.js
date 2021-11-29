const canvas = document.getElementById("canvas1")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let particlesArray = []
let clouds = []

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
        this.colour = "white"
    }
}

class Particle {
    constructor(){
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 15 + 1
        this.speedX = Math.random() * 3 - 1.5
        this.speedY = Math.random() * 3 - 1.5
        this.color = "rgba(255, 255, 255, 0.8)"
    }
    update(){
        this.x += this.speedX
        this.y += this.speedY
        if (this.size > 0.2) this.size -= 0.1
    }
    draw(){
        ctx.translate(Math.random() * 2, Math.random() * 2);
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI *2)
        ctx.fill()
        
    }
}



function init(){
    for (let i = 0; i < 20; i++){
        clouds.push(new Cloud)
        for (let j = 0; j < 20; j++){ 
            particlesArray.push(new Particle)
            particlesArray[j].x = clouds[i].x + Math.random() * 40
            particlesArray[j].y = clouds[i].y + Math.random() * 40
            particlesArray[j].update() 
            particlesArray[j].draw()
        }
    }
    
    
}

init()

function animate(){
    // this is causing the square
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(plane, x ,0, 150, 100)
    x++
    requestAnimationFrame(animate)
}
animate()

