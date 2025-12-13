import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home(): React.ReactElement {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* Navigation */}
      <nav className="nav">
        <div className="logo">开特云科技</div>
        <div className="nav-links">
          <a href="#products">产品服务</a>
          <a href="#solutions">解决方案</a>
          <a href="#about">关于我们</a>
          <a href="#contact">联系我们</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span>专业 · 创新 · 开放</span>
            <span className="highlight">引领物理测量新时代</span>
          </h1>
          <p className="hero-subtitle">
            开特云科技致力于为科研院所和工业界提供世界一流的物理性质测量系统解决方案，
            助力前沿科学探索与技术突破。
          </p>
          <div className="hero-buttons">
            <button
              onClick={() => navigate('/download')}
              className="btn-primary"
              type="button"
            >
              立即下载
            </button>
            <a href="#contact" className="btn-secondary">
              联系我们
            </a>
          </div>
        </div>
      </header>

      {/* Products Section */}
      <section id="products" className="features">
        <div className="section-header">
          <h2 className="section-title">产品服务</h2>
          <p className="section-subtitle">
            为科研与工业提供全方位的物理测量解决方案
          </p>
        </div>

        <div className="products-grid">
          <div className="feature-card">
            <div className="card-badge">旗舰产品</div>
            <h3>PPMS 控制系统</h3>
            <p className="card-desc">
              新一代物性测量软件，适配低温、磁场等复杂实验环境，提供极致的控制精度。
            </p>
            <ul className="card-list">
              <li>多通道同步控制，毫秒级时序</li>
              <li>安全联锁与异常自愈机制</li>
              <li>可视化流程编排引擎</li>
            </ul>
          </div>

          <div className="feature-card">
            <div className="card-badge">数据智能</div>
            <h3>数据分析平台</h3>
            <p className="card-desc">
              实时采集、多维可视化、在线拟合，让海量实验数据的价值即时呈现。
            </p>
            <ul className="card-list">
              <li>热图 / 线图 / 3D 曲面实时渲染</li>
              <li>自动报告生成与批量导出</li>
              <li>可插拔算法组件库</li>
            </ul>
          </div>

          <div className="feature-card">
            <div className="card-badge">高效测试</div>
            <h3>自动化测试</h3>
            <p className="card-desc">
              序列化执行覆盖扫描、循环、条件分支，让重复性实验变得简单高效。
            </p>
            <ul className="card-list">
              <li>拖拽式序列 + 脚本混合编程</li>
              <li>任务队列与优先级调度</li>
              <li>异常回滚与断点续跑</li>
            </ul>
          </div>

          <div className="feature-card">
            <div className="card-badge">云端协同</div>
            <h3>云端管理</h3>
            <p className="card-desc">
              全生命周期数据与配置托管，多端同步，让团队协同无缝衔接。
            </p>
            <ul className="card-list">
              <li>加密存储与分级权限管理</li>
              <li>项目空间与操作审计</li>
              <li>云端备份与版本回溯</li>
            </ul>
          </div>

          <div className="feature-card">
            <div className="card-badge">生态集成</div>
            <h3>多仪器集成</h3>
            <p className="card-desc">
              兼容主流仪器，统一接口协议，快速接入一站式控制中心。
            </p>
            <ul className="card-list">
              <li>官方/社区驱动快速加载</li>
              <li>统一接口减少重复适配</li>
              <li>状态监测与健康度预警</li>
            </ul>
          </div>

          <div className="feature-card">
            <div className="card-badge">专属定制</div>
            <h3>定制化服务</h3>
            <p className="card-desc">
              针对独特实验需求，提供从硬件选型到软件开发的端到端方案。
            </p>
            <ul className="card-list">
              <li>专属顾问与交付经理</li>
              <li>现场部署与专业培训</li>
              <li>长期运维与升级支持</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="tech-stack">
        <div className="section-header">
          <h2 className="section-title">解决方案</h2>
          <p className="section-subtitle">深耕行业应用，赋能科研创新</p>
        </div>

        <div className="tech-grid">
          <div className="tech-item">
            <h4>高校科研</h4>
            <p>覆盖低温、磁场、输运等多物理量测量，助力高水平论文产出。</p>
            <div className="pill-row">
              <span className="pill">流程模板</span>
              <span className="pill">数据留痕</span>
              <span className="pill">权限管理</span>
            </div>
          </div>
          <div className="tech-item">
            <h4>工业应用</h4>
            <p>半导体、新能源材料的量化测试与产线质控，助力产品快速迭代。</p>
            <div className="pill-row">
              <span className="pill">SPC/QC</span>
              <span className="pill">批量报告</span>
              <span className="pill">设备联动</span>
            </div>
          </div>
          <div className="tech-item">
            <h4>科研院所</h4>
            <p>满足前沿研究的高分辨率与高稳定性测量需求，保障实验可重复。</p>
            <div className="pill-row">
              <span className="pill">纳伏级噪声</span>
              <span className="pill">漂移补偿</span>
              <span className="pill">异常自检</span>
            </div>
          </div>
          <div className="tech-item">
            <h4>材料研发</h4>
            <p>从制样到测量的全链路数据闭环，加速新材料筛选与验证。</p>
            <div className="pill-row">
              <span className="pill">参数扫描</span>
              <span className="pill">模型拟合</span>
              <span className="pill">数据版本</span>
            </div>
          </div>
          <div className="tech-item">
            <h4>能源领域</h4>
            <p>电池、超导等能源材料的性能测试与寿命评估，支持定制工况。</p>
            <div className="pill-row">
              <span className="pill">循环老化</span>
              <span className="pill">温控联动</span>
              <span className="pill">云端对比</span>
            </div>
          </div>
          <div className="tech-item">
            <h4>量子科技</h4>
            <p>为量子材料与器件提供低温、强磁、高稳定的测量支持。</p>
            <div className="pill-row">
              <span className="pill">超低噪声</span>
              <span className="pill">时序同步</span>
              <span className="pill">脚本化</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="about-section">
        <div className="section-header">
          <h2 className="section-title">关于开特云科技</h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>引领测量技术未来</h3>
            <p>
              开特云科技成立于2024年，是一家专注于物理测量系统软件研发的高科技企业。
              我们秉承“专业、创新、开放”的理念，汇聚了来自物理学、计算机科学、电子工程等领域的顶尖人才，
              致力于为全球科研机构和工业用户提供世界一流的测量控制解决方案。
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
        <div className="section-header">
          <h2 className="section-title">联系我们</h2>
          <p className="section-subtitle">期待与您携手，共创科研创新未来</p>
        </div>

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
        <button
          onClick={() => navigate('/download')}
          className="btn-primary"
          type="button"
        >
          立即咨询 / 下载试用
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
            <a href="https://github.com/ShaJiuquan/ppms_newVersion_1.0">
              开源项目
            </a>
            <a href="https://github.com/ShaJiuquan/ppms_newVersion_1.0/issues">
              问题反馈
            </a>
            <a href="/download">软件下载</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024-2025 开特云科技有限公司 版权所有</p>
          <p>专业 · 创新 · 开放 | 引领物理测量系统新时代</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
