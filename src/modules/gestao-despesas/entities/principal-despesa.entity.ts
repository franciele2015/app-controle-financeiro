import { Despesas } from "./despesas.entity";

export class PrincipalDespesa {
    public despesas: Despesas[];

    constructor() {
        this.despesas = [new Despesas({nome: 'Fran', descricao: 'Teste', dataDeEntrada: '10/10/2023', valor: '150,00'})];
    }

}