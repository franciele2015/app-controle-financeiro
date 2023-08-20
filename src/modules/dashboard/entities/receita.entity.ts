import { FormReceita } from "./form-receita.entity";

export class Receita { 
    public formReceitas: FormReceita[];
    
    constructor() {
        this.formReceitas = [];
    }

    filtrarReceitas(nome: string): FormReceita[] {
        return this.formReceitas.filter((receita) =>
            receita.nome.includes(nome)
        );
      }

    salvarReceita(receita: FormReceita): void {
        console.log(receita);
        this.formReceitas.push(receita);
        console.log(this.formReceitas);
    }

    deletarReceita(id: string): void {
        const index = this.formReceitas.findIndex((receita) => receita.id === id);
        this.formReceitas.splice(index, 1);
    }

}