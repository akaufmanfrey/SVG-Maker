// generic class for all shared properties of shapes
class Shape {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
}
// each shape has its own class which adds some geometric information and a render method.
class Triangle extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
        //coordinates of the vertices of the triangle to be used by render
        this.points = '150,0 35,200 265,200'
    }
    // generate svg file content as a string
    render() {
        return `<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
    <polygon points='${this.points}' style="fill:${this.color}" />
    <text x='50%' y='50%' font-size='50' dominant-baseline='middle' text-anchor='middle' style='fill:${this.textColor}'>${this.text}</text>
</svg>`
    }
}

class Square extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
        //coordinates of the vertices of the square to be used by render
        this.points = '50,0 50,200 250,200 250,0';
    }
    render() {
        return `<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
    <polygon points='${this.points}' style="fill:${this.color}" />
    <text x='50%' y='50%' font-size='50' dominant-baseline='middle' text-anchor='middle' style='fill:${this.textColor}'>${this.text}</text>
</svg>`
    }
}

class Circle extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
        // circles are specified by the coordinates of a center (cx, cy) and a radius, r.
        this.cx = 150;
        this.cy = 100;
        this.r = 100;
    }
    render() {
        return `<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
    <circle r='${this.r}' cx='${this.cx}' cy='${this.cy}' style="fill:${this.color}" />
    <text x='50%' y='50%' font-size='50' dominant-baseline='middle' text-anchor='middle' style='fill:${this.textColor}'>${this.text}</text>
</svg>`
    }
}

module.exports = {Shape, Triangle, Square, Circle};