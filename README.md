# Projeto SA Portal RH

**Última atualização:** 20.08.25

## Descrição
Este projeto é um Portal de Recursos Humanos desenvolvido com Angular, voltado para o gerenciamento eficiente de currículos e vagas de emprego. A aplicação permite a listagem, cadastro, edição e exclusão de registros de forma intuitiva, sendo ideal para processos seletivos e gestão de talentos.

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
