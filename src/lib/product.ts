import { IProduct } from './interfaces';

// This will act as the foundation for other Product type classes (FoodProduct, SportingProduct)
abstract class ProductBase implements IProduct {
  constructor(public id: number, public name: string, public icon: string) {}

  validate(): boolean {
    throw new Error('Not implemented');
  }
}

export class FoodProduct extends ProductBase {
  validate(): boolean {
    return !!this.id && !!this.name && !!this.icon;
  }
}

// sample class with constructor, and automatically field declaration
class MyProduct {
  constructor(
    public id: number,
    public name: string,
    private hiddenStuff: string,
  ) {
    console.log(
      `hidden stuff is accessible only within the class, like this: ${this.hiddenStuff}`,
    );
  }

  validate(): boolean {
    return !!this.id && !!this.name;
  }
}

let p = new MyProduct(1, 'Something', 'secret');
console.log(`validated: ${p.validate()}`);
p.id = 0;
console.log(`validated: ${p.validate()}`);

// another class with same fields as MyProduct, but explicitly declared fields
class MyProduct2 {
  id: number = 0;
  name: string = '';

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    // we can have private functions as well within the scope of the class
    this.secretFunction();
  }

  private secretFunction() {
    console.log('secretFunction called');
  }
}

let p2 = new MyProduct2(2, 'Another1');
