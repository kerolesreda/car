class car{
    #brand;
    #model;
    #year;
    constructor(brand, model, year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getDetails(){
        return `${this.year} ${this.brand} ${this.model}`;
    }
}
class electricCar extends car{
    #batteryCapacity;
    constructor(brand, model, year, batteryCapacity){
        super(brand, model, year);
        this.batteryCapacity = batteryCapacity;
    }
    getDetails(){
        return `${super.getDetails()} with a battery capacity of ${this.batteryCapacity} kWh`;
    }
}
const myElectricCar = new electricCar('Tesla', 'Model S', 2022, 100);
console.log(myElectricCar.getDetails());