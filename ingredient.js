class Product {
    constructor(name,uom, amount){
        this.name = name;
        this.uom = uom;
        this.amount = amount
    }
}
//it's important to export the class at the end of the file
module.exports = Product // Export class