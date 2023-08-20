export class FormDespesa {
    public id: string;  
    public nome: string;  
    public descricao: string;
    public categoria: ['Moradia', 'Supermercado', 'TV / Internet / Telefone', 'Transporte', 'Lazer', 'Saúde', 'Bares e Restaurantes'];
    public dataVencimento: Date;
    public valor: string;

    constructor(formDespesa: any = {}) {
        this.id = this.generateUuid();
        this.nome = formDespesa.nome;
        this.descricao = formDespesa.descricao;
        this.categoria = formDespesa.categoria;
        this.dataVencimento = formDespesa.data;
        this.valor = formDespesa.valor;
    }

    private generateUuid(): string {
      return Math.random().toString(36).substring(2, 15);
    }
  }