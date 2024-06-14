function generarEnlace() {
            
            const numero = document.getElementById('numero').value;
            
            
            if (numero > 3) {
                alert('Por favor ingrese un número válido');
                return;
            }
            
            
            const url = `pagina${numero}.html`;
            
            
            const enlace = document.getElementById('enlace');
            enlace.href = url;
            enlace.textContent = `Ir a la página ${numero}`;
            
            
            enlace.style.display = 'inline';
        }