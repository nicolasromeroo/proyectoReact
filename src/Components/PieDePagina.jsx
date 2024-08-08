import React from 'react';

const PieDePagina = () => {
    return (
        <div className='container-fluid'>
            <section className='bg-dark footer row' style={{ padding: '20px', textAlign: 'center' }}>
                <div className='childrenFooterContainer row'>
                    <h2>Explora el mundo con nosotros</h2>
                    <p>
                         Calle Aventuras 123, Ciudad del Viaje, País de los Sueños<br/>
                        +123 456 7890<br />
                        <a href="mailto:info@viajesmaravilla.com">info@specialtravel.com</a>
                    </p>
                    <div className='col' style={{ margin: '20px 0' }}>
                        <h3>Síguenos en redes sociales</h3>
                        <a href="#"><i className="fa-brands fa-facebook"></i></a> |
                        <a href="#"><i className="fa-brands fa-instagram"></i></a> |
                        <a href="#"><i className="fa-brands fa-x-twitter"></i></a> |
                        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                    <div className='col' style={{ margin: '20px 0' }}>
                        <h3>Recursos útiles</h3>
                        <a href="#" style={{ margin: '0 10px' }}>Sobre nosotros</a> |
                        <a href="#" style={{ margin: '0 10px' }}>Términos y condiciones</a> |
                        <a href="#" style={{ margin: '0 10px' }}>Política de privacidad</a> |
                        <a href="#" style={{ margin: '0 10px' }}>FAQs</a>
                    </div>
                    <div className='col' style={{ margin: '20px 0' }}>
                        <h3>Atención al cliente</h3>
                        Disponible 24/7. Contáctanos a través de nuestro <a href="#">chat en vivo</a> o por email.
                    </div>
                    <p>© 2024 Viajes Maravilla. Todos los derechos reservados.</p>
                    <blockquote style={{ fontStyle: 'italic', color: 'grey' }}>"El mundo es un libro y aquellos que no viajan solo leen una página." - San Agustín</blockquote>
                </div>
            </section>
        </div>
    );
}

export default PieDePagina;
