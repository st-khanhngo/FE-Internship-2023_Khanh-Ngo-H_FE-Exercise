enum productStatus {
  available= 'available',
  unavailable = 'unavailable'
}

interface ProductProps {
  id: number,
  name: string,
  imageUrl: string,
  price: number,
  discount?: number,
  status: productStatus
}

export {ProductProps, productStatus}
