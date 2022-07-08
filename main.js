  function f() {

        document.getElementById("text2").textContent = (`    class newtag extends HTMLElement {
        constructor() {
            super();
            var color ="#004cff"
            var bgcolor="#ff0000"
                     ` + "\n"+
        "            var x = this.style;\n" +
        "            x.color=" + '"' + document.getElementById("text").value + '"' + "\n" +
        "            x.backgroundColor=" + '"' + document.getElementById("bg").value + '"' + "\n" +
        "            x.textAlign=" + '"' + document.getElementById("align").value + '"' + "\n" +
        "\n" +
        "        }\n" +
        "    }\n" +
        "    customElements.define(" + '"' + document.getElementById("name").value + '"' + ",newtag)")
        var x = this.style;

        if (document.getElementById("text").value != "") {
            x.color = +'"' + document.getElementById("text").value + '"'
        }
        if (document.getElementById("bg").value != "") {
            x.backgroundColor = +'"' + document.getElementById("bg").value + '"'
        }
        if (document.getElementById("align").value != "") {
            x.textAlign = document.getElementById("align").value
        }

        class newtag extends HTMLElement {
            constructor() {
                super();
                var b = this.style;

                if (document.getElementById("bg").value != null) {
                    b.color = +'"' + document.getElementById("bg").value + '"'
                }
                if (document.getElementById("text").value != null) {
                    b.backgroundColor = +'"' + document.getElementById("text").value + '"'
                }
                if (document.getElementById("align").value != null) {
                    b.textAlign = document.getElementById("align").value
                }
            }
        }

        customElements.define('' + document.getElementById("name").value + '', newtag)
    }
