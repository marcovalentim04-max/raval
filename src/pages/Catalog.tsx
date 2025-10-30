import { useState } from 'react'
import './Catalog.css'

interface Product {
  id: number
  name: string
  category: string
  subclass: string
  icon: string
  description: string
  price: string
  color: string
}

const products: Product[] = [
  // Copos - Transfer
  { id: 1, name: 'Copo Long Drink Transfer', category: 'copos', subclass: 'transfer', icon: '🥤', description: 'Copo long drink com impressão transfer', price: 'R$ 12,00', color: 'var(--neon-blue)' },
  { id: 2, name: 'Copo Americano Transfer', category: 'copos', subclass: 'transfer', icon: '🥛', description: 'Copo americano vidro transfer', price: 'R$ 10,00', color: 'var(--neon-blue)' },
  
  // Copos - Sublimado
  { id: 3, name: 'Copo Long Drink Sublimado', category: 'copos', subclass: 'sublimado', icon: '🥤', description: 'Copo long drink sublimação total', price: 'R$ 15,00', color: 'var(--neon-blue)' },
  { id: 4, name: 'Taça Gin Sublimada', category: 'copos', subclass: 'sublimado', icon: '🍸', description: 'Taça de gin personalizada sublimada', price: 'R$ 30,00', color: 'var(--neon-blue)' },
  
  // Copos - Lazer
  { id: 5, name: 'Copo Térmico', category: 'copos', subclass: 'lazer', icon: '🧊', description: 'Copo térmico para viagens', price: 'R$ 35,00', color: 'var(--neon-blue)' },
  { id: 6, name: 'Copo Acrílico Com Tampa', category: 'copos', subclass: 'lazer', icon: '🥤', description: 'Copo acrílico para festas', price: 'R$ 18,00', color: 'var(--neon-blue)' },
  
  // Garrafas - Transfer
  { id: 7, name: 'Garrafa Alumínio Transfer', category: 'garrafas', subclass: 'transfer', icon: '💧', description: 'Garrafa alumínio 500ml transfer', price: 'R$ 25,00', color: 'var(--neon-green)' },
  { id: 8, name: 'Squeeze Transfer', category: 'garrafas', subclass: 'transfer', icon: '🚰', description: 'Squeeze plástico 700ml transfer', price: 'R$ 18,00', color: 'var(--neon-green)' },
  
  // Garrafas - Sublimado
  { id: 9, name: 'Garrafa Térmica Sublimada', category: 'garrafas', subclass: 'sublimado', icon: '💧', description: 'Garrafa térmica inox sublimada 500ml', price: 'R$ 45,00', color: 'var(--neon-green)' },
  { id: 10, name: 'Squeeze Sublimado', category: 'garrafas', subclass: 'sublimado', icon: '🚰', description: 'Squeeze branco sublimado 700ml', price: 'R$ 22,00', color: 'var(--neon-green)' },
  
  // Garrafas - Lazer
  { id: 11, name: 'Cantil Trilha', category: 'garrafas', subclass: 'lazer', icon: '⛺', description: 'Cantil para trilhas 1L', price: 'R$ 38,00', color: 'var(--neon-green)' },
  { id: 12, name: 'Garrafa Sport', category: 'garrafas', subclass: 'lazer', icon: '🏃', description: 'Garrafa esportiva 1L', price: 'R$ 32,00', color: 'var(--neon-green)' },
  
  // Canetas - Transfer
  { id: 13, name: 'Caneta Metal Transfer', category: 'canetas', subclass: 'transfer', icon: '✒️', description: 'Caneta metálica transfer', price: 'R$ 8,00', color: 'var(--neon-purple)' },
  { id: 14, name: 'Caneta Plástica Transfer', category: 'canetas', subclass: 'transfer', icon: '🖊️', description: 'Caneta plástica transfer', price: 'R$ 5,00', color: 'var(--neon-purple)' },
  
  // Canetas - Sublimado
  { id: 15, name: 'Caneta Branca Sublimada', category: 'canetas', subclass: 'sublimado', icon: '✒️', description: 'Caneta branca para sublimação', price: 'R$ 7,00', color: 'var(--neon-purple)' },
  { id: 16, name: 'Caneta Touch Sublimada', category: 'canetas', subclass: 'sublimado', icon: '🖊️', description: 'Caneta touch para celular sublimada', price: 'R$ 10,00', color: 'var(--neon-purple)' },
  
  // Canetas - Lazer
  { id: 17, name: 'Caneta Lanterna', category: 'canetas', subclass: 'lazer', icon: '🔦', description: 'Caneta com lanterna LED', price: 'R$ 12,00', color: 'var(--neon-purple)' },
  { id: 18, name: 'Caneta Multifuncional', category: 'canetas', subclass: 'lazer', icon: '🔧', description: 'Caneta com chave de fenda e touch', price: 'R$ 15,00', color: 'var(--neon-purple)' },
  
  // Chaveiros - Transfer
  { id: 19, name: 'Chaveiro Acrílico Transfer', category: 'chaveiros', subclass: 'transfer', icon: '🔑', description: 'Chaveiro acrílico transfer', price: 'R$ 5,00', color: 'var(--neon-yellow)' },
  { id: 20, name: 'Chaveiro Metal Transfer', category: 'chaveiros', subclass: 'transfer', icon: '🗝️', description: 'Chaveiro metal transfer', price: 'R$ 8,00', color: 'var(--neon-yellow)' },
  
  // Chaveiros - Sublimado
  { id: 21, name: 'Chaveiro MDF Sublimado', category: 'chaveiros', subclass: 'sublimado', icon: '🔑', description: 'Chaveiro MDF sublimado', price: 'R$ 6,00', color: 'var(--neon-yellow)' },
  { id: 22, name: 'Chaveiro Tecido Sublimado', category: 'chaveiros', subclass: 'sublimado', icon: '🗝️', description: 'Chaveiro tecido sublimado', price: 'R$ 7,00', color: 'var(--neon-yellow)' },
  
  // Chaveiros - Lazer
  { id: 23, name: 'Chaveiro Mosquetão', category: 'chaveiros', subclass: 'lazer', icon: '🧗', description: 'Chaveiro mosquetão resistente', price: 'R$ 10,00', color: 'var(--neon-yellow)' },
  { id: 24, name: 'Chaveiro LED', category: 'chaveiros', subclass: 'lazer', icon: '💡', description: 'Chaveiro com lanterna LED', price: 'R$ 12,00', color: 'var(--neon-yellow)' },
  
  // Xícaras - Sublimado
  { id: 25, name: 'Xícara Cerâmica Sublimada', category: 'xicaras', subclass: 'sublimado', icon: '☕', description: 'Xícara cerâmica 300ml sublimada', price: 'R$ 18,00', color: 'var(--neon-pink)' },
  { id: 26, name: 'Xícara Porcelana Sublimada', category: 'xicaras', subclass: 'sublimado', icon: '☕', description: 'Xícara porcelana premium sublimada', price: 'R$ 25,00', color: 'var(--neon-pink)' },
  
  // Xícaras - Transfer
  { id: 27, name: 'Xícara Transfer', category: 'xicaras', subclass: 'transfer', icon: '☕', description: 'Xícara cerâmica transfer', price: 'R$ 15,00', color: 'var(--neon-pink)' },
  { id: 28, name: 'Xícara Chá Transfer', category: 'xicaras', subclass: 'transfer', icon: '🍵', description: 'Xícara de chá transfer', price: 'R$ 16,00', color: 'var(--neon-pink)' },
  
  // Sacolas - Sublimado
  { id: 29, name: 'Sacola Tecido Sublimada', category: 'sacolas', subclass: 'sublimado', icon: '🛍️', description: 'Sacola ecológica sublimada', price: 'R$ 20,00', color: 'var(--neon-orange)' },
  { id: 30, name: 'Ecobag Sublimada', category: 'sacolas', subclass: 'sublimado', icon: '♻️', description: 'Ecobag grande sublimada', price: 'R$ 25,00', color: 'var(--neon-orange)' },
  
  // Sacolas - Transfer
  { id: 31, name: 'Sacola TNT Transfer', category: 'sacolas', subclass: 'transfer', icon: '🛍️', description: 'Sacola TNT com transfer', price: 'R$ 12,00', color: 'var(--neon-orange)' },
  { id: 32, name: 'Mochila Saco Transfer', category: 'sacolas', subclass: 'transfer', icon: '🎒', description: 'Mochila saco transfer', price: 'R$ 15,00', color: 'var(--neon-orange)' },
  
  // Azulejo - Sublimado
  { id: 33, name: 'Azulejo 15x15 Sublimado', category: 'azulejo', subclass: 'sublimado', icon: '🎨', description: 'Azulejo cerâmico 15x15cm sublimado', price: 'R$ 20,00', color: 'var(--neon-cyan)' },
  { id: 34, name: 'Azulejo 20x20 Sublimado', category: 'azulejo', subclass: 'sublimado', icon: '🖼️', description: 'Azulejo cerâmico 20x20cm sublimado', price: 'R$ 28,00', color: 'var(--neon-cyan)' },
  
  // Azulejo - Transfer
  { id: 35, name: 'Azulejo 15x15 Transfer', category: 'azulejo', subclass: 'transfer', icon: '🎨', description: 'Azulejo cerâmico 15x15cm transfer', price: 'R$ 18,00', color: 'var(--neon-cyan)' },
  { id: 36, name: 'Azulejo 20x20 Transfer', category: 'azulejo', subclass: 'transfer', icon: '🖼️', description: 'Azulejo cerâmico 20x20cm transfer', price: 'R$ 25,00', color: 'var(--neon-cyan)' },
]

