earX=0;
earY=0;

function preload(){
    earring=loadImage("https://i.postimg.cc/LXfSLzHJ/imageedit-3-5036587898.png")
}


function setup(){
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log('poseNet is initialized');
}


function draw(){
    image(video, 0, 0, 400, 400);
    image(earring, earX, earY, 40, 40);
}

function take_snapshot(){
    save('myFilterImage.jpg');
}

function gotPoses(results)
{
    if(results.length > 0){
    console.log(results);
    earX = results[0].pose.rightEar.x-20;
    earY = results[0].pose.rightEar.y+15;
    console.log("ear x = " + results[0].pose.rightEar.x)
    console.log("ear y = " + results[0].pose.rightEar.y)
   
}
}





