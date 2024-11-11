"use strict";
//Task1:
console.log("Hello World!");
const vehicle = {
    model: "Boring generic vehicle",
    color: "Red",
    year: 1993,
    power: 60,
};
console.log(vehicle);
const car = {
    model: "Ford focus",
    color: "Green",
    year: 2016,
    power: 150,
    bodyType: "Hatchback",
    wheelCount: 4,
};
const plane = {
    model: "Boeing 777",
    color: "White",
    year: 2020,
    power: 170000,
    wingspan: 65,
};
const boat = {
    model: "Bella",
    color: "Black",
    year: 2022,
    power: 100,
    draft: 0.42,
};
console.log(car);
console.log(plane);
console.log(boat);
//Task4:
class VehicleService {
    items = [];
    add(item) {
        this.items.push(item);
    }
    list() {
        return this.items;
    }
}
const carService = new VehicleService();
const boatService = new VehicleService();
carService.add(car);
boatService.add(boat);
console.log("Cars:", carService.list());
console.log("Boats:", boatService.list());
