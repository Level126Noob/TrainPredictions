//WARNING, WHEN GRADING PAPER I USED A META TAG IN HTML TO REFRESH THE PAGE EVERY MINUTE TO MAINTAIN TRAIN TIME ACCURACY.
//TAKE THAT INTO CONSIDERATION BEFORE GRADING SO IT DOESN'T AUTO REFRESH ON YOU AND MAKE YOU MAD. :)


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
  
  //get elements
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  
  //add login event
  btnLogin.addEventListener('click', e => {
    //get email and pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch (e => console.log(e.message));
  
  });
  
  //add signup event
  btnSignUp.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //sign in
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise
    .catch (e => console.log(e.message));
  });
  
  //add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
      console.log(firebaseUser);
      window.location.replace('game.html');
    } else {
      console.log('not logged in');
    }
  });
  