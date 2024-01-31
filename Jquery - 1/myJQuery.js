
$(document).ready(function() {
    
    //   JQuery code !

    console.log("I am in a new file now !");

    console.log("We are using JQuery !");

    //    $('selector').action()

    //    $('p').click()

    // $('p').click(function() {

    //     console.log("You clicked on any p but not p 6 !", this);

    // });


    // $('p').dblclick(function() {

    //     console.log("You double clicked on p 6 !", this);

    // });
    
    // $('p').hover(function() {

    //     console.log("You hover:  !", this);
    // },
    // function(){
    //     console.log("Thanks for Watching !");
        
    // });

    
    // DEMO on Method !

//     $('p').on(
//         {
//             click: function() {
//                  console.log("Thanks for clicking !", this);
                 
//         },
//             mouseleave: function() {
//                  console.log("Mouseleave");
        
//     }
// })


// $('#wiki').hide(1000, function () {
//     console.log("hidden");  
// })

// $('#wiki').show(2000, function () {
//     console.log("Visible");  
// })

//    $('#Toggle').click (function() {
//     $('#wiki').toggle(2000);
       
//    })


// FADE FEATURES.
    $('#Toggle').click(function(){
        $('#wiki').fadeOut(2000); 
    })



// SLIDE FEATURES: Speed and callback parameters are optional.

    // $('#wiki').slideUp(5000, function() {
    //     console.log("Done !");
        
    // })
    // $('#wiki').slideDown(5000)
    // $('#wiki').slideToggle(5000)



    // ANIMATION FUNCTIONS IN JQUERY.


    //   $('#wiki').animate({
    //     opacity: 0.3,
    //     height: '150px',
    //     width: '300px'

    //    }, 2000)


    $('#wiki').animate({opacity: 0.3}, 4000);
    $('#wiki').animate({opacity: 0.9}, 1000);
    $('#wiki').animate({width: '300px'}, 12000);

    // $('#wiki').stop()



    // HTML manipulation with JQuery.

    // $('#wiki').text("This is me !")
    
    $('body').html()

    
















    
    





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




