$(document).ready(function(){
    var envelope=$('#envelope');
    var btn_open=$('#open');
    var btn_close=$('#close');

    var carImage=$('#car-image');
    var car2Image=$('#car2-image');

    envelope.click(function(){
        open();
    });
    btn_open.click(function(){
        open();
    });
    btn_close.click(function(){
        close();
    });

    function open(){
        envelope.addClass('open')
            .removeClass('close');

        carImage.removeClass("hidden");
        car2Image.removeClass("hidden");
    }
    function close(){
        envelope.addClass('close')
            .removeClass('open');
        //moveButton(btn_close);

        carImage.addClass("hidden");
        car2Image.addClass("hidden");
    }

    function moveButton(button){
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const buttonWidth = button.outerWidth();
        const buttonHeight = button.outerHeight();

        const randomX=Math.floor(Math.random() * (windowWidth-buttonWidth));
        const randomY=Math.floor(Math.random() * (windowHeight-buttonHeight));

        button.css({
            position: "fixed",
            left: `${randomX}px`,
            top:`${randomY}px`,

        })
    }
})