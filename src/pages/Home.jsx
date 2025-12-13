import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="home">
      {/* Hero Section */}
      <header className="hero">
        <nav className="nav">
          <div className="logo">PPMS</div>
          <div className="nav-links">
            <a href="#features">功能</a>
            <a href="#about">关于</a>
            <button onClick={() => navigate('/download')} className="btn-primary">
              下载
            </button>
          </div>
        </nav>

        <div className="hero-content">
          <h1 className="hero-title">
            专业的物理性质<br />测量系统控制软件
          </h1>
          <p className="hero-subtitle">
            基于 Electron + React 的现代化测量控制平台
          </p>
          <div className="hero-buttons">
            <button onClick={() => navigate('/download')} className="btn-large btn-primary">
              立即下载
            </button>
            <a href="https://github.com/ShaJiuquan/ppms_newVersion_1.0" className="btn-large btn-secondary">
              查看源码
            </a>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="features">
        <h2 className="section-title">核心功能</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔬</div>
            <h3>仪器控制</h3>
            <p>支持 Keithley 2182A, 6221, 2450, 6485, 6514, SR830 等多种设备</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>实时可视化</h3>
            <p>实时绘制测量数据图表，支持热图、线图等多种展示方式</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>序列管理</h3>
            <p>创建和管理复杂的测量序列，支持多轴扫描</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💾</div>
            <h3>数据存储</h3>
            <p>SQLite 数据库存储测量数据和配置，安全可靠</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🌡️</div>
            <h3>低温系统</h3>
            <p>支持 AttoDry 低温系统控制，精确温度管理</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📝</div>
            <h3>脚本编辑</h3>
            <p>Monaco 编辑器实现的测量脚本编辑功能</p>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="about" className="tech-stack">
        <h2 className="section-title">技术栈</h2>
        <div className="tech-grid">
          <div className="tech-item">
            <h4>Electron</h4>
            <p>跨平台桌面应用框架</p>
          </div>
          <div className="tech-item">
            <h4>React 18</h4>
            <p>现代化前端框架</p>
          </div>
          <div className="tech-item">
            <h4>TypeScript</h4>
            <p>类型安全的 JavaScript</p>
          </div>
          <div className="tech-item">
            <h4>SQLite</h4>
            <p>轻量级数据库</p>
          </div>
          <div className="tech-item">
            <h4>ECharts</h4>
            <p>强大的图表库</p>
          </div>
          <div className="tech-item">
            <h4>Ant Design</h4>
            <p>企业级 UI 组件</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>准备好开始了吗？</h2>
        <p>立即下载 PPMS，体验专业的测量控制系统</p>
        <button onClick={() => navigate('/download')} className="btn-large btn-primary">
          免费下载
        </button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 PPMS. MIT License.</p>
        <div className="footer-links">
          <a href="https://github.com/ShaJiuquan/ppms_newVersion_1.0">GitHub</a>
          <a href="https://github.com/ShaJiuquan/ppms_newVersion_1.0/issues">问题反馈</a>
        </div>
      </footer>
    </div>
  )
}

export default Home
