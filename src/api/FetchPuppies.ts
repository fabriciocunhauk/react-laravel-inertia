  export const fetchPuppies = async () => {
        const response = await fetch(
          "https://api.thedogapi.com/v1/breeds?limit=20",
          {
            headers: {
              "x-api-key": `${import.meta.env.VITE_API_KEY}`,
            },
            method: "GET",
          },
        );
        const data = await response.json();

        return data;
      };