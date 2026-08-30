# 🚀 GUIA: Como Usar Este Prompt no Claude Code

## ⚡ Início Rápido

### 1. Copiar o Prompt
- Abra `PROMPT_CLAUDE_CODE.md`
- Copie TODO o conteúdo (Ctrl+A, Ctrl+C)

### 2. Abrir Claude Code
```bash
# No terminal, na pasta do seu projeto
cd casa-da-sfiha
claude-code
```

Ou use a extensão VSCode:
```
Ctrl+K Ctrl+L → Chat do Claude Code
```

### 3. Colar o Prompt
- Cole tudo no chat (Ctrl+V)
- Pressione Enter
- Claude Code criará os arquivos automaticamente

### 4. Resultado
- Arquivos serão criados em sua pasta de trabalho
- Estrutura completa respeitada
- Pronto para testar localmente

---

## 🎯 Dicas de Uso Otimizado

### Para Máxima Eficiência:

#### ✅ Copie o Prompt Em Partes (Se Muito Grande)
```
1. Cole a seção <context>
2. Espere Claude processar
3. Cole <instructions>
4. Espere
5. Cole <output_format> e <task>
```

#### ✅ Se Claude Pedir Esclarecimentos
Apenas responda "Continua" — o prompt já tem tudo

#### ✅ Personalizações Rápidas
Se quiser trocar algo ANTES de executar:

**Substituir WhatsApp:**
```
Procure: 41991750506
Substitua por: SEU_NUMERO_COM_CODIGO_PAIS
```

**Substituir Telefone:**
```
Procure: 4130952330
Substitua por: SEU_NUMERO
```

**Trocar Endereço:**
```
Procure: Rua Teixeira Coelho, 61, loja 04 — Batel
Substitua por: SEU_ENDERECO
```

---

## 📝 Estrutura do Prompt (Explicada)

```markdown
CONTEXTO → Informações do negócio
   ↓
ESTRUTURA → Pastas e arquivos
   ↓
INSTRUÇÕES → Detalhes de cada página/componente
   ↓
OUTPUT FORMAT → Formato exato de entrega
   ↓
TASK → O que fazer (cria tudo)
```

Este prompt usa:
- **XML Tags** para organização
- **Descrição Detalhada** de cada elemento
- **Especificações Técnicas** claras
- **Checklist** implícito de validação

---

## 🔧 Pós-Execução no Claude Code

### 1. Estrutura Criada
```
casa-da-sfiha/
├── index.html
├── sobre.html
├── pedidos.html
├── contato.html
├── css/style.css
├── js/script.js
└── assets/images/ (vazio, pronto para suas fotos)
```

### 2. Testar Localmente
```bash
# Python 3
python -m http.server 8000

# Ou Node.js
npx http-server

# Abra: http://localhost:8000
```

### 3. Verificar Checklist
- [ ] Todas as 4 páginas carregam
- [ ] Menu mobile abre/fecha
- [ ] Carrossel funciona
- [ ] Formulário valida
- [ ] Carrinho adiciona/remove
- [ ] Botão WhatsApp flutua
- [ ] Sem erros no console (F12)

---

## 🎨 Personalizações Após Criação

### Quick Wins (5 minutos cada):

#### 1. Trocar Cores
Abra `css/style.css`, procure por `:root` e altere:
```css
--color-primary: #385916;        /* Verde → Sua cor */
--color-accent-dark: #590202;    /* Vermelho → Sua cor */
```

#### 2. Trocar Fontes
Procure em `css/style.css`:
```css
--font-serif: 'Cormorant Garamond'  /* Sua fonte */
--font-sans: 'Montserrat'           /* Sua fonte */
```

#### 3. Adicionar Suas Imagens
1. Crie pasta `assets/images/`
2. Copie suas fotos lá
3. Em cada HTML, procure e substitua:
   ```html
   src="https://images.unsplash.com/photo-XXXX"
   ↓
   src="assets/images/sua-foto.jpg"
   ```

#### 4. Integrar Formulário
Procure em `index.html`, `contato.html`:
```html
<!-- De -->
<form class="contact-form" id="contactForm" novalidate>

<!-- Para (Formspree) -->
<form class="contact-form" action="https://formspree.io/f/SEU_ID" method="POST">
```

---

## 📱 Teste de Responsividade

No navegador:
```
F12 → Responsive Design Mode (Ctrl+Shift+M)

Teste:
✓ 320px (iPhone SE)
✓ 768px (iPad)
✓ 1024px (Laptop)
✓ 1920px (Monitor grande)
```

---

## 🚀 Deploy no Hostinger

