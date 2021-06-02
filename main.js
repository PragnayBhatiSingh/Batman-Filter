function preload() {

}

function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(280, 280);
    video.hide();

    poseNet = ml5.poseNet(video, modal_loaded);
    poseNet.on("pose", gotPoses)
}

function modal_loaded() {
    console.log("Pose Net is Linked");
}

function gotPoses(results) {
    console.log(results);

    if (results.length > 0) {
        console.log("Nose - x =" + results[0].pose.nose.x);
        console.log("nose - y =" + results[0].pose.nose.y);
    }
}

function draw() {
    image(video, 0, 0, 280, 280);
}

function Take_Snapshot() {
    save("Batman_filter.png");
}