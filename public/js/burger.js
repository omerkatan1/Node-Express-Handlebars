$(".create-from").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
        name = $("#burgerInput").val().trim()
    }

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(function() {

        console.log("burger created");
        location.reload();

    });
});