## Brazilian states & cities

🇺🇸 This project runs in Node.js and it is about file and JSON objects manipulation :)
It was developed during the Full Stack Dev Bootcamp from IGTI.

To start the application run `node --experimental-modules app.js` (or simply `node app.js` if you are using the latest node version). Before starting it, you can delete all files from the states folder since this program starts by generating them anyway.

The program reads 2 JSON files called *Estados.json* (containing all the Brazilian states, represented by an ID) and *Cidades.json* (containing all the Brazilian cities with an ID refering to the respective state - in the Estados.json file - that the city belongs to).

And it implements a method to:

1) generate a new file for each state named by is federated unit, containing an array of all the cities that belong to that state.

2) receive the federated unit as a parameter and returns the number of cities on that respective state.

3) print an array with the top 5 states with more cities in Brazil, followed by the number of cities in a descending order.

4) print an array with the top 5 states with less cities in Brazil, followed by the number of cities in a descending order.

5) print an array containing the longest name of city in each state followed by its federated unit. If there's any match in the size, consider the alphabetical order and return the first one of the list. 

6) print an array containing the shortest name of city in each state followed by its federated unit. If there's any match in the size, consider the alphabetical order and return the first one of the list. 

When executing the project, it should generate the methods in sequence, printing the results on the terminal and finishing its execution.

------------------

🇧🇷 Esse projeto roda em Node.js e exercita manipulação de arquivo e manipulação de objetos JSON. :)
Foi desenvolvido durante o bootcamp de Dev Full Stack do IGTI.  

Para inicializar a aplicação rode `node --experimental-modules app.js` (ou simplesmente `node app.js` se você estiver utilizando a versão mais atualizada do node). Antes de iniciar, você pode deletar todos os arquivos de dentro da pasta states pois a aplicação inicia gerando eles. 

O arquivo *Estados.json* possui uma listagem com todos os estados do Brasil, cada um representado por um ID. No arquivo *Cidades.json* estão listadas todas as cidades do Brasil, com seu respectivo estado representando pelo ID fazendo referência ao arquivo Estados.json.

Esta aplicação implementa um método que: 

1) cria um arquivo JSON para cada estado representado no arquivo Estados.json, e o seu conteúdo será um array das cidades pertencentes aquele estado, de acordo com o arquivo Cidades.json. O nome do arquivo deve ser o UF do estado, por exemplo: MG.json.

2) recebe como parâmetro o UF do estado, realize a leitura do arquivo JSON correspondente e retorne a quantidade de cidades daquele estado.

3) imprime no console um array com o UF dos cinco estados que mais possuem cidades, seguidos da quantidade, em ordem decrescente.

4) imprime no console um array com o UF dos cinco estados que menos possuem cidades, seguidos da quantidade, em ordem decrescente.

5) imprime no console um array com a cidade de maior nome de cada estado, seguida de seu UF. Em caso de empate, considera a ordem alfabética para ordená-los e então retornar o primeiro.

6) imprime no console um array com a cidade de menor nome de cada estado, seguida de seu UF. Em caso de empate, considera a ordem alfabética para ordená-los e então retorne o primeiro.

O projeto ao ser executado, deve realizar os métodos em sequência, imprimindo os resultados em console e depois finalizando a execução.

