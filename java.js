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

firebase.database.enableLogging(function(message) {
    console.log("[FIREBASE]", message);
  });

  firebase.auth().signInAnonymously().catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      // ...
    } else {
      // User is signed out.
      // ...
    }
    // ...
  });


var database = firebase.database();
//=====================================================================================================================================================================================


//an on click function so the submit button stores the values of the input fields at the bottom
$('button').click(function (event) {
    event.preventDefault();

    var empTrainname = $('#trainname').val().trim();
    var empDestination = $('#destination').val().trim();
    var empMinutes = $('#eta').val().trim();
    var empFrequency = $('#frequency').val().trim();


    //creating a local 'temporary' object for holding train data
    var newEmp = {
        name: empTrainname,
        destination: empDestination,
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

    //clears all of the text-boxes
    $('#trainname').val('');
    $('#destination').val('');
    $('#eta').val('');
    $('#frequency').val('');
});

//creating firebase event for adding train to the database and a row in the BS4 when a user adds an entry
database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
  
    //storing everything into a variable
    var empTrainname = childSnapshot.val().name;
    var empDestination = childSnapshot.val().destination;
    var empMinutes = childSnapshot.val().minutes;
    var empFrequency = childSnapshot.val().frequency;

    //train info
    console.log(empTrainname);
    console.log(empDestination);
    console.log(empMinutes);
    console.log(empFrequency);

    //creating a row for the train information
    var newRow = $("<tr>").append(
        $("<td>").text(empTrainname),
        $("<td>").text(empDestination),
        $("<td>").text(empMinutes),
        $("<td>").text(empFrequency)
      );

    //appending the new row to the table body
    $("#train-table > tbody").append(newRow);
    
});