const products = [
{
id: '1',
name: 'chevrolet onix',
price: 8000000, 
category: 'autos' ,
img: 'https://clubedoonix.com.br/uploads/monthly_2018_05/image.png.95c260a26a951a7032042ee3234f0c7e.png',
stock: 27, 
description: 'descrption de chevrolet onix',
},
{id: '2',
    name: 'chevrolet tracker',
    price: 16000000, 
    category: 'suvs' ,
    img: 'https://www.agritotal.com/files/image/5/5211/520d214e4f9da_600_315!.jpg?s=cec414a931b9458ac76769ac3ff3454d&d=1597627845',
    stock: 18, 
    description: 'descrption de chevrolet tracker',},
    {id: '3',
        name: 'chevrolet s10',
        price: 16000000, 
        category: 'pick-up' ,
        img: 'https://d3po9jkuwb69jo.cloudfront.net/media/uploads/2016/02/29/diez-autos-para-mujer5.png',
        stock: 32, 
        description: 'descrption de chevrolet s10',},
]

export const getProducts = () => {
    return new Promise ((resolve)  => {
        setTimeout ( () => {
            resolve(products)
        }, 500)
    })
}

export const getProductsById= (productId) => {
    return new Promise ((resolve) => {
        setTimeout ( () => {
            resolve(products.find(prod => prod.id === productId ))
        }, 500);
    });
     }

     export const getProductsByCategory= (categoryId) => {
        return new Promise ((resolve) => {
            setTimeout ( () => {
                resolve(products.filter(prod => prod.category === categoryId ))
            }, 500);
        });
         } 