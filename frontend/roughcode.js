// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

const img = new Image();
img.src = "image.jpg"; // replace with your image name

img.onload = () => {    //image load
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);  //draw image
  applyPixelEffect();
};

function applyPixelEffect() {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let data = imageData.data;

  for (let i = 0; i < data.length; i += 4 * 5) { // skip pixels to pixelate
    let r = data[i];
    let g = data[i + 1];
    let b = data[i + 2];

    // stylized effect
    data[i] = r * 0.8;
    data[i + 1] = g * 0.6;
    data[i + 2] = b * 1.2;
  }

  ctx.putImageData(imageData, 0, 0);
}



// You upload any image

// It randomly picks 3000 points on the image

// Delaunator triangulates those points

// It draws triangles, sampling the average color from the image below