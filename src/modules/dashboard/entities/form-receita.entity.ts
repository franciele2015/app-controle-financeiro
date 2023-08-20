export class FormReceita {
    public id: string;  
    public nome: string;  
    public descricao: string;
    public dataDeEntrada: any;
    public valor: string;

    constructor(formReceita: any = {}) {
        this.id = formReceita.id;
        this.nome = formReceita.nome;
        this.descricao = formReceita.descricao;
        this.dataDeEntrada = formReceita.data;
        this.valor = formReceita.valor;
    }
  }