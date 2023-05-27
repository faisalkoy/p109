//https://teachablemachine.withgoogle.com/models/U45rD7Nw8/


function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/U45rD7Nw8/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can detect - '+results[0].label;
        
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+(results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";


        img = document.getElementById('cow');
        img1 = document.getElementById('cat');
        img2 = document.getElementById('dog');
        img3 = document.getElementById('lion');

        if(results[0].label == "Mooing") {
            img.src = 'cartoon-cute-cow-free-png.gif';
            img1.src = 'images.png';
            img2.src = 'dog.png';
            img3.src = 'lovepik-lion-png-image_401391027_wh1200.png';
        }else if (results[0].label == "meowing") {
            img.src = 'cartoon-cute-cow-free-png.png';
            img1.src = 'images.gif';
            img2.src = 'dog.png';
            img3.src = 'lovepik-lion-png-image_401391027_wh1200.png';
        }else if (results[0].label == "barking") {
            img.src = 'cartoon-cute-cow-free-png.png';
            img1.src = 'images.png';
            img2.src = 'dog.gif';
            img3.src = 'lovepik-lion-png-image_401391027_wh1200.png';
        }else{
            img.src = 'cartoon-cute-cow-free-png.png';
            img1.src = 'images.png';
            img2.src = 'dog.png';
            img3.src = 'lovepik-lion-png-image_401391027_wh1200.gif';
        }
    
    }
}