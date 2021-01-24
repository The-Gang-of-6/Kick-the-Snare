'use strict'

var d = document;


// AutoLoad html files into index  page
var headerIframe = d.getElementById('header-iframe')
var asideIframe = d.getElementById('aside-iframe')
var mainIframe = d.getElementById('main-iframe')
var footerIframe = d.getElementById('footer-iframe')

headerIframe.addEventListener('load', loadMainSection)
asideIframe.addEventListener('load', loadMainSection)
mainIframe.addEventListener('load', loadMainSection)
footerIframe.addEventListener('load', loadMainSection)



function loadMainSection(event) {
    event.preventDefault();
    this.before((this.contentDocument.body || this.contentDocument).children[0]);
    this.remove()
}

window.addEventListener('load', function () {
    var drumMachine = d.getElementById('drumMachine')
    var products = d.getElementById('products')
    var aboutUs = d.getElementById('aboutUs')



    drumMachine.addEventListener('click', changeMainSection)
    products.addEventListener('products', changeMainSection)
    aboutUs.addEventListener('click', changeMainSection)

})

function changeMainSection(event) {
    event.preventDefault()

    var main = d.getElementById('main')
    main.remove()

    var header = d.getElementById("header")
    var footer = d.getElementById("footer")
    var aside = d.getElementById("aside")


    var iframe = d.createElement('iframe')

    iframe.src = event.target.href

    iframe.onload = function () {

        this.before((this.contentDocument.body || this.contentDocument).children[0]);
        this.remove()

    };

    document.body.appendChild(iframe).before(header)

    document.body.removeChild(aside)
    document.body.removeChild(footer)

    document.body.appendChild(aside)
    document.body.appendChild(footer)

}

