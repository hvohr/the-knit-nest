let deployed = "https://knit-nest-server.onrender.com"

const getSpecificProduct = async (category) => {
  const response = await fetch(`${deployed}/api/v1/products/${category}`)
  if (!response.ok) {
    throw new Error(response.status)
  }
  const data = await response.json()
  return data
}

const getAllProducts = async () => {
  const response = await fetch(`${deployed}/api/v1/products`)
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const data = await response.json()
  return data
}

const getUsers = async () => {
  const response = await fetch(`${deployed}/api/v1/users`)
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const data = await response.json()
  return data
}

const postUser = async (newUser) => {
  try {
    const response = await fetch(`${deployed}/api/v1/users`, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": 'application/json'
      }
    });
    return await response.json();
  } catch (error) {
    throw new Error(`There appears to be an error ${error.statusText}`);
  }
}

const postCart = async (item) => {
  try {
    const response = await fetch(`${deployed}/api/v1/userCart`, {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": 'application/json'
      }
    });
    return await response.json();
  } catch (error) {
    throw new Error(`There appears to be an error ${error.statusText}`);
  }
}

const deleteCart = async (item) => {
  try {
    const response = await fetch(`${deployed}/api/v1/userCart`, {
      method: "DELETE",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": 'application/json'
      }
    });
    return await response.json();
  } catch (error) {
    throw new Error(`There appears to be an error ${error.statusText}`);
  }
}

export { getAllProducts, getSpecificProduct, postUser, getUsers, postCart, deleteCart }