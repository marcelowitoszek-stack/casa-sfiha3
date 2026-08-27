# 🌯 Casa da Sfiha — Site Completo

## 📋 Visão Geral

Site responsivo, moderno e elegante para a **Casa da Sfiha**, especializado em culinária árabe artesanal em Curitiba.

### ✨ Características

- ✅ **4 Páginas HTML**: Inicial, Sobre, Pedidos e Contato
- ✅ **Design Responsivo**: Mobile, Tablet, Desktop e Ultra-wide
- ✅ **Carrossel Vanilla JS**: Categorias de produtos com navegação por toque
- ✅ **Carrinho Demonstrativo**: Com localStorage para persistência
- ✅ **Filtros de Categoria**: Sfihas, Beirutes, Doces, Molhos, Bebidas
- ✅ **Formulário Validado**: Frontend com mensagens de erro
- ✅ **Mapa Incorporado**: Google Maps com localização exata
- ✅ **Botão Flutuante WhatsApp**: Em todas as páginas
- ✅ **Menu Mobile**: Com hamburger animado
- ✅ **Acessibilidade**: HTML semântico, ARIA labels, teclado
- ✅ **SEO**: Meta tags, JSON-LD, Open Graph
- ✅ **Performance**: CSS/JS puro, sem frameworks pesados

---

## 📁 Estrutura de Arquivos

```
casa-da-sfiha/
├── index.html              # Página inicial
├── sobre.html              # Página sobre a empresa
├── pedidos.html            # Página de pedidos com carrinho
├── contato.html            # Página de contato
├── css/
│   └── style.css           # Estilos completos (responsivo)
├── js/
│   └── script.js           # JavaScript vanilla (menu, carrossel, carrinho)
├── assets/
│   ├── images/             # Pasta para imagens (atualmente usando URLs públicas)
│   └── icons/              # Pasta para ícones
└── README.md               # Este arquivo
```

---

## 🚀 Como Executar Localmente

### Opção 1: Abrir Direto no Navegador (Mais Simples)

1. **Baixe os arquivos**
2. **Abra `index.html`** com duplo-clique (no Windows) ou arraste para o navegador
3. **Pronto!** O site funcionará normalmente

⚠️ **Nota:** Em alguns navegadores, funcionalidades como `localStorage` podem não funcionar com `file://`. Para teste completo, use a Opção 2.

### Opção 2: Usar um Servidor Local (Recomendado)

#### Com Python 3 (Mais comum):
```bash
cd /caminho/para/casa-da-sfiha
python -m http.server 8000
```
Abra `http://localhost:8000` no navegador.

#### Com Node.js (se tiver instalado):
```bash
npx http-server
```

#### Com Live Server (VSCode):
1. Instale a extensão "Live Server" no VSCode
2. Clique em "Go Live" na barra inferior
3. O site abrirá automaticamente

---

## 🔧 Configuração & Personalizações

### 1. **Números de WhatsApp**

Os números estão configurados nos links:
- **Número Base**: `41 99175-0506`
- **Localizar e substituir em todos os arquivos**:
  ```
  Procurar: https://wa.me/41991750506
  Substituir por: https://wa.me/[SEU_NUMERO_COM_CODIGO_PAIS]
  ```

**Exemplo:**
- Brasil: `https://wa.me/5541991750506`
- Portugal: `https://wa.me/351912345678`

### 2. **Telefone**

Configurado como: `41 3095-2330`
- **Procurar**: `4130952330` (sem formatação)
- **Substituir**: seu número

### 3. **Endereço**

Configurado como:
```
Rua Teixeira Coelho, 61, loja 04 — Batel, Curitiba, PR
```
- Localizar em: `index.html`, `contato.html`, `sobre.html`
- O mapa já está atualizado com essas coordenadas

### 4. **Horário de Funcionamento**

Configurado como:
```
2ª a Sábado — 11h 30min às 21h
```
- Localizar e atualizar conforme necessário

### 5. **Imagens**

As imagens estão usando URLs públicas do Unsplash para demonstração:

| Seção | URL | Como Trocar |
|-------|-----|-------------|
| Hero | `hero-banner.jpg` | Substituir URL ou adicionar imagem local em `assets/images/` |
| Sobre | `about-artisan.jpg` | Idem |
| Categorias | Unsplash URLs | Trocar por URLs de imagens locais ou suas fotos |

**Para usar imagens locais:**
1. Adicione imagens em `assets/images/`
2. Substitua a URL:
   ```html
   <!-- De -->
   <img src="https://images.unsplash.com/photo-XXXX?w=600" alt="...">
   
   <!-- Para -->
   <img src="assets/images/sua-imagem.jpg" alt="...">
   ```

### 6. **Integrar Formulário a um Backend**

Atualmente, o formulário funciona apenas **frontend**.

Para integrar com envio de e-mails:

#### **Opção A: Formspree (Mais Fácil)**
1. Acesse https://formspree.io/
2. Crie uma conta gratuita
3. Copie seu endpoint
4. No arquivo HTML, substitua:
   ```html
   <!-- De -->
   <form class="contact-form" id="contactForm" novalidate>
   
   <!-- Para -->
   <form class="contact-form" action="https://formspree.io/f/SEU_ID" method="POST">
   ```
5. Remova o `id="contactForm"` e o `novalidate`

#### **Opção B: EmailJS (Sem Backend)**
1. Acesse https://www.emailjs.com/
2. Crie uma conta gratuita
3. Copie suas credenciais
4. Adicione ao `js/script.js`:
   ```javascript
   // No topo do arquivo
   emailjs.init("SEU_PUBLIC_KEY");
   
   // No submit do formulário
   emailjs.send("service_id", "template_id", {
       name: name.value,
       email: email.value,
       message: message.value
   }).then(() => {
       showSuccess();
   });
   ```

