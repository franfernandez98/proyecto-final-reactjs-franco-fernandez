import { useState, useEffect } from 'react';
import {getProductsById} from '../../asyncMock';
import ItemDetail from '../ItemDetail/Itemdatail';
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () =>{
    const [products, setProducts] = useState (null) 

   const {ItemId} = useParams ()

  useEffect (()=>{
      getProductsById(ItemId)
         .then(response =>{
          setProducts(response)
         } )
         .catch(error =>{
         console.error(error)
         } )
          }, [ItemId])

          return(
            <div className='ItemDetailContainer'>
               <ItemDetail {...products} /> 
            </div>
        )
         }
        
        export default ItemDetailContainer
