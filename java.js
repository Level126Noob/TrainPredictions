//initializing firebase
var config = {
    apiKey: "AIzaSyAmmeTXPMJOrGvS1aF5DXF5sQML8_f3eqo",
    authDomain: "traintime-522c1.firebaseapp.com",
    databaseURL: "https://traintime-522c1.firebaseio.com",
    projectId: "traintime-522c1",
    storageBucket: "traintime-522c1.appspot.com",
    messagingSenderId: "972150627503",
    appId: "1:972150627503:web:f9e0ac10418e7455"
};


firebase.initializeApp(config);


$('button').click(function (e) {
    e.preventDefault();

    var trainname = $('#trainname').val().trim();
    console.log(trainname);
    var destination = $('#destination').val().trim();
    console.log(destination);
    var minutes = $('#eta').val().trim();
    console.log(minutes);
    var frequency = $('#frequency').val().trim();
    console.log(frequency);

});