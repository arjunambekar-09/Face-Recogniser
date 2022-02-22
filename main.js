gesture_1 = "";
gesture_2 = "";
gesture_3 = "";

Webcam.set({
    width: 350,
    height: 300,
    img_format: "jpg",
    jpg_quality: 150
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("camera_1").innerHTML = "<img id='captured_img' src='" + data_uri + "'>"
    });
}

console.log("ml5 version:" , ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/kU6idUQXB/model.json",model_loaded());

function model_loaded(){
    console.log("Model Loaded!");
}
function speak(){
    var synth = window.speachSynthesis;
    speak_data_1 = "The first prediction is" + prediction_1;
    var utterThis = new SpeechSynthesisUtterance(speek_data_1);
    synth.speak(utterThis);
}
function check(){
    img = document.getElementById("captured_img");
    classifier.classify(img, gotResults);
}
function gotResults(error , results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("emotion_name").innerHTML = results[0].label;
        prediction_1 = results[0].label;
        speak();
        if (prediction_1 == "Great"){
            document.getElementById("emoji").innerHTML= "👌";
        }
        if (prediction_1 == "sad"){
            document.getElementById("emoji").innerHTML= "✌";
        }
        if (prediction_1 == "sad"){
            document.getElementById("emoji").innerHTML= "👍";
        }
   

    }
}