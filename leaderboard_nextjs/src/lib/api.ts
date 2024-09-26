const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const fetchFromAPI = async <T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, options);

  if (!response.ok) {
    throw new Error(`Error fetching from API: ${response.statusText}`);
  }

  return response.json() as Promise<T>;
};

export { fetchFromAPI };
