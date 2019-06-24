import { AuthenticationContext, adalFetch, withAdalLogin } from 'react-adal';

const adalConfig = {
 tenant: 'ebba2929-765b-48f7-8c03-9b450ed099ba',
 clientId: '47ad89ca-350f-470e-a8f7-d39d5ca1df5c',
 endpoints: {
     api: '47ad89ca-350f-470e-a8f7-d39d5ca1df5c'
 },
 apiUrl: 'https://bermuda.verawaterandpower.com',
 cacheLocation: 'localStorage'
};
export const authContext = new AuthenticationContext(adalConfig);
export const adalApiFetch = (fetch, url, options) =>
    adalFetch(authContext, adalConfig.endpoints.api, fetch, adalConfig.apiUrl + url, options);
export const withAdalLoginApi = withAdalLogin(authContext, adalConfig.endpoints.api);