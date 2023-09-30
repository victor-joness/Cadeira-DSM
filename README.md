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
----------------- Sem filtro ------------------ ----------------- Com filtro ------------------ ------------------- Gif ----------------------

<div>
<img src="https://github.com/victor-joness/Cadeira-DSM/blob/main/Images/Modulo%202%20-%20sem%20filtro.jpeg" data-canonical-src="https://github.com/victor-joness/Cadeira-DSM/blob/main/Images/Modulo%202%20-%20sem%20filtro.jpeg" width="300" height="500" />

<img src="https://github.com/victor-joness/Cadeira-DSM/blob/main/Images/Modulo%202%20-%20filtro.jpeg" data-canonical-src="https://github.com/victor-joness/Cadeira-DSM/blob/main/Images/Modulo%202%20-%20filtro.jpeg" width="300" height="500" />

<img src="https://github.com/victor-joness/Cadeira-DSM/blob/main/Images/Modulo%202%20-%20gif.gif" data-canonical-src="https://github.com/victor-joness/Cadeira-DSM/blob/main/Images/Modulo%202%20-%20gif.gif" width="300" height="500" />
<div/>

