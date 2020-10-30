var app= new VTTCue({
    el: "#app",
    data: {
        message: "Hello Vue!!"
    }
});

var app2 = new Vue({
    el: "#app-2",
    data: {
        message: "you loaded this page on " + new.date().toLocalString()
    }
});
