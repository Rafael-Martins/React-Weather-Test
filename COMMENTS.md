Suas instruções e justificativas para decisões tomadas devem constar aqui...

Farei uma breve passagem pelas libraries utilizadas:

axios - Para fazer os requests
crypto - Para gerar a chave sha1 para o oauth
oauth-1.0a - Para autenticar na api
enzyme - Auxiliar nos testes
jam-icons - Icones do projeto
node-sass - Estilos
prop-types - Checagem de tipos das props

Para os testes foi utilizado o jest que ja vem pre-configurado com o create-react-app.

As instrucoes para rodar o projeto e sao as basicas para qualquer app criado com reate-react-app, so alterei os testes para usar no CI

npm install - baixa as dependencias

npm run test - roda o teste uma vez (para CI)

npm run test-watch - roda o teste em modo watch para dev

npm run start - roda dev mode

npm run build - build para prod

mais informacoes sobre comandos do CRA no readme da pasta projetos.
