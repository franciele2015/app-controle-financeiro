export class Receitas {
    public id: string;  
    public nome: string;  
    public descricao: string;
    public dataDeEntrada: any;
    public valor: string;

    constructor(receita: any = {}) {
        this.id = receita.id;
        this.nome = receita.nome;
        this.descricao = receita.descricao;
        this.dataDeEntrada = receita.data;
        this.valor = receita.valor;
    }
  }