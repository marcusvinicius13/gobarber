# Testes Automatizados

Garate que a nossa aplicação continue funcionando independente do número de novas funcionalidades e do número de devs no time.

1. Testes unitários (TDD)

    Testam funcionalidades especificas da nossa aplicação (precisam ser funções puras).

    JAMAIS: Chamada à uma API, EFEITO colateral.


2. Testes de Integração

    Testam uma funcionalidade completa, passando por várias camadas da aplicação.

    Route -> Controller -> Service -> Repository ...

3. Testes E2E (São utilizados no frontend)

    Simulam a ação do usuário dentro da nossa aplicação
    1.1 Clique no input de Email.
    1.2 Preencha (marcusvinicius1_3@hotmail.com).
    1.3 Clique no input de Senha.
    1.4 Preencha (123456).
    1.5 Clique no botão "Logar".
    1.6 Espeero que a página tenha enviado o usuário para o dashboard.


# TDD (Test Driven Development)

- Quando o usuário se cadastra na aplicação, ele deve receber um email de boas-vindas;

##  Jest (Ferramenta para criar testes)

Apos a intalação do Jest

    yarn jest --init

Quando for criar testes precisa configurar o arquivo jest.config.ts


