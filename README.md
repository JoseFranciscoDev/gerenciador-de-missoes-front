Para passar da tela de login, você precisara descompactar o arquivo 'gerenciador-de-missoes-api' e instalar as dependências do backend:
navegando até a pasta do backend: 'cd gerenciador-de-missoes-api' seguido de 'pip install -r requirements.txt'

Após instalar as dependências do backend, rode o servidor com: fastapi run dev main.py

Com o backend rodando, vá até o diretório em que está o arquivo index.html e instale as dependencias do frontend com npm install

e após instalar tudo, rode o json-server com ' npx json-server --watch mocks/db.json --port 3000'
