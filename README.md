#   Criando um projeto do zero para aprender os fundamentos, não só no node como de como compilar ou transpilar o projeto com typescript.

### Dar um reload no vscode ( ctrl + shit + p "escreve reload")

##  Criação do Projeto

    yarn init -y : Cria um arquivo inicial da aplicação (package.json).


##  Comando de terminal

#   Rodar o projeto após configurar o ts-node-dev (yarn dev:server)

1° yarn tsc --init (Cria o arquivo de configuração do typescript "tsconfig.json").

2° yarn tsc (Transpila o código typescript para javascript, como configuramos a pasta onde ficaram os arquivos transpilados para a pasta dist, no diretório raqiz da apliucação então será lá onde ficaram os arquivos transpilado se essa pasta não tiver sido criada ela será criada de forma automática).

3° yarn eslint --init ()

##  Bibliotecas adicionadas

### Express         (yarn add express)
### Typescript      (yarn add typescript -D)
### @Types/Express  (yarn add @types/express -D)
### Ts-Node-Dev     (yarn add ts-node-dev -D)   (Executar o projeto em desenvolvimento)
### Eslint          (yarn add eslint@6.8.0 -D)
###                 (yarn add eslint-import-resolver-typescript -D)
###                 (yarn add @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint-plugin-import@^2.21.2 @typescript-eslint/parser@latest -D)
###                 (yarn add prettier eslint-config-prettier eslint-plugin-prettier -D)
###                 (yarn add uuidv4)
###                 (yarn add typeorm)
###                 (yarn add pg : Drive do postgres)
###                 (yarn add reflect-metadata)
###                 (yarn add bcryptjs)
###                 (yarn add -D @types/bcryptjs)
###                 (yarn add jsonwebtoken)
###                 (yarn add multer) : Upload de imagens
###                 (yarn add  @types/multer  -D)
###                 (yarn add express-async-errors)
###                 (yarn add cors)
###                 (yarn add @types/cors -D)
###                 (yarn tsyringe : Injeção de dependência)

##  Arquivos criados / Alterados, para configuração do projeto.

tsconfig.json


#   Padrões de projeto com ESLint, Prettier e EditorConfig

    https://www.notion.so/Padr-es-de-projeto-com-ESLint-Prettier-e-EditorConfig-0b57b47a24724c859c0cf226aa0cc3a7#d154b50637114fa3a9e6db072e06b018

##  EditorConfig

    Ferramenta que auxilia na padronização da configuração para vários desenvolvedores trabalhando em um mesmo projeto, mas em diferentes editores de código ou IDE's.

    https://www.notion.so/EditorConfig-5f494ae4b47248c1b16681ff74d6766c#4eec65755b2c4683acbed9b52398d059

##  ESLint

    Com ele conseguimos automatizar os padrões de códigos do nosso projeto, e podemos utiliza-lo para projetos em NodeJS, ReactJS e React Native.

    https://www.notion.so/ESLint-7e455a7ac78b424892329ee064feaf99


##  Prettier
    O Prettier consiste em várias configurações que são feitas para que o código seja formatado para seguir um padrão.

    https://www.notion.so/Prettier-e2c6a3ec188c4cce8890a3e16a0d6425#da104f9b05964ec1aaac067ab2bf8a54


#   SOLID
    https://www.notion.so/Repository-service-e-patterns-82419cceb11c4c4fbbc055ade7fb1ac5

##  Single Responsability Principle
##  Dependency Invertion Principle
##  Liskov Substitution Principle


#   OrmConfig : Arquivo de configuração da base de dados.


    https://typeorm.io/#/

#   Trabalhando com Migrations para versionamento da estrutura do banco de dados.

    Criação :
        yarn typeorm migration:create -n CreateAppointments
        yarn typeorm migration:create -n CreateUsers
        yarn typeorm migration:create -n AlterProviderFieldToProviderId
        yarn typeorm migration:create -n AddAvatarFieldToUsers

    Executar as Migrations : yarn typeorm migration:run
    Mostrar as Migrations executadas : yarn typeorm migration:show
    Desfazer a Migrations anterior : yarn typeorm migration:revert


#   Trabalhando com JWT (Json Web Token)


#   DDD     :   Domain Driven Design (METODOLOGIA)

    yarn add tsconfig-paths -D

#   TDD     :   Test Driven Development (METODOLOGIA)
