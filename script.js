let btn = document.getElementById("bbb");
    btn.addEventListener('click',func)
    function func(){
         document.getElementById('tempdiv').style.display="none";
        document.getElementById('completediv').style.display="block";
    }