// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-quaffed").on("click", function (event) {
    var id = $(this).data("id");
    var newBeer = $(this).data("newbeer");

    // var newSleepState = {
    //   sleepy: newSleep
    // };

    // Send the PUT request.
    $.ajax("/api/brews/" + id, {
      type: "PUT",
      data: {
        quaffed: 1
      }
    }).then(
      function () {
        // alert();
        // console.log("changed sleep to", newSleep);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    // alert();
    event.preventDefault();

    var newBeer = {
      beer_name: $("#beername").val().trim(),
      quaffed: 0
    };

    // Send the POST request.
    $.ajax("/api/brews", {
      type: "POST",
      data: newBeer
    }).then(
      function () {
        console.log("created new beer");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-cat").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/cats/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted cat", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
