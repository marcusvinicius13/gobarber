# Instale o Dockker seguindo os passos a seguir no link

    https://www.notion.so/Instalando-Docker-6290d9994b0b4555a153576a1d97bee2


##  Siga os passos do link para criar a imagem do postgres no docker.

    https://hub.docker.com/_/postgres




#   Comandos utilizados no Docker

    docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

    docker ps (Lista as imagens que estão open)
    docker ps -a (Mostra todas as imagens)
    docker stop  (Derruba o docker as imagens que colocarmos o id ou name)
    docker start (Sobe o Docker as imagens que colocarmos o id ou name)


