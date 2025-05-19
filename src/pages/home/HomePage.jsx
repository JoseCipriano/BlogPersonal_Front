import React from 'react'
import { useNavigate, Route, Routes } from 'react-router-dom'
import { Content } from '../../components/dashboard/Content.jsx'
import './homePage.css'
import { usePublications } from '../../shared/hooks/usePublications.jsx'
import { Navbar } from '../../components/navbars/Navbar'

export const HomePage = () => {
  const { allPublications, getPublications } = usePublications()
  const navegar = useNavigate()

  return (
    <div className="diesel-container">
  <header className="diesel-header">
    <h1 className="diesel-title">Blog Personal</h1>
    <Navbar />
  </header>

  <main className="diesel-content">
    <div className="diesel-main">
      <Content publications={allPublications} getPublications={getPublications} />
    </div>

    <aside className="diesel-sidebar">
      <div className="diesel-card" onClick={() => navegar('/Tecnología/publicaciones')}>
        <h3>TECNOLOGÍA</h3>
        <p>VER PUBLICACIONES →</p>
      </div>
      <div className="diesel-card" onClick={() => navegar('/Taller/publicaciones')}>
        <h3>TALLER</h3>
        <p>VER PUBLICACIONES →</p>
      </div>
      <div className="diesel-card" onClick={() => navegar('/Practica Supervisada/publicaciones')}>
        <h3>PRÁCTICA SUPERVISADA</h3>
        <p>VER PUBLICACIONES →</p>
      </div>
    </aside>
  </main>
</div>
  )
}
