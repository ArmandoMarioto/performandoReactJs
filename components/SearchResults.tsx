import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

type SearchResultsProps ={
    results: Array<{
        id: number,
        title: string,
        price: number,
    }>
}

export function SearchResults({results }: SearchResultsProps) {
    const totalPrice = useMemo(() => results.reduce((total, product) => total + product.price, 0),[results]);
    return (
        <div>
            <h2>{totalPrice}</h2>
            {results.map((product) => (
                <ProductItem key={product.id} product={product} />
                ))}
        </div>
    )
}