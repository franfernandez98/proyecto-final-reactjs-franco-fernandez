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
    img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fes%2Fsearch%3Fq%3Dchevrolet%2Btracker&psig=AOvVaw0aSiFM1nbSWrfEG_APJALW&ust=1738114128667000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOi-ufOhl4sDFQAAAAAdAAAAABAE',
    stock: 18, 
    description: 'descrption de chevrolet tracker',},
    {id: '3',
        name: 'chevrolet s10',
        price: 16000000, 
        category: 'pick-up' ,
        img: 'https://th.bing.com/th/id/R.3ebed99a2fdd5c546b2c08b7b8810a80?rik=NbSiZfbDhWLL3A&riu=http%3a%2f%2flive.staticflickr.com%2f65535%2f50163106322_1d0b53d03d_k.jpg&ehk=hvU5dEQ4h0MsqAVPMCc%2byjILXnBReXTZiRNB60xPWVo%3d&risl=&pid=ImgRaw&r=0',
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