export class Despesas {
    public id: string;  
    public nome: string;  
    public descricao: string;
    public categoria: ['Moradia', 'Supermercado', 'TV / Internet / Telefone', 'Transporte', 'Lazer', 'Saúde', 'Bares e Restaurantes'];
    public dataVencimento: any;
    public valor: string;

    constructor(despesa: any = {}) {
        this.id = despesa.id;
        this.nome = despesa.nome;
        this.descricao = despesa.descricao;
        this.categoria = despesa.categoria;
        this.dataVencimento = despesa.data;
        this.valor = despesa.valor;
    }
  }