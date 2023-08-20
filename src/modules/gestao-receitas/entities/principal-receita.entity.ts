import { Receitas } from "./receitas.entity";

export class PrincipalReceita {
    public receitas: Receitas[];

    constructor() {
        this.receitas = [new Receitas({nome: 'Fran', descricao: 'Teste', dataDeEntrada: '10/10/2023', valor: '150,00'})];
    }

}