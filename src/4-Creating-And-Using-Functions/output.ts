import { productsURL } from '../lib';
import * as stream from 'stream';

const prefix = '🐉 ';

type ProductType = {
  id: number;
  name: string;
  icon?: string;
};

runTheLearningSamples();

function runTheLearningSamples() {
  function displayProductInfo(id: number, name: string) {
    console.log(`${prefix} typed parameters`);
    console.log(`product id = ${id} and name = ${name}`);
  }

  displayProductInfo(10, 'Pizza');
  console.log(addNumbersDeclaration(7, 11));

  const sampleProducts = [
    {
      id: 10,
      name: 'Pizza slice',
      icon: 'fas- fa-pizza-slice',
    },
    {
      id: 20,
      name: 'Ice cream',
      icon: 'fas fa-ice-cream',
    },
    {
      id: 30,
      name: 'Cheese',
      icon: 'fas fa-cheese',
    },
  ];

  console.log(getProductNames());

  function getProductNames(): string[] {
    return sampleProducts.map((p) => p.name);
  }

  function getProductById(id: number): ProductType | undefined {
    return sampleProducts.find((p) => id === p.id);
  }

  console.log(getProductById(21));

  function displayProducts(products: ProductType[]): void {
    const productNames: string[] = products.map((p) => {
      return p.name.toLowerCase();
    });
    console.log(`type of productNames is: ${typeof productNames}`);
    const msg = `Sample products include: ${productNames.join(', ')}`;
    console.log(msg);
  }

  displayProducts(sampleProducts);

  function addNumbersDeclaration(x: number, y: number): number {
    const sum: number = x + y;
    return sum;
  }
}

const addNumbersExpression = function (x: number, y: number) {
  const sum: number = x + y;
  return sum;
};

// a function expression needs to be declared before we call it
console.log(addNumbersExpression(1, 4));

async function getProducts(): Promise<ProductType[]> {
  const response = await fetch(productsURL);
  return await response.json();
}

export default async function updateOutput(id: string) {
  const products = await getProducts();
  const output = document.querySelector(`#${id}`);
  const html = layoutProducts(products);
  if (output && html) {
    output.innerHTML = html;
  }
}

function layoutProducts(products: ProductType[]) {
  const items = products.map(({ id, icon, name }: ProductType) => {
    const productHtml = `
    <span class="card-id">#${id}</span>
        <i class="card-icon ${icon} fa-lg"></i>
    <span class="card-name">#${name}</span>
    `;
    return `
    <li>
        <div class="card">
          <div class="card-content">
            <div class="content">
                ${productHtml}
            </div>
          </div>
        </div>
    </li>
    `;
  });
  return `<ul>${items.join('')}</ul>`;
}

const getRandomInt = (max: number = 100000) => {
  const { floor, random } = Math;
  return floor(random() * max);
};

function createProduct(
  name: string,
  icon: string = 'generic-fruit.jpg',
): ProductType {
  const id = getRandomInt();
  return {
    id,
    name,
    icon,
  };
}

let pineApple = createProduct('Pineapple', 'pine-apple.jpg');
let mango = createProduct('Mango');

// console.log(`${JSON.stringify([pineApple, mango], null, 2)}`);
console.table([pineApple, mango]);

// rest parameter example
function buildAddress(
  street: string,
  city: string,
  ...restOfAddress: string[]
): string {
  return `${street} ${city} ${restOfAddress.join(' ')}`;
}

let address = buildAddress(
  'Colina de la Pan',
  'Satelite',
  'Bulevares',
  '53130',
  'No Ext. 184',
);

console.log(address);

// destructuring parameters
function displayProduct({ id, name }: ProductType): void {
  console.log(`id: ${id} name: ${name}`);
}

displayProduct(createProduct('Mauricio'));
