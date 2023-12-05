import { sum } from '../utils/sum.js';

export const getProductsList = (request, response) => {
    response.status(200).json({
        data:[ 
            {
                product_image: 'https://source.unsplash.com/random/?Products',
                product_title: 'Running Shoes',
                product_desc: 'Lorem Ipsum',
                product_price: 2000000         
            }
        ],
        message: 'Succesfully Retrieved Data'
    });
};


