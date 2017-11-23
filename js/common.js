window.onload = function() {
  


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
    }
}
