# Projeto CRUD com Angular 9

Aplicação Web SPA (Single Page Application) baseada em componentes

## Backend
json-server

  \{^_^}/ Pra facilitar a vida!

## Observações
1. Para instalar o servidor json:
``npm install json-server``

2. Adicionamos o script ao arquivo package.json:   
``"scripts": {
    "start": "json-server --watch db.json --port 3001"
  }``
  para monitorar a porta a ser usada.
3. Pra instalar o CLI (Command Line Interface) do angular
``npm i -g @angular/cli``
4. Para criar a aplicação
``ng new meu-app``
5. Angular usa o typeScript (Microsoft) por padrão, que será compilado para js. 
6. A aplicação é construída a partir de uma árvore de componentes (como todo framework baseado em componentes como react, vueJS, flutter). Além dos componebtes o angular também organiza os componentes em módulos, de modo que cada compenente pertence a um módulo específico. Em aplicações pequenas pode-se usar um único módulo.
7. Todos os arquivos .js poderão ser escritos como .ts (typescript)
8. Em angular os componentes são organizados dentro de módulos, o que aumenta o encapsulamento. 
9. O componente é um trecho de código que representa um conteúdo visual da tela (possuindo um html, css e ts)
    - home.component.html
    - home.component.css
    - home.component.ts
10. <app-home></app-home> referencia todo o código html, css ou ts do componente
11. Cada módulo tem 5 atributos:
    - declarations - declara todos os componentes que fazem parte do módulo (components, diretivas, pipes). Tudo o que for ficar visível fora do módulo precisa estar em exports.
    - imports - importa outros módulos (da própria aplicação ou externos). 
    - exports - components, diretivas, pipes
    - providers - declara-se os services
    - bootstrap - define o componente que será carregado no módulo, usado apenas para o módulo inicial da aplicação.
