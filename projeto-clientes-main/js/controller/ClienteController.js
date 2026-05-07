// js/controller/AppController.js

// Classe responsável por controlar as ações relacionadas aos clientes
class AppController {

    // Método estático para salvar um novo cliente
    static salvarCliente(dados) {

        // Cria uma nova instância da classe Cliente
        // utilizando os dados recebidos no parâmetro
        const cliente = new Cliente(
            dados.nome,
            dados.tipo,
            dados.documento,
            dados.whatsapp,
            dados.email,
            dados.cidade,
            dados.estado
        );

        // Recupera a lista de clientes do localStorage
        // Se não existir nada salvo, cria um array vazio
        let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

        // Adiciona o novo cliente ao array
        clientes.push(cliente);

        // Salva novamente a lista atualizada no localStorage
        // Convertendo o array para JSON
        localStorage.setItem("clientes", JSON.stringify(clientes));
    }

    // Método estático para listar todos os clientes
    static listarClientes() {

        // Retorna os clientes salvos no localStorage
        // Caso não exista nenhum, retorna um array vazio
        return JSON.parse(localStorage.getItem("clientes")) || [];
    }

    // Método estático para filtrar clientes
    static filtrarClientes(filtro) {

        // Obtém a lista completa de clientes
        let clientes = this.listarClientes();

        // Filtra os clientes conforme os critérios informados
        return clientes.filter(c => {

            // Retorna apenas os clientes que atendem:
            // - tipo informado
            // - cidade informada
            // - estado informado
            // Caso o filtro esteja vazio, ignora a validação
            return (!filtro.tipo || c.tipo === filtro.tipo) &&
                   (!filtro.cidade || c.cidade === filtro.cidade) &&
                   (!filtro.estado || c.estado === filtro.estado);
        });
    }
}