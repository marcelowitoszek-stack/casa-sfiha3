/* ========================================
   CASA DA SFIHA — JAVASCRIPT VANILLA
   ======================================== */

/* ========== MENU MOBILE ========== */
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const headerNav = document.getElementById('headerNav');
    
    if (menuToggle && headerNav) {
        menuToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            headerNav.classList.toggle('active');
        });
        
        // Fechar menu ao clicar em um link
        const navLinks = headerNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.setAttribute('aria-expanded', 'false');
                headerNav.classList.remove('active');
            });
        });
        
        // Fechar menu ao clicar fora
        document.addEventListener('click', function(event) {
            const isClickInMenu = headerNav.contains(event.target);
            const isClickToggle = menuToggle.contains(event.target);
            
            if (!isClickInMenu && !isClickToggle) {
                menuToggle.setAttribute('aria-expanded', 'false');
                headerNav.classList.remove('active');
            }
        });
    }
});

/* ========== CARROSSEL ========== */
document.addEventListener('DOMContentLoaded', function() {
    const carouselTrack = document.getElementById('carouselTrack');
    const carouselPrev = document.getElementById('carouselPrev');
    const carouselNext = document.getElementById('carouselNext');
    const carouselIndicators = document.getElementById('carouselIndicators');
    
    if (carouselTrack) {
        const slides = carouselTrack.querySelectorAll('.carousel__slide');
        let currentSlide = 0;
        
        // Criar indicadores
        function initIndicators() {
            if (carouselIndicators) {
                slides.forEach((_, index) => {
                    const indicator = document.createElement('button');
                    indicator.className = 'carousel__indicator';
                    if (index === 0) indicator.classList.add('active');
                    indicator.setAttribute('aria-label', `Ir para slide ${index + 1}`);
                    indicator.addEventListener('click', () => goToSlide(index));
                    carouselIndicators.appendChild(indicator);
                });
            }
        }
        
        // Ir para um slide específico
        function goToSlide(index) {
            currentSlide = Math.max(0, Math.min(index, slides.length - 1));
            updateCarousel();
        }
        
        // Atualizar visualização do carrossel
        function updateCarousel() {
            const slideWidth = carouselTrack.clientWidth;
            const scrollLeft = currentSlide * (slideWidth + 16); // 16px gap
            
            carouselTrack.scrollTo({
                left: scrollLeft,
                behavior: 'smooth'
            });
            
            // Atualizar indicadores
            document.querySelectorAll('.carousel__indicator').forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentSlide);
            });
        }
        
        // Próximo slide
        if (carouselNext) {
            carouselNext.addEventListener('click', () => {
                currentSlide = (currentSlide + 1) % slides.length;
                updateCarousel();
            });
        }
        
        // Slide anterior
        if (carouselPrev) {
            carouselPrev.addEventListener('click', () => {
                currentSlide = (currentSlide - 1 + slides.length) % slides.length;
                updateCarousel();
            });
        }
        
        // Suporte a toque
        let touchStartX = 0;
        carouselTrack.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
        });
        
        carouselTrack.addEventListener('touchend', (e) => {
            const touchEndX = e.changedTouches[0].clientX;
            if (touchStartX - touchEndX > 50) {
                currentSlide = (currentSlide + 1) % slides.length;
                updateCarousel();
            } else if (touchEndX - touchStartX > 50) {
                currentSlide = (currentSlide - 1 + slides.length) % slides.length;
                updateCarousel();
            }
        });
        
        initIndicators();
    }
});

/* ========== VALIDAÇÃO DE FORMULÁRIO ========== */
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Limpar mensagens de erro anteriores
            clearErrors();
            
            // Validar campos
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');
            
            let isValid = true;
            
            // Validar nome
            if (!name.value.trim()) {
                showError('name', 'Nome é obrigatório');
                isValid = false;
            }
            
            // Validar email
            if (!email.value.trim()) {
                showError('email', 'E-mail é obrigatório');
                isValid = false;
            } else if (!isValidEmail(email.value)) {
                showError('email', 'E-mail inválido');
                isValid = false;
            }
            
            // Validar assunto
            if (!subject.value.trim()) {
                showError('subject', 'Assunto é obrigatório');
                isValid = false;
            }
            
            // Validar mensagem
            if (!message.value.trim()) {
                showError('message', 'Mensagem é obrigatória');
                isValid = false;
            }
            
            // Se válido, mostrar mensagem de sucesso
            if (isValid) {
                showSuccess();
                // Limpar formulário após 2 segundos
                setTimeout(() => {
                    contactForm.reset();
                    document.getElementById('formSuccess').style.display = 'none';
                }, 3000);
            }
        });
        
        function showError(fieldId, message) {
            const errorElement = document.getElementById(fieldId + 'Error');
            if (errorElement) {
                errorElement.textContent = message;
                errorElement.style.display = 'block';
            }
            const field = document.getElementById(fieldId);
            if (field) {
                field.setAttribute('aria-invalid', 'true');
            }
        }
        
        function clearErrors() {
            document.querySelectorAll('.form-error').forEach(error => {
                error.textContent = '';
                error.style.display = 'none';
            });
            document.querySelectorAll('.form-input, .form-textarea').forEach(field => {
                field.setAttribute('aria-invalid', 'false');
            });
        }
        
        function showSuccess() {
            const successMessage = document.getElementById('formSuccess');
            if (successMessage) {
                successMessage.style.display = 'block';
                // Scroll para mensagem
                successMessage.scrollIntoView({ behavior: 'smooth' });
            }
        }
        
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
    }
});

