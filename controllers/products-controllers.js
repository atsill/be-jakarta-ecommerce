import { sum } from '../utils/sum.js';

export const getProductsList = (request, response) => {
    const productList = [];
    const totalProducts = 10;

    for(let i = 0; i < totalProducts; i += 1) {
        productList.push(
            {
                product_image: `https://source.unsplash.com/random/?Shoes&timestamp=123123 = ${i}`,
                product_title: 'Running Shoes',
                product_desc: 'Lorem Ipsum',
                product_price: 2000000         
            }
        )
    }

    response.status(200).json({
        data: productList,
        message: 'Succesfully Retrieved Data'
    });
};


