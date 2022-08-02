import { memo } from "react";

type ProductItemProps = {
    product: {
        id: number,
        title: string,
        price: number,
    }
}

function ProductItemComponent({product}:ProductItemProps){
    return (
        <div>
            {product.title} - <strong> {product.price} </strong>
        </div>
    )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product)
});