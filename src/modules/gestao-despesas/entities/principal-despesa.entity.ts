import { Despesas } from "./despesas.entity";

export class PrincipalDespesa {
    public despesas: Despesas[];

    constructor() {
        this.despesas = [];
    }

    salvarDespesa(despesa: Despesas): void {
        if (!despesa.id) {
            despesa.id = this.generateUuid();
            this.despesas.push(despesa);
            return;            
        }
        this.editarDespesa(despesa);
    }
    
    deletarDespesa(id: string): void {
        const index = this.despesas.findIndex((despesa) => despesa.id === id);
        this.despesas.splice(index, 1);
    }

    editarDespesa(despesa: Despesas): void {                
        this.despesas.forEach(item => {
            if (item.id === despesa.id) {
                item.nome = despesa.nome;
                item.descricao = despesa.descricao;
                item.categoria = despesa.categoria;
                item.dataVencimento = despesa.dataVencimento;
                item.valor = despesa.valor;
            }
        });

    }

    private generateUuid(): string {
        return Math.random().toString(36).substring(2, 15);
      }

    calcularDespesas() { 
        const somaValorFinal = this.despesas.reduce((accumulador, currentValue) => +accumulador + +currentValue.valor, 0);
        return somaValorFinal;
    }

}