Webcam.set({
    height: 300,
    width: 350,
    image_format: 'jpg',
    jpg_quality: 200,
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='picture' src =' " + data_uri + "'/>";
    });
}

console.log('ml5 version:',ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/8noOvW_Nu/s/model.json',modelLoaded);

function modelLoaded(){
    console.log("model loaded!");
}