class ProductsManager {
  static productsList = [];
  static productIdCounter = 1;

  constructor() {
    this.products = [];
  }

  create(data) {
    const productId = ProductsManager.productIdCounter++;
    const product = {
      id: productId,
      title: data.title,
      photo: data.photo,
      category: data.category,
      price: data.price,
      stock: data.stock,
    };

    this.products.push(product);
    return product;
  }

  read() {
    return this.products;
  }
}

class UsersManager {
  static usersList = [];
  static userIdCounter = 1;

  constructor() {
    this.users = [];
  }

  create(data) {
    const userId = UsersManager.userIdCounter++;
    const user = {
      id: userId,
      photo: data.photo,
      email: data.email,
      password: data.password,
      role: data.role,
    };

    this.users.push(user);
    return user;
  }

  read() {
    return this.users;
  }
}

const productsManager = new ProductsManager();
const usersManager = new UsersManager();

const user1 = {
  photo: 'https://miro.medium.com/v2/resize:fit:1200/1*OBZJJYHDPSWnsGxa3DLxIg.jpeg',
  email: 'usuario1@gmail.com',
  password: 'contraseña12345',
  role: 'cliente',
};

const user2 = {
  photo: 'https://humanidades.com/wp-content/uploads/2016/04/gran-empresario-e1558299974907.jpg',
  email: 'admin@gmail.com',
  password: '12345contraseña',
  role: 'admin',
};

const product1 = {
  title: 'Yerba Canarias',
  photo: 'https://acdn.mitiendanube.com/stores/941/465/products/6a40b04b-cd4d-4155-9ccb-f36c301efa02_nube-39f5376672ce4c78f515968373570276-640-0.jpg',
  category: 'Canarias',
  price: 700,
  stock: 4,
};

const product2 = {
  title: 'Yerba Union',
  photo: 'https://http2.mlstatic.com/D_NQ_NP_749234-MLA51482504099_092022-O.webp',
  category: 'Union',
  price: 850,
  stock: 10,
};

const product3 = {
  title: 'Yerba Rosamonte',
  photo: 'https://acdn.mitiendanube.com/stores/805/409/products/02-render-rosamonte-tradicional-x-500g-final-1-fa104fbb23cf54e43917053428163617-480-0.jpg',
  category: 'Rosamonte',
  price: 900,
  stock: 6,
};

const product4 = {
  title: 'Yerba Playadito',
  photo: 'https://jumboargentina.vtexassets.com/arquivos/ids/711224/Yerba-Mate-Playadito-Suave-X1kg-1-854539.jpg?v=637938633804770000',
  category: 'Playadito',
  price: 1050,
  stock: 8,
};

const product5 = {
  title: 'Yerba Taragui(Azul)',
  photo: 'https://modomarketar.vteximg.com.br/arquivos/ids/159030/Yerba-Taragui-4-Flex-Azul-Sin-Palo-X-1-Kg-1-5520.jpg?v=637873727431330000',
  category: 'Taragui',
  price: 1700,
  stock: 8,
};

usersManager.create(user1);
usersManager.create(user2);

productsManager.create(product1);
productsManager.create(product2);
productsManager.create(product3);
productsManager.create(product4);
productsManager.create(product5);

console.log('Productos:');
console.log(productsManager.read());

console.log('\nUsuarios:');
console.log(usersManager.read());