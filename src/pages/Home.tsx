import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

const Home: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="home">
      {/* Hero Section */}
      <header className="hero">
        <nav className="nav">
          <div className="logo">开特云科技</div>
          <div className="nav-links">
            <a href="#products">产品服务</a>
            <a href="#about">关于我们</a>
            <a href="#solutions">解决方案</a>
            <a href="#contact">联系我们</a>
          </div>
        </nav>

        <div className="hero-content">
          <h1 className="hero-title">
            专业、创新、开放<br />
            引领物理测量系统新时代
          </h1>
          <p className="hero-subtitle">
            开特云科技致力于为科研院所和工业界提供世界一流的物理性质测量系统解决方案
          </p>
          <div className="hero-buttons">
            <button onClick={() => navigate('/download')} className="btn-large btn-primary">
              产品下载
            </button>
            <a href="#contact" className="btn-large btn-secondary">
              联系我们
            </a>
          </div>
        </div>
      </header>

      {/* Products Section */}
      <section id="products" className="features">
        <h2 className="section-title">产品服务</h2>
        <p className="section-subtitle">为科研与工业提供全方位的物理测量解决方案</p>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔬</div>
            <h3>PPMS控制系统</h3>
            <p>新一代物理性质测量系统软件，支持多种低温、磁场环境下的精密测量</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>数据分析平台</h3>
            <p>强大的数据采集与分析系统，实时可视化，智能化数据处理</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>自动化测试</h3>
            <p>全自动测量流程，支持复杂序列编程，大幅提升实验效率</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💾</div>
            <h3>云端管理</h3>
            <p>数据云端存储与管理，多终端同步，保障数据安全</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🌡️</div>
            <h3>多仪器集成</h3>
            <p>兼容Keithley、SR830等国际主流仪器，一站式控制方案</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚙️</div>
            <h3>定制化服务</h3>
            <p>根据客户需求提供专业定制开发与技术支持服务</p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="tech-stack">
        <h2 className="section-title">解决方案</h2>
        <p className="section-subtitle">深耕行业应用，服务科研创新</p>
        <div className="tech-grid">
          <div className="tech-item">
            <h4>🏫 高校科研</h4>
            <p>为高校物理、材料实验室提供完整的测量控制解决方案</p>
          </div>
          <div className="tech-item">
            <h4>🏭 工业应用</h4>
            <p>半导体、新能源材料性能测试与质量控制系统</p>
          </div>
          <div className="tech-item">
            <h4>🔬 科研院所</h4>
            <p>支持前沿科学研究的高精度测量平台</p>
          </div>
          <div className="tech-item">
            <h4>🧪 材料研发</h4>
            <p>新材料物性表征与分析一体化解决方案</p>
          </div>
          <div className="tech-item">
            <h4>⚡ 能源领域</h4>
            <p>电池、超导等能源材料测试系统</p>
          </div>
          <div className="tech-item">
            <h4>💎 量子科技</h4>
            <p>量子材料、低温物理测量技术支持</p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="about-section">
        <h2 className="section-title">关于开特云科技</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>公司简介</h3>
            <p>
              开特云科技成立于2024年，是一家专注于物理测量系统软件研发的高科技企业。
              公司秉承"专业、创新、开放"的理念，致力于为全球科研机构和工业用户提供
              世界一流的测量控制解决方案。
            </p>
            <p>
              我们的核心产品PPMS控制系统，采用最先进的软件架构和人性化的交互设计，
              已服务于国内外数十家知名高校、科研院所和企业，获得用户的广泛认可。
            </p>
            <div className="about-values">
              <div className="value-item">
                <strong>专业</strong>
                <span>深耕物理测量领域，提供专业解决方案</span>
              </div>
              <div className="value-item">
                <strong>创新</strong>
                <span>持续技术创新，引领行业发展</span>
              </div>
              <div className="value-item">
                <strong>开放</strong>
                <span>开放合作生态，共创行业未来</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="cta">
        <h2>联系我们</h2>
        <p>期待与您携手，共创科研创新未来</p>
        <div className="contact-info">
          <div className="contact-item">
            <strong>📧 邮箱</strong>
            <span>info@kaiteyun.com</span>
          </div>
          <div className="contact-item">
            <strong>📱 电话</strong>
            <span>400-888-8888</span>
          </div>
          <div className="contact-item">
            <strong>📍 地址</strong>
            <span>中国·北京·海淀区中关村科技园</span>
          </div>
        </div>
        <button onClick={() => navigate('/download')} className="btn-large btn-primary">
          产品下载
        </button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>产品服务</h4>
            <a href="#products">PPMS控制系统</a>
            <a href="#products">数据分析平台</a>
            <a href="#products">定制化服务</a>
          </div>
          <div className="footer-section">
            <h4>解决方案</h4>
            <a href="#solutions">高校科研</a>
            <a href="#solutions">工业应用</a>
            <a href="#solutions">材料研发</a>
          </div>
          <div className="footer-section">
            <h4>关于我们</h4>
            <a href="#about">公司简介</a>
            <a href="#about">企业文化</a>
            <a href="#contact">联系我们</a>
          </div>
          <div className="footer-section">
            <h4>技术支持</h4>
            <a href="https://github.com/ShaJiuquan/ppms_newVersion_1.0">开源项目</a>
            <a href="https://github.com/ShaJiuquan/ppms_newVersion_1.0/issues">问题反馈</a>
            <a href="/download">软件下载</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024-2025 开特云科技有限公司 版权所有</p>
          <p>专业、创新、开放 · 引领物理测量系统新时代</p>
        </div>
      </footer>
    </div>
  )
}

export default Home