const categories = [
  { id: 'todos', name: 'Todos os Produtos', icon: '✨', subclasses: [] },
  { id: 'copos', name: 'Copos', icon: '🥤', subclasses: ['transfer', 'sublimado', 'lazer'] },
  { id: 'garrafas', name: 'Garrafas', icon: '💧', subclasses: ['transfer', 'sublimado', 'lazer'] },
  { id: 'canetas', name: 'Canetas', icon: '✒️', subclasses: ['transfer', 'sublimado', 'lazer'] },
  { id: 'chaveiros', name: 'Chaveiros', icon: '🔑', subclasses: ['transfer', 'sublimado', 'lazer'] },
  { id: 'xicaras', name: 'Xícaras', icon: '☕', subclasses: ['sublimado', 'transfer'] },
  { id: 'sacolas', name: 'Sacolas', icon: '🛍️', subclasses: ['sublimado', 'transfer'] },
  { id: 'azulejo', name: 'Azulejo', icon: '🎨', subclasses: ['sublimado', 'transfer'] },
]

const subclassNames: { [key: string]: string } = {
  'transfer': 'Transfer',
  'sublimado': 'Sublimado',
  'lazer': 'Lazer'
}

function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState('todos')
  const [selectedSubclass, setSelectedSubclass] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('name')

  const currentCategory = categories.find(c => c.id === selectedCategory)

  const filteredProducts = products
    .filter(product => 
      (selectedCategory === 'todos' || product.category === selectedCategory) &&
      (selectedSubclass === null || product.subclass === selectedSubclass) &&
      (searchTerm === '' || 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name)
      if (sortBy === 'price') return parseFloat(a.price.replace('R$ ', '').replace(',', '.')) - parseFloat(b.price.replace('R$ ', '').replace(',', '.'))
      return 0
    })

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId)
    setSelectedSubclass(null)
  }

  return (
    <div className="catalog-page">
      {/* Hero do Catálogo */}
      <section className="catalog-hero">
        <div className="catalog-hero-content">
          <h1 className="hero-title-gradient">Catálogo Completo</h1>
          <p>Explore nossa variedade de produtos para personalização</p>
        </div>
      </section>

      <div className="catalog-container">
        {/* Sidebar com Filtros */}
        <aside className="catalog-sidebar">
          <div className="search-box">
            <div className="search-input-wrapper">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div>

          <div className="filter-section">
            <h3 className="filter-title">Categorias</h3>
            <div className="category-list">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(category.id)}
                >
                  <span className="category-icon">{category.icon}</span>
                  <span className="category-name">{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Subclasses Filter */}
          {currentCategory && currentCategory.subclasses.length > 0 && (
            <div className="filter-section">
              <h3 className="filter-title">Tipo</h3>
              <div className="subclass-list">
                <button
                  className={`subclass-btn ${selectedSubclass === null ? 'active' : ''}`}
                  onClick={() => setSelectedSubclass(null)}
                >
                  Todos
                </button>
                {currentCategory.subclasses.map(subclass => (
                  <button
                    key={subclass}
                    className={`subclass-btn ${selectedSubclass === subclass ? 'active' : ''}`}
                    onClick={() => setSelectedSubclass(subclass)}
                  >
                    {subclassNames[subclass]}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="filter-section">
            <h3 className="filter-title">Ordenar por</h3>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="name">Nome (A-Z)</option>
              <option value="price">Preço (Menor)</option>
            </select>
          </div>
        </aside>

        {/* Grid de Produtos */}
        <main className="catalog-main">
          <div className="catalog-header">
            <h2>
              {selectedCategory === 'todos' 
                ? 'Todos os Produtos' 
                : categories.find(c => c.id === selectedCategory)?.name}
              {selectedSubclass && ` - ${subclassNames[selectedSubclass]}`}
            </h2>
            <p className="products-count">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
            </p>
          </div>

          <div className="catalog-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="catalog-product-card">
                <div className="catalog-product-image" style={{ background: `linear-gradient(135deg, ${product.color}, rgba(0,0,0,0.3))` }}>
                  <span className="catalog-product-icon">{product.icon}</span>
                  <span className="product-subclass-badge">{subclassNames[product.subclass]}</span>
                </div>
                <div className="catalog-product-content">
                  <h3 className="catalog-product-name">{product.name}</h3>
                  <p className="catalog-product-description">{product.description}</p>
                  <div className="catalog-product-footer">
                    <span className="catalog-product-price">{product.price}</span>
                    <button 
                      className="catalog-btn-buy"
                      onClick={() => window.open(`https://wa.me/5511999999999?text=Olá!%20Tenho%20interesse%20no%20produto:%20*${product.name}*%20(${product.price})%0A%0AGostaria%20de%20mais%20informações%20e%20fazer%20um%20orçamento.`, '_blank')}
                    >
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="no-results">
              <span style={{ fontSize: '4rem' }}>🔍</span>
              <h3>Nenhum produto encontrado</h3>
              <p>Tente buscar por outro termo ou categoria</p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default Catalog
