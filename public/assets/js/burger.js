$(".create-from").on("submit", function(event) {
    event.preventDefault();

    console.log('test');
    var newBurger = {
        name: $("#burgerInput").val().trim()
    };


    // creates new burger
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(function() {
        console.log("Burger Created!");
        location.reload();
    });
});