# 📚 ProjetoBiblioteca

Uma aplicação full-stack para gestão de bibliotecas, desenvolvida para demonstrar a integração entre um backend robusto em **C#** utilizando o **ASP.NET** e um frontend dinâmico em **React**.

## 🚀 Sobre o Projeto

O **ProjetoBiblioteca** permite o controle total de um acervo bibliotecário, desde o cadastro de livros até o gerenciamento de empréstimos para usuários. O projeto foi construído seguindo boas práticas de desenvolvimento e organizado.

---

## 🛠️ Tecnologias

### **Backend**

- **Linguagem:** C# .NET
- **Framework:** ASP.NET Core Web API
- **Banco de Dados:** MySQL
- **ORM:** Entity Framework Core
### **Frontend**

- **Linguagem:** TypeScript
- **Biblioteca:** React.js
- **Gerenciamento de Estado:** Context API / Hooks
- **Consumo de API:** fetch

## 🏗️ Arquitetura

O projeto está dividido em duas partes principais:

1. **`/ProjetoBiblioteca.Api`**: Contém toda a lógica de negócio, persistência de dados e regras de autenticação.
2. **`/ProjetoBiblioteca.FrontEnd`**: Interface de usuário responsiva e intuitiva que consome os serviços da API.

---

## ⚙️ Como Executar o Projeto

### Pré-requisitos

- [.NET SDK 8.0](https://dotnet.microsoft.com/download)
- [Node.js](https://nodejs.org/) (versão LTS)
- Um gerenciador de banco de dados
### 1. Configurando o Backend

1. Navegue até a pasta do servidor:
    
    Bash
    
    ```
    cd ProjetoBiblioteca.Api
    ```
    
1. Atualize a string de conexão no arquivo `appsettings.json` (se necessário).
	- Meu exemplo:
		```json
		"ConnectionStrings": {
				"Biblioteca":"Server=localhost; Port=3306; Database=Biblioteca; Uid=root; Pwd=123;"
				}
		```
    
3. Execute as migrações para criar o banco de dados:
    
    ```bash
    dotnet ef database update
    ```
    
4. Inicie o servidor:

    ```bash
    dotnet run
    ```
    
    > A API estará disponível em: `https://localhost:5001` (ou na porta configurada).
    

### 2. Configurando o Frontend

1. Navegue até a pasta do cliente:

    ```bash
    cd ProjetoBiblioteca.FrontEnd
    ```
    
2. Instale as dependências:

    ```bash
    npm install
    ```
    
3. Inicie a aplicação:
    ```bash
    npm run dev
    ```
    
    > O app estará disponível em: `http://localhost:5173`.
    

---

## 📋 Endpoints Principais (API)

| **Método** | **Endpoint**      | **Descrição**                         |
| ---------- | ----------------- | ------------------------------------- |
| **GET**    | `/api/livros`     | Lista todos os livros                 |
| **POST**   | `/api/livros`     | Cadastra um novo livro (Requer Admin) |
| **GET**    | `/api/authors`    | Lista todos os autores                |
| **POST**   | `/api/auth/login` | Realiza login e retorna o Token JWT   |
|            |                   |                                       |

---


---

## ✒️ Autor

- **Seu Nome** - [Seu GitHub](https://www.google.com/search?q=https://github.com/seu-usuario)
    
- **LinkedIn:** [Seu LinkedIn](https://www.google.com/search?q=https://linkedin.com/in/seu-perfil)
    

---

### Dica para o GitHub:

Para deixar seu README ainda mais profissional, você pode tirar um **print** da tela principal do seu app e colocar logo abaixo do título usando:

`![Screenshot do Projeto](./pasta-da-imagem/screenshot.png)`

**Gostaria que eu detalhasse mais a seção de "Instalação" ou que eu criasse um tópico específico sobre a segurança com JWT?**