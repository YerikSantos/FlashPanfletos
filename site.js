document.getElementById('budgetRequestForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                product: document.getElementById('product').value,
                quantity: document.getElementById('quantity').value,
                details: document.getElementById('details').value
            };
            
            alert(`Obrigado, ${formData.name}! Seu orçamento para ${formData.quantity} ${formData.product} foi solicitado. Entraremos em contato em breve.`);
            
            this.reset();
        });
        
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });