import styled from 'styled-components';



export const Container = styled.div`
    width: 650px;
    padding: 15px;
`;

export const ProductArea = styled.div`
    height: 200px;
    display: flex;
`;

export const ProductButtons = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const ProductPhoto = styled.img`
    width: 310px;
    border-radius: 10px;
`;

export const ProductInfoArea = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
`;

export const ProductDetails = styled.div`
    
`;

export const ProductQuantityArea = styled.div`
    height:50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ProductName = styled.div`
    font-size: 30px;
    font-weight: bold;
`;

export const ProductIngredients = styled.div`
    font-size: 14px;
`;

export const ProductButton = styled.button`
    border: 0;
    background-color: #073C07;
    box-shadow: 4px 5px 0px rgba(0, 0, 0, 0.16);
    color: #FFF;
    font-size: ${props=>props.small ? '15px' : '22px'};
    font-weight: bold;
    padding: ${props=>props.small ? '8px 15px' : '10px 20px'};
    margin-left: 10px;
    border-radius: 5px;
    cursor: pointer;
`;

export const ProductQuantity = styled.div`
    display: flex;
    background-color: #073C07;
    color: #FFF;
`;

export const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: bold;
`;

export const ProductQtImage = styled.img`
    width: 20px;
    height: 20px;
    margin-top: 4px;
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
`;

export const ProductQtText = styled.div`
    font-size: 25px;
    font-weight: bold;
    margin-left: 5px;
    margin-right: 5px;
`;