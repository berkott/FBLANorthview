function bugReport() {
    var time = Date.now();
    ons.notification.prompt('Ask any questions or report any bugs below and we will fix them soon.')
    .then(function(input) {
        if (input) {
            var inputBlob = new File([input], "BugReport"+time+".txt", {
                type: 'text/plain'
            });
            app.storage.upload(inputBlob)
                .then(task => toast("Thank you for your feedback!"))
                .catch(task => console.error(toast("An error has occured."), task));        
        }
    });
}