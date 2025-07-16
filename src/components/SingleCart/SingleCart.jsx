

export const SingleCart = ({singleCart}) => {
  const {name,category,price}=singleCart;
  return (
    <div>
    
      <h1>{name}</h1>
      <h2>{category}</h2>
      <h3>{price}</h3>
    

    </div>
  )
}
