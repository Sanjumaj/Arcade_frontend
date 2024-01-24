document.addEventListener("DOMContentLoaded", function () {
   
    const input_1 = document.querySelector(".input1");
    const input_2 = document.querySelector(".input2");
    
    
    document.querySelector(".generate").addEventListener("click", update_data);
    

    function update_data() {
        
        document.getElementById("imagen").textContent = input_1.value;
        document.getElementById("imagey").textContent = input_2.value;
        document.getElementById("imagey").style.display= "block";
        document.getElementById("imagen").style.display= "block";
    }
    document.querySelector(".reset").addEventListener("click", reset_data);

    function reset_data(){
    document.querySelector(".input1").value = "";
    document.querySelector(".input2").value = "";
    document.getElementById("imagey").style.display = "none";1
    document.getElementById("imagen").style.display = "none";
    // const element =  document.querySelector(".input1") ;
    // element.focus();
    const element = document.getElementById("inputField1");
    element.focus();

    }
    
    
});

