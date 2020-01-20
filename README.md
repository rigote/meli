## Rodando o projeto local

Para rodar o projeto local será necessário ter instalado o node em uma versão mais recente, com o node instalado e configurado na máquina basta rodar o comando abaixo na pasta principal do projeto:

### Instalação das dependências

Primeiro passo será instalar as dependência do projeto. Para instalar, acesse a pasta raiz do projeto e execute o seguinte comando ```yarn``` via terminal.

### Execução do projeto

Para rodar o projeto em modo de desenvolvimento, basta executar o comando ```yarn start``` via terminal no diretório raiz do projeto.<br />
Após a execução, o projeto poderá ser visualizado na url [http://localhost:3000](http://localhost:3000) em seu browser principal.

### Estrutura do projeto

O projeto foi desenvolvido na seguinte estrutura: <br />

## Header e Barra de pesquisa

![header](https://user-images.githubusercontent.com/10486867/72757986-39e7d900-3bb0-11ea-8be8-7818989bbac3.PNG) <br />

O Header e barra de busca foram separados em um componente, com isso, o mesmo pode ser programado separadamente para realizar a pesquisa da rota.
Basicamente a ação desse componente é acionar a página de pesquisa à seguir.

## Resultado de pesquisa

![pesquisa](https://user-images.githubusercontent.com/10486867/72757990-453b0480-3bb0-11ea-87ed-ee6c5930ef76.PNG) <br />

A página de pesquisa ficou responsável por renderizar somente os quatro primeiros produtos da listagem de retorno da api conforme documentação.
Essa página possui o link de detalhes do produto somente na imagem do mesmo. A imagem por sua vez, foi modificada, pois a que vinha da listagem da api não possuia uma qualidade aceitável, por isso, foi modificado para trazer uma imagem melhor que eu pude encontrar na página oficial da empresa, devido a isso foi feito o seguinte replace ```<img src={p.thumbnail.replace('-I.', '-O.')} alt={p.title} />```. <br />

Nessa página eu optei por não exibir os breadcrumbs, pois não faria sentido por ser uma página de busca. No site do Mercado Livre é exibido somente os termos realicionados a pesquisa em vez do breadcrumbs.

## Detalhes do produto

![detalhes](https://user-images.githubusercontent.com/10486867/72758014-55eb7a80-3bb0-11ea-82c5-da90fde9d472.PNG) <br />

Na página de detalhes estou exibindo os breadcrumbs que também é um componente separado, além de exibir a descrição do produto que vem de uma api diferente.

A imagem foi centralizada em um bloco com o tamanho da especificação, pois, como nem todas as imagens estão em uma qualidade boa e no tamanho correto, eu fiz dessa forma para que as imagens de produto não ficassem desbotadas e desalinhadas, fazendo com que a página ficasse com um aspecto visivelmente ruim.

Também realizei a tradução da condição do produto para que possa ficar tudo como português, além do valor do produto que está no padrão pt-BR.

## Breadcrumbs

![breadcrumbs](https://user-images.githubusercontent.com/10486867/72758046-63086980-3bb0-11ea-945b-a3d6de796814.PNG) <br />

Os breadcrumbs foram criados como um componente separado para que possa ser utilizado por mais de uma página caso o projeto venha a ser escalado no futuro, com isso, o mesmo pode ter suas próprias regras e funções independentes de uma página ou demais componentes.

## Layout

Todo o layout foi estilizado utilizando o Flexbox, para que, caso o projeto venha a ser escalado ou adaptado para demais dispositivos, o mesmo pode ser trabalhado para se adequar as regras futuras de layout, além de o Flexbox ser mais simples para a estilização poupando esforços.

## Agradecimentos

Obrigado pela oportunidade de participar do processo seletivo do Mercado Livre, com esse teste eu pude aprender e me aperfeiçoar ainda mais, por isso, estou satisfeito com o resultado obtido e espero que esteja de acordo com as especificações dos recrutadores.

Qualquer dúvida estou à disposição para maiores informações ou exclarecimentos referente ao projeto.

Matheus Souza Rigote
matheus@rigotedesign.com.br
+55 11 95231-2171

Obrigado ;)
