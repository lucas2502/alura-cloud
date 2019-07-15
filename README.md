#Comandos Docker

- docker ps                       // Listar containers rodando
- docker ps -a                    // Listar todos os containers (até os parados)
- docker stop + ID_CONTAINER      // Parar container
- docker stop $(docker ps -qa)    // Parar todos os containers
- docker-machine ip               // Ver ip da maquina virtual do docker
- docker run -d                   // Rodas docker sem travar terminal
- docker run -d -P                // Docker criar portas aleatorias para o container
- dokcer run --name + NOME        // Dar nome ao container
- docker container prune          // Matar todos os container (até os parados)
- docker run -v /var/www + IMAGE  // Salvando as modificaçõe feita no container em log como volume
    - -v "CAMINHO DE PASTA:/var/www" + IMAGE //Salva os log de modificaçoes na pasta desejada 
- dokcer it + ID_CONTAINER        // Abre terminal para acessar container  
- docker inspect + ID_CONTAINER   // Detalhes do container
- Docker rm -f                    // Remove a para o container a força


#Criando ambiente de desenvolvimento por container
-  docker run -p 8080:3000 -it -v "/root/Desenvolvimento/alura/Cloud/Kubernetes/volume-exemplo:/var/www" -w "/var/www" node node index.js
- (-p) escolhe a porta
- 8080:3000 - 8080 porta no meu pc, 3000 porta dentro do container
- (-v) criar volume
- "/root/Desenvolvimento/alura/Cloud/Kubernetes/volume-exemplo" pasta exemplo do meu computador onde está o projeto
- "/var/www" local onde salva localmente as alteraçoes feitas no container

#Criando imagem
- docker build -f Dockerfile -t lucasg/node .
