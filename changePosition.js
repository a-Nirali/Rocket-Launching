AFRAME.registerComponent("move", {
    schema: {
        moveY: { type: "number", default: 1 }
    },
    tick: function () {
            this.data.moveY = this.data.moveY + 0.1;
        //el.getattribute is for getting the position of the box(obj)
        var pos = this.el.getAttribute("position");
        pos.y = this.data.moveY;
        //el.setAttribute to update the value
        //el is used to represnet a html element
        this.el.setAttribute("position", { x: pos.x, y: pos.y, z: pos.z })
    }
})

AFRAME.registerComponent("fall-down", {
    schema: {
        moveY: { type: "number", default: 0 }
    },
    tick: function () {
        window.addEventListener("click", (e) => {
            this.data.moveY = this.data.moveY - 0.01;
        })
        //el.getattribute is for getting the position of the box(obj)
        var pos = this.el.getAttribute("position");
        pos.y = this.data.moveY;
        //el.setAttribute to update the value
        //el is used to represnet a html element
        this.el.setAttribute("position", { x: pos.x, y: pos.y, z: pos.z })
    }
})

