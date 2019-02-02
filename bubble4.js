<!DOCTYPE html>
<html>
<head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.1/p5.min.js"></script>
<style>
  html, body {
    margin: 0;
    padding: 0;
  }
</style>
<meta charset="utf-8" />
</head>
<body>
<script>

var bubbles = [];

function setup() {
    createCanvas(800, 600);

    for (var i = 0; i < 10; i++) {
        var bubble = {
            x: random(width),
            y: random(height),
            radius: random(50, 100)
        };
        bubbles.push(bubble);
    }
}

function draw() {
    background(10);

    for (var i = 0; i < bubbles.length; i++) {
        var bubble = bubbles[i];

        if (dist(mouseX, mouseY, bubble.x, bubble.y) < bubble.radius) {
            if (mouseIsPressed) {
                bubbles.splice(i, 1); // remove this bubble!
            }
            fill(25, 10, 200, 100);
        } else {
            fill(255, 220, 10, 1000);
        }

        ellipse(bubble.x, bubble.y, bubble.radius*2);
        bubble.x += random(-15, 10);
        bubble.y += random(-10, 10);
    }
}

</script>
</body>
</html>
