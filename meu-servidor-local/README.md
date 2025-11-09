# Meu Servidor Local

Este projeto é um servidor local simples que serve arquivos estáticos, como HTML e CSS, para desenvolvimento e testes.

## Estrutura do Projeto

```
meu-servidor-local
├── public
│   ├── index.html        # Estrutura HTML do site
│   └── styles.css       # Regras de estilo CSS
├── src
│   └── server.js        # Ponto de entrada do servidor local
├── package.json         # Configuração do npm
├── .gitignore           # Arquivos a serem ignorados pelo Git
└── README.md            # Documentação do projeto
```

## Instalação

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   ```
2. Navegue até o diretório do projeto:
   ```
   cd meu-servidor-local
   ```
3. Instale as dependências:
   ```
   npm install
   ```

## Execução

Para iniciar o servidor local, execute o seguinte comando:

```
node src/server.js
```

O servidor estará disponível em `http://localhost:3000`.

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Faça um fork do repositório e envie um pull request.