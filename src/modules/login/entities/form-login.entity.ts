export class FormLogin {    
    public email: string;
    public senha: string;
    private isAuth: boolean;

    constructor(data: any = {}) {
        this.email = data.email || '';
        this.senha = data.senha || '';
        this.isAuth = false;
      }
    
      get isAutenticated() {
        return this.isAuth;
      }
    
      get isLogged() {
        return this.isAuth ? 'Logado' : 'Não logado';
      }
    
      setIsAuthentication(isAutenticated: boolean) {
        this.isAuth = isAutenticated;
      }
}