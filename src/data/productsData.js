export const productsData = [
    {
        name: "Sanguchito de Jamón y Cheddar",
        id: 1,
        price: 1200,
        description: "Media docena de sanguches de jamón y cheddar veganos, quedan muy ricos tostados.",
        category: "sanguche",
        image: "../../src/assets/sangucheJyq.jpeg",
    },
    {
        name: "Sanguchito de Aceituna y Queso",
        id: 2,
        price: 1200,
        description: "Media docena de sanguches de aceituna y queso veganos, para los amantes de las aceitunas.",
        category: "sanguche",
        image: "../../src/assets/sangucheAyq.jpeg",
    },
    {
        name: "Sanguchito No Huevo",
        id: 3,
        price: 1200,
        description: "Media docena de sanguches de no huevo (tofu) y queso vegano, tenes que probarlos.",
        category: "sanguche",
        image: "../../src/assets/sangucheNoHuevo.jpeg",
    },
    {
        name: "Sanguchito de Tomate y Albaca",
        id: 4,
        price: 1200,
        description: "Media docena de sanguches de tomate y albaca, una opción fresca y deliciosa.",
        category: "sanguche",
        image: "../../src/assets/sangucheTya.jpeg",
    },
    {
        name: "Pan de Ajo",
        id: 5,
        price: 800,
        description: "Tres panes saborizados con dip de garbanzos.",
        category: "panes",
        image: "../../src/assets/panAjo.jpeg",
    },
    {
        name: "Pan de Cebolla",
        id: 6,
        price: 800,
        description: "Tres panes saborizados con dip de garbanzos.",
        category: "panes",
        image: "../../src/assets/panCebolla.jpeg",
    },
    {
        name: "Pan de Oregano",
        id: 7,
        price: 800,
        description: "Tres panes saborizados con dip de garbanzos.",
        category: "panes",
        image: "../../src/assets/panOregano.jpeg",
    },
    {
        name: "Pan Integral",
        id: 9,
        price: 800,
        description: "Pan integral de molde (ya cortado), listo para frizzar.",
        category: "panes",
        image: "../../src/assets/panIntegral.jpeg",
    },
];


export const getElementByCategory = (category) =>{
  return new Promise ((res) =>{
        const products = productsData.filter (product => product.category === category);
        setTimeout (() =>{
          res(products);
        }, 1000);
    });
}
export const getProducts = () => {
    return new Promise ((res) => {
        setTimeout(() =>{
            res(productsData);
        }, 1000);
    })
}

export const categories = [{id: 10, category: "sanguche"}, {id: 11, category: "panes"}];

