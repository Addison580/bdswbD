noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;

function setup(){
    canvas=createCanvas(600, 500);
    canvas.position(900, 100);
    video=createCapture(VIDEO);
    video.size(600, 500);
    video.position(100, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function draw(){
    background('#35d59c');

 document.getElementById('font_size').innerHTML="Font-Size Of The Text Will Be = " + difference + "px";
    textSize(difference);
    fill('#FFE787');
    stroke('#FFE787');
    text('Addison', 50, 400);

}

function modelLoaded(){
    console.log('PoseNet is Initialized!');

}

function gotPoses(results){
if (results.length > 0){
    console.log(results);
    
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX = " + noseX + "noseY = " + noseY);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
}

}
    