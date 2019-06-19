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

var database = firebase.database();
//=====================================================================================================================================================================================


//an on click function so the submit button stores the values of the input fields at the bottom
$('button').click(function (e) {
    e.preventDefault();

    var empTrainname = $('#trainname').val().trim();
    var emptDestination = $('#destination').val().trim();
    var empMinutes = $('#eta').val().trim();
    var empFrequency = $('#frequency').val().trim();


    //creating a local 'temporary' object for holding train data
    var newEmp = {
        name: empTrainname,
        destination: emptDestination,
        minutes: empMinutes,
        frequency: empFrequency
    };

    //uploads train data to the database
    database.ref().push(newEmp);

    //logs everything to console
    console.log(newEmp.name);
    console.log(newEmp.destination);
    console.log(newEmp.minutes);
    console.log(newEmp.frequency);
});