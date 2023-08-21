import { Despesas } from "./despesas.entity";

export class PrincipalDespesa {
    public despesas: Despesas[];

    constructor() {
        this.despesas = [];
    }

    adicionarDespesa(despesa: Despesas): void {
        this.despesas.push(despesa);
    }
    
    deletarDespesa(id: string): void {
        const index = this.despesas.findIndex((despesa) => despesa.id === id);
        this.despesas.splice(index, 1);
    }

}