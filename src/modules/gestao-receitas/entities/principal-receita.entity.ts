import { Receitas } from "./receitas.entity";

export class PrincipalReceita {
    public receitas: Receitas[];

    constructor() {
        this.receitas = [];
    }

    salvarReceita(receita: Receitas): void {
        if (!receita.id) {
            receita.id = this.generateUuid();
            this.receitas.push(receita);
            return;            
        }
        this.editarReceita(receita);        
    }
    
    deletarReceita(id: string): void {
        const index = this.receitas.findIndex((receita) => receita.id === id);
        this.receitas.splice(index, 1);
    }

    editarReceita(receita: Receitas): void {                
        this.receitas.forEach(item => {
            if (item.id === receita.id) {
                item.nome = receita.nome;
                item.descricao = receita.descricao;
                item.dataDeEntrada = receita.dataDeEntrada;
                item.valor = receita.valor;
            }
        });

    }

    private generateUuid(): string {
        return Math.random().toString(36).substring(2, 15);
      }

    calcularReceita() { 
        const somaValorFinal = this.receitas.reduce((accumulador, currentValue) => +accumulador + +currentValue.valor, 0);
        return somaValorFinal;
    }

}