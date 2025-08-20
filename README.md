# Projeto SA Portal RH

**Últimas atualizações:** 
18/06/2025 às 14:00.
20/08/2025 ás 11:20.

## Descrição
Este projeto é um portal de RH desenvolvido em Angular, com funcionalidades para gerenciamento de currículos e vagas de emprego. O sistema utiliza um backend simulado via `json-server` e possui componentes dedicados para listagem, cadastro, edição e exclusão de dados relacionados a currículos e vagas.

## Requisitos Funcionais
Funcionalidades divididas por tipo de usuário:

Acesso Público:
- Qualquer pessoa poderá visualizar uma lista de vagas disponíveis.

Acesso do Candidato (Usuário Comum):
- Área para cadastro e login.
- Após o login, poderá enviar e gerenciar seu currículo.

Acesso do Administrador (Admin):
- Terá uma área de login específica.
- Acesso que poderá gerenciar completamente as vagas e os curriculos.
- Poderá visualizar e revisar todos os currículos enviados pelos candidatos.

## Funcionalidades principais
- Listagem de currículos e vagas.
- Formulários para cadastro, atualização e exclusão de vagas.
- Visualização detalhada e edição de currículos.
- Consumo de dados via serviços Angular (`CurriculosService`, `VagasService`).
- Estrutura modular com componentes reutilizáveis.
- Estilização personalizada utilizando SCSS.

## Tecnologias utilizadas
- Angular
- TypeScript
- SCSS
- json-server (simulação de backend)
- Figma (prototipagem)

## Estrutura do projeto
- `AppModule`: módulo principal, registra todos os componentes essenciais.
- `AppRoutingModule`: gerenciamento de rotas.
- Componentes:
  - `HeaderComponent`
  - `FooterComponent`
  - `HomeComponent`
  - `VagasComponent`
  - `PainelVagasComponent`
  - `CurriculosComponent`
  - `CurriculoFormComponent`
  - `CurriculoListComponent`

## Modelos
- `Vaga`: com atributos privados, getters, setters, métodos de conversão `toMap` e `fromMap`.
- `Curriculo`: modelo semelhante ao de vagas, com manipulação de dados via métodos encapsulados.
