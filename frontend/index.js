const canvas = document.getElementById("canvas");
// telling browser that i wanna draw 2d
src = "https://cdn.jsdelivr.net/npm/delaunator@5.0.0/delaunator.min.js"
const ctx = canvas.getContext("2d");
// console.log(ctx,typeof ctx) //object- many properties i can use
ctx.fillStyle = "#fff364";

const img = new Image();
img.src = "download (4).jpg";
const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
let points = [];
img.onload = ()=>{
    canvas.width = img.width;
    canvas.height = img.height;

    ctx.drawImage(img, 0,0);
    // we will perform operation on these points - effect
    for(let i =0 ; i<3000 ; i++){   //lets experiment with 3000 points at first
    let x = Math.floor(Math.random()*canvas.width)    // some points on x axisis
    let y =  Math.floor(Math.random()*canvas.height)   //some points from y axis
    points.push([x,y]);
    }
}

points.push([0, 0], [canvas.width, 0], [canvas.width, canvas.height], [0, canvas.height]);
// Create triangles
const delaunay = Delaunator.from(points); //take these points
const triangles = delaunay.triangles;   //make trinagles
for (let i = 0; i < triangles.length; i += 3) {

    const p1 = points[triangles[i]];      //3 corners of triangle
    const p2 = points[triangles[i + 1]];
    const p3 = points[triangles[i + 2]];

    const cx = Math.floor((p1[0] + p2[0] + p3[0]) / 3);
    const cy = Math.floor((p1[1] + p2[1] + p3[1]) / 3);    //find trinangle center
    const index = (cy * canvas.width + cx) * 4;

    const r = imageData.data[index];
    const g = imageData.data[index + 1];
    const b = imageData.data[index + 2];

    ctx.fillStyle = `rgb(${r},${g},${b})`;
    ctx.beginPath();
    ctx.moveTo(p1[0], p1[1]);
    ctx.lineTo(p2[0], p2[1]);
    ctx.lineTo(p3[0], p3[1]);
    ctx.closePath();
    ctx.fill();
  }



// delaunay.triangles[e] returns the point id where the half-edge starts
// delaunay.halfedges[e] returns the opposite half-edge in the adjacent triangle, or -1 if there is no adjacent triangle