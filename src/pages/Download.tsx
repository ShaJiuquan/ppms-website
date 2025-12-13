import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Download.css';

interface Asset {
  name: string;
  browser_download_url: string;
  size: number;
}

interface Release {
  tag_name: string;
  body: string;
  assets: Asset[];
}

interface DownloadLinks {
  mac?: Asset;
  windows?: Asset;
  linux?: Asset;
}

function Download() {
  const navigate = useNavigate();
  const [latestRelease, setLatestRelease] = useState<Release | null>(null);

  useEffect(() => {
    // 获取最新 Release
    fetch(
      'https://api.github.com/repos/ShaJiuquan/ppms_newVersion_1.0/releases/latest',
    )
      .then((res) => res.json())
      .then((data: Release) => setLatestRelease(data))
      .catch((err) => console.error('获取 Release 失败:', err));
  }, []);

  const getDownloadLinks = (): DownloadLinks => {
    if (!latestRelease || !latestRelease.assets) return {};

    return {
      mac: latestRelease.assets.find((a) => a.name.includes('.dmg')),
      windows: latestRelease.assets.find((a) => a.name.includes('.exe')),
      linux: latestRelease.assets.find((a) => a.name.includes('.AppImage')),
    };
  };

  const downloads = getDownloadLinks();

  return (
    <div className="download-page">
      <nav className="nav">
        <div className="logo" onClick={() => navigate('/')}>
          PPMS
        </div>
        <div className="nav-links">
          <button type="button" onClick={() => navigate('/')} className="btn-secondary">
            返回首页
          </button>
        </div>
      </nav>

      <div className="download-container">
        <h1>下载 PPMS</h1>
        <p className="download-subtitle">
          选择适合您操作系统的版本
          {latestRelease && <span> · 最新版本: {latestRelease.tag_name}</span>}
        </p>

        <div className="download-grid">
          {/* macOS */}
          <div className="download-card">
            <div className="os-icon">🍎</div>
            <h2>macOS</h2>
            <p>支持 Intel 和 Apple Silicon</p>
            {downloads.mac ? (
              <a
                href={downloads.mac.browser_download_url}
                className="btn-download"
                download
              >
                下载 DMG
                <span className="file-size">
                  {(downloads.mac.size / 1024 / 1024).toFixed(1)} MB
                </span>
              </a>
            ) : (
              <button type="button" className="btn-download" disabled>
                暂无版本
              </button>
            )}
            <div className="install-note">
              安装说明：下载后双击 DMG 文件，将应用拖入 Applications 文件夹
            </div>
          </div>

          {/* Windows */}
          <div className="download-card">
            <div className="os-icon">🪟</div>
            <h2>Windows</h2>
            <p>Windows 10/11</p>
            {downloads.windows ? (
              <a
                href={downloads.windows.browser_download_url}
                className="btn-download"
                download
              >
                下载 EXE
                <span className="file-size">
                  {(downloads.windows.size / 1024 / 1024).toFixed(1)} MB
                </span>
              </a>
            ) : (
              <button type="button" className="btn-download" disabled>
                暂无版本
              </button>
            )}
            <div className="install-note">
              安装说明：下载后双击 EXE 文件，按照安装向导完成安装
            </div>
          </div>

          {/* Linux */}
          <div className="download-card">
            <div className="os-icon">🐧</div>
            <h2>Linux</h2>
            <p>AppImage 格式</p>
            {downloads.linux ? (
              <a
                href={downloads.linux.browser_download_url}
                className="btn-download"
                download
              >
                下载 AppImage
                <span className="file-size">
                  {(downloads.linux.size / 1024 / 1024).toFixed(1)} MB
                </span>
              </a>
            ) : (
              <button type="button" className="btn-download" disabled>
                暂无版本
              </button>
            )}
            <div className="install-note">
              安装说明：下载后执行 chmod +x *.AppImage 赋予执行权限
            </div>
          </div>
        </div>

        {/* 系统要求 */}
        <div className="requirements">
          <h3>系统要求</h3>
          <div className="requirements-grid">
            <div>
              <h4>macOS</h4>
              <ul>
                <li>macOS 10.13 或更高版本</li>
                <li>4 GB RAM</li>
                <li>500 MB 可用空间</li>
              </ul>
            </div>
            <div>
              <h4>Windows</h4>
              <ul>
                <li>Windows 10/11</li>
                <li>4 GB RAM</li>
                <li>500 MB 可用空间</li>
              </ul>
            </div>
            <div>
              <h4>Linux</h4>
              <ul>
                <li>Ubuntu 18.04+ 或其他发行版</li>
                <li>4 GB RAM</li>
                <li>500 MB 可用空间</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Release Notes */}
        {latestRelease && latestRelease.body && (
          <div className="release-notes">
            <h3>更新日志</h3>
            <div className="release-body">{latestRelease.body}</div>
          </div>
        )}

        {/* GitHub Link */}
        <div className="github-link">
          <p>
            查看所有版本或从源码构建？
            <a href="https://github.com/ShaJiuquan/ppms_newVersion_1.0/releases">
              访问 GitHub Releases
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Download;
