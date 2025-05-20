function myName() {
    document.getElementById("name").innerHTML = "Hello, my name is Mahafuj ahamed";
}

function odd(){
    let carName = "lamborghini";
    document.getElementById("car").innerHTML = carName;
}
odd();

function myFunction() {
    const cars = ["Saab", "Volvo", "BMW"];
    // change an element
    cars[0] = "Toyota";
    // Add cars
    cars.push("Audi");
    document.getElementById("list").innerHTML = cars;
}