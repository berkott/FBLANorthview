const app = flamelink({
    apiKey: "AIzaSyDxYCLfD1_L8LsWlcfPBEK_DzqJiPc4eUk",
    authDomain: "fblanorthview-ea1b9.firebaseapp.com",
    databaseURL: "https://fblanorthview-ea1b9.firebaseio.com",
    projectId: "fblanorthview-ea1b9",
    storageBucket: "fblanorthview-ea1b9.appspot.com",
    messagingSenderId: "876022659546",
});


function toast(upload){
    console.log("TOAST: " + upload);
    ons.notification.toast(upload, {
        timeout: 2000
    });
}