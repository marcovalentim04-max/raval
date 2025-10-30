import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Admin.css'

function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  // Senha de administrador (em produção, isso deve estar em um backend seguro)
  const ADMIN_PASSWORD = 'raval2025'

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Simula validação
    setTimeout(() => {
      if (password === ADMIN_PASSWORD) {
        setIsAuthenticated(true)
        setError('')
      } else {
        setError('Senha incorreta! Tente novamente.')
        setPassword('')
      }
      setLoading(false)
    }, 800)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setPassword('')
  }

  if (!isAuthenticated) {
    return (
      <div className="admin-login">
        <div className="login-container">
          <div className="login-header">
            <div className="lock-icon">🔒</div>
            <h1>Área Administrativa</h1>
            <p>Acesso restrito - Digite a senha para continuar</p>
          </div>

          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label htmlFor="password">Senha de Administrador</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite a senha"
                className={error ? 'error' : ''}
                disabled={loading}
                autoFocus
              />
              {error && <span className="error-message">❌ {error}</span>}
            </div>

            <button 
              type="submit" 
              className="btn-login"
              disabled={loading || !password}
            >
              {loading ? (
                <>
                  <span className="spinner"></span>
                  Verificando...
                </>
              ) : (
                <>
                  🔓 Acessar Painel
                </>
              )}
            </button>
          </form>

          <div className="login-footer">
            <p>⚠️ Este é um painel administrativo protegido</p>
            <p>Todas as tentativas de acesso são registradas</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <div className="admin-header-content">
          <h1>🎨 Painel Administrativo - RaVal</h1>
          <div className="admin-header-actions">
            <button onClick={() => navigate('/')} className="btn-nav">
              🏠 Home
            </button>
            <button onClick={() => navigate('/catalogo')} className="btn-nav">
              📚 Catálogo
            </button>
            <button onClick={handleLogout} className="btn-logout">
              🚪 Sair
            </button>
          </div>
        </div>
      </header>

      <div className="admin-content">
        <div className="dashboard-grid">
          {/* Estatísticas */}
          <div className="stat-card">
            <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #FF0080, #FF6600)' }}>
              📊
            </div>
            <div className="stat-info">
              <h3>Pedidos Totais</h3>
              <p className="stat-number">1,234</p>
              <span className="stat-change positive">+12% este mês</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #00F0FF, #39FF14)' }}>
              💰
            </div>
            <div className="stat-info">
              <h3>Faturamento</h3>
              <p className="stat-number">R$ 45.8k</p>
              <span className="stat-change positive">+8% este mês</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #BF00FF, #FF0080)' }}>
              👥
            </div>
            <div className="stat-info">
              <h3>Clientes Ativos</h3>
              <p className="stat-number">567</p>
              <span className="stat-change positive">+23 novos</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #FFFF00, #FF6600)' }}>
              ⭐
            </div>
            <div className="stat-info">
              <h3>Avaliação Média</h3>
              <p className="stat-number">4.9</p>
              <span className="stat-change positive">5 estrelas</span>
            </div>
          </div>
        </div>

        {/* Pedidos Recentes */}
        <div className="admin-section">
          <div className="section-header">
            <h2>📦 Pedidos Recentes</h2>
            <button className="btn-secondary-admin">Ver Todos</button>
          </div>
          <div className="table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Cliente</th>
                  <th>Produto</th>
                  <th>Quantidade</th>
                  <th>Valor</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#1045</td>
                  <td>Ana Silva</td>
                  <td>Canecas Personalizadas</td>
                  <td>50</td>
                  <td>R$ 750,00</td>
                  <td><span className="status-badge pending">Produção</span></td>
                  <td>
                    <button className="btn-icon">👁️</button>
                    <button className="btn-icon">✏️</button>
                  </td>
                </tr>
                <tr>
                  <td>#1044</td>
                  <td>Pedro Santos</td>
                  <td>Camisetas Corporativas</td>
                  <td>100</td>
                  <td>R$ 2.500,00</td>
                  <td><span className="status-badge completed">Concluído</span></td>
                  <td>
                    <button className="btn-icon">👁️</button>
                    <button className="btn-icon">✏️</button>
                  </td>
                </tr>
                <tr>
                  <td>#1043</td>
                  <td>Maria Costa</td>
                  <td>Kit Festa Infantil</td>
                  <td>30</td>
                  <td>R$ 450,00</td>
                  <td><span className="status-badge processing">Enviado</span></td>
                  <td>
                    <button className="btn-icon">👁️</button>
                    <button className="btn-icon">✏️</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Ações Rápidas */}
        <div className="admin-section">
          <div className="section-header">
            <h2>⚡ Ações Rápidas</h2>
          </div>
          <div className="quick-actions">
            <button className="action-btn">
              <span className="action-icon">➕</span>
              <span>Novo Pedido</span>
            </button>
            <button className="action-btn">
              <span className="action-icon">👤</span>
              <span>Adicionar Cliente</span>
            </button>
            <button className="action-btn">
              <span className="action-icon">📸</span>
              <span>Gerenciar Galeria</span>
            </button>
            <button className="action-btn">
              <span className="action-icon">📦</span>
              <span>Estoque</span>
            </button>
            <button className="action-btn">
              <span className="action-icon">📊</span>
              <span>Relatórios</span>
            </button>
            <button className="action-btn">
              <span className="action-icon">⚙️</span>
              <span>Configurações</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin
