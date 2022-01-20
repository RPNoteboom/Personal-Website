window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    let convertButton = document.getElementById("convertButton");
    let cInput = document.getElementById("cInput");
    let fInput = document.getElementById("fInput");
    
    cInput.addEventListener('input', function() {
        fInput.value = "";
    });
    
    fInput.addEventListener('input', function() {
        cInput.value = "";
    });
    
   convertButton.addEventListener("click", function() {
       let cel = cInput.value;
       let far = fInput.value;
       
      if (cel != ""){
          convertCtoF(cel);
      }
       else if (far != ""){
           convertFtoC(far);
       }
   });

}

function convertCtoF(degreesCelsius) {
    let errorMessage = document.getElementById("errorMessage");
    let weatherImage = document.getElementById("weatherImage");
    errorMessage.innerHTML = "";
    
    if(!isNaN(parseFloat(degreesCelsius))){
        let far = parseFloat(degreesCelsius) * 9/5 + 32;
        fInput.value = far;
        if (far < 32){
            weatherImage.src = "images/cold.png";
        }
        else if (far >= 32 && far <= 50){
            weatherImage.src = "images/cool.png";
        }
        else{
            weatherImage.src = "images/warm.png";
        }
    }
    else {
        errorMessage.innerHTML = degreesCelsius + " is not a number"
    }
    
}

function convertFtoC(degreesFahrenheit) {
    let errorMessage = document.getElementById("errorMessage");
    let weatherImage = document.getElementById("weatherImage");
    errorMessage.innerHTML = "";
    
    if(!isNaN(parseFloat(degreesFahrenheit))){
        cInput.value = (parseFloat(degreesFahrenheit) - 32) * 5/9;
        if (parseFloat(degreesFahrenheit) < 32){
            weatherImage.src = "images/cold.png";
        }
        else if (parseFloat(degreesFahrenheit) >= 32 && parseFloat(degreesFahrenheit) <= 50){
            weatherImage.src = "images/cool.png";
        }
        else{
            weatherImage.src = "images/warm.png";
        }
    }
    else {
        errorMessage.innerHTML = degreesFahrenheit + " is not a number"
    }
    
}
