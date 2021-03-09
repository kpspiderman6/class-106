prediction1 ="";
prediction2 = "";
Webcam.set({
    width : 250,
    height :250,
    image_format :'png',
    png_quality: 60
});

camera = document.getElementById("your_cam");
Webcam.attach('#camera');
function CAPTURE(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML='<img id="final_img" src="'+data_uri+'">';
    });
    }
    console.log("ml5version",ml5.version);
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/[...]',modelLoaded);
    function modelLoaded(){
        console.log("modelloaded");
        

    }
    function speak(){
        var synth = window.speechSynthesis;
        speak_data_1="The first prediction is "+prediction1;
        speak_data_2="The second prediction is "+prediction2;
        var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2); synth.speak(utterThis);
    }
  function PREDICT(){
    img = document.getElementById("final_img");
    classifier.classify(img,gotResult);

  }  
  function gotResult(error,results){
    if (error){
        console.error(error);

    }else{
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML=results[0].label;
        document.getElementById("result_emotion_name2").innerHTML=results[1].label;

        prediction1 = results[0].label;
        prediction2 = results[1].label;

        speak();

        if(results[0].label== "nice"){
            document.getElementById("result_emoji").innerHTML="&#128076;";
        }
        if(results[0].label== "victory"){
            document.getElementById("result_emoji").innerHTML="&#9996;"; 
        }
        if(results[0].label== "best"){
            document.getElementById("result_emoji").innerHTML="&#128077;"; 
        }
        if(results[1].label== "nice"){
            document.getElementById("result_emoji2").innerHTML="&#128076;";
        }
        if(results[1].label== "victory"){
            document.getElementById("result_emoji2").innerHTML="&#9996;"; 
        }
        if(results[1].label== "best"){
            document.getElementById("result_emoji2").innerHTML="&#128077;"; 
        }


    }
}
