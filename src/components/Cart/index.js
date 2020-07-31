import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {CartArea,
    CartHeader,
    CartIcon,
    CartText,
    CartBody,
    ProductsArea,
    ProductItem,
    ProductPhoto,
    ProductInfoArea,
    ProductName,
    ProductPrice,
    ProductQuantityArea,
    ProductQtIcon,
    ProductQtText,
    CartEmptyText
} from './styled';

export default () => {

    const products = useSelector(state=>state.cart.products);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    const handleCartClick = () => {
        setShow(!show);
    }

    const handleProductChanged = (key, type) => {
        dispatch({
            type: 'CHANGE_PRODUCT',
            payload: {key, type}
        });
    }

    return(
        <CartArea>
            <CartHeader onClick={handleCartClick}>
                <CartIcon src="/assets/cart.png"/>
                <CartText>Meu Carrinho ({products.length})</CartText>
                {show  &&
                    <CartIcon src="/assets/down.png"/>
                }
            </CartHeader>
            <CartBody show={show}>
                <ProductsArea>
                    {products.map((item, index)=>(
                    <ProductItem key={index}>
                        <ProductPhoto src={item.image}/>
                        <ProductInfoArea>
                            <ProductName>{item.name}</ProductName>
                            <ProductPrice>R$ {item.price.toFixed(2)}</ProductPrice>
                        </ProductInfoArea>
                        <ProductQuantityArea>
                            <ProductQtIcon src="/assets/minus.png" onClick={()=>handleProductChanged(index, '-')}/>
                            <ProductQtText>{item.qt}</ProductQtText>
                            <ProductQtIcon src="/assets/plus.png" onClick={()=>handleProductChanged(index, '+')}/>
                        </ProductQuantityArea>
                    </ProductItem>
                    ))}
                </ProductsArea>
            </CartBody>
        </CartArea>
    );
}