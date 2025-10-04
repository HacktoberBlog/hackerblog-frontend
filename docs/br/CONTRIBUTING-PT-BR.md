# 🤝 Contribuindo com o HackerBlog

> Bem-vindo à comunidade HackerBlog! Estamos animados em ter você contribuindo com nossa plataforma de blogs focada em desenvolvedores. Seja para o Hacktoberfest 2025 ou apenas para ajudar a construir algo incrível, este guia vai te ajudar a começar! 🚀

![Hacktoberfest 2025](https://img.shields.io/badge/Hacktoberfest-2025-orange?style=for-the-badge)  
![Contributors Welcome](https://img.shields.io/badge/Contributors-Welcome-brightgreen?style=for-the-badge)

## 🌟 Índice

- [Código de Conduta](#-código-de-conduta)  
- [Primeiros Passos](#-primeiros-passos)  
- [Maneiras de Contribuir](#-maneiras-de-contribuir)  
- [Configuração de Desenvolvimento](#-configuração-de-desenvolvimento)  
- [Processo de Contribuição](#-processo-de-contribuição)  
- [Padrões de Código](#-padrões-de-código)  
- [Diretrizes para Pull Request](#-diretrizes-para-pull-request)  
- [Diretrizes para Issues](#-diretrizes-para-issues)  
- [Diretrizes Hacktoberfest](#-diretrizes-hacktoberfest)  
- [Reconhecimento](#-reconhecimento)  

---

## 📜 Código de Conduta

Estamos comprometidos em fornecer um ambiente acolhedor e inclusivo para todos os colaboradores.  
Por favor, leia e siga nosso [Código de Conduta](CODE_OF_CONDUCT.md).

**Resumindo (TL;DR):** Seja respeitoso, seja gentil e ajude a criar uma comunidade positiva para todos! ✨

---

## 🚀 Primeiros Passos

### Pré-requisitos

Antes de começar, certifique-se de ter:

- **Node.js** (v18 ou superior) - [Baixe aqui](https://nodejs.org/)  
- **Git** - [Baixe aqui](https://git-scm.com/)  
- **Conta no GitHub** - [Cadastre-se aqui](https://github.com/join)  
- **Editor de Código** (recomendamos VS Code)  

### Início Rápido

1. **Faça um fork do repositório** no GitHub  
2. **Clone o seu fork** localmente:  
   ```bash
   git clone https://github.com/SEU_USUARIO/hackerblog-frontend.git
   cd hackerblog-frontend
   ```
3. **Instale as dependências**:  
   ```bash
   npm install
   ```
4. **Inicie o servidor de desenvolvimento**:  
   ```bash
   npm run dev
   ```
5. **Abra** `http://localhost:5173` no navegador  

---

## 🎯 Maneiras de Contribuir

Aceitamos todos os tipos de contribuição! Aqui estão algumas formas:

### 🔧 Desenvolvimento Frontend
- Criar ou melhorar componentes React  
- Melhorar CSS, animações e design responsivo  
- Aumentar acessibilidade e usabilidade  
- Otimizar desempenho (bundle, carregamento, renderização)  

### 🐛 Bugs e Testes
- Reportar bugs com passos de reprodução  
- Corrigir bugs e casos de borda  
- Escrever testes (unitários, integração, E2E)  
- Testes manuais em diferentes navegadores/dispositivos  

### 📚 Documentação
- Melhorar README e guias  
- Adicionar comentários em códigos complexos  
- Documentar componentes, funções e utilitários  
- Criar tutoriais para iniciantes  

### 🎨 Design & UI/UX
- Melhorar tema visual e animações  
- Melhorar experiência mobile  
- Garantir acessibilidade universal  
- Criar/otimizar ícones e elementos visuais  

### 🚀 Novas Funcionalidades
- Painel de usuário  
- Editor de blog (rich text)  
- Sistema de busca  
- Perfis de usuário personalizáveis  

---

## 🛠 Configuração de Desenvolvimento

### Variáveis de Ambiente
1. Crie o arquivo `.env`:  
   ```bash
   cp .env.example .env
   ```

### Convenção de Branches
```bash
git checkout -b feature/nome-da-feature
git checkout -b fix/descricao-do-bug
git checkout -b docs/atualizacao-documentacao
```

### Fluxo de Desenvolvimento
```bash
npm run dev       # iniciar servidor
npm run lint      # rodar linter
npm run build     # build produção
npm run preview   # preview build
```

---

## 📝 Processo de Contribuição

1. **Encontre uma Issue**  
   Veja as [issues abertas](https://github.com/HacktoberBlog/hackerblog-frontend/issues)  
   - `good-first-issue` → iniciantes  
   - `hacktoberfest` → válido para Hacktoberfest  
   - `help-wanted` → precisamos de ajuda  
   - `frontend` → tarefas de frontend  

2. **Reivindique a Issue**  
   Comente:  
   ```
   Gostaria de trabalhar nesta issue! 🙋‍♂️
   ```

3. **Crie uma Branch e Trabalhe**  
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/nome-da-feature
   ```

4. **Faça Commit e Push**  
   ```bash
   git add .
   git commit -m "feat: adiciona nova funcionalidade"
   git push origin feature/nome-da-feature
   ```

5. **Abra um Pull Request** no GitHub  

---

## 💻 Padrões de Código

### JavaScript/React

✅ Bom:
```javascript
const MyComponent = ({ title }) => {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount((c) => c + 1);

  return (
    <div className="my-component">
      <h1>{title}</h1>
      <button onClick={handleClick}>Count: {count}</button>
    </div>
  );
};
```

❌ Ruim:
```javascript
function myComponent(props) {
  var count = 0;
  return (
    <div>
      <h1>{props.title}</h1>
      <button onclick="count++">Count: {count}</button>
    </div>
  );
}
```

### CSS

✅ Bom:
```css
.landing-page {
  background: linear-gradient(135deg, #1c1c40 0%, #141430 100%);
  color: #a0a0ff;
  padding: 2rem;
}
.landing-page__title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
}
```

❌ Ruim:
```css
.page {
  background: #1c1c40;
  color: #a0a0ff;
}
.title1 {
  font-size: 32px;
}
```

### Commits (Conventional Commits)

```bash
feat: adiciona autenticação de usuário
fix: corrige validação do login
docs: atualiza guia de instalação
style: melhora animação de botões
refactor: reorganiza estrutura de componentes
test: adiciona testes de autenticação
```

---

## 🔄 Diretrizes de Pull Request

**Título (exemplo):**
```
feat: adiciona nova feature incrível
fix: corrige bug crítico em auth
docs: atualiza guia de contribuição
```

**Descrição do PR (template resumido):**
```markdown
## 🎯 Descrição
Breve explicação do que foi feito.

## 🔗 Issue Relacionada
Closes #123

## 🧪 Tipo de Mudança
- [ ] Bug fix
- [ ] Nova feature
- [ ] Breaking change
- [ ] Documentação

## ✅ Testes
- [ ] Testado localmente
- [ ] Testes adicionados
- [ ] Todos os testes passaram
```

Processo de review:
1. Checks automáticos (lint, build)  
2. Code review dos maintainers  
3. Testes  
4. Aprovação e merge  

---

## 🐛 Diretrizes para Issues

### Bugs
```markdown
## 🐛 Descrição
...

## 🔄 Reproduzir
1. Ir em '...'
2. Clicar em '...'

## 🎯 Esperado
...

## 🖥 Ambiente
- OS: Windows 11
- Browser: Chrome 91
- Node: 18.17.0
```

### Features
```markdown
## 🚀 Descrição
...

## 💡 Motivação
...

## 📋 Detalhes
...

## 🎨 Mockups
...
```

---

## 🎃 Diretrizes Hacktoberfest

- **Qualidade > Quantidade**  
- Siga as [regras oficiais](https://hacktoberfest.com/participation/)  
- Revisões podem levar 2-3 dias  
- Responda ao feedback  

✅ Aceito: bugs corrigidos, novas features, docs relevantes, otimizações  
❌ Não aceito: spam, PRs automáticos, mudanças cosméticas sem valor  

---

## 🏆 Reconhecimento

- Lista de contribuidores no README  
- Créditos na página de contribuidores do GitHub  
- Menções especiais em releases  
- Hall da fama em docs/redes sociais  

---

## 📞 Ajuda

- **Issues no GitHub** → bugs e features  
- **Discussions** → dúvidas e ideias  
- **Comentários em PRs** → revisões de código  

Tempo de resposta:
- Issues: 2–3 dias  
- PRs: 3–5 dias  
- Bugs críticos: 24h  

---

## 🎉 Obrigado

Obrigado por considerar contribuir com o HackerBlog! Cada contribuição, grande ou pequena, melhora o projeto para toda a comunidade.  

**Dicas finais:**
- Comece pequeno (`good-first-issue`)  
- Pergunte quando tiver dúvidas  
- Tenha paciência  
- Se divirta 🚀  

---

<div align="center">

**Boas Contribuições! 🚀**

_Feito com 💜 pela comunidade HackerBlog_

[![GitHub Issues](https://img.shields.io/github/issues/HacktoberBlog/hackerblog-frontend?style=flat-square)](https://github.com/HacktoberBlog/hackerblog-frontend/issues)  
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/HacktoberBlog/hackerblog-frontend?style=flat-square)](https://github.com/HacktoberBlog/hackerblog-frontend/pulls)  
[![Contributors](https://img.shields.io/github/contributors/HacktoberBlog/hackerblog-frontend?style=flat-square)](https://github.com/HacktoberBlog/hackerblog-frontend/graphs/contributors)  

</div>
