class Circle {
    constructor (radius){
        this.radius = radius
    }

    get diameter(){
        return 2 * this.radius;
    }

    get circumference() {
        return Math.PI * this.diameter;
    }

    get area(){
        return Math.PI * this.radius ** 2;
    }

    set diameter(diameter){
        this._diameter = diameter;
        this.radius = this._diameter / 2;
    }

    set circumference(circumference) {
        this._circumference = circumference;
        this.radius = this._circumference / Math.PI / 2
    }

    set area(area){
        this._area = area;
        this.radius = Math.sqrt(this._area) / Math.PI;
    }
}