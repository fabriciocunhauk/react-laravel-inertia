export async function fetchPuppies() {
  const API_URL = "https://api.thedogapi.com/v1/breeds?limit=20";
  const apiKey = import.meta.env.VITE_API_KEY;

  try {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "x-api-key": apiKey,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch puppies:", error);
    throw new Error("Can't fetch puppies");
  }
}