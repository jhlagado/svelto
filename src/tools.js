/**
 * @param {any} config
 * @return {String}
 */
export const getServiceUrl = (config) => {
  const port = process.env.PORT || '4000';

  const serviceUrl = config.SERVICE_URL;
  if (serviceUrl) {
    return serviceUrl;
  }
  const {hostname, protocol} = window.location;
  if (protocol === 'http:' && hostname === 'localhost') {
    return `http://localhost:${port}/`;
  }
  return `${protocol}://${port}-${hostname.slice(5)}/`;
};
