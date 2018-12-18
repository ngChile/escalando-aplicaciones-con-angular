export const environment = {
  production: true,
  endpoint: {
    auth: 'http://localhost:8882/auth-service/v1/login',
    logout: 'http://localhost:8882/auth-service/v1/logout',
    register: 'http://localhost:8882/auth-service/v1/register',
    groups: 'http://localhost:8882/auth-service/v1/groups',
  }
};
