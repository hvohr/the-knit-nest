const getAllBooks = async () => {
  const response = await fetch(('http://localhost:3001/api/v1/books'))
  if (!response.ok) {
    throw new Error(response.status)
  }
  const data = await response.json()
  return data
}

export { getAllBooks }