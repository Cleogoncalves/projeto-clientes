// js/model/Cliente.js

// Classe que representa um cliente do sistema
class Cliente {

    // Método construtor executado ao criar um novo cliente
    constructor(nome, tipo, documento, whatsapp, email, cidade, estado) {

        // Armazena o nome do cliente
        this.nome = nome;

        // Armazena o tipo do cliente
        // Exemplo: Pessoa Física ou Pessoa Jurídica
        this.tipo = tipo;

        // Armazena o documento do cliente
        // Exemplo: CPF ou CNPJ
        this.documento = documento;

        // Armazena o número de WhatsApp do cliente
        this.whatsapp = whatsapp;

        // Armazena o e-mail do cliente
        this.email = email;

        // Armazena a cidade do cliente
        this.cidade = cidade;

        // Armazena o estado do cliente
        this.estado = estado;
    }
}