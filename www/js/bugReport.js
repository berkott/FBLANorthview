function bugReport() {
    var time = Date.now();
    ons.notification.prompt('Please tell us about any bugs and we will fix them as soon as possible.')
    .then(function(input) {
        if (input) {
            var inputBlob = new File([input], "BugReport"+time+".txt", {
                type: 'text/plain'
            });
            app.storage.upload(inputBlob)
                .then(task => toast("Thank you for your feedback!"))
                .catch(task => console.error(toast("An error has occured."), task));    
            //Firebase Storage: Invalid argument in `putString` at index 1: Expected string.        
        }
    });
}

function toast(upload){
    console.log("TOAST: " + upload);
    ons.notification.toast(upload, {
        timeout: 2000
    });
}