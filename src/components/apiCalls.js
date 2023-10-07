const getSpecificProduct = async (category) => {
  const response = await fetch(`http://localhost:3001/api/v1/products/${category}`)
  if (!response.ok) {
    throw new Error(response.status)
  }
  const data = await response.json()
  return data
}

const getAllProducts = async () => {
  const response = await fetch('http://localhost:3001/api/v1/products')
  if (!response.ok) {
    throw new Error(response.status)
  }
  const data = await response.json()
  return data
}

const getAllUsers = async () => {
  const response = await fetch('http://localhost:3001/api/v1/users')
  if (!response.ok) {
    throw new Error(response.status)
  }
  const data = await response.json()
  return data
}

export { getAllProducts, getSpecificProduct }