//Slider 1
var slider1 = document.getElementById("sensorslider1");
var output1 = document.getElementById("sensorvalue1");
//output1.innerHTML = slider1.value;

slider1.oninput = function() {
  output1.innerHTML = this.value;
  wakeSubmitBtn();
}

//Slider 2
var slider2 = document.getElementById("sensorslider2");
var output2 = document.getElementById("sensorvalue2");
//output2.innerHTML = slider2.value;

slider2.oninput = function() {
  output2.innerHTML = this.value;
  wakeSubmitBtn();
}

//Slider 3
var slider3 = document.getElementById("sensorslider3");
var output3 = document.getElementById("sensorvalue3");
//output3.innerHTML = slider3.value;

slider3.oninput = function() {
  output3.innerHTML = this.value;
  wakeSubmitBtn();
}

//Slider 4
var slider4 = document.getElementById("sensorslider4");
var output4 = document.getElementById("sensorvalue4");
//output4.innerHTML = slider4.value;

slider4.oninput = function() {
  output4.innerHTML = this.value;
  wakeSubmitBtn();
}

//Slider 5
var slider5 = document.getElementById("sensorslider5");
var output5 = document.getElementById("sensorvalue5");
//output5.innerHTML = slider5.value;

slider5.oninput = function() {
  output5.innerHTML = this.value;
  wakeSubmitBtn();
}

//Slider 6
var slider6 = document.getElementById("sensorslider6");
var output6 = document.getElementById("sensorvalue6");
//output6.innerHTML = slider6.value;

slider6.oninput = function() {
  output6.innerHTML = this.value;
  wakeSubmitBtn();
}

//Slider 7
var slider7 = document.getElementById("sensorslider7");
var output7 = document.getElementById("sensorvalue7");
//output7.innerHTML = slider7.value;

slider7.oninput = function() {
  output7.innerHTML = this.value;
  wakeSubmitBtn();
}

//Slider 8
var slider8 = document.getElementById("sensorslider8");
var output8 = document.getElementById("sensorvalue8");
//output8.innerHTML = slider8.value;

slider8.oninput = function() {
  output8.innerHTML = this.value;
  wakeSubmitBtn();
}

//Slider 9
var slider9 = document.getElementById("sensorslider9");
var output9 = document.getElementById("sensorvalue9");
//output9.innerHTML = slider9.value;

slider9.oninput = function() {
  output9.innerHTML = this.value;
  wakeSubmitBtn();
}

//Slider 10
var slider10 = document.getElementById("sensorslider10");
var output10 = document.getElementById("sensorvalue10");
//output10.innerHTML = slider10.value;

slider10.oninput = function() {
  output10.innerHTML = this.value;
  wakeSubmitBtn();
}



function updateSliders(sensorArray) {
  slider1.value = sensorArray[0].thresholdValue;
  output1.innerHTML = sensorArray[0].thresholdValue;
  slider2.value = sensorArray[1].thresholdValue;
  output2.innerHTML = sensorArray[1].thresholdValue;
  slider3.value = sensorArray[2].thresholdValue;
  output3.innerHTML = sensorArray[2].thresholdValue;
  slider4.value = sensorArray[3].thresholdValue;
  output4.innerHTML = sensorArray[3].thresholdValue;
  slider5.value = sensorArray[4].thresholdValue;
  output5.innerHTML = sensorArray[4].thresholdValue;
  slider6.value = sensorArray[5].thresholdValue;
  output6.innerHTML = sensorArray[5].thresholdValue;
  slider7.value = sensorArray[6].thresholdValue;
  output7.innerHTML = sensorArray[6].thresholdValue;
  slider8.value = sensorArray[7].thresholdValue;
  output8.innerHTML = sensorArray[7].thresholdValue;
  slider9.value = sensorArray[8].thresholdValue;
  output9.innerHTML = sensorArray[8].thresholdValue;
  slider10.value = sensorArray[9].thresholdValue;  
  output10.innerHTML = sensorArray[9].thresholdValue;
}



function getChangedSensorValues() {
  var sensorArr = [
    {
      "sensorId": "node1",
      "thresholdValue": Number(slider1.value)
    },
    {
      "sensorId": "node2",
      "thresholdValue":  Number(slider2.value)
    },
    {
      "sensorId": "node3",
      "thresholdValue":  Number(slider3.value)
    },
    {
      "sensorId": "node4",
      "thresholdValue":  Number(slider4.value)
    },
    {
      "sensorId": "node5",
      "thresholdValue":  Number(slider5.value)
    },
    {
      "sensorId": "node6",
      "thresholdValue":  Number(slider6.value)
    },
    {
      "sensorId": "node7",
      "thresholdValue":  Number(slider7.value)
    },
    {
      "sensorId": "node8",
      "thresholdValue":  Number(slider8.value)
    },
    {
      "sensorId": "node9",
      "thresholdValue":  Number(slider9.value)
    },
    {
      "sensorId": "node10",
      "thresholdValue":  Number(slider10.value)
    },

  ]
  return sensorArr;
}

function submitSensorChanges() {
  let sensorarr = getChangedSensorValues();
  XMLHttpPostSensorValues(sensorarr);
  document.getElementById("submitSensorChangesBtn").classList.remove("btn-primary")
  document.getElementById("submitSensorChangesBtn").classList.add("btn-secondary")
  document.getElementById("submitSensorChangesBtn").disabled = true;
}

function wakeSubmitBtn() {
  if (document.getElementById("submitSensorChangesBtn").disabled == true) {
    document.getElementById("submitSensorChangesBtn").disabled = false;
    document.getElementById("submitSensorChangesBtn").classList.remove("btn-secondary")
    document.getElementById("submitSensorChangesBtn").classList.add("btn-primary")
  }
}

function XMLHttpGetSensorValues() {
  var xmlhttp = new XMLHttpRequest();
  var mongodbGetUrl = "http://51.120.77.91:9099/uf/sensor/threshold/get";

  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var sensorArray = JSON.parse(this.responseText);
      updateSliders(sensorArray);
    }
  }
  xmlhttp.open("GET", mongodbGetUrl, true);
  xmlhttp.send();
}

function XMLHttpPostSensorValues(sensorArray) {
  var xhr = new XMLHttpRequest();
  var mongodbPostURL = "http://51.120.77.91:9099/uf/sensor/threshold/update";
  var json = JSON.stringify(sensorArray);
  console.log(json);

  xhr.open("POST", mongodbPostURL, true);
  xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log("success");
    } else {
      console.error("no dice");
      console.log(xhr.status);
    }
  }
  xhr.send(json);
}

document.addEventListener('DOMContentLoaded', XMLHttpGetSensorValues());