import React from 'react';

const PieDePagina = () => {
    return (
        <section style={{ backgroundColor: 'black', padding: '20px', textAlign: 'center' }}>
            <div style={{ maxWidth: '1200px', margin: 'auto' }}>
                <h2>Explora el mundo con nosotros</h2>
                <p>
                    📍 <strong>Dirección</strong>: Calle Aventuras 123, Ciudad del Viaje, País de los Sueños<br />
                    📞 <strong>Teléfono</strong>: +123 456 7890<br />
                    📧 <strong>Email</strong>: <a href="mailto:info@viajesmaravilla.com">info@viajesmaravilla.com</a>
                </p>
                <div style={{ margin: '20px 0' }}>
                    <h3>Síguenos en redes sociales</h3>
                    <a href="#" style={{ margin: '0 10px' }}>Facebook</a> |
                    <a href="#" style={{ margin: '0 10px' }}>Instagram</a> |
                    <a href="#" style={{ margin: '0 10px' }}>Twitter</a> |
                    <a href="#" style={{ margin: '0 10px' }}>YouTube</a>
                </div>
                <div style={{ margin: '20px 0' }}>
                    <h3>Recursos útiles</h3>
                    <a href="#" style={{ margin: '0 10px' }}>Sobre nosotros</a> |
                    <a href="#" style={{ margin: '0 10px' }}>Términos y condiciones</a> |
                    <a href="#" style={{ margin: '0 10px' }}>Política de privacidad</a> |
                    <a href="#" style={{ margin: '0 10px' }}>FAQs</a>
                </div>
                <div style={{ margin: '20px 0' }}>
                    <h3>Atención al cliente</h3>
                    Disponible 24/7. Contáctanos a través de nuestro <a href="#">chat en vivo</a> o por email.
                </div>
                <p>© 2024 Viajes Maravilla. Todos los derechos reservados.</p>
                <blockquote style={{ fontStyle: 'italic' }}>"El mundo es un libro y aquellos que no viajan solo leen una página." - San Agustín</blockquote>
            </div>
        </section>
    );
}

export default PieDePagina;
