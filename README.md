# Cadeira-DSM
Repositório que vai conter todos os trabalhos e conteúdos da cadeira de desenvolvimento de software mobile. 

# Emulação

-> Para acompanhar a implementação do projeto eu usei o proprio celular com o aplicativo do expo, e também usei o blueStacks para emular e tirar prints.

## Modulo 01
### 📝 Questões :

-> Foto das questões 01,02,03,04 (Pode ver pela pasta diretamente no github)

<div>
<img src="https://github.com/victor-joness/Cadeira-DSM/blob/main/Images/Questoes%2001%2C02%2C03%2C04.jpg" data-canonical-src="https://github.com/victor-joness/Cadeira-DSM/blob/main/Images/Questoes%2001%2C02%2C03%2C04.jpg" width="300" height="500" />

<img src="https://github.com/victor-joness/Cadeira-DSM/blob/main/Images/Calculadora.jpg" data-canonical-src="https://github.com/victor-joness/Cadeira-DSM/blob/main/Images/Calculadora.jpg" width="300" height="500" />
<div/>

- [x] 1. Implemente uma aplicação usando React, HTML e CSS. Descreva o propósito da
sua aplicação em um arquivo Readme.md. Nesse mesmo arquivo Readme.md,
inclua prints da sua aplicação.

R: É um simples texto, que quando o usuario aperta o botão a cor do texto muda de vermelho pra verde ou vice versa. Os arquivos então estão na pasta Questão 01,02,03,04

- [x] 2. Implemente uma aplicação em React Native que disponha de uma campo textual
que mostra ao usuário quanto vezes ele clicou em um botão conforme mostra o
exemplo que se segue:
Descreva sua aplicação em um arquivo Readme.md. Inclua prints da sua aplicação
no Readme.md.

R: Aproveitei a questão acima, e fiz um que conta quantas vezes a cor foi mudada, e ai eu mostro a quantidade. Os arquivos estão na pasta Questão 01,02,03,04

- [x] 3. Implemente uma aplicação em React Native que renderize três quadrados com um
mensagem posicionado ao centro destes quadrados conforme exemplifica a imagem
que se segue:

R: Feito. Os arquivos estão na pasta Questão 01,02,03,04

- [x] 4. Implemente uma aplicação em React Native que consiste em um form composto por
um input text e um label para esse input de tal forma que quando o usuário digita
algo neste input, o valor do input deve ser capturado e escrito em um componente
textual da aplicação conforme ilustra a figura que se segue:

R: Feito. Os arquivos estão na pasta Questão 01,02,03,04

- [x] 5. Implemente, em React Native, uma calculadora que disponha das operações
básicas de soma, subtração, multiplicação e divisão. Um template para a calculadora
é dado a seguir:

R: Feito, Os arquivos estão na pasta Questão 05

## Modulo 02
### 📝 Questão : 
Implemente uma aplicação cujo propósito é o de requisitar uma lista de livros junto a
um Web Service disposto na web, tratar os dados recebidos e exibi-los para o
usuário. A User Interface (UI) da aplicação deve dispor de um campo de texto
“chave de busca” e um botão “pesquisar”. Quando o usuário clicar em “pesquisar”,
será disparada uma requisição GET com a URI https://hn.algolia.com/api/v1/search?query=X, tal
que X é o valor de “chave de busca”. 

### Resposta :  
a aplicação permite que o usuário pesquise livros usando uma palavra-chave, faz uma requisição
a um serviço da web para obter os resultados da pesquisa, trata os dados recebidos e exibe os livros
encontrados na interface do usuário para que o usuário possa explorá-los. 

O sistema de estrelas dos livros foi feito com base na propriedade "points", onde fazemos uma divisão por 1000
e com isso temos um Rating do livro, por exemplo "points": 4271, vamos ter 4.2, ou seja, o livro vai ter 4 estrelas.

Também foi feito um filtro para mostrar os livros que contém todas as propriedades basicas que são: author, title, url, points.               
Se um deles for nulo, então o livro é ignorado e passamos para o proximo, com isso renderizamos apenas os livros completos.

### Fotos da aplicação + gif :                                                                                       
-------------- Sem filtro ---------------- --------------- Com filtro --------------- ------------------ Gif -------------------

<div>
<img src="https://github.com/victor-joness/Cadeira-DSM/blob/main/Images/Modulo%202%20-%20sem%20filtro.jpeg" data-canonical-src="https://github.com/victor-joness/Cadeira-DSM/blob/main/Images/Modulo%202%20-%20sem%20filtro.jpeg" width="270" height="500" />

