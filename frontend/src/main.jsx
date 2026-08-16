import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'

function App() {
  return (
    <div className="container">
      <header>
        <h1>ClothLoop</h1>
        <p>Sustainable Clothing Exchange & Swap Marketplace</p>
      </header>
      <main>
        <div className="grid">
          <div className="card">
            <h3>Browse Clothing Items</h3>
            <p>Discover pre-loved apparel ready for swap or trade.</p>
            <button>Explore Now</button>
          </div>
          <div className="card">
            <h3>List Your Item</h3>
            <p>Give your unused clothes a second life with the community.</p>
            <button>Add Item</button>
          </div>
        </div>
      </main>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
