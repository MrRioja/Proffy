<p align="center">
  <img src="./readme/logo.png" alt="Logo Proffy" />
</p>

<p align="center" >
  <img src="./web/src/assets/images/landing.svg" alt="Proffy image" />
</p>

<br />

<h3 align="center">
Educação na palma da mão.
</h3>

<br><br>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=NLW&message=II&color=blueviolet&style=for-the-badge"/>
  <img src="https://img.shields.io/github/license/MrRioja/Proffy?color=blueviolet&logo=License&style=for-the-badge"/>
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/MrRioja/Proffy?color=blueviolet&logo=JavaScript&logoColor=white&style=for-the-badge">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/MrRioja/Proffy?color=blueviolet&style=for-the-badge">
</p>
<br>

<p align="center">
  <a href="#sobre">Sobre</a> •
  <a href="#proffy">Proffy</a> •
  <a href="#instalação">Instalação</a> •
  <a href="#tecnologias">Tecnologias</a> •
  <a href="#autor">Autor</a>  
</p>

<br><br><br>

## Sobre

<p>
  Projeto desenvolvido durante a <strong>NLW 02</strong>, evento criado pela <strong><a href="https://rocketseat.com.br/">Rocketseat</a></strong>.   
  Um evento 100% online e GRATUITO, com conteúdo exclusivo e INÉDITO.

Ocorreu do dia 03 de Agosto ao dia 09 de Agosto de 2020 e teve como intuito mostrar na prática o poder da stack
<strong><a href="https://nodejs.org/pt-br/">NodeJS</a></strong> +
<strong><a href="https://pt-br.reactjs.org/">ReactJS</a></strong> +
<strong><a href="https://reactnative.dev">React Native</a></strong> e como essas tecnologias podem te levar até os seus maiores objetivos como programador.

</p>

<br/><br/>

<img src="./readme/Wallpaper.jpg" alt="Wallpaper" style="border-radius: 20px"/>

<br/><br/><br/>

## Proffy

A aplicação Proffy tem como objetivo conectar estudantes e professores para que possam evoluir juntos nas mais variadas matérias. Sendo uma plataforma de educação intermediadora, a aplicação possui duas partes: aplicação web e mobile, cada qual com sua responsabilidade e funcionalidades especificas as quais serão descritas abaixo:

### Proffy - Aplicação web

Através da aplicação web temos acesso a todas as funcionalidades que a plataforma Proffy possui, funcionalidades essas que serão descritas a seguir. O proposito da aplicação é conectar professores das mais variadas matérias com alunos que estão buscando aprofundar seus conhecimentos em determinados temas.
Na web, os novos usuários começar com a inscrição na plataforma, criando uma conta de usuário que não irá distinguir se ele deseja dar ou assistir aulas, mas sim servir para realizar login na plataforma. A seguir temos as respectivas telas do fluxo de autenticação da plataforma:

![Login screen](./readme/Web%20-%20Login.png)

Como vemos na tela acima, o acesso é feito através de email e senha e, caso o usuário não tenha uma conta, temos a opção de cadastro de usuário, conforme fluxo abaixo:

|                    Tela de cadastro                     |                      Cadastro concluído                      |
| :-----------------------------------------------------: | :----------------------------------------------------------: |
| ![Registration screen](./readme/Web%20-%20Register.png) | ![Registration completed](./readme/Web%20-%20Registered.png) |

Com o cadastro concluído o usuário está apto a logar na plataforma e utilizar os recursos de ingressar em aula ou disponibilizar as aulas nas disciplinas que ele deseja lecionar. Ao logar na plataforma ele verá a tela abaixo que é a home da aplicação, onde ele encontrará as duas funcionalidades da Proffy:

![Home screen](./readme/Web%20-%20Home.png)

Um detalhe nessa tela é que a direita dos botões temos as conexões que aquele usuário possui. Isso indica com quantos usuários ele já interagiu, seja seus alunos ou seus professores.
Por exemplo, caso o usuário logado na tela anterior seja professor e um outro usuário busque pela disciplina a qual ele leciona e ao buscar pela matéria tenha interesse nas aulas do usuário professor, ele terá a opção de se conectar com o professor através do WhatsApp, com isso, cria-se uma conexão e na home, consequentemente, teremos essa nova conexão considerada ao exibir o total de conexões, conforme tela a seguir:

![Home screen](./readme/Web%20-%20Connection%20created.png)

Agora vamos as funcionalidades da aplicação... 🚀

Para os usuário que desejam dar aula, ao clicar no botão **Dar aulas**, ele será direcionado para o formulário de registro da disciplina que deseja lecionar e outras informações como seus horários disponíveis, valor e informações de contato. Abaixo a tela de cadastro da disciplina e todas as informações que são requeridas para utilizar a funcionalidade:

![Teacher form](./readme/Web%20-%20Teacher%20form.png)

Após o cadastro, conforme exemplificado acima, a aula já estará disponível para os usuários que buscarem por essa disciplina nos horários que ela estará disponível.

