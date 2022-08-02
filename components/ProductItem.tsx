import { memo, useState } from "react";
import dynamic from "../node_modules/next/dynamic";
import { AddProductToWishlistProps } from "./AddProductToWishlist";


//se não for next, usar a função "lazy" do react que é a mesma coisa
const AddProductToWishlist = dynamic<AddProductToWishlistProps>(() => import("./AddProductToWishlist")
.then(mod => mod.AddProductToWishlist),{
    loading: () => <span>Carregando...</span>
});

type ProductItemProps = {
  product: {
    id: number;
    title: string;
    price: number;
  };
  onAddToWishlist: (id: number) => void;
};

function ProductItemComponent({ product, onAddToWishlist }: ProductItemProps) {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);
  return (
    <div>
      {product.title} - <strong> {product.price} </strong>
      <button onClick={() => setIsAddingToWishlist(true)}>
        Adicionar aos favoritos
      </button>
      {isAddingToWishlist && (
        <AddProductToWishlist
          onAddToWishlist={() => onAddToWishlist(product.id)}
          onRequestClose={() => setIsAddingToWishlist(false)}
        />
      )}
    </div>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);
