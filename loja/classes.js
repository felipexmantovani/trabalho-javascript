// classes js

class Loja{
  constructor(id, cnpj, razaoSocial, nomeFantasia, email, telefone, endereco) {
    this.id = id;
    this.cnpj = cnpj;
    this.razaoSocial = razaoSocial;
    this.nomeFantasia = nomeFantasia;
    this.email = email;
    this.telefone = telefone;
    this.endereco = endereco;
  }
}

class Ebook extends Livro {
  constructor(id, nome, escritor, editora, preco, idTipo, arquivo) {
    super();
    this.id = id;
    this.nome = nome;
    this.escritor = escritor;
    this.editora = editora;
    this.preco = preco;
    this.idtipo = idTipo;
    this.arquivo = arquivo;
  }
}

class LivroImpresso extends Livro {
  constructor(id, nome, escritor, editora, preco, idTipo, papel, gramatura) {
    super();
    this.id = id;
    this.nome = nome;
    this.escritor = escritor;
    this.editora = editora;
    this.preco = preco;
    this.idTipo = idTipo;
    this.papel = papel;
    this.gramatura = gramatura;
  }
}

class Livro {
  constructor(id, ebook_id, ebook_idTipo, LivroImpresso_id, LivroImpresso_idTipo ) {
    this.id = id;
    this.ebook_id = ebook_id;
    this.ebook_idTipo = ebook_idTipo;
    this.LivroImpresso_id = LivroImpresso_id;
    this.LivroImpresso_idTipo = LivroImpresso_idTipo;
  }
}

class Vendedor extends Pessoa {
  constructor(id, nome, email, telefone, endereco) {
    super();
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
    this.endereco = endereco;
  }
}

class Cliente extends Pessoa {
  constructor(id, nome, email, telefone, endereco) {
    super();
    this.id = id;
    this.nome = nome;
    this.telefone = telefone;
    this.endereco = endereco;
  }
}

class Pessoa {
  constructor(id, Vendedor_id, Cliente_id) {
    this.id = id;
    this.Vendedor_id = Vendedor_id;
    this.Cliente_id = Cliente_id;
  }
}

class Venda {
  constructor(id, Pessoa_id, Loja_id, Livro_id) {
    this.id = id;
    this.Pessoa_id= Pessoa_id;
    this.Loja_id = Loja_id;
    this.Livro_id = Livro_id;
  }
  get Pessoa_id(){
    return this.Pessoa_id;
  }
  set Pessoa_id(){
    return this.Pessoa_id;
  }

  get Loja_id(){
    return this.Loja_id;
  }
  set Loja_id(){
    return this.Loja_id;
  }

  get Livro_id(){
    return this.Livro_id;
  }
  set Livro_id(){
    return this.Livro_id;
  }
}
