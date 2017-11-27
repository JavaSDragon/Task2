  function soundClick() {
        var audio = new Audio();
        audio.src = 'click.mp3';
        audio.autoplay = true;
    }

    function randomInteger() {
        var rand = Math.random() * 100;
        rand = Math.round(rand);
        return rand;
    }

    function show(caseId,closeId,openId,gunId,gunName) {

        $(closeId).css("display", "none");
        $(openId).css("display", "block");
        randomInteger()
        percent = randomInteger();
        if (percent >= 0 && percent < 21) {
            $(gunId).remove();
            var img = document.createElement("IMG");
            img.src = "img/433261347f61.png";
            img.id = gunName;
            document.getElementById(caseId).appendChild(img);
        } else if (percent >= 21 && percent < 56) {
            $(gunId).remove();
            var img = document.createElement("IMG");
            img.src = "img/11.png";
            img.id = gunName;
            document.getElementById(caseId).appendChild(img);
        } else if (percent >= 56 && percent <= 100) {
            $(gunId).remove();
            var img = document.createElement("IMG");
            img.src = "img/ar.png";
            img.id = gunName;
            document.getElementById(caseId).appendChild(img);
        }
    }