import { FormEvent, useCallback, useState } from "react";
import { SearchResults } from "../components/SearchResults";


type result = {
  totalPrice: number
  data: any
}



export  default  function Home() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<result>({
    totalPrice: 0,
    data: []
  });

  async function handleSearch(event: FormEvent) {
    event.preventDefault();
    
  
    if(!search.trim()) {
      return;
    }
    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await response.json();
    const totalPrice = data.reduce((total:number, product:any) => total + product.price, 0)
    setResults({totalPrice, data});
  } 

  const addToWishlist = useCallback((id: number) => {
    console.log(id);
  },[])

  return (
    <div>
      <h1>Search</h1>
      <form onSubmit={handleSearch}>
        <input type="text" value={search} 
        onChange={e => setSearch(e.target.value)} />
        <button type="submit">Buscar</button>
      </form>

      <SearchResults results={results.data} 
      totalPrice={results.totalPrice}
      onAddToWishlist={addToWishlist}/>
      
    </div>
  )
}
