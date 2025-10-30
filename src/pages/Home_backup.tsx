import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Home() {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState('Todos')

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

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
            <button className="btn-secondary" onClick={() => scrollToSection('contact')}>
              Fazer Orçamento
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="services-header">
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">Tecnologia de ponta e qualidade premium em cada projeto</p>
          
          <div className="services-stats">
            <div className="stat-item">
              <div className="stat-number" style={{ color: 'var(--neon-pink)' }}>5000+</div>
              <div className="stat-label">Projetos Realizados</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number" style={{ color: 'var(--neon-blue)' }}>98%</div>
              <div className="stat-label">Clientes Satisfeitos</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number" style={{ color: 'var(--neon-green)' }}>5+</div>
              <div className="stat-label">Anos de Experiência</div>
            </div>
          </div>
        </div>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="service-badge" style={{ background: 'linear-gradient(135deg, var(--neon-pink), var(--neon-orange))' }}>
              Mais Popular
            </div>
            <div className="service-icon" style={{ color: 'var(--neon-pink)' }}>ðŸŽ¨</div>
            <h3>SublimaÃ§Ã£o Premium</h3>
            <p className="service-description">
              ImpressÃ£o de altÃ­ssima qualidade com tecnologia de ponta que garante cores vibrantes e durabilidade excepcional.
            </p>
            <ul className="service-features">
              <li><span className="feature-icon">âœ“</span> Cores ultra vivas e brilhantes</li>
              <li><span className="feature-icon">âœ“</span> Resistente a 300+ lavagens</li>
              <li><span className="feature-icon">âœ“</span> Ideal para canecas e tecidos</li>
              <li><span className="feature-icon">âœ“</span> Acabamento profissional</li>
            </ul>
            <div className="service-time">
              <span className="time-icon">â±ï¸</span>
              <span>Pronto em 24-48h</span>
            </div>
          </div>

          <div className="service-card">
            <div className="service-badge" style={{ background: 'linear-gradient(135deg, var(--neon-blue), var(--neon-purple))' }}>
              Premium
            </div>
            <div className="service-icon" style={{ color: 'var(--neon-blue)' }}>âš¡</div>
            <h3>GravaÃ§Ã£o a Laser</h3>
            <p className="service-description">
              Tecnologia laser de alta precisÃ£o para gravaÃ§Ãµes permanentes e elegantes em diversos materiais.
            </p>
            <ul className="service-features">
              <li><span className="feature-icon">âœ“</span> PrecisÃ£o milimÃ©trica</li>
              <li><span className="feature-icon">âœ“</span> 100% permanente</li>
              <li><span className="feature-icon">âœ“</span> Metal, vidro, madeira e mais</li>
              <li><span className="feature-icon">âœ“</span> Design sofisticado</li>
            </ul>
            <div className="service-time">
              <span className="time-icon">â±ï¸</span>
              <span>Pronto em 48-72h</span>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon" style={{ color: 'var(--neon-green)' }}>🖨️</div>
            <h3>Transfer Digital</h3>
            <p className="service-description">
              Impressão em alta definição com cores vibrantes e acabamento premium para tecidos e superfícies.
            </p>
            <ul className="service-features">
              <li><span className="feature-icon">✓</span> HD em alta resolução</li>
              <li><span className="feature-icon">✓</span> Cores super intensas</li>
              <li><span className="feature-icon">✓</span> Flexível e respirável</li>
              <li><span className="feature-icon">✓</span> Toque suave</li>
            </ul>
            <div className="service-time">
              <span className="time-icon">⏱️</span>
              <span>Pronto em 24h</span>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon" style={{ color: 'var(--neon-purple)' }}>✂️</div>
            <h3>Recorte de Precisão</h3>
            <p className="service-description">
              Tecnologia de recorte eletrônico para adesivos, plotagens e aplicações com detalhes perfeitos.
            </p>
            <ul className="service-features">
              <li><span className="feature-icon">✓</span> Corte ultra preciso</li>
              <li><span className="feature-icon">✓</span> Vinil premium importado</li>
              <li><span className="feature-icon">✓</span> Detalhes mínimos</li>
              <li><span className="feature-icon">✓</span> Aplicação profissional</li>
            </ul>
            <div className="service-time">
              <span className="time-icon">⏱️</span>
              <span>Pronto em 12-24h</span>
            </div>
          </div>

          <div className="service-card">
            <div className="service-badge" style={{ background: 'linear-gradient(135deg, var(--neon-yellow), var(--neon-orange))' }}>
              Atacado
            </div>
            <div className="service-icon" style={{ color: 'var(--neon-yellow)' }}>🎁</div>
            <h3>Brindes Corporativos</h3>
            <p className="service-description">
              Soluções completas para empresas com kits personalizados e identidade visual impecável.
            </p>
            <ul className="service-features">
              <li><span className="feature-icon">✓</span> Grandes quantidades</li>
              <li><span className="feature-icon">✓</span> Preços especiais</li>
              <li><span className="feature-icon">✓</span> Projeto personalizado</li>
              <li><span className="feature-icon">✓</span> Consultoria grátis</li>
            </ul>
            <div className="service-time">
              <span className="time-icon">⏱️</span>
              <span>A partir de 7 dias</span>
            </div>
          </div>
              <li><span className="feature-icon">âœ“</span> Grandes quantidades</li>
              <li><span className="feature-icon">âœ“</span> PreÃ§os especiais</li>
              <li><span className="feature-icon">âœ“</span> Projeto personalizado</li>
              <li><span className="feature-icon">âœ“</span> Consultoria grÃ¡tis</li>
            </ul>
            <div className="service-time">
              <span className="time-icon">â±ï¸</span>
              <span>A partir de 7 dias</span>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon" style={{ color: 'var(--neon-orange)' }}>💎</div>
            <h3>Presentes Exclusivos</h3>
            <p className="service-description">
              Criação de presentes únicos e memoráveis para tornar suas datas especiais inesquecíveis.
            </p>
            <ul className="service-features">
              <li><span className="feature-icon">✓</span> Design personalizado</li>
              <li><span className="feature-icon">✓</span> Embalagem premium</li>
              <li><span className="feature-icon">✓</span> Peças únicas</li>
              <li><span className="feature-icon">✓</span> Entrega expressa disponível</li>
            </ul>
            <div className="service-time">
              <span className="time-icon">⏱️</span>
              <span>Pronto em 2-5 dias</span>
            </div>
          </div>
        </div>

        <div className="services-cta">
          <h3 className="cta-title">Não sabe qual serviço escolher?</h3>
          <p className="cta-text">Nossa equipe especializada está pronta para ajudar você a escolher a melhor solução!</p>
          <button className="btn-primary" onClick={() => scrollToSection('contact')}>
            Falar com Especialista
          </button>
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
              Todos
            </button>
            <button 
              className={`gallery-cat-btn ${activeCategory === 'Corporativo' ? 'active' : ''}`}
              onClick={() => setActiveCategory('Corporativo')}
            >
              Corporativo
            </button>
            <button 
              className={`gallery-cat-btn ${activeCategory === 'Eventos' ? 'active' : ''}`}
              onClick={() => setActiveCategory('Eventos')}
            >
              Eventos
            </button>
            <button 
              className={`gallery-cat-btn ${activeCategory === 'Presentes' ? 'active' : ''}`}
              onClick={() => setActiveCategory('Presentes')}
            >
              Presentes
            </button>
            <button 
              className={`gallery-cat-btn ${activeCategory === 'Esportes' ? 'active' : ''}`}
              onClick={() => setActiveCategory('Esportes')}
            >
              Esportes
            </button>
          </div>
        </div>
        
        <div className="gallery-grid">
          <div className="gallery-item gallery-large">
            <div className="gallery-image" style={{ background: 'linear-gradient(135deg, rgba(255, 0, 128, 0.9), rgba(255, 102, 0, 0.9))' }}>
              <span className="gallery-icon">ðŸŽ¨</span>
            </div>
            <div className="gallery-overlay">
              <div className="gallery-content">
                <span className="gallery-category" style={{ borderColor: 'var(--neon-pink)' }}>Corporativo</span>
                <h3>Evento Tech Summit 2025</h3>
                <p>500+ canecas personalizadas, kits de brindes e crachÃ¡s para convenÃ§Ã£o de tecnologia</p>
                <div className="gallery-stats">
                  <div className="gallery-stat">
                    <span className="stat-icon">ðŸ“¦</span>
                    <span>500 unidades</span>
                  </div>
                  <div className="gallery-stat">
                    <span className="stat-icon">â­</span>
                    <span>5.0 avaliaÃ§Ã£o</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="gallery-item gallery-medium">
            <div className="gallery-image" style={{ background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.9), rgba(57, 255, 20, 0.9))' }}>
              <span className="gallery-icon">💍</span>
            </div>
            <div className="gallery-overlay">
              <div className="gallery-content">
                <span className="gallery-category" style={{ borderColor: 'var(--neon-blue)' }}>Casamento</span>
                <h3>Casamento Ana & Pedro</h3>
                <p>Kits personalizados com canecas, copos e lembranças para 200 convidados</p>
                <div className="gallery-stats">
                  <div className="gallery-stat">
                    <span className="stat-icon">💝</span>
                    <span>200 kits</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="gallery-item gallery-medium">
            <div className="gallery-image" style={{ background: 'linear-gradient(135deg, rgba(191, 0, 255, 0.9), rgba(255, 0, 128, 0.9))' }}>
              <span className="gallery-icon">🎓</span>
            </div>
            <div className="gallery-overlay">
              <div className="gallery-content">
                <span className="gallery-category" style={{ borderColor: 'var(--neon-purple)' }}>Formatura</span>
                <h3>Formatura Medicina 2025</h3>
                <p>Camisetas, canecas e quadros personalizados para turma de formandos</p>
                <div className="gallery-stats">
                  <div className="gallery-stat">
                    <span className="stat-icon">🎓</span>
                    <span>80 formandos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="gallery-item gallery-small">
            <div className="gallery-image" style={{ background: 'linear-gradient(135deg, rgba(57, 255, 20, 0.9), rgba(255, 255, 0, 0.9))' }}>
              <span className="gallery-icon">⚽</span>
            </div>
            <div className="gallery-overlay">
              <div className="gallery-content">
                <span className="gallery-category" style={{ borderColor: 'var(--neon-green)' }}>Esportes</span>
                <h3>Time FC Campeões</h3>
                <p>Uniformes e garrafas térmicas personalizadas</p>
              </div>
            </div>
          </div>

          <div className="gallery-item gallery-small">
            <div className="gallery-image" style={{ background: 'linear-gradient(135deg, rgba(255, 255, 0, 0.9), rgba(255, 102, 0, 0.9))' }}>
              <span className="gallery-icon">🎂</span>
            </div>
            <div className="gallery-overlay">
              <div className="gallery-content">
                <span className="gallery-category" style={{ borderColor: 'var(--neon-yellow)' }}>Aniversário</span>
                <h3>Festa 15 Anos</h3>
                <p>Kits personalizados e lembranças especiais</p>
              </div>
            </div>
          </div>

          <div className="gallery-item gallery-medium">
            <div className="gallery-image" style={{ background: 'linear-gradient(135deg, rgba(255, 102, 0, 0.9), rgba(255, 0, 128, 0.9))' }}>
              <span className="gallery-icon">🏢</span>
            </div>
            <div className="gallery-overlay">
              <div className="gallery-content">
                <span className="gallery-category" style={{ borderColor: 'var(--neon-orange)' }}>Empresarial</span>
                <h3>Branding Startup InnovaTech</h3>
                <p>Canecas, camisetas e adesivos com identidade visual completa</p>
                <div className="gallery-stats">
                  <div className="gallery-stat">
                    <span className="stat-icon">🚀</span>
                    <span>Projeto completo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="gallery-item gallery-small">
            <div className="gallery-image" style={{ background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.9), rgba(191, 0, 255, 0.9))' }}>
              <span className="gallery-icon">🎁</span>
            </div>
            <div className="gallery-overlay">
              <div className="gallery-content">
                <span className="gallery-category" style={{ borderColor: 'var(--neon-blue)' }}>Presente</span>
                <h3>Kit Dia das Mães</h3>
                <p>Canecas e almofadas personalizadas</p>
              </div>
            </div>
          </div>

          <div className="gallery-item gallery-small">
            <div className="gallery-image" style={{ background: 'linear-gradient(135deg, rgba(255, 0, 128, 0.9), rgba(0, 240, 255, 0.9))' }}>
              <span className="gallery-icon">🎪</span>
            </div>
            <div className="gallery-overlay">
              <div className="gallery-content">
                <span className="gallery-category" style={{ borderColor: 'var(--neon-pink)' }}>Evento</span>
                <h3>Festival de Música</h3>
                <p>Copos, camisetas e pulseiras do evento</p>
              </div>
            </div>
          </div>
        </div>

        <div className="gallery-cta">
          <div className="gallery-cta-content">
            <h3>Seu projeto pode ser o próximo destaque!</h3>
            <p>Vamos criar algo incrível juntos. Entre em contato e comece agora mesmo.</p>
            <div className="cta-buttons">
              <button className="btn-primary" onClick={() => scrollToSection('contact')}>
                Iniciar Projeto
              </button>
              <button className="btn-secondary" onClick={() => navigate('/catalogo')}>
                Ver Mais Trabalhos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="services">
        <h2 className="section-title">Entre em Contato</h2>
        <p className="section-subtitle">Vamos criar algo incrÃ­vel juntos!</p>
        
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
            <div>
              <h3 style={{ color: 'var(--neon-blue)', marginBottom: '0.5rem' }}>ðŸ“± WhatsApp</h3>
              <p>(11) 99999-9999</p>
            </div>
            <div>
              <h3 style={{ color: 'var(--neon-pink)', marginBottom: '0.5rem' }}>ðŸ“§ E-mail</h3>
              <p>contato@personalizamais.com.br</p>
            </div>
            <div>
              <h3 style={{ color: 'var(--neon-green)', marginBottom: '0.5rem' }}>ðŸ“ EndereÃ§o</h3>
              <p>Rua da PersonalizaÃ§Ã£o, 123 - SÃ£o Paulo, SP</p>
            </div>
          </div>
          
          <button className="btn-primary" style={{ fontSize: '1.1rem', padding: '1.2rem 3rem' }}>
            ðŸ’¬ Solicitar OrÃ§amento
          </button>
        </div>
      </section>
    </>
  )
}

export default Home

