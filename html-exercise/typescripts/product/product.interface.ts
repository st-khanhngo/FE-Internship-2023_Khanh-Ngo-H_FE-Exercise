enum ProductStatus {
  unavailable,
  available,
}

interface ProductProps {
  id: number,
  name: string,
  imageUrl: string,
  price: number,
  discount?: number,
  status: string
}

export {ProductProps, ProductStatus}