#### **Opção C: Seu Próprio Backend**
- Node.js + Express
- PHP + Mailer
- Python + Flask
- etc.

### 7. **Carrinho de Pedidos**

O carrinho é **demonstrativo** e usa `localStorage` do navegador.

Para integrar com pedidos reais:
- Conecte a um backend
- Implemente pagamento (Stripe, PayPal, Pix)
- Armazene pedidos em banco de dados

---

## 📱 Deploy no Hostinger

### **Passo 1: Preparar os Arquivos**
1. Mantenha a estrutura de pastas exatamente como está
2. Verifique se todas as imagens estão em `assets/images/`
3. Teste tudo localmente antes

### **Passo 2: FTP/SFTP no Hostinger**
1. **Acesse o painel Hostinger**
2. Vá para **Hospedagem → Gerenciador de Arquivos** (ou FTP)
3. Navegue até a pasta `public_html` ou raiz do seu domínio
4. **Faça upload** de todos os arquivos respeitando a estrutura

#### Usando FileZilla (Cliente FTP):
1. Baixe: https://filezilla-project.org/
2. Abra → Arquivo → Gerenciador de Sites
3. Adicione novo site com credenciais do Hostinger
4. Arraste os arquivos para `public_html`

### **Passo 3: Validar Upload**
1. Acesse seu domínio no navegador: `https://seu-dominio.com`
2. Verifique se todas as páginas carregam
3. Teste links internos e externos
4. Teste formulário (se integrado com backend)

### **Passo 4: Otimizações no Hostinger**

#### Ativar Cache:
- Painel → Performance → Cache Browser
- Defina TTL como 2592000 (30 dias)

#### Ativar Compressão GZIP:
- Painel → Performance → Compressão
- Ative para CSS e JavaScript

#### Certificado SSL:
- Painel → SSL → Grátis (Let's Encrypt)
- Forçar HTTPS nas configurações

---

## ✅ Checklist de Implantação

Antes de subir para produção:

- [ ] Imagens locais ou URLs públicas funcionando
- [ ] Números de WhatsApp corretos
- [ ] Telefone correto
- [ ] Endereço correto
- [ ] Horário correto
- [ ] Formulário integrado com backend (opcional)
- [ ] Carrinho testado em navegadores diferentes
- [ ] Menu mobile testado
- [ ] Carrossel testado com toque
- [ ] Mapa carregando
- [ ] Links de todas as páginas funcionando
- [ ] Teste de acessibilidade (navegação por teclado)
- [ ] Teste de responsividade (mobile, tablet, desktop)
- [ ] Verificar console do navegador (sem erros)

---

## 🎨 Personalizações Visuais

### Cores (em `css/style.css`):
```css
--color-primary: #385916;           /* Verde escuro */
--color-secondary: #628C23;         /* Verde oliva */
--color-accent-warm: #A69677;       /* Bege areia */
--color-accent-dark: #590202;       /* Vermelho vinho */
--color-accent-purple: #8C08C8;     /* Roxo destaque */
```

### Fontes:
- **Títulos**: Cormorant Garamond (elegante)
- **Textos**: Montserrat (legível)
- Todas do Google Fonts (carregamento automático)

### Breakpoints Responsivos:
- `< 480px` — Celular pequeno
- `480px - 768px` — Celular grande
- `768px - 1024px` — Tablet
- `> 1024px` — Desktop

---

## 🔍 Troubleshooting

### Menu Mobile Não Funciona
- Verifique se `js/script.js` está carregando
- Abra console (F12) e procure por erros

### Imagens Não Carregam
- URLs públicas (Unsplash) podem estar quebradas
- Substitua por imagens locais em `assets/images/`
- Limpe cache do navegador (Ctrl+Shift+Delete)

### Carrossel Não Funciona
- Certifique-se de que `js/script.js` está no caminho correto
- Verifique se há erros no console (F12 → Console)

### Formulário Não Funciona
- Se abrir arquivo local (`file://`), localStorage não funciona
- Use servidor local (Python, Node, etc.)
- Se estiver em produção, valide integração backend

### Mapa Não Carrega
- Verifique conexão com internet
- Google Maps pode precisar de API key em alguns casos
- Abra console para ver erros específicos

---

## 📊 Análise de SEO

O site inclui:
- ✅ Meta tags descritivas
- ✅ Open Graph (Facebook, WhatsApp)
- ✅ JSON-LD (Schema.org)
- ✅ Hierarquia correta de títulos (H1 único)
- ✅ Alt text em imagens
- ✅ URLs amigáveis

Para melhorar ainda mais:
1. Registre em Google Search Console
2. Registre em Google Business (já existe)
3. Adicione Google Analytics (opcional)

---

## 📞 Suporte

### Dúvidas Técnicas:
- Consulte comentários no código
- Verifique console (F12 → Console Tab)
- Teste em navegadores modernos (Chrome, Firefox, Safari, Edge)

### Integração com Serviços:
- **WhatsApp**: Use formato correto da URL
- **Formspree**: Siga documentação oficial
- **Google Maps**: Mapa incorporado funciona sem API key

---

## 📄 Licença

Este projeto é para uso exclusivo da Casa da Sfiha em Curitiba, Brasil.

---

## 🎉 Pronto para Lançamento!

Seu site está completo, responsivo, acessível e pronto para o Hostinger.

**Próximos passos sugeridos:**
1. Substituir imagens de demonstração por suas próprias fotos
2. Integrar formulário com Formspree ou backend
3. Adicionar Google Analytics
4. Registrar em Google My Business (se ainda não estiver)
5. Otimizar imagens com ferramentas como TinyPNG

Sucesso na Casa da Sfiha! 🌯✨
