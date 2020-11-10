window.addEventListener("load", function () {
    let darkSwitch = document.querySelector("#darkSwitch");
    let cssLink = document.querySelector("#link");
    let buttons = document.querySelectorAll("input[type=button]")
    let textOutput = document.querySelector("#text-output")

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