class ProductManager {
  constructor() {
    this.products = [];
  }
  generateUniqueId() {
    return '_' + Math.random().toString(36).substring(2, 11);
  }

  getProducts() {
    return this.products;
  }

  addProduct(product) {
    const existingProduct = this.products.find((p) => p.code === product.code);

    if (existingProduct) {
      throw new Error('El código del producto ya está en uso.');
    }

    const newProduct = {
      id: this.generateUniqueId(),
      ...product,
    };

    this.products.push(newProduct);
    return newProduct;
  }

  getProductById(productId) {
    const product = this.products.find((p) => p.id === productId);

    if (!product) {
      throw new Error('Producto no encontrado.');
    }

    return product;
  }
}

const productManager = new ProductManager();

console.log(productManager.getProducts());

try {
  const newProduct = {
    title: 'producto prueba',
    description: 'Este es un producto prueba',
    price: 200,
    thumbnail: 'Sin imagen',
    code: 'abc123',
    stock: 25,
  };

  productManager.addProduct(newProduct);
  console.log(productManager.getProducts());
} catch (error) {
  console.error(error.message);
}

try {
  productManager.addProduct(newProduct);
} catch (error) {
  console.error(error.message);
}

try {
  const retrievedProduct = productManager.getProductById(productManager.getProducts()[0].id);
  console.log(retrievedProduct);
} catch (error) {
  console.error(error.message);
}

try {
  productManager.getProductById('productoNoExistente');
} catch (error) {
  console.error(error.message);
}
