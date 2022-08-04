<script src="https://unpkg.com/ml5@0.4.3/dist/ml5.min.js"></script>

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.error(error);
}else{
    console.log(results);
    document.getElementById("result_hand gesture_name").innerHTML= results[0].label;
    
    prediction_1 = results[0].label;
  
    speak();
    if(results[0].label == "ok sign")
    {
        document.getElementById("update_hand gesture").innerHTML = "&#128076;";
    }
    if(results[0].label == "thumbs up sign")
    {
        document.getElementById("update_hand gesture").innerHTML = "&#128077;";
    }
    if(results[0].label == "victory sign")
    {gry
        document.getElementById("update_hand gesture").innerHTML = "&#9996;";
    }
}
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is"+ prediction_1;
    var utterThis =new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
    
}