<img src="https://github.com/victor-joness/Cadeira-DSM/blob/main/Images/Modulo%202%20-%20filtro.jpeg" data-canonical-src="https://github.com/victor-joness/Cadeira-DSM/blob/main/Images/Modulo%202%20-%20filtro.jpeg" width="270" height="500" />

<img src="https://github.com/victor-joness/Cadeira-DSM/blob/main/Images/Modulo%202%20-%20gif.gif" data-canonical-src="https://github.com/victor-joness/Cadeira-DSM/blob/main/Images/Modulo%202%20-%20gif.gif" width="270" height="500" />
<div/>

## Modulo 03
### 📝 Questão : 
Imagine que você deverá desenvolver um aplicativo para participar de um
processo de seleção de estágio. O seu aplicativo consiste num CRUD
temática (cadastro de livros; pedidos de compras; ou qualquer outro tema). O
aplicativo deve ter uma tela de login e as credenciais de acesso devem ser
fornecidas na documentação da sua aplicação (Readme.md do repositório). A
descrição do tema do seu CRUD também deve vir no Readme.md do
repositório contendo a aplicação.

### Credenciais :
- Email: **admin@gmail.com**                                                                                          
- Senha: **admin**                                                                                                                        

### Resposta :  
Escolhi o tema de crud de cadastro de livros, temos um app.js que é a onde vou fazer o gerenciamento de rotas com o **@react-navigation** e nele vai ter
todas as rotas do sistema que são Login e Home.

Primeiramente temos uma tela inicial que é a de login, onde temos 2 campos email e senha, onde vao ser validados,
caso esteja errado é lançado um alert dizendo que o email ou a senha está errado, caso esteja correto o usuario é redirecionado 
para a pagina de Home.jsx que é a onde a gente vai fazer o crud em questão.

(**Create**) -> Na parte superior do Home, temos um botão que server para adicionar novos livros, esse botão ele abre um modal com 3 campos
titulo, autor e descrição, e ai temos a ooção de salvar ou de voltar, caso escolha salvar, o livro em questão é salvo no banco de dados.
caso escolha voltar, os campos são resetados e ele volta para a tela de home.                                                                                                          
(**Read**) -> Logo abaixo do botão de adicionar temos a listagem dos livros do sistema, então eu faço um leitura(get) no banco de dados e passo
esses dados que vem do banco de dados e delego o gerenciamento para o meu Redux da aplicação que eu chamei de **bookReducer** a partir dele que vamos
efetivamente buscar os dados e mostrar na tela, já que e ele quem faz o gerenciamento, apois isso podemos ver na tela os livros 
utilizando **Layout flex** para organizar os livros e não quebrar a responsividade.                                                                                                              
(**Update**) -> Cada livro que está sendo listado, vai ter 2 botoes no final do card, um deles sendo o de update onde se for clicado é aberto um modal 
com os dados antigos e sendo possivel fazer a alteração e o salvamento dos dados atualizados no banco de dados, nesse caso eu não consegui usar o firebase
como banco de dados, poís ficava dando erro de "databaseURL", então eu usei o **mongoDB** como banco de dados para esse projeto pois eu vi que não tem muita
diferença para o firebase e vai servir 100% para a atividade proposta.                                                        
(**Delete**) -> Assim como no update, vamos ter um botão de deletar que vai fazer o delete do livro no banco de dados, e tudo isso é gerenciado pelo redux, então
é atualizado dinamicamente no aplicativo.

### Requisitos : 
- [x]  Integração com MongoDB;
- [x]  Navegação entre telas;
- [x]  Redux ou qualquer outra abordagem de gerenciamento global da aplicação
correlata ao Flux;
- [x]  Noções de layout Flex ou Grid.

### Fotos da aplicação + gif :                                                                                       
-------------- Login ---------------- --------------- Adicionar Livro --------------- ------------------ Gif -------------------
<div>
<img src="https://github.com/victor-joness/Cadeira-DSM/blob/main/Images/Modulo%203%20-%20Login.jpeg" data-canonical-src="https://github.com/victor-joness/Cadeira-DSM/blob/main/Images/Modulo%203%20-%20Login.jpeg" width="270" height="500" />

<img src="https://github.com/victor-joness/Cadeira-DSM/blob/main/Images/Modulo%203%20-%20adicionar.jpeg" data-canonical-src="https://github.com/victor-joness/Cadeira-DSM/blob/main/Images/Modulo%203%20-%20adicionar.jpeg" width="270" height="500" />

<img src="https://github.com/victor-joness/Cadeira-DSM/blob/main/Images/Modulo%203%20-%20Video.gif" data-canonical-src="https://github.com/victor-joness/Cadeira-DSM/blob/main/Images/Modulo%203%20-%20Video.gif" width="270" height="500" />
<div/>
