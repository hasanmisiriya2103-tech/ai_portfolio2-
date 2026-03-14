// ===== NETWORK PARTICLE BACKGROUND =====
const networkCanvas = document.getElementById("network");
const networkCtx = networkCanvas.getContext("2d");

networkCanvas.width = window.innerWidth;
networkCanvas.height = window.innerHeight;

let particles = [];
const particleCount = 80;

for (let i = 0; i < particleCount; i++) {
  particles.push({
    x: Math.random() * networkCanvas.width,
    y: Math.random() * networkCanvas.height,
    vx: Math.random() * 1 - 0.5,
    vy: Math.random() * 1 - 0.5
  });
}

function drawNetwork() {
  networkCtx.clearRect(0, 0, networkCanvas.width, networkCanvas.height);

  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > networkCanvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > networkCanvas.height) p.vy *= -1;

    // Draw particle
    networkCtx.beginPath();
    networkCtx.arc(p.x, p.y, 2, 0, Math.PI * 2);
    networkCtx.fillStyle = "cyan";
    networkCtx.fill();

    // Draw connecting lines
    for (let j = i + 1; j < particles.length; j++) {
      let p2 = particles[j];
      let dx = p.x - p2.x;
      let dy = p.y - p2.y;
      let distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 120) {
        networkCtx.beginPath();
        networkCtx.moveTo(p.x, p.y);
        networkCtx.lineTo(p2.x, p2.y);
        networkCtx.strokeStyle = "rgba(0,255,255,0.2)"; // cyan lines
        networkCtx.stroke();
      }
    }
  }

  requestAnimationFrame(drawNetwork);
}

drawNetwork();


// ===== CHATBOT FUNCTION =====
function askBot() {
  let q = document.getElementById("question").value.toLowerCase();
  let response = "";

  if (q.includes("skills"))
    response = "Hasan knows Python, Machine Learning, Data Science and Deep Learning.";
  else if (q.includes("projects"))
    response = "Hasan built Emotion Detection and Credit Scoring ML systems.";
  else if (q.includes("intern"))
    response = "Hasan interned at Future Interns, IntenSIPDS and Digitalytic Technologies.";
  else
    response = "Hasan is an aspiring AI Engineer passionate about Machine Learning.";

  document.getElementById("answer").innerText = response;
}


// ===== MATRIX EFFECT (CYAN THEME) =====
const matrixCanvas = document.getElementById("matrix");
const matrixCtx = matrixCanvas.getContext("2d");

matrixCanvas.width = window.innerWidth;
matrixCanvas.height = window.innerHeight;

let letters = "AI0123456789";
letters = letters.split("");

let fontSize = 14;
let columns = matrixCanvas.width / fontSize;

let drops = [];
for (let x = 0; x < columns; x++) drops[x] = 1;

function drawMatrix() {
  matrixCtx.fillStyle = "rgba(0,0,0,0.05)";
  matrixCtx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);

  matrixCtx.fillStyle = "#00ffff"; // cyan letters
  matrixCtx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    let text = letters[Math.floor(Math.random() * letters.length)];
    matrixCtx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > matrixCanvas.height && Math.random() > 0.975)
      drops[i] = 0;

    drops[i]++;
  }
}

setInterval(drawMatrix, 33);
function showOffer(id) {
  document.getElementById(`offer-${id}`).style.display = 'block';
}

function closeOffer(id) {
  document.getElementById(id).style.display = 'none';
}
setTimeout(function(){
document.getElementById("intro-screen").style.display="none";
},3000);
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer({alpha:true});
renderer.setSize(window.innerWidth,window.innerHeight);

document.getElementById("neural-network").appendChild(renderer.domElement);

const nodes=[];

for(let i=0;i<100;i++){

const geometry=new THREE.SphereGeometry(0.05);

const material=new THREE.MeshBasicMaterial({
color:0x00ffff
});

const node=new THREE.Mesh(geometry,material);

node.position.x=(Math.random()-0.5)*10;
node.position.y=(Math.random()-0.5)*10;
node.position.z=(Math.random()-0.5)*10;

scene.add(node);
nodes.push(node);

}

camera.position.z=5;

function animate(){

requestAnimationFrame(animate);

nodes.forEach(n=>{
n.rotation.x+=0.002;
n.rotation.y+=0.002;
});

renderer.render(scene,camera);

}

animate();