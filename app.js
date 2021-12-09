'use strict';


form.onclick = function (event) {
    event.target.style.backgroundColor = 'yellow';

    // chrome needs some time to paint yellow
    setTimeout(() => {
        alert("target = " + event.target.tagName + ", this=" + this.tagName);
        event.target.style.backgroundColor = ''
    }, 0);
};


class evenetD {
    constructor(elem) {
        this._elem = elem;
        elem.onclick = this.onclick.bind(this);
    }

    onclick(event) {
        event.preventDefault();
        console.log(event.target.dataset.action);
    }
}

new evenetD(bform);