Vamos agora ver como é a busca de disciplinas na visão do aluno. A busca é bem simples, o estudantes apenas escolhe a disciplina que ele deseja estudar, qual dia da semana e em qual horário. Feito isso, serão exibidos para ele todos os professores que lecionam a materia no dia e horário que ele filtrou. Após a escolha do professor preferido pelo aluno, ele pode clicar no botão para entrar em contato e agendar suas aulas com o professor, conforme printScreen abaixo:

![Student form](./readme/Web%20-%20Student%20form.png)

### Proffy - Aplicação mobile

Na home do aplicativo da Proffy temos as mesmas informações da web: opções para dar aula ou buscar por disciplinas e o total de conexões do usuário do usuário logado, conforme imagem abaixo:

<img alt="Home screen" src="./readme/Mobile%20-%20Home.png" width="250" />

Ao clicar em dar aulas, a seguinte tela será exibida para o usuário:

<img alt="Information for teaching" src="./readme/Mobile%20-%20Register%20Teacher%20Info.png" width="250" />

Para quem deseja dar aulas, o cadastro deve ser realizado através da interface web e essa funcionalidade está indisponível no aplicativo.

Mas para os estudantes, a funcionalidade que temos na web é a mesma do app e ao entrar na tela de busca teremos o seguinte:

<img alt="Search teacher" src="./readme/Mobile%20-%20Search%20Teacher.png" width="250" />

Aqui as regras são as mesmas da web: basta buscar a disciplina desejada e o dia e horário que deseja estudar. Com os filtros desejados adicionados, basta realizar a busca para que os resultados sejam exibidos em tela e, com o(s) professor(es) interessados definidos, basta clicar no botão para entrar em contato com eles. O que difere o app da web aqui é a opção de favoritar os professores para serem exibidos em uma lista a parte da busca, para que os estudantes possa ter contato com seus professores preferidos mais facilmente.
Abaixo a exemplificação de ambas as telas citadas acima:

|                                          Tela de busca                                          |                                     Professores favoritados                                      |
| :---------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------: |
| <img alt="Search teacher result" src="./readme/Mobile%20-%20Search%20Result.png" width="250" /> | <img alt="Favorites teacher" src="./readme/Mobile%20-%20Favorites%20Teachers.png" width="250" /> |

## Instalação

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com) e [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone git@github.com:MrRioja/Proffy.git

# Acesse a pasta do projeto no terminal/cmd
$ cd Proffy

# Vá para a pasta server
$ cd server

# Instale as dependências
$ npm install
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ npm run start
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn start

# O servidor inciará na porta 3333 - acesse <http://localhost:3333>
```

### 🖥️ Rodando o Front End (Web)

```bash
# Clone este repositório
$ git clone git@github.com:MrRioja/Proffy.git

# Acesse a pasta do projeto no terminal/cmd
$ cd Proffy

# Vá para a pasta server
$ cd web

# Instale as dependências
$ npm install
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ npm run start
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn start

# O servidor inciará na porta 3000 - acesse <http://localhost:3000>
```

### 📱 Rodando o App (Mobile)

```bash
# Clone este repositório
$ git clone git@github.com:MrRioja/Proffy.git

# Acesse a pasta do projeto no terminal/cmd
$ cd Proffy

# Vá para a pasta server
$ cd mobile

# Instale as dependências
$ npm install
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn

# Execute a aplicação
$ expo start

# Será aberto no terminal o menu do Expo onde poderá escanear o QR Code para executar o app diretamente no seu celular ou as opções de executar no emulador android ou iOS
```

## Tecnologias

<img align="left" src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js" height="75" />

<img align="left" src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" alt="Express.js" height="75"/>

<img align="left" src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React" height="75" />

<img align="left" src="https://miro.medium.com/max/512/1*3o8TOSojT64ChGpjop0USA.png" alt="Expo" height="75" />

<br><br><br><br><br><br>

## Autor

<div align="center">
<img src="https://images.weserv.nl/?url=avatars.githubusercontent.com/u/55336456?v=4&h=100&w=100&fit=cover&mask=circle&maxage=7d" />
<h1>Luiz Rioja</h1>
<strong>Backend Developer</strong>
<br/>
<br/>

<a href="https://linkedin.com/in/luizrioja" target="_blank">
<img alt="LinkedIn" src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white"/>
</a>

<a href="https://github.com/mrrioja" target="_blank">
<img alt="GitHub" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"/>
</a>

<a href="mailto:lulyrioja@gmail.com?subject=Fala%20Dev" target="_blank">
<img alt="Gmail" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
</a>

<a href="https://api.whatsapp.com/send?phone=5511933572652" target="_blank">
<img alt="WhatsApp" src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"/>
</a>

<a href="https://join.skype.com/invite/tvBbOq03j5Uu" target="_blank">
<img alt="Skype" src="https://img.shields.io/badge/SKYPE-%2300AFF0.svg?style=for-the-badge&logo=Skype&logoColor=white"/>
</a>

<br/><br/>

</div>
