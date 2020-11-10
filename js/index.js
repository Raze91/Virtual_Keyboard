window.addEventListener("load", function () {
    let darkSwitch = document.querySelector("#darkSwitch");
    let cssLink = document.querySelector("#link");
    let buttons = document.querySelectorAll("input[type=button]");
    let textOutput = document.querySelector("#text-output");
    let capsLock = document.querySelector("#caps-lock");
    let circle = document.querySelector(".circle");
    let isCapsLock = false;

    // Dark Mode 
    darkSwitch.addEventListener("click", function () {
        if (this.value === "false") {
            cssLink.href = "css/keyboard-dark.css";
            this.value = "true"
        } else {
            cssLink.href = "css/keyboard-light.css";
            this.value = "false";
        }
    })

    capsLock.addEventListener("click", function() {
        if(isCapsLock === false) {
            circle.style.backgroundColor = "green";
            isCapsLock = true;
        } else {
            circle.style.backgroundColor = "red";
            isCapsLock = false;
        }
    })
    buttons.forEach(button =>
        button.addEventListener("click", function () {
            switch (this.value) {
                case "SPACE":
                    textOutput.value += " ";
                    break;
                case "Delete":
                    textOutput.value = textOutput.value.substring(0, textOutput.value.length-1);
                    break;
                case "Enter":
                    textOutput.value += "\n"; 
                    break;
                case "Tab":
                    textOutput.value += "   "
                    break;
                default:
                    textOutput.value += this.value;
            }
        })
    )

})