### Passo 1: Preparar
```
✓ Configurar WhatsApp
✓ Configurar Telefone
✓ Configurar Endereço
✓ Adicionar suas imagens
✓ Testar tudo localmente
```

### Passo 2: Upload FTP
```
1. Abra Hostinger Painel
2. Gerenciador de Arquivos → public_html
3. Copie todos os arquivos mantendo estrutura:

   public_html/
   ├── index.html
   ├── sobre.html
   ├── pedidos.html
   ├── contato.html
   ├── css/style.css
   ├── js/script.js
   └── assets/images/ (com suas fotos)
```

### Passo 3: Validar
```
1. Acesse seu domínio
2. Teste todas as páginas
3. Teste mobile
4. Verifique console (F12 → Console)
```

---

## ⚠️ Problemas Comuns & Soluções

| Problema | Solução |
|----------|---------|
| Menu não funciona | Verifique se `js/script.js` está no caminho correto |
| Imagens quebradas | Use URLs públicas ou adicione em `assets/images/` |
| Carrossel não funciona | Limpe cache (Ctrl+Shift+Delete) e recarregue |
| Formulário não envia | Integre com Formspree/EmailJS/backend |
| Responsividade ruim | Teste com F12 → Responsive Design Mode |

---

## 📚 Recursos Inclusos

Este prompt gera:

✅ **HTML5 Semântico**
- Meta tags (descrição, Open Graph, JSON-LD)
- Headers, mains, sections, footers
- Formulários com labels
- Acessibilidade (ARIA)

✅ **CSS3 Responsivo**
- Variáveis CSS (:root)
- Grid + Flexbox
- Media queries (480px, 768px, 1024px)
- Sem frameworks (puro CSS)

✅ **JavaScript Vanilla**
- Menu mobile com hamburguer
- Carrossel com toque
- Validação de formulário
- Carrinho com localStorage
- Sem dependências externas

✅ **Componentes Prontos**
- Cards de produtos
- Botões com estados
- Formulários validados
- Mapa Google Maps iframe
- Botão WhatsApp flutuante

---

## 🎁 Bônus: Checklist de Lançamento

Antes de pedir ao seu cliente usar:

- [ ] Testar em Chrome
- [ ] Testar em Firefox
- [ ] Testar em Safari
- [ ] Testar em Edge
- [ ] Testar em celular real (não apenas emulador)
- [ ] Testar em tablet
- [ ] Validar HTML (https://validator.w3.org/)
- [ ] Validar CSS (https://jigsaw.w3.org/css-validator/)
- [ ] Testar acessibilidade (F12 → Lighthouse)
- [ ] Sem erros no console
- [ ] Todas as imagens carregam
- [ ] Links internos funcionam
- [ ] Links externos abrem em nova aba
- [ ] Botões desativados funcionam
- [ ] Hover/focus visíveis

---

## 💬 Dúvidas Frequentes

**P: Preciso de backend para o carrinho?**
R: Não! O carrinho demo funciona 100% com localStorage. Para pedidos reais, sim.

**P: Posso trocar as cores?**
R: Sim! Edite `:root` em `css/style.css`.

**P: Posso adicionar mais páginas?**
R: Sim! Copie a estrutura de uma página existente.

**P: Funciona em Hostinger?**
R: Sim! 100% compatível. Só precisa fazer upload dos arquivos.

**P: Preciso de SSL?**
R: Hostinger fornece Let's Encrypt grátis. Ative nas configurações.

---

## 🔗 Links Úteis

- **Prompt Engineering**: Anthropic docs
- **Formspree**: https://formspree.io/
- **EmailJS**: https://www.emailjs.com/
- **Google Maps API**: https://developers.google.com/maps
- **Google Fonts**: https://fonts.google.com/
- **TinyPNG**: https://tinypng.com/ (comprimir imagens)
- **Lighthouse**: F12 no Chrome → Lighthouse tab
- **Validator.W3**: https://validator.w3.org/

---

## ✨ Próximos Passos

1. **Execute o prompt** no Claude Code
2. **Teste localmente** (python -m http.server 8000)
3. **Personalize** (cores, fontes, imagens)
4. **Integre o formulário** (Formspree é o mais fácil)
5. **Faça upload** no Hostinger
6. **Registre no Google My Business** (já existe)
7. **Adicione Google Analytics** (opcional)

---

## 🎉 Você Está Pronto!

Este prompt foi otimizado para Claude Code e gerará um site profissional
com ZERO erros, totalmente responsivo e pronto para produção.

**Tempo estimado: 2-5 minutos após executar o prompt**

Boa sorte! 🌯✨
