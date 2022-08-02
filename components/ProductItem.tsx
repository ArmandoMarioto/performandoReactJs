import { memo } from "react";

type ProductItemProps = {
    product: {
        id: number,
        title: string,
        price: number,
    }
    onAddToWishlist: (id: number) => void
}

function ProductItemComponent({product,onAddToWishlist}:ProductItemProps){
    return (
        <div>
            {product.title} - <strong> {product.price} </strong>
            <button onClick={() => onAddToWishlist(product.id)}>Add to Wishlist</button>
        </div>
    )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product)
});