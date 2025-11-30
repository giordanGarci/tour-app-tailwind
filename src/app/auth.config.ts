import { AuthConfig} from 'angular-oauth2-oidc'
export const auth: AuthConfig = {
  issuer: 'https://accounts.google.com',
  redirectUri: window.location.origin,
  clientId: '407751134398-sp7gpoecutnlkk6oei1ta58k12gbl1ml.apps.googleusercontent.com',
  scope: 'openid profile email',
  strictDiscoveryDocumentValidation: false,
}
