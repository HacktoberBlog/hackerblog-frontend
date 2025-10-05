# 🚀 HackerBlog - Frontend

> Uma plataforma moderna de blog focada em desenvolvedores onde programadores compartilham histórias, insights e conhecimento - sem mentira! 🔥

![HackerBlog Banner](https://img.shields.io/badge/HackerBlog-Frontend-blueviolet?style=for-the-badge)
![Hacktoberfest 2025](https://img.shields.io/badge/Hacktoberfest-2025-orange?style=for-the-badge)
![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?style=for-the-badge&logo=vite)

## ✨ Sobre o HackerBlog

HackerBlog é uma plataforma de blog centrada em desenvolvedores, projetada para a comunidade moderna de programação. Seja documentando sua jornada de código, compartilhando momentos decisivos ou revelando conceitos de programação, o HackerBlog oferece uma interface elegante e inspirada em terminal que fala sua linguagem.

### 🎯 Principais Recursos

- **🌓 Tema Terminal Escuro**: Linda interface inspirada em terminal com cursores estilo MS-DOS e animações de máquina de escrever
- **💜 Estética Moderna Roxo/Azul**: Esquema de cores personalizado com acentos `rgb(160, 160, 255)`
- **📱 Totalmente Responsivo**: Experiência perfeita em desktop, tablet e dispositivos móveis
- **🔐 Sistema de Autenticação**: Login/registro seguro com validação de formulário
- **⚡ Extremamente Rápido**: Construído com Vite para desempenho ideal em desenvolvimento e produção
- **🎨 Animações Interativas**: Efeitos suaves de máquina de escrever e animações de hover
- **🔥 Amigável para Geração Z**: Textos da interface que realmente entendem desenvolvedores e sua vibe

### 🛠 Stack Tecnológico

| Tecnologia       | Propósito                     | Versão  |
| ---------------- | ----------------------------- | ------- |
| **React**        | Framework Frontend            | 19.1.1+ |
| **Vite**         | Ferramenta de Build e Dev     | 7.1.6+  |
| **React Router** | Roteamento do Lado do Cliente | 7.9.3+  |
| **React Icons**  | Biblioteca de Ícones          | 5.5.0+  |
| **Axios**        | Cliente HTTP                  | 1.12.2+ |
| **Tailwind CSS** | CSS Utilitário                | Latest  |
| **ESLint**       | Análise de Código             | 9.35.0+ |

## 🚀 Começando

### Pré-requisitos

- **Node.js** (v18+ recomendado)
- **npm** ou **yarn**
- **Git**

### 📦 Instalação

1. **Clone o repositório**

   ```bash
   git clone https://github.com/HacktoberBlog/hackerblog-frontend.git
   cd hackerblog-frontend
   ```

2. **Instale as dependências**

   ```bash
   npm install # ou npm i
   ```

3. **Inicie o servidor de desenvolvimento**

   ```bash
   npm run dev
   ```

4. **Abra seu navegador**
   Navegue até `http://localhost:5173` (ou a porta mostrada no seu terminal)

### 🏗 Scripts Disponíveis

| Comando           | Descrição                                         |
| ----------------- | ------------------------------------------------- |
| `npm run dev`     | Inicia servidor de desenvolvimento com hot reload |
| `npm run build`   | Compila para produção                             |
| `npm run preview` | Visualiza a build de produção localmente          |
| `npm run lint`    | Executa análise de código ESLint                  |

## 🎨 Estrutura do Projeto

```
src/
├── components/          # Componentes de UI reutilizáveis
│   ├── TopBar.jsx      # Cabeçalho de navegação
│   └── TopBar.css      # Estilização do TopBar
├── pages/              # Componentes de página
│   ├── LandingPage.jsx # Página inicial principal
│   ├── LandingPage.css # Estilos da página inicial
│   ├── LoginPage.jsx   # Autenticação de usuário
│   ├── RegisterPage.jsx# Registro de usuário
│   └── AuthPages.css   # Estilização das páginas de auth
├── routes/             # Proteção de rotas
│   ├── ProtectedRoute.jsx
│   └── PublicRoute.jsx
├── context/            # React Context
│   └── MyContext.jsx   # Gerenciamento de estado global
├── api/                # Integração com API
│   ├── api.config.js   # Configuração do Axios
│   ├── api.intercepter.js
│   └── auth/           # APIs de autenticação
├── utils/              # Funções utilitárias
└── assets/             # Recursos estáticos
```

## 🎭 Showcase de Recursos

### 🖥 Página Inicial Inspirada em Terminal

- **Design autêntico de janela de terminal** com controles estilo macOS
- **Animações de máquina de escrever** com cursores robustos estilo MS-DOS
- **Estética de interface de linha de comando** para aquela sensação autêntica de dev
- **Integração com Hacktoberfest 2025** com oportunidades de contribuição

### 🔐 Autenticação Moderna

- **Formulários elegantes de login/registro** com tema roxo/azul
- **Validação de formulário em tempo real** com mensagens de erro úteis
- **Design responsivo** que funciona em todos os dispositivos
- **Gerenciamento de usuário baseado em contexto** para UX perfeita

### 🎨 Sistema de Design Personalizado

- **Paleta de cores roxo/azul consistente**
- **Família de fonte Inter** para tipografia moderna
- **Fundos gradientes** e transições suaves
- **Efeitos de hover** sem sublinhados para interações limpas

## 🤝 Contribuindo

Damos boas-vindas a contribuidores de todos os níveis de habilidade! O HackerBlog está participando do **Hacktoberfest 2025**.

### 🌟 Áreas de Contribuição

- **🔧 Desenvolvimento Frontend**: Componentes React, melhorias de UI/UX
- **🐛 Correção de Bugs**: Garantia de qualidade e testes
- **📚 Documentação**: Melhorias no README e comentários de código
- **🎨 Design**: Aprimoramentos visuais e animações

### 📋 Como Contribuir

1. **Faça um fork do repositório**
2. **Crie uma branch de feature**: `git checkout -b feature/funcionalidade-incrivel`
3. **Faça suas alterações**: Siga nossos padrões de código
4. **Commit suas mudanças**: `git commit -m 'Adiciona funcionalidade incrível'`
5. **Push para seu fork**: `git push origin feature/funcionalidade-incrivel`
6. **Abra um Pull Request**

### 🏷 Labels de Issues

- `good-first-issue` - Perfeito para iniciantes
- `hacktoberfest` - Elegível para Hacktoberfest
- `frontend` - Tarefas relacionadas ao frontend
- `bug` - Correções de bugs necessárias
- `enhancement` - Novos recursos ou melhorias

## 🔗 Repositórios Relacionados

- **Backend**: [HacktoberBlog/SpringBootBackend](https://github.com/HacktoberBlog/SpringBootBackend)
- **Organização**: [HacktoberBlog](https://github.com/HacktoberBlog)

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🙏 Agradecimentos

- **Equipe React** pelo incrível framework frontend
- **Equipe Vite** pela ferramenta de build ultrarrápida
- **Hacktoberfest** por promover contribuições open source
- **Todos os Contribuidores** que tornam este projeto possível

## 📞 Suporte

- **Issues**: [GitHub Issues](https://github.com/HacktoberBlog/hackerblog-frontend/issues)
- **Discussões**: [GitHub Discussions](https://github.com/HacktoberBlog/hackerblog-frontend/discussions)
- **Organização**: [@HacktoberBlog](https://github.com/HacktoberBlog)

---

<div align="center">

**Feito com 💜 pela Comunidade HackerBlog**

_Onde desenvolvedores compartilham histórias, insights e código - sem mentira!_ 🔥

[![GitHub stars](https://img.shields.io/github/stars/HacktoberBlog/hackerblog-frontend?style=social)](https://github.com/HacktoberBlog/hackerblog-frontend/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/HacktoberBlog/hackerblog-frontend?style=social)](https://github.com/HacktoberBlog/hackerblog-frontend/network/members)

</div>
