var input = $("input");
var deleteButtons = $(".delete");
var icon = $("#icon")

var list = $("#list");
var todos = $("li");


icon.on("click", function() {
  input.slideToggle(100);
  $(this).toggleClass("fa-minus");
  $(this).toggleClass("fa-plus");
});

// add todos with 'Enter'
input.keypress(function(e) {
  if(e.which === 13) {
    list.append(`<li><span><i class="fa fa-trash"></i></span></span>${input.val()}</li>`);
    $(this).val("");
  }
});

// delete todos
list.on("click", "span", function(e) {
  $(this).parent().fadeOut(function() {
    console.log("removed");
    $(this).remove();
  });
  e.stopPropagation();
});

// grey out completed todos
list.on("click", "li", function() {
  $(this).toggleClass("completed");
}); 
