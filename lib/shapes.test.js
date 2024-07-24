const {Shape, Triangle, Square, Circle} = require('./shapes.js');

describe('Shapes', () => {
    describe('Instantiate', () => {
        it('should be an instance of shape', () => {
            const shape = new Shape();
            expect(shape).toBeInstanceOf(Shape);
        });
        it('should be a shape with a color', () => {
            const shape = new Shape('red');
            expect(shape.color).toEqual('red');
        });
        it('should be a shape with text', () => {
            const shape = new Shape('red', 'SVG');
            expect(shape.text).toEqual('SVG');
        });
        it('should be a shape with text color', () => {
            const shape = new Shape('red', 'SVG', 'white');
            expect(shape.textColor).toEqual('white');
        });
    })
    describe('Triangle', () => {
        describe('Instantiate', () => {
            it('should be an instance of triangle', () => {
                const triangle = new Triangle();
                expect(triangle).toBeInstanceOf(Triangle);
            });
            it('should be a triangle with points', () => {
                const triangle = new Triangle();
                expect(triangle.points).toEqual('150,0 0,200 300,200');
            });
            it('should be a triangle with a color', () => {
                const triangle = new Triangle('red');
                expect(triangle.color).toEqual('red');
            });
            it('should be a triangle with text', () => {
                const triangle = new Triangle('red', 'SVG');
                expect(triangle.text).toEqual('SVG');
            });
            it('should be a triangle with text color', () => {
                const triangle = new Triangle('red', 'SVG', 'white');
                expect(triangle.textColor).toEqual('white');
            });
        });
        describe('render', () => {
            it('should return an svg string', () => {
                const triangle = new Triangle('red', 'SVG', 'white');
                expect(triangle.render()).toEqual(`<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
    <polygon points='150,0 0,200 300,200' style="fill:red" />
    <text x='50%' y='50%' font-size='50' dominant-baseline='middle' text-anchor='middle' style='fill:white'>SVG</text>
</svg>`);
            });
        });
    });
    describe('Square', () => {
        describe('Instantiate', () => {
            it('should be an instance of square', () => {
                const square = new Square();
                expect(square).toBeInstanceOf(Square);
            });
            it('should be a square with points', () => {
                const square = new Square();
                expect(square.points).toEqual('50,0 50,200 250,200 250,0');
            });
            it('should be a square with a color', () => {
                const square = new Square('red');
                expect(square.color).toEqual('red');
            });
            it('should be a square with text', () => {
                const square = new Square('red', 'SVG');
                expect(square.text).toEqual('SVG');
            });
            it('should be a square with text color', () => {
                const square = new Square('red', 'SVG', 'white');
                expect(square.textColor).toEqual('white');
            });
        });
        describe('render', () => {
            it('should return an svg string', () => {
                const square = new Square('red', 'SVG', 'white');
                expect(square.render()).toEqual(`<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
    <polygon points='50,0 50,200 250,200 250,0' style="fill:red" />
    <text x='50%' y='50%' font-size='50' dominant-baseline='middle' text-anchor='middle' style='fill:white'>SVG</text>
</svg>`);
            });
        });
    });
    describe('Circle', () => {
        describe('Instantiate', () => {
            it('should be an instance of circle', () => {
                const circle = new Circle();
                expect(circle).toBeInstanceOf(Circle);
            });
            it('should be a circle with center', () => {
                const circle = new Circle();
                expect([circle.cx, circle.cy, circle.r]).toEqual([150, 100, 100]);
            });
            it('should be a circle with a color', () => {
                const circle = new Circle('red');
                expect(circle.color).toEqual('red');
            });
            it('should be a circle with text', () => {
                const circle = new Circle('red', 'SVG');
                expect(circle.text).toEqual('SVG');
            });
            it('should be a circle with text color', () => {
                const circle = new Circle('red', 'SVG', 'white');
                expect(circle.textColor).toEqual('white');
            });
        });
        describe('render', () => {
            it('should return an svg string', () => {
                const circle = new Circle('red', 'SVG', 'white');
                expect(circle.render()).toEqual(`<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
    <circle r='100' cx='150' cy='100' style="fill:red" />
    <text x='50%' y='50%' font-size='50' dominant-baseline='middle' text-anchor='middle' style='fill:white'>SVG</text>
</svg>`);
            });
        });
    });
});