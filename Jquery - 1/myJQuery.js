
$(document).ready(function() {
    
    //   JQuery code !

    console.log("I am in a new file now !");

    console.log("We are using JQuery !");

    //    $('selector').action()

    //    $('p').click()

    // $('p').click(function() {

    //     console.log("You clicked on any p but not p 6 !", this);

    // });


    $('#six').dblclick(function() {

        console.log("You double clicked on p 6 !", this);

    });
    

});
        //  $(this).hide();

        //  $('#id').hide();

        //  $('.class').hide();


        // Other Selectors !

        // $('*').click();

        // $('p.odd').click();

        // $('p:first').click();


        // Events in JQuery !

        // Mouse Events :=  click, dbclick, mouseenter, mouseleave.
        // Keyboard Events :=  Keypress, Keydown, MediaKeyStatusMap.
        // Form Events :=  submit, change, focus, blur.
        // Document/Window Events :=  load, resize, scroll, unload.

        


// There are 3 types of selectors in JQuery.

// 1.  #id Selector.

// $('#second').click();


// 2.  .class Selector.

// $('.odd').click();


// 3.  element Selector.

// $('p').click(function () {

// console.log("You clicked on p !");




