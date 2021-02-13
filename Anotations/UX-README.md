#   Funcionalidades Macro

##  °   Recuperação de Senha

**RF-Requisitos-Funcionais**

-   O usuário deve poder recuperar sua senha informando o seu e-mail;
-   O usuário deve receber um e-mail com instruções de recuperação de senha;
-   O usuário deve poder resetar sua senha;

**RNF-Requisitos-Não-Funcionais**

-   Utilizar Mailtrap para testar envio de e-mail, em ambiente de desenvolvimento;
-   Utilizar Amazon SES para  envio de e-mail em produção;
-   O envio de e-mails deve acontecer em segundo plano (Background job);

**RN-Regra-de-Negócios**

-   O link enviado por e-mail para resetar senha, deve expirar em 2h;
-   O usuário precisa confirmar a nova senha ao resetar sua senha;

##  °   Atualização do Perfil

**RF**

-   O usuário deve poder atualizar seu nome, email e senha (avatar);

**RN**

-   Ousuário não pode alterar seu email para um email existente;
-   Para atualizar sua senha, o usuário deve informar a senha antiga;
-   Para atualizar sua senha, o usuário precisa confirmar a nova senha;

##  °   Painel do Prestador de Serviço

**RF**

-   O usuário deve poder listar seus agendamentos de um dia específico;
-   O prestador deve receber uma notificação sempre que houver um novo agendamento;
-   O prestador deve poder visualizar as notificações não lidas;

**RNF**

-   Os agendamentos do prestador no dia devem ser armazenados em cache;
-   As notificações do prestador devem ser armazenadas no MongoDB;
-   As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN**

-   A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;


##  °   Agendamento de Serviços

**RF**

-   O usuário deve poder listar todos prestadores de serviço cadastrados;
-   O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
-   O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
-   O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**

-   A listagem de prestador deve ser armazenada em cache;

**RN**

-   Cada agendamento deve durar 1h exatamente (Vai ficar aberto para ser mudado caso nescessite);
-   Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro às 8hm último às 17h);
-   O usuário não pode agendar em um horário já ocupado;
-   O usuário não pode agendar em um horário que já passou;
-   O usuário não pode agendar serviços consigo mesmo;
