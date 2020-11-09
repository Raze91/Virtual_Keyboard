window.addEventListener("load", function() {



    document.querySelector("#darkSwitch").addEventListener("click", function() {
        if(this.value === "false") {
            document.querySelector("#link").href = "css/keyboard-dark.css";
            this.value = "true"
        } else {
            document.querySelector("#link").href = "css/keyboard-light.css";
            this.value = "false";
        }
        console.log(this.value)
    })
})