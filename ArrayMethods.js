/*
  This is a simple example of some of the array methods that are available 
  in JavaScript
*/

class ArrayMethods {
  constructor() {
    this.formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });

    this.cars = [
      {
        vin: 123456,
        Model: "Honda",
        Name: "Civic",
        Color: "Red",
        Type: "Car",
        Price: 27330,
      },
      {
        vin: 674589,
        Model: "Cadillac",
        Name: "Escalade",
        Color: "White",
        Type: "Truck",
        Price: 45453,
      },
      {
        vin: 784521,
        Model: "Chevy",
        Name: "Tahoe",
        Color: "Blue",
        Type: "Truck",
        Price: 45999,
      },
      {
        vin: 564887,
        Model: "Chevy",
        Name: "Camaro",
        Color: "Black",
        Type: "Car",
        Price: 55430,
      },
      {
        vin: 100232,
        Model: "Toyota",
        Name: "Tundra",
        Color: "White",
        Type: "Truck",
        Price: 45200,
      },
    ];
  }

  /*
     Filter Method. The filter method filters out the 
     results depending on your set parameters
    */

  filterMethod() {
    const greaterPrice = this.cars.filter((price) => price.Price > 40000);
    console.log(greaterPrice);

    const lowerPrice = this.cars.filter((price) => price.Price < 52000);
    console.log(lowerPrice);

    const getModel = this.cars.filter((m) => m.Model == "Honda");
    console.log(getModel);
  }

  /*
     Map Method. The map method will loop thru the object or array 
     display information or even do some logic. It is like the 
     traditional for loop
    */

  mapMethod() {
    const getAll = this.cars.map((m) => {
      console.log(m);
    });

    const displayModels = this.cars.map((m) => {
      console.log(m.Model);
    });

    const displayOnlyTrucks = this.cars.map((t) => {
      t.Type == "Truck" && console.log(t);
    });
  }

  /*
     Reduce Method. The reduce method will go thru your array or object
     and add up certain parameters for.
    */

  reduceMethod() {
    const getTotalCost = this.cars.reduce((acc, cur) => acc + cur.Price, 0);
    //formatter just formats the total in to currency format
    console.log(`Total:  ${this.formatter.format(getTotalCost)}`);

    const getCarsByColor = this.cars.reduce((acc, cur) => {
      if (acc[cur.Color]) {
        acc[cur.Color]++;
      } else {
        acc[cur.Color] = 1;
      }

      return acc;
    }, {});

    console.log(getCarsByColor);
  }

  /*
     Some Method. The Some method will traverse the array or object 
     and when the first element or value has meet your conditions will return
     a true or false.
    */
  someMethod() {
    const getOneTruck = this.cars.some((t) => t.Type == "Truck");
    console.log(`There is at least one object that is a truck; ${getOneTruck}`);

    const getOnePrice = this.cars.some((p) => p.Price > 70000);
    console.log(
      `There is a least one car that is over $70,000: ${getOnePrice}`
    );
  }

  /*
     Every Method. The Every method will traverse the array or object 
     and if the every element or value has meet your conditions will return
     a true or false.
    */

  everyMethod() {
    const allIsTrucks = this.cars.every((t) => t.Type == "Truck");
    console.log(`Every object is a truck: ${allIsTrucks}`);

    const allOver10000 = this.cars.every((cost) => cost.Price > 10000);
    console.log(`Every vehicle is over $10,000: ${allOver10000}`);
  }

  /*
      Find Method. This method just finds the very first item in the array or object 
      that matched your search conditions.
    */

  findMethod() {
    const foundModel = this.cars.find((m) => m.Model == "Honda");
    console.log(foundModel);
  }

  /*
    ForEach Method. This method is similar to the for loop where it will loop each item and 
    preform what ever conditions that you have layed out.
  */

  forEachMethod() {
    const getAllNames = this.cars.forEach((items) => console.log(items.Name));

    console.log(`\nThis shows all the trucks in the array:\n`);
    const getAllTrucks = this.cars.forEach((i) => {
      i.Type == "Truck" && console.log(i.Name);
    });
  }

  /*
    Sort Method. This method sorts the array based on the conditions that you
    set.
   */

  sortMethod() {
    const sortByPrice = this.cars.sort((p1, p2) =>
      p1.Price > p2.Price ? 1 : -1
    );
    console.log(sortByPrice);

    const sortByColor = this.cars.sort((p1, p2) => (p1.vin > p2.vin ? 1 : -1));
    console.log(sortByColor);
  }

  /*
     This is just a very simple example of how you can 
     combine these array methods to better suit your needs.
    */
  combinationOfMethods() {
    const areAllTrucksWhite = this.cars
      .filter((f) => f.Type == "Truck")
      .every((w) => w.Color == "White");

    console.log(`Every truck is white: ${areAllTrucksWhite}`);
  }
}

const arrayMethod = new ArrayMethods();

console.log("This is for the Map method");
console.log("===========================================");
arrayMethod.mapMethod();

console.log("\nThis is for the Reduce method");
console.log("===========================================");
arrayMethod.reduceMethod();

console.log("\nThis is for the Filter method");
console.log("===========================================");
arrayMethod.filterMethod();

console.log("\nThis is for the Some method");
console.log("===========================================");
arrayMethod.someMethod();

console.log("\nThis is for the Every method");
console.log("===========================================");
arrayMethod.everyMethod();

console.log("\nThis is for the find method");
console.log("===========================================");
arrayMethod.findMethod();

console.log("\nThis is for the forEach method");
console.log("===========================================");
arrayMethod.forEachMethod();

console.log("\nThis is for the sort method");
console.log("===========================================");
arrayMethod.sortMethod();

console.log("\nThis is a combination of methods");
console.log("===========================================");
arrayMethod.combinationOfMethods();
