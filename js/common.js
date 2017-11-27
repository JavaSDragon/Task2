window.onload = function() {
    var arr = new Array();
    var n = 5;
      for (var i = 0 ; i <= n; i++){

       var img = document.createElement("IMG");
            img.src = "img/sunduk_close.png";
            img.id = "close"+i;
             arr.push( img );

            var newImg = document.createElement('div');
            newImg.className='spin';
            newImg.id ='case'+i;
            add.appendChild(newImg);
            newImg.appendChild(arr[i]);
    }
   
      for (var a = 0 ; a <= n; a++){
        var caseId = 'case' + a;
        var closeId = '#close' + a; 
        var openId = '#open' + a;
        var gunId = '#gun' + a;
        var gunName = 'gun' + a;
     
     document.getElementById(caseId).onclick = function (){
        if (confirm('Вы согласны, что с Вашего счёта будет списан (+)?')) {
            soundClick();
            setTimeout(show,5000,caseId,closeId,openId,gunId,gunName);
 
        }
    }
     
}

/* 

    document.getElementById('case').onclick = function() {
        if (confirm('Вы согласны, что с Вашего счёта будет списан (+)?')) {
            soundClick();
            setTimeout(show,5000,'case',"#close1","#open1",'#gun','gun');
        }
    }

    document.getElementById('case2').onclick = function() {
        if (confirm('Вы согласны, что с Вашего счёта будет списан (+)?')) {
            soundClick();
            setTimeout(show,5000,'case2',"#close2","#open2",'#gun2','gun2');
        }
    }

    document.getElementById('case3').onclick = function() {
        if (confirm('Вы согласны, что с Вашего счёта будет списан (+)?')) {
            soundClick();
            setTimeout(show,5000,'case3',"#close3","#open3",'#gun3','gun3');
        }
    }*/
}
