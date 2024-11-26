const products =[
    {
      id: "1",
      name: "Family",
      price: 1000,
      category: "consolas",
      img: "../../public/family.png",
      stock: 25,
      description: "Consola Family Game Nintendo",
    },
    {
      id: "2",
      name: "Sega",
      price: 900,
      category: "consolas",
      img: "../../public/sega.png",
      stock: 30,
      description: "Consola Sega",
    },
    {
      id: "3",
      name: "Gameboy",
      price: 800,
      category: "consolas",
      img: "../../public/gameboy.png",
      stock: 20,
      description: "Consola Gameboy",
    },
    {
      id: "4",
      name: "Toejam and Earl",
      price: 2500,
      category: "juegos",
      img: "../../public/toejamandearl.png",
      stock: 10,
      description: "Cartucho de Sega de Toejam and Earl",
    },
    {
      id: "5",
      name: "Island adventure",
      price: 1200,
      category: "juegos",
      img: "../../public/islandadventure.png",
      stock: 15,
      description: "Cartucho de family de Island adventure",
    },
    {
      id: "6",
      name: "Pokemon",
      price: 1300,
      category: "juegos",
      img: "../../public/pokemoncrystal.png",
      stock: 12,
      description: "Cartucho para gameboy de Pokemon Crystal Version",
    },
    {
      id: "7",
      name: "Muñeco",
      price: 350,
      category: "accesorios",
      img: "../../public/muñeco-zelda.png",
      stock: 40,
      description: "Muñeco de zelda",
    },
    {
      id: "8",
      name: "Lampara",
      price: 300,
      category: "accesorios",
      img: "../../public/lampara-sonic.png",
      stock: 35,
      description: "Lampara de Sonic",
    },
    {
      id: "9",
      name: "Reloj",
      price: 500,
      category: "accesorios",
      img: "../../public/reloj-mariobros.png",
      stock: 25,
      description: "Reloj de hongo de Mario Bros",
    },

  ];
  
  export const getProducts = () => {
      return new Promise((resolve) => {
          setTimeout(()=>{
              resolve(products)
          }, 1000)
      })
  }
  
  export const getProductsByCategory = (categoria) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter((product) => product.category === categoria))
      }, 2500);
    });
  };

  export const getProductByID = (id) => {
    return new Promise((resolve, reject) => {
      const product = products.find(item => item.id === id);
      if (product) {
        resolve(product);
      } else {
        reject("Producto no encontrado");
      }
    });
  };