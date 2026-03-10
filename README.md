# ProjetoBiblioteca

# 📚 Sistema de Gestão de Biblioteca (SGA)

## 📝 Sobre o Projeto

 o **ProjetoBiblioteca** é uma plataforma desenvolvida para facilitar a organização de acervos bibliográficos.  É uma aplicação full-stack para gestão de bibliotecas, desenvolvida para demonstrar a integração entre um backend **C#** utilizando o **ASP.NET** e um frontend dinâmico em **React**.
 
---

## como o projeto é dividido

a aplicação web é dividido em três grandes áreas
- **client**:  responsável por mostrar a aplicação somente para os leitores da biblioteca, onde é possível visualizar os livros no catálogo de livros, ver livros a partir de áreas específicas e ver detalhes sobre o livro ao clicar em um card de livro
- **Admin**: área adaptado para os administradores com recursos exclusivos, com área de Visão geral (dashboard), Gestão de Livros (CRUD), Registrar empréstimos e Gerenciar Usuários 
- **Auth**: área voltado a authenticação de usuários e administradores dentro do sistema
## ✨ Funcionalidades

- **Gestão de Acervo:** CRUD completo (Criação, Leitura, Atualização e Deleção) de livros.
- **Navegação Dinâmica:** Sidebar responsiva com carregamento de categorias (Áreas) em tempo real.
- **Busca Inteligente:** Filtro de pesquisa global implementado com `SearchContext`.
- **Autenticação:** Fluxos de Login e Cadastro de usuários preparados para integração.
- **Modais de Edição:** Interface intuitiva para alteração de dados sem troca de página.

---

## 🛠️ Tecnologias Utilizadas

- **Frontend:** React.js com TypeScript.
-  **Roteamento:** React Router DOM (com padrão de constantes centralizadas).
- **Ícones:** Lucide React.
- **Estilização:** CSS3 puro para layouts customizados.

- **Backend**: C# com ASP.NET Minimal API
- **Entity Framework Core**: ORM próprio do ASP.NET responsável por conectar o banco de dados com o C#, e trabalhar com comandos SQL dentro do C#

# Backend (C-sharp)

## áreas do backend

- Data: parte da aplicação focado em 
	- **Criar ou atualizar as tabelas automaticamente** assim que o projeto inicia.
	- Configura contexto do banco de dados

- **Dtos**: Parte que modelam dados imutável (os chamados DTOs) que serão usados para modelar instanciação de objetos para Criar, ler, Atualizar e Deletar dados (CRUD)
- **Endpoints**: são as rotas da aplicação, dos livros, das áreas, dos usuários... 
- **Mapping**: são os retornos dos dados do CRUD, para simplificar os arquivos dos endpoints, eu separei para que o código ficasse legível e organizado
- **Migrations**: são os arquivos de código que gerenciam as atualizações da API e banco de dados, é o que interliga a aplicação e o banco de dados de fato
- services: são as lógicas propriamente dito, é o que vai tratar as requisições e respostas da API de acordo com cada rota (endpoint)
- **Models**: são as classes que serão usados como Modelos para as tabelas do banco de dados 
- arquivo **program.cs**: é o que vai unir tudo no arquivo principal, vai fazer a criação do build da aplicação web, definir permissões de políticas CORS, adicionar Validações, conectar o banco de dados com a api, mapear os endpoints e rodar a aplicação

# Models


![[Pasted image 20260219134040.png]]
# Frontend
## Área principal (Usuários)

![[Pasted image 20260219134446.png]]

Na área principal da aplicação o usuário poderá:
- visualizar todos os livros da biblioteca cadastrados
- Visualizar os livros de acordo com a área ou gêneros de livros (como história, ficção científica, tecnologia e Fantasia) 
- Pedir empréstimo de um livro
- Visualizar detalhes sobre o livro (como descrição do livro e outras informações com mais detalhes)
## Login

![[Pasted image 20260219134543.png]]

Aqui o usuário pode fazer login a partir do CPF e a senha, o administrador da biblioteca inicialmente ele é que vai cadastrar o usuário (esse requisito pode ser alterado mais para frente)

## Área ADMIN

### Dashboard

![[Pasted image 20260219135457.png]]

página de dashboard que mostra todas as informações necessárias, aqui o administrador poderá:
- visualizar informações de todos os livros, áreas/gêneros de livros, empréstimos ativos e atrasos
- Visualizar distribuição por área, por exemplo:
	- 20% ficção científica
	- 20% fantasia
	- 30% História....
- Ações rápidas como acessar outras páginas e gerar relatório
### Gestão de Livros e Usuarios (CRUD)

![[Pasted image 20260219140217.png]]

Os dois funcionam da mesma forma, adaptei o código para que as funcionalidades fossem idênticas, o Administrador poderá
- pesquisar usuário ou livro na caixa de pesquisa com busca rápida
- editar usuário ou livro
- excluir usuário ou livro (nesta parte eu vou pensar em formas de deixar isso mais restritivo, como excluir o usuário somente quando estiver inativo após ter terminado a escola/faculdade, ou excluir após passar um limite de dias inativo (1000 dias, 900 dias...))

## ⚙️ Como Executar o Projeto

### Pré-requisitos

- [.NET SDK 8.0+](https://dotnet.microsoft.com/download)
- [Node.js](https://nodejs.org/) (versão LTS)
- Um gerenciador de banco de dados
### 1. Configurando o Backend

1. Navegue até a pasta do servidor:

    ```bash
    cd ProjetoBiblioteca.Api
    ```
    
2. Atualize a string de conexão no arquivo `appsettings.json` (se necessário).
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
    
A API estará disponível em: `https://localhost:5001` (ou na porta configurada).
    

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


