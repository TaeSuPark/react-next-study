export const getCatImg = async () => {
  const response = await fetch("https://api.thecatapi.com/v1/images/search")

  return response.json()
}
