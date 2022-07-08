```javascript
    class newtag extends HTMLElement {
        constructor() {
            super();
            var color =""
            var bgcolor=""
                     
            var x = this.style;
            x.color="black"
            x.backgroundColor="cyan"
            x.textAlign="center"

        }
    }
    customElements.define("sample-tag",newtag)
