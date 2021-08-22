import { HTTP, HTTPS } from "../constants/api";

/**
 * Изменяет URL с http на https
 * @param {String} url - URL для изменения
 * @returns {String} - URL с https
 */
export const changeHTTP = (url) => (url ? url.replace(HTTP, HTTPS) : url);

/**
 * Отправляет запрос fetch
 * @param {String} url - URL для запроса
 * @returns {Promise} - Promise с результатом запроса
 */
export const getApiResource = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.error("Could not fetch.", response.status);
      return false;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Could not fetch.", error.message);
    return false;
  }
};

export const makeConcurrentRequest = async (urls) =>
  Promise.all(
    urls.map((url) => {
      return getApiResource(changeHTTP(url));
    })
  );
