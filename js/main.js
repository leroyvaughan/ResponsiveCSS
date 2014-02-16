
$(function () {
    var viewElem = $("#cssViewPort");
    var viewPort = viewElem.css("left");
    var isActiveBtn = false;

    var makeActiveBtn = function (makeActive) {

        if (makeActive && !isActiveBtn) {
            isActiveBtn = true;
            var _nav = $("#navWrap");

            $("#menuBtn").click(function () {
                _nav.show();

                _nav.hover(function () {
                    //no code for hover
                    },
                    function(){
                        $(this).hide();
                        $(this).off("hover");
                });
            });
        }

        if (!makeActive && isActiveBtn) {
            isActiveBtn = false;
            $("#menuBtn").off("click");
        }
    };


    var getViewPortSize = function() {
        viewPort = viewElem.css("left");
        viewPort = parseInt(viewPort.substring(0, viewPort.indexOf("px"))) * -1;

        if (viewPort <= 910) {
            makeActiveBtn(true);
        }
        else {
            makeActiveBtn(false);
        }

        //console.log(viewPort);

        return this;
    };
    getViewPortSize();



    $(window).resize(function () {
        /*
            get the left absolute position of #cssViewPort as that
            is the maxWidth of the screen
        */
        getViewPortSize();
    });

});