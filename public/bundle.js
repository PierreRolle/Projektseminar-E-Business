(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict"

module.exports = class Element {

    action() { }

    draw(ctx) { }

    checkCollision(element) { }
}

},{}],2:[function(require,module,exports){
"use strict"

module.exports = class ElementList extends Array {

    constructor() {
        super()
    }

    add(element) {
        this.push(element)
    }

    get(i) {
        return this[i]
    }

    delete(i) {
        this.splice(i, 1)
    }

    draw(ctx) {
        for (let i = 0; i < this.length; i++) {
            this[i].draw(ctx)
        }
    }

    action() {
        for (let i = 0; i < this.length; i++) {
            this[i].action()
        }
    }

    checkCollision(element) { }
}

},{}],3:[function(require,module,exports){
"use strict"

const RandomWalkCircleElement = require('./randomwalkcircleelement')
const ElementList = require('./elementlist')

//----------------------

module.exports = class Game {

    constructor() {
        this.raf                       // request animation frame handle
        this.elementList = null
    }

    //----------------------

    start() {
        this.elementList = new ElementList()
        for (let i = 0; i < 60; i++) {
            this.elementList.add(new RandomWalkCircleElement(i * 10, 150))
        }

        this.timeOfLastFrame = Date.now()
        this.raf = window.requestAnimationFrame(this.tick.bind(this))
    }

    //----------------------

    stop() {
        window.cancelAnimationFrame(this.raf)
        this.elementList = null
    }

    //----------------------

    tick() {
        let mycanvas = window.document.getElementById("mycanvas")

        let ctx = mycanvas.getContext('2d')

        //--- clear screen
        ctx.fillStyle = 'rgba(235, 250, 255, 0.05)'        // alpha < 1 löscht den Bildschrim nur teilweise -> bewegte Gegenstände erzeugen Spuren
        ctx.fillRect(0, 0, mycanvas.clientWidth, mycanvas.clientHeight)

        //--- draw elements
        this.elementList.draw(ctx)

        //--- execute element actions
        this.elementList.action()

        this.raf = window.requestAnimationFrame(this.tick.bind(this))
    }
}

},{"./elementlist":2,"./randomwalkcircleelement":5}],4:[function(require,module,exports){
"use strict"
 
const Game = require("./game")
let myGame = new Game()
myGame.start()

},{"./game":3}],5:[function(require,module,exports){
"use strict"

const Element = require('./element')

module.exports = class RandomWalkCircleElement extends Element {

    constructor(x, y) {
        super()
        this.x = x
        this.y = y
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, 5, 0, Math.PI * 2, true)
        ctx.closePath()
        ctx.fillStyle = "red"
        ctx.fill()
    }

    action() {
        this.x += Math.random() * 2 - 1
        this.y += Math.random() * 2 - 1
    }
}

},{"./element":1}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL0FwcERhdGEvTG9jYWwvbnBtLWNhY2hlL19ucHgvNTBhNzljYzVmMjQwNzJkYi9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiZ2FtZS9lbGVtZW50LmpzIiwiZ2FtZS9lbGVtZW50bGlzdC5qcyIsImdhbWUvZ2FtZS5qcyIsImdhbWUvbWFpbi5qcyIsImdhbWUvcmFuZG9td2Fsa2NpcmNsZWVsZW1lbnQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcInVzZSBzdHJpY3RcIlxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEVsZW1lbnQge1xuXG4gICAgYWN0aW9uKCkgeyB9XG5cbiAgICBkcmF3KGN0eCkgeyB9XG5cbiAgICBjaGVja0NvbGxpc2lvbihlbGVtZW50KSB7IH1cbn1cbiIsIlwidXNlIHN0cmljdFwiXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgRWxlbWVudExpc3QgZXh0ZW5kcyBBcnJheSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgIH1cblxuICAgIGFkZChlbGVtZW50KSB7XG4gICAgICAgIHRoaXMucHVzaChlbGVtZW50KVxuICAgIH1cblxuICAgIGdldChpKSB7XG4gICAgICAgIHJldHVybiB0aGlzW2ldXG4gICAgfVxuXG4gICAgZGVsZXRlKGkpIHtcbiAgICAgICAgdGhpcy5zcGxpY2UoaSwgMSlcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXNbaV0uZHJhdyhjdHgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhY3Rpb24oKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpc1tpXS5hY3Rpb24oKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tDb2xsaXNpb24oZWxlbWVudCkgeyB9XG59XG4iLCJcInVzZSBzdHJpY3RcIlxuXG5jb25zdCBSYW5kb21XYWxrQ2lyY2xlRWxlbWVudCA9IHJlcXVpcmUoJy4vcmFuZG9td2Fsa2NpcmNsZWVsZW1lbnQnKVxuY29uc3QgRWxlbWVudExpc3QgPSByZXF1aXJlKCcuL2VsZW1lbnRsaXN0JylcblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgR2FtZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yYWYgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlcXVlc3QgYW5pbWF0aW9uIGZyYW1lIGhhbmRsZVxuICAgICAgICB0aGlzLmVsZW1lbnRMaXN0ID0gbnVsbFxuICAgIH1cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudExpc3QgPSBuZXcgRWxlbWVudExpc3QoKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDYwOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudExpc3QuYWRkKG5ldyBSYW5kb21XYWxrQ2lyY2xlRWxlbWVudChpICogMTAsIDE1MCkpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRpbWVPZkxhc3RGcmFtZSA9IERhdGUubm93KClcbiAgICAgICAgdGhpcy5yYWYgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudGljay5iaW5kKHRoaXMpKVxuICAgIH1cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMucmFmKVxuICAgICAgICB0aGlzLmVsZW1lbnRMaXN0ID0gbnVsbFxuICAgIH1cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgdGljaygpIHtcbiAgICAgICAgbGV0IG15Y2FudmFzID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXljYW52YXNcIilcblxuICAgICAgICBsZXQgY3R4ID0gbXljYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgICAgIC8vLS0tIGNsZWFyIHNjcmVlblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjM1LCAyNTAsIDI1NSwgMC4wNSknICAgICAgICAvLyBhbHBoYSA8IDEgbMO2c2NodCBkZW4gQmlsZHNjaHJpbSBudXIgdGVpbHdlaXNlIC0+IGJld2VndGUgR2VnZW5zdMOkbmRlIGVyemV1Z2VuIFNwdXJlblxuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgbXljYW52YXMuY2xpZW50V2lkdGgsIG15Y2FudmFzLmNsaWVudEhlaWdodClcblxuICAgICAgICAvLy0tLSBkcmF3IGVsZW1lbnRzXG4gICAgICAgIHRoaXMuZWxlbWVudExpc3QuZHJhdyhjdHgpXG5cbiAgICAgICAgLy8tLS0gZXhlY3V0ZSBlbGVtZW50IGFjdGlvbnNcbiAgICAgICAgdGhpcy5lbGVtZW50TGlzdC5hY3Rpb24oKVxuXG4gICAgICAgIHRoaXMucmFmID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnRpY2suYmluZCh0aGlzKSlcbiAgICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIlxuIFxuY29uc3QgR2FtZSA9IHJlcXVpcmUoXCIuL2dhbWVcIilcbmxldCBteUdhbWUgPSBuZXcgR2FtZSgpXG5teUdhbWUuc3RhcnQoKVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgUmFuZG9tV2Fsa0NpcmNsZUVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLnggPSB4XG4gICAgICAgIHRoaXMueSA9IHlcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguYmVnaW5QYXRoKClcbiAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgNSwgMCwgTWF0aC5QSSAqIDIsIHRydWUpXG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKVxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIlxuICAgICAgICBjdHguZmlsbCgpXG4gICAgfVxuXG4gICAgYWN0aW9uKCkge1xuICAgICAgICB0aGlzLnggKz0gTWF0aC5yYW5kb20oKSAqIDIgLSAxXG4gICAgICAgIHRoaXMueSArPSBNYXRoLnJhbmRvbSgpICogMiAtIDFcbiAgICB9XG59XG4iXX0=