/* ========== CARRINHO DEMONSTRATIVO (Página Pedidos) ========== */
document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.getElementById('cartItems');
    const cartSummary = document.getElementById('cartSummary');
    const cartClear = document.getElementById('cartClear');
    const cartSubtotal = document.getElementById('cartSubtotal');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cartItems) {
        let cart = JSON.parse(localStorage.getItem('casaDaSfihCart')) || [];
        
        // Adicionar produtos ao carrinho
        document.querySelectorAll('.btn--add-cart').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                const productName = this.getAttribute('data-product');
                const productPrice = parseFloat(this.getAttribute('data-price'));
                
                // Procurar se o produto já está no carrinho
                const existingItem = cart.find(item => item.name === productName);
                
                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    cart.push({
                        name: productName,
                        price: productPrice,
                        quantity: 1
                    });
                }
                
                localStorage.setItem('casaDaSfihCart', JSON.stringify(cart));
                updateCart();
                
                // Feedback visual
                button.textContent = '✓ Adicionado';
                setTimeout(() => {
                    button.textContent = '+ Adicionar';
                }, 1500);
            });
        });
        
        // Atualizar visualização do carrinho
        function updateCart() {
            if (cart.length === 0) {
                cartItems.innerHTML = '<p class="cart-empty">Seu carrinho está vazio</p>';
                cartSummary.style.display = 'none';
                if (cartClear) cartClear.style.display = 'none';
            } else {
                cartItems.innerHTML = '';
                let subtotal = 0;
                
                cart.forEach((item, index) => {
                    const itemTotal = item.price * item.quantity;
                    subtotal += itemTotal;
                    
                    const cartItem = document.createElement('div');
                    cartItem.className = 'cart-item';
                    cartItem.innerHTML = `
                        <div class="cart-item__name">${item.name}</div>
                        <div class="cart-item__qty">
                            <button class="cart-item__qty-btn" data-index="${index}" data-action="minus">−</button>
                            <span>${item.quantity}</span>
                            <button class="cart-item__qty-btn" data-index="${index}" data-action="plus">+</button>
                        </div>
                        <div>R$ ${itemTotal.toFixed(2).replace('.', ',')}</div>
                        <button class="cart-item__remove" data-index="${index}">✕</button>
                    `;
                    cartItems.appendChild(cartItem);
                });
                
                // Adicionar event listeners aos botões do carrinho
                document.querySelectorAll('.cart-item__qty-btn').forEach(btn => {
                    btn.addEventListener('click', function() {
                        const index = parseInt(this.getAttribute('data-index'));
                        const action = this.getAttribute('data-action');
                        
                        if (action === 'plus') {
                            cart[index].quantity += 1;
                        } else if (action === 'minus') {
                            cart[index].quantity -= 1;
                            if (cart[index].quantity <= 0) {
                                cart.splice(index, 1);
                            }
                        }
                        
                        localStorage.setItem('casaDaSfihCart', JSON.stringify(cart));
                        updateCart();
                    });
                });
                
                document.querySelectorAll('.cart-item__remove').forEach(btn => {
                    btn.addEventListener('click', function() {
                        const index = parseInt(this.getAttribute('data-index'));
                        cart.splice(index, 1);
                        localStorage.setItem('casaDaSfihCart', JSON.stringify(cart));
                        updateCart();
                    });
                });
                
                // Atualizar resumo
                const deliveryFee = 5.00;
                const total = subtotal + deliveryFee;
                
                cartSubtotal.textContent = 'R$ ' + subtotal.toFixed(2).replace('.', ',');
                cartTotal.textContent = 'R$ ' + total.toFixed(2).replace('.', ',');
                cartSummary.style.display = 'block';
                if (cartClear) cartClear.style.display = 'inline-block';
            }
        }
        
        // Limpar carrinho
        if (cartClear) {
            cartClear.addEventListener('click', function() {
                if (confirm('Deseja limpar o carrinho?')) {
                    cart = [];
                    localStorage.removeItem('casaDaSfihCart');
                    updateCart();
                }
            });
        }
        
        // Inicializar
        updateCart();
    }
    
    // Filtros de categoria
    const filterButtons = document.querySelectorAll('.orders-menu__filter-btn');
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                
                // Atualizar botão ativo
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Filtrar produtos
                const products = document.querySelectorAll('.order-item');
                products.forEach(product => {
                    if (category === 'all') {
                        product.style.display = 'grid';
                    } else {
                        if (product.getAttribute('data-category') === category) {
                            product.style.display = 'grid';
                        } else {
                            product.style.display = 'none';
                        }
                    }
                });
            });
        });
    }
});

/* ========== SMOOTH SCROLL PARA ÂNCORAS ========== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

/* ========== INDICADOR DE PÁGINA ATIVA ========== */
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.header__nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('nav-active');
        } else {
            link.classList.remove('nav-active');
        }
    });
});

/* ========== TRATAMENTO DE IMAGENS COM FALLBACK ========== */
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23E8E6E1" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="18" fill="%23999" text-anchor="middle" dy=".3em"%3EImagem não disponível%3C/text%3E%3C/svg%3E';
        console.warn('Erro ao carregar imagem:', this.src);
    });
});

/* ========== CONSOLE PARA DEBUG ========== */
console.log('Casa da Sfiha — Site iniciado com sucesso');
console.log('Versão: 1.0.0');
console.log('Nota: Para integrar pagamento real ou armazenar pedidos, configure um backend ou integração de terceiros.');
