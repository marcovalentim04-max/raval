import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Home() {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState('Todos')

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <h1>
            <span className="hero-title-gradient">
              PERSONALIZE SEUS SONHOS
            </span>
          </h1>
          <p>
            Transformamos objetos comuns em peças únicas e especiais. 
            Canecas, copos, garrafas, camisetas e muito mais com a sua cara!
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => navigate('/catalogo')}>
              Ver Catálogo
            </button>
            <button className="btn-secondary" onClick={() => window.open('https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20personalização%20de%20produtos.', '_blank')}>
              Fazer Orçamento
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-new">
        {/* Header Centralizado no Topo */}
        <div className="services-header-centered">
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">Tecnologia de ponta e qualidade premium em cada projeto</p>
          
          <div className="services-stats-compact">
            <div className="stat-compact">
              <span className="stat-number-compact">5000+</span>
              <span className="stat-label-compact">Projetos</span>
            </div>
            <div className="stat-compact">
              <span className="stat-number-compact">98%</span>
              <span className="stat-label-compact">Satisfação</span>
            </div>
            <div className="stat-compact">
              <span className="stat-number-compact">5+</span>
              <span className="stat-label-compact">Anos</span>
            </div>
          </div>
        </div>

        <div className="services-container">
          {/* Lado Esquerdo - Imagem */}
          <div className="services-image">
            <div className="image-decoration">
              <div className="decoration-circle circle-1"></div>
              <div className="decoration-circle circle-2"></div>
              <div className="decoration-circle circle-3"></div>
            </div>
            <div className="product-showcase"></div>
          </div>

          {/* Lado Direito - Conteúdo */}
          <div className="services-content">
            {/* Cards de Serviços em Checklist */}
            <div className="services-checklist">
              <div className="service-check-item">
                <div className="check-icon pink">
                  <span>✓</span>
                </div>
                <div className="check-content">
                  <div className="check-header">
                    <h3>Sublimação Premium</h3>
                    <span className="badge-popular">Mais Popular</span>
                  </div>
                  <p>Impressão de altíssima qualidade com cores vibrantes e durabilidade excepcional</p>
                  <div className="check-features">
                    <span>🎨 Cores ultra vivas</span>
                    <span>🛡️ 300+ lavagens</span>
                    <span>⏱️ 24-48h</span>
                  </div>
                </div>
              </div>

              <div className="service-check-item">
                <div className="check-icon blue">
                  <span>✓</span>
                </div>
                <div className="check-content">
                  <div className="check-header">
                    <h3>Gravação a Laser</h3>
                    <span className="badge-premium">Premium</span>
                  </div>
                  <p>Tecnologia laser de alta precisão para gravações permanentes e elegantes</p>
                  <div className="check-features">
                    <span>⚡ Precisão total</span>
                    <span>♾️ Permanente</span>
                    <span>⏱️ 48-72h</span>
                  </div>
                </div>
              </div>

              <div className="service-check-item">
                <div className="check-icon green">
                  <span>✓</span>
                </div>
                <div className="check-content">
                  <div className="check-header">
                    <h3>Transfer Digital</h3>
                  </div>
                  <p>Impressão em alta definição com cores vibrantes e acabamento premium</p>
                  <div className="check-features">
                    <span>🖨️ Alta resolução</span>
                    <span>🌈 Super intenso</span>
                    <span>⏱️ 24h</span>
                  </div>
                </div>
              </div>

              <div className="service-check-item">
                <div className="check-icon purple">
                  <span>✓</span>
                </div>
                <div className="check-content">
                  <div className="check-header">
                    <h3>Recorte de Precisão</h3>
                  </div>
                  <p>Tecnologia de recorte eletrônico para adesivos com detalhes perfeitos</p>
                  <div className="check-features">
                    <span>✂️ Ultra preciso</span>
                    <span>✨ Vinil premium</span>
                    <span>⏱️ 12-24h</span>
                  </div>
                </div>
              </div>

              <div className="service-check-item">
                <div className="check-icon yellow">
                  <span>✓</span>
                </div>
                <div className="check-content">
                  <div className="check-header">
                    <h3>Brindes Corporativos</h3>
                    <span className="badge-atacado">Atacado</span>
                  </div>
                  <p>Soluções completas para empresas com kits personalizados e identidade visual</p>
                  <div className="check-features">
                    <span>🎁 Grande volume</span>
                    <span>💰 Preço especial</span>
                    <span>⏱️ 7+ dias</span>
                  </div>
                </div>
              </div>

              <div className="service-check-item">
                <div className="check-icon orange">
                  <span>✓</span>
                </div>
                <div className="check-content">
                  <div className="check-header">
                    <h3>Presentes Exclusivos</h3>
                  </div>
                  <p>Criação de presentes únicos e memoráveis para tornar suas datas especiais</p>
                  <div className="check-features">
                    <span>💎 Peças únicas</span>
                    <span>📦 Embalagem premium</span>
                    <span>⏱️ 2-5 dias</span>
                  </div>
                </div>
              </div>
            </div>

            <button className="btn-primary btn-services" onClick={() => window.open('https://wa.me/5511999999999?text=Olá!%20Vi%20os%20serviços%20de%20personalização%20e%20gostaria%20de%20fazer%20um%20orçamento.', '_blank')}>
              💬 Solicitar Orçamento
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section id="gallery" className="gallery-section">
        <div className="gallery-header">
          <h2 className="section-title">Galeria de Trabalhos</h2>
          <p className="section-subtitle">Confira alguns dos nossos projetos que transformaram sonhos em realidade</p>
          
          <div className="gallery-categories">
            <button 
              className={`gallery-cat-btn ${activeCategory === 'Todos' ? 'active' : ''}`}
              onClick={() => setActiveCategory('Todos')}
            >
              <span className="cat-icon">⭐</span>
              Todos
            </button>
            <button 
              className={`gallery-cat-btn ${activeCategory === 'Corporativo' ? 'active' : ''}`}
              onClick={() => setActiveCategory('Corporativo')}
            >
              <span className="cat-icon">🏢</span>
              Corporativo
            </button>
            <button 
              className={`gallery-cat-btn ${activeCategory === 'Eventos' ? 'active' : ''}`}
              onClick={() => setActiveCategory('Eventos')}
            >
              <span className="cat-icon">🎉</span>
              Eventos
            </button>
            <button 
              className={`gallery-cat-btn ${activeCategory === 'Presentes' ? 'active' : ''}`}
              onClick={() => setActiveCategory('Presentes')}
            >
              <span className="cat-icon">🎁</span>
              Presentes
            </button>
            <button 
              className={`gallery-cat-btn ${activeCategory === 'Esportes' ? 'active' : ''}`}
              onClick={() => setActiveCategory('Esportes')}
            >
              <span className="cat-icon">⚽</span>
              Esportes
            </button>
          </div>
        </div>
        
        <div className="gallery-grid-modern">
          {(() => {
            const galleryItems = [
              { category: 'Corporativo', title: 'Evento Tech Summit 2025', desc: '500+ canecas personalizadas para convenção', gradient: 'linear-gradient(135deg, #FF0080, #FF6600)', icon: '🎨', units: '500 unidades' },
              { category: 'Eventos', title: 'Casamento Ana & Pedro', desc: 'Kits personalizados para 200 convidados', gradient: 'linear-gradient(135deg, #00F0FF, #39FF14)', icon: '💍', units: '200 kits' },
              { category: 'Eventos', title: 'Formatura Medicina 2025', desc: 'Camisetas e canecas personalizadas', gradient: 'linear-gradient(135deg, #BF00FF, #FF0080)', icon: '🎓', units: '80 formandos' },
              { category: 'Esportes', title: 'Time FC Campeões', desc: 'Uniformes e garrafas térmicas personalizadas', gradient: 'linear-gradient(135deg, #39FF14, #FFFF00)', icon: '⚽', units: '30 atletas' },
              { category: 'Presentes', title: 'Festa 15 Anos', desc: 'Kits personalizados e lembranças especiais', gradient: 'linear-gradient(135deg, #FFFF00, #FF6600)', icon: '🎂', units: '100 kits' },
              { category: 'Corporativo', title: 'Branding InnovaTech', desc: 'Canecas, camisetas e adesivos com identidade visual', gradient: 'linear-gradient(135deg, #FF6600, #FF0080)', icon: '🏢', units: 'Projeto completo' },
              { category: 'Presentes', title: 'Kit Dia das Mães', desc: 'Canecas e almofadas personalizadas', gradient: 'linear-gradient(135deg, #00F0FF, #BF00FF)', icon: '🎁', units: '50 kits' },
              { category: 'Eventos', title: 'Festival de Música', desc: 'Copos, camisetas e pulseiras do evento', gradient: 'linear-gradient(135deg, #FF0080, #00F0FF)', icon: '🎪', units: '1000+ peças' }
            ];

            const filteredItems = activeCategory === 'Todos' 
              ? galleryItems 
              : galleryItems.filter(item => item.category === activeCategory);

            return filteredItems.map((item, index) => (
              <div key={index} className="gallery-card">
                <div className="gallery-card-image" style={{ background: item.gradient }}>
                  <span className="gallery-card-icon">{item.icon}</span>
                </div>
                <div className="gallery-card-content">
                  <span className="gallery-card-category">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <div className="gallery-card-footer">
                    <span className="card-units">📦 {item.units}</span>
                    <span className="card-rating">⭐ 5.0</span>
                  </div>
                </div>
              </div>
            ));
          })()}
        </div>

        <div className="gallery-cta">
          <div className="gallery-cta-content">
            <h3>Seu projeto pode ser o próximo destaque!</h3>
            <p>Vamos criar algo incrível juntos. Entre em contato e comece agora mesmo.</p>
            <div className="cta-buttons">
              <button className="btn-primary" onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}>
                💬 Iniciar Projeto
              </button>
              <button className="btn-secondary" onClick={() => navigate('/catalogo')}>
                📚 Ver Catálogo Completo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-header">
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">Vamos criar algo incrível juntos! Estamos prontos para atender você.</p>
        </div>

        <div className="contact-container">
          {/* Card Esquerdo - Mapa e Localização */}
          <div className="contact-card map-card">
            <div className="card-header">
              <h3>📍 Nossa Localização</h3>
            </div>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975598022103!2d-46.65888368502207!3d-23.561414984682867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="location-info">
              <div className="location-item">
                <span className="location-icon">📍</span>
                <div>
                  <h4>Endereço</h4>
                  <p>Rua da Personalização, 123</p>
                  <p>Bairro Centro - São Paulo, SP</p>
                  <p>CEP: 01310-100</p>
                </div>
              </div>
              <div className="location-item">
                <span className="location-icon">🕐</span>
                <div>
                  <h4>Horário de Atendimento</h4>
                  <p>Segunda a Sexta: 9h às 18h</p>
                  <p>Sábado: 9h às 13h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card Direito - Informações de Contato */}
          <div className="contact-card info-card">
            <div className="card-header">
              <h3>💬 Fale Conosco</h3>
            </div>
            
            <div className="contact-methods">
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="contact-method whatsapp">
                <div className="method-icon">
                  <img src="/src/imgs/whatsapp.png" alt="WhatsApp" />
                </div>
                <div className="method-info">
                  <h4>WhatsApp</h4>
                  <p>(11) 99999-9999</p>
                  <span className="method-badge">Resposta rápida</span>
                </div>
                <div className="method-arrow">→</div>
              </a>

              <a href="tel:+551133334444" className="contact-method phone">
                <div className="method-icon">
                  <img src="/src/imgs/telefone.png" alt="Telefone" />
                </div>
                <div className="method-info">
                  <h4>Telefone</h4>
                  <p>(11) 3333-4444</p>
                  <span className="method-badge">Ligação direta</span>
                </div>
                <div className="method-arrow">→</div>
              </a>

              <a href="mailto:contato@raval.com.br" className="contact-method email">
                <div className="method-icon">
                  <img src="/src/imgs/o-email.png" alt="E-mail" />
                </div>
                <div className="method-info">
                  <h4>E-mail</h4>
                  <p>contato@raval.com.br</p>
                  <span className="method-badge">Suporte completo</span>
                </div>
                <div className="method-arrow">→</div>
              </a>

              <a href="https://instagram.com/raval" target="_blank" rel="noopener noreferrer" className="contact-method instagram">
                <div className="method-icon">
                  <img src="/src/imgs/instagram.png" alt="Instagram" />
                </div>
                <div className="method-info">
                  <h4>Instagram</h4>
                  <p>@raval</p>
                  <span className="method-badge">Portfólio visual</span>
                </div>
                <div className="method-arrow">→</div>
              </a>

              <a href="https://facebook.com/raval" target="_blank" rel="noopener noreferrer" className="contact-method facebook">
                <div className="method-icon">
                  <img src="/src/imgs/facebook.png" alt="Facebook" />
                </div>
                <div className="method-info">
                  <h4>Facebook</h4>
                  <p>/raval</p>
                  <span className="method-badge">Novidades e promoções</span>
                </div>
                <div className="method-arrow">→</div>
              </a>
            </div>

            <div className="cta-button-container">
              <button className="btn-primary btn-full" onClick={() => window.open('https://wa.me/5511999999999?text=Olá!%20Estou%20entrando%20em%20contato%20através%20do%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento.', '_blank')}>
                💬 Solicitar Orçamento via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
