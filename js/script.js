$(document).ready(function(){
    $("#featured1").click(function(){
        $("#featuredPane img").fadeOut(function(){
            $("#featuredPane img").attr("src", "images/tree.png");
            $("#featuredPane img").fadeIn();
        });
        $("#featuredPane").css("background", "url(images/tree.png)");
        $(".featured").removeClass("featuredActive");
        $("#featured1").addClass("featuredActive");
        $(".featuredTitleBox h2").hide();
        $(".featuredTitleBox span").hide();
        $(".featured1Content").slideDown();
    });
    
    $("#featured2").click(function(){
        $("#featuredPane img").fadeOut(function(){
            $("#featuredPane img").attr("src", "images/moss.png");
            $("#featuredPane img").fadeIn();
        });
        $("#featuredPane").css("background", "url(images/moss.png)");
        $(".featured").removeClass("featuredActive");
        $("#featured2").addClass("featuredActive");
        $(".featuredTitleBox h2").hide();
        $(".featuredTitleBox span").hide();
        $(".featured2Content").slideDown();
    });
    
    $("#featured3").click(function(){
        $("#featuredPane img").fadeOut(function(){
            $("#featuredPane img").attr("src", "images/rain.jpg");
            $("#featuredPane img").fadeIn();
        });
        $("#featuredPane").css("background", "url(images/rain.jpg)");
        $(".featured").removeClass("featuredActive");
        $("#featured3").addClass("featuredActive");
        $(".featuredTitleBox h2").hide();
        $(".featuredTitleBox span").hide();
        $(".featured3Content").slideDown();
    });
    
    
    $(".linkSet h3").click(function(){
        if ($(this).next().is(":hidden"))
        {
            $(".linkSet ul").slideUp();
            $(this).next().slideDown("slow");
            $(".linkSet h3").removeClass("active");
            $(this).addClass("active");
        }
        
    });
    
    $.fn.preload = function() {
        this.each(function(){
            $('<img/>')[0].src = this;
        });
    }

   /* Lets preload the the two large images */
    $(['images/moss.png','images/rain.jpg']).preload();

    
});