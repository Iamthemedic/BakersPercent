class Product {
    constructor(name,uom, amount){
        this.name = name;
        this.uom = uom;
    }
}
//it's important to export the class at the end of the file
module.exports = Product