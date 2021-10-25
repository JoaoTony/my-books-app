const baseURL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL || '';

const fetcher = (method: string) => async <T>(url: string, bodyR?: object) => {

  const response = await fetch(`${baseURL}${url}`, {
    method,
    body: JSON.stringify(bodyR),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  return { status: response.status, data: data as T };
};

export const getFetcher = fetcher('GET');
export const postFetcher = fetcher('POST');
export const deleteFetcher = fetcher('DELETE');
export const putFetcher = fetcher('PUT');
export const patchFetcher = fetcher('PATCH');