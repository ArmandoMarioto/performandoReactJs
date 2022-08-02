import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

type SearchResultsProps ={
    totalPrice: number
    results: Array<{
        id: number,
        title: string,
        price: number,
    }>
    onAddToWishlist: (id: number) => void
}

export function SearchResults({results, onAddToWishlist , totalPrice}: SearchResultsProps) {
    
    return (
        <div>
            <h2>{totalPrice}</h2>
            {results.map((product) => (
                <ProductItem key={product.id} product={product}
                onAddToWishlist={onAddToWishlist}/>
                ))}
        </div>
    )
}