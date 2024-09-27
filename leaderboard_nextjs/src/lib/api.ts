const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const endpoints = {
  top30: `${API_BASE_URL}/stats/top-30`,
  top3: `${API_BASE_URL}/stats/top-3`,
  stats: `${API_BASE_URL}/stats`,
} as const;

export { endpoints };
