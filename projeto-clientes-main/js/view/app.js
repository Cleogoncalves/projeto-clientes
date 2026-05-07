class View {

    // Método responsável por iniciar a aplicação
    static init() {

        // Adiciona o evento de clique no botão de cadastro
        document.getElementById("btnCadastrar")
            .addEventListener("click", View.cadastrar);

        // Adiciona o evento de clique no botão de filtro
        document.getElementById("btnFiltrar")
            .addEventListener("click", View.filtrar);

        // Adiciona o evento de mudança no campo tipo
        document.getElementById("tipo")
            .addEventListener("change", View.alterarTipo);

        // Renderiza a lista de clientes já cadastrados
        View.renderLista(AppController.listarClientes());
    }

    // Método responsável por alterar o placeholder do documento
    static alterarTipo() {

        // Obtém o valor selecionado no campo tipo
        const tipo = document.getElementById("tipo").value;

        // Obtém o campo documento
        const doc = document.getElementById("documento");

        // Define o placeholder conforme o tipo selecionado
        // PF = CPF
        // PJ = CNPJ
        doc.placeholder = tipo === "PF" ? "CPF" : "CNPJ";
    }

    // Método responsável por cadastrar um cliente
    static cadastrar() {

        // Cria um objeto contendo os dados do formulário
        const dados = {
            nome: document.getElementById("nome").value,
            tipo: document.getElementById("tipo").value,
            documento: document.getElementById("documento").value,
            whatsapp: document.getElementById("whatsapp").value,
            email: document.getElementById("email").value,
            cidade: document.getElementById("cidade").value,
            estado: document.getElementById("estado").value
        };

        // Envia os dados para o controller salvar
        AppController.salvarCliente(dados);

        // Atualiza a lista de clientes exibida na tela
        View.renderLista(AppController.listarClientes());

        // Limpa os campos do formulário
        View.limpar();
    }

    // Método responsável por filtrar clientes
    static filtrar() {

        // Cria um objeto com os filtros informados
        const filtro = {
            tipo: document.getElementById("filtroTipo").value,
            cidade: document.getElementById("filtroCidade").value,
            estado: document.getElementById("filtroEstado").value
        };

        // Obtém os clientes filtrados através do controller
        const clientes = AppController.filtrarClientes(filtro);

        // Atualiza a lista exibida na tela
        View.renderLista(clientes);
    }

    // Método responsável por renderizar a lista de clientes
    static renderLista(clientes) {

        // Obtém o elemento da lista
        const lista = document.getElementById("lista");

        // Limpa o conteúdo atual da lista
        lista.innerHTML = "";

        // Percorre todos os clientes recebidos
        clientes.forEach(c => {

            // Cria um novo elemento <li>
            const li = document.createElement("li");

            // Define se será exibido CPF ou CNPJ
            const tipoDoc = c.tipo === "PF" ? "CPF" : "CNPJ";

            // Define o texto que será exibido na lista
            li.innerText = `${c.nome} - ${c.tipo} - ${tipoDoc}: ${c.documento} - ${c.cidade}/${c.estado}`;

            // Adiciona o item na lista
            lista.appendChild(li);
        });
    }

    // Método responsável por limpar os campos do formulário
    static limpar() {

        // Limpa o campo nome
        document.getElementById("nome").value = "";

        // Limpa o campo documento
        document.getElementById("documento").value = "";

        // Limpa o campo whatsapp
        document.getElementById("whatsapp").value = "";

        // Limpa o campo email
        document.getElementById("email").value = "";

        // Limpa o campo cidade
        document.getElementById("cidade").value = "";

        // Limpa o campo estado
        document.getElementById("estado").value = "";
    }
}

// Inicializa a aplicação
View.init();