import { ProductItem } from "./ProductItem";

type SearchResultsProps ={
    results: Array<{
        id: number,
        title: string,
        price: number,
    }>
}

export function SearchResults({results }: SearchResultsProps) {
    return (
        <div>
            {results.map((product) => (
                <ProductItem product={product} />
                ))}
        </div>
    )
}