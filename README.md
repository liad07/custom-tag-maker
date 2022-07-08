189 of the 365 chalenge in 2022 1 day 1 challenge
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
