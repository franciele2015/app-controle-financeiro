import { FormLogin } from "./form-login.entity";

export class Login {    

    realizarLogin(formLogin: FormLogin): void {
        // filtrar dos usuarios existentes se existe algum com esse nome
        // se sim, direcionar usuario para proxima tela

        console.log('login');
        console.log(formLogin.email);
        console.log(formLogin.senha);
    }

}