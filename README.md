
Web Quiz - Aplicação de Questionários Interativa
Uma aplicação moderna de questionários construída com React, Vite e Tailwind CSS, oferecendo uma experiência de usuário fluida e responsiva.

https://img.shields.io/badge/React-18.x-blue
https://img.shields.io/badge/Vite-5.x-purple
https://img.shields.io/badge/Tailwind-3.x-teal
https://img.shields.io/badge/License-MIT-green

✨ Funcionalidades
🎯 Interface Moderna: Design limpo e responsivo com Tailwind CSS

⚡ Performance Otimizada: Build rápido com Vite

📱 Totalmente Responsivo: Adaptável a todos os dispositivos

🎨 Temas Personalizáveis: Modo claro/escuro

📊 Progresso em Tempo Real: Visualização do progresso do quiz

⏱️ Timer Opcional: Configuração de tempo por questão

🏆 Sistema de Pontuação: Calcula e exibe resultados

📈 Relatórios Detalhados: Análise de desempenho por categoria

🔄 Navegação Intuitiva: Fluxo de usuário otimizado

🚀 Começando
Pré-requisitos
Node.js 16.x ou superior

npm ou yarn

Instalação
Clone o repositório:

bash
git clone https://github.com/seu-usuario/web-quiz.git
cd web-quiz
Instale as dependências:

bash
npm install
# ou
yarn install
Execute em ambiente de desenvolvimento:

bash
npm run dev
# ou
yarn dev
Acesse a aplicação em http://localhost:5173

Build para Produção
bash
npm run build
# ou
yarn build
Para visualizar o build de produção:

bash
npm run preview
# ou
yarn preview
🏗️ Estrutura do Projeto
text
web-quiz/
├── src/
│   ├── components/       # Componentes React reutilizáveis
│   │   ├── Quiz/         # Componentes específicos do quiz
│   │   ├── UI/           # Componentes de interface genéricos
│   │   └── Layout/       # Componentes de layout
│   ├── pages/           # Páginas da aplicação
│   ├── hooks/           # Custom Hooks React
│   ├── utils/           # Funções utilitárias
│   ├── data/            # Dados e questões do quiz
│   ├── styles/          # Estilos globais e configurações Tailwind
│   └── App.jsx          # Componente principal
├── public/              # Arquivos estáticos
├── index.html           # Ponto de entrada HTML
└── tailwind.config.js   # Configuração do Tailwind CSS
🎨 Tecnologias Utilizadas
React 18: Biblioteca para construção de interfaces

Vite: Build tool e dev server ultrarrápido

Tailwind CSS: Framework CSS utility-first

React Router DOM: Navegação entre páginas

Lucide React: Ícones modernos

Framer Motion: Animações e transições

📝 Adicionando Novos Quizzes
Para adicionar novos quizzes, edite o arquivo src/data/quizData.js:

javascript
export const quizCategories = [
  {
    id: 'novo-quiz',
    title: 'Novo Quiz',
    description: 'Descrição do novo quiz',
    icon: 'Brain', // Ícone do Lucide React
    difficulty: 'Médio',
    questions: [
      {
        id: 1,
        question: 'Sua pergunta aqui?',
        options: ['Opção A', 'Opção B', 'Opção C', 'Opção D'],
        correctAnswer: 0, // Índice da opção correta
        explanation: 'Explicação da resposta correta'
      }
    ]
  }
];
🧪 Executando Testes
bash
# Testes unitários
npm run test

# Testes com cobertura
npm run test:coverage

# Testes E2E (se configurado)
npm run test:e2e
🔧 Configuração do Tailwind
Personalize o tema editando tailwind.config.js:

javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
📦 Scripts Disponíveis
npm run dev - Inicia servidor de desenvolvimento

npm run build - Cria build para produção

npm run preview - Visualiza build de produção localmente

npm run lint - Executa linter

npm run format - Formata código com Prettier

🌐 Deploy
A aplicação pode ser facilmente implantada em:

Vercel: vercel

Netlify: netlify deploy --prod

GitHub Pages: npm run deploy

🤝 Contribuindo
Faça um Fork do projeto

Crie uma branch para sua feature (git checkout -b feature/AmazingFeature)

Commit suas mudanças (git commit -m 'Add some AmazingFeature')

Push para a branch (git push origin feature/AmazingFeature)

Abra um Pull Request

📄 Licença
Distribuído sob licença MIT. Veja LICENSE para mais informações.

✉️ Contato
mvdevelop - mvdevelop@gmail.com

Link do Projeto: https://github.com/mvdevelop/web-quiz
