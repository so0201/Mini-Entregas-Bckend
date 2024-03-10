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
  title: 'Product 1',
  photo: 'product1.jpg',
  category: 'Electronics',
  price: 49.99,
  stock: 100,
};

const product2 = {
  title: 'Product 2',
  photo: 'product2.jpg',
  category: 'Clothing',
  price: 29.99,
  stock: 50,
};

const product3 = {
  title: 'Product 3',
  photo: 'product3.jpg',
  category: 'Books',
  price: 19.99,
  stock: 75,
};

const product4 = {
  title: 'Product 4',
  photo: 'product4.jpg',
  category: 'Home',
  price: 39.99,
  stock: 30,
};

const product5 = {
  title: 'Product 5',
  photo: 'product5.jpg',
  category: 'Toys',
  price: 14.99,
  stock: 120,
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
