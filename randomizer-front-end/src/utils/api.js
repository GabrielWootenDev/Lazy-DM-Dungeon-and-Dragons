const API_BASE_URL = "https://www.dnd5eapi.co/api"

const headers = new Headers();
headers.append("Content-Type", "application/json");

async function fetchJson(url, options, onCancel) {
    try {
      const response = await fetch(url, options);
  
      if (response.status === 204) {
        return null;
      }
  
      const payload = await response.json();
  
      if (payload.error) {
        return Promise.reject({ message: payload.error });
      }
      return payload.results;
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error(error.stack);
        throw error;
      }
      return Promise.resolve(onCancel);
    }
  }

export const listMonsters = async (signal) => {
    const url = `${API_BASE_URL}/monsters`;
    return await fetchJson(url, { headers, signal }, []);
}