Comandos Docker

docker ps                       // Listar containers rodando
docker ps -a                    // Listar todos os containers (até os parados)
docker stop + id                // Parar container
docker stop $(docker ps -qa)    // Parar todos os containers
docker-machine ip               // Ver ip da maquina virtual do docker
docker run -d                   // Rodas docker sem travar terminal
docker run -d -P                // Docker criar portas aleatorias para o container
dokcer run --name + NOME        // Dar nome ao container
docker contaneiner prune        // Matar todos os container (até os parados)
