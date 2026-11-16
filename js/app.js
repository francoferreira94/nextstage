/* ==========================================================================
   NEXTSTAGE - CONTROLADOR GERAL DO WEBAPP (RBAC, NAVEGAÇÃO, FILTROS E MODAIS)
   ========================================================================== */

const ROLE_CONFIG = {
  'Administrador': {
    allowedPages: ['cadastros.html', 'agenda.html', 'financeiro.html', 'relatorios.html', 'configuracoes.html'],
    userLabel: 'João Luiz (Adminstrador)'
  },
  'Funcionário / Produtor': {
    allowedPages: ['cadastros.html', 'agenda.html', 'financeiro.html', 'relatorios.html', 'configuracoes.html'],
    userLabel: 'Camila Andrade (Funcionária)'
  },
  'Cliente': {
    allowedPages: ['agenda.html'],
    userLabel: 'Mariana Costa (Cliente)'
  },
  'Parceiro / Fornecedor': {
    allowedPages: ['agenda.html', 'cadastros.html'],
    userLabel: 'StageSound Áudio (Parceiro)'
  }
};

function showToast(msg) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3600);
}

function renderSidebar(activePage) {
  const role = getCurrentRole();
  const allowed = ROLE_CONFIG[role]?.allowedPages || [];

  const menuItems = [
    { href: 'cadastros.html', label: 'Cadastros', icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>' },
    { href: 'agenda.html', label: 'Agenda de Eventos', icon: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>' },
    { href: 'financeiro.html', label: 'Financeiro', icon: '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>' },
    { href: 'relatorios.html', label: 'Relatórios', icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>' },
    { href: 'configuracoes.html', label: 'Configurações', icon: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>' }
  ];

  const sidebar = document.getElementById('app-sidebar');
  if (!sidebar) return;

  // Redireciona se o perfil atual não tiver permissão na página
  if (!allowed.includes(activePage)) {
    window.location.href = allowed[0] || 'login.html';
    return;
  }

  sidebar.innerHTML = `
    <div>
      <div class="sidebar-brand">
        <!-- Símbolo Sólido (logoNextstage_solid.svg) para barra lateral recolhida -->
        <svg class="logo-icon-collapsed" viewBox="0 0 41.6 36" xml:space="preserve">
          <path fill="#FFFFFF" d="M28,23c1.3-0.8,2.5-1.6,3.7-2.4c5.6,4.8,9.9,8.4,9.9,8.4S35.5,26.3,28,23z M8,0.5C8,0.5,7.8,0.4,7.8,0.4c0,0-0.1,0-0.1-0.1c0,0,0,0,0,0C6.1-0.7,3.5,1,1.6,3.9c-1.8,2.9-2.2,6.1-0.7,7c0,0,0,0,0.1,0C1,11,1,11,1.1,11c0.1,0.1,0.2,0.1,0.3,0.1c4.3,1.9,12.3,5.5,20.1,8.9c1.4-1.6,2.8-3.2,4.1-4.7C18.8,9.7,11.7,3.7,8,0.5z M40.6,14.8c0,0,0.1-0.1,0.2-0.2c0,0,0.1,0,0.1-0.1c0,0,0,0,0,0c1.2-1,0.5-3.7-1.5-6.1c-2-2.3-4.6-3.4-5.8-2.4c0,0,0,0,0,0c0,0,0,0-0.1,0.1c-0.1,0.1-0.2,0.2-0.2,0.2c-1.8,2.1-4.7,5.4-7.8,9c2.1,1.8,4.2,3.6,6.1,5.2C35.3,18.3,38.5,16.2,40.6,14.8z M28,23c-2.1-0.9-4.3-1.9-6.5-2.9C14.5,28,7.6,36,7.6,36S18.3,29.2,28,23z"/>
        </svg>

        <!-- Logo Horizontal Completo (logoNextstage_horizontal.svg) para barra lateral expandida -->
        <svg class="logo-full-expanded" viewBox="0 0 147.1 36" xml:space="preserve">
          <g>
            <path fill="#FFFFFF" d="M28,23c1.3-0.8,2.5-1.6,3.7-2.4c5.6,4.8,9.9,8.4,9.9,8.4S35.5,26.3,28,23z M8,0.5C8,0.5,7.8,0.4,7.8,0.4c0,0-0.1,0-0.1-0.1c0,0,0,0,0,0C6.1-0.7,3.5,1,1.6,3.9c-1.8,2.9-2.2,6.1-0.7,7c0,0,0,0,0.1,0C1,11,1,11,1.1,11c0.1,0.1,0.2,0.1,0.3,0.1c4.3,1.9,12.3,5.5,20.1,8.9c1.4-1.6,2.8-3.2,4.1-4.7C18.8,9.7,11.7,3.7,8,0.5z M40.6,14.8c0,0,0.1-0.1,0.2-0.2c0,0,0.1,0,0.1-0.1c0,0,0,0,0,0c1.2-1,0.5-3.7-1.5-6.1c-2-2.3-4.6-3.4-5.8-2.4c0,0,0,0,0,0c0,0,0,0-0.1,0.1c-0.1,0.1-0.2,0.2-0.2,0.2c-1.8,2.1-4.7,5.4-7.8,9c2.1,1.8,4.2,3.6,6.1,5.2C35.3,18.3,38.5,16.2,40.6,14.8z M28,23c-2.1-0.9-4.3-1.9-6.5-2.9C14.5,28,7.6,36,7.6,36S18.3,29.2,28,23z"/>
            <g>
              <path fill="#FFFFFF" d="M51.8,22.6V11.5h2.7v0.9c0.8-0.7,1.8-1,3-1c3,0,4.6,1.8,4.6,5.4v5.8h-2.7v-5.1c0-1.3-0.2-2.2-0.5-2.7c-0.3-0.6-1-0.8-1.9-0.8c-0.7,0-1.3,0.2-1.8,0.7c-0.4,0.4-0.7,1.1-0.7,1.9v6.1H51.8z"/>
              <path fill="#FFFFFF" d="M63,17.1c0-1.6,0.6-2.9,1.7-4c1.1-1.1,2.5-1.7,4.1-1.7c1.7,0,3.1,0.6,4.2,1.7c1.1,1.1,1.6,2.5,1.6,4.2c0,0.2,0,0.4,0,0.7h-8.8c0.2,0.7,0.6,1.3,1.2,1.7c0.6,0.4,1.2,0.6,2.1,0.6c0.7,0,1.2-0.1,1.7-0.3c0.5-0.2,0.9-0.6,1.2-1.1l2.3,1.3C73,22,71.3,22.9,69,22.9c-1.7,0-3.2-0.5-4.3-1.6C63.5,20.1,63,18.8,63,17.1z M65.8,15.9h5.9c-0.6-1.3-1.5-1.9-2.9-1.9c-0.6,0-1.2,0.2-1.8,0.5C66.5,14.8,66.1,15.3,65.8,15.9z"/>
              <path fill="#FFFFFF" d="M74,22.6l3.8-5.9l-3.4-5.2h3.3l1.8,2.8l1.8-2.8h3.3l-3.4,5.2l3.8,5.9h-3.3l-2.2-3.5l-2.2,3.5H74z"/>
              <path fill="#FFFFFF" d="M85.1,14v-2.5h1.3V8.6h2.7v2.9h2.5V14h-2.5v4c0,0.8,0.2,1.3,0.5,1.6C90,19.9,90.8,20,92,20l0.2,2.6h-0.6c-1.7,0-3-0.3-3.8-1c-0.9-0.7-1.3-1.9-1.3-3.6v-4H85.1z"/>
              <path fill="#FFFFFF" d="M92.6,19.1h2.9c0,0.5,0.2,0.9,0.6,1.2c0.4,0.3,0.9,0.5,1.6,0.5c0.6,0,1-0.1,1.3-0.3c0.3-0.2,0.5-0.5,0.5-0.8c0-0.2-0.1-0.4-0.2-0.5c-0.1-0.1-0.3-0.2-0.6-0.3c-0.3-0.1-0.5-0.1-0.6-0.2c-0.2,0-0.4,0-0.6-0.1c-0.7-0.1-1-0.2-1-0.2s-0.3-0.1-1-0.3c-0.7-0.2-1.2-0.4-1.5-0.6c-0.3-0.2-0.6-0.5-0.8-1c-0.2-0.4-0.3-0.9-0.3-1.5c0-1.1,0.4-2,1.2-2.6c0.8-0.7,1.9-1,3.4-1c1.4,0,2.5,0.3,3.3,1c0.8,0.7,1.3,1.5,1.4,2.6h-2.8c0-0.3-0.1-0.5-0.2-0.7c-0.1-0.2-0.3-0.4-0.5-0.5c-0.3-0.2-0.7-0.2-1.2-0.2c-0.5,0-0.9,0.1-1.2,0.3c-0.3,0.2-0.4,0.4-0.4,0.7c0,0.1,0,0.2,0,0.3c0,0.1,0.1,0.2,0.1,0.2c0.1,0.1,0.1,0.1,0.2,0.2c0.1,0.1,0.2,0.1,0.3,0.1c0.1,0,0.2,0.1,0.3,0.1c0.1,0,0.2,0.1,0.4,0.1c0.2,0,0.3,0.1,0.4,0.1c0.1,0,0.2,0,0.4,0.1l0.4,0.1c0.6,0.1,1.2,0.2,1.6,0.4c0.4,0.1,0.9,0.3,1.3,0.6c0.4,0.2,0.7,0.6,1,1c0.2,0.4,0.3,0.9,0.3,1.5c0,1.2-0.4,2.1-1.3,2.7c-0.9,0.6-2.1,0.9-3.6,0.9c-1.6,0-2.8-0.3-3.7-1C93.2,21.2,92.7,20.3,92.6,19.1z"/>
              <path fill="#FFFFFF" d="M103,14v-2.5h1.3V8.6h2.7v2.9h2.5V14H107v4c0,0.8,0.2,1.3,0.5,1.6c0.3,0.3,1.1,0.4,2.3,0.4l0.2,2.6h-0.6c-1.7,0-3-0.3-3.8-1c-0.9-0.7-1.3-1.9-1.3-3.6v-4H103z"/>
              <path fill="#FFFFFF" d="M110,17.1c0-1.6,0.6-2.9,1.7-4c1.1-1.1,2.5-1.7,4.1-1.7c1.2,0,2.3,0.3,3.2,1v-0.9h2.7v11.1H119v-0.7c-1,0.6-2,1-3.2,1c-1.6,0-3-0.6-4.1-1.7C110.6,20,110,18.7,110,17.1z M113.6,14.9c-0.6,0.6-1,1.4-1,2.2s0.3,1.6,1,2.2c0.6,0.6,1.4,1,2.3,1c0.9,0,1.6-0.3,2.3-1c0.6-0.6,1-1.4,1-2.2s-0.3-1.6-1-2.2c-0.6-0.6-1.4-1-2.3-1C115,13.9,114.2,14.3,113.6,14.9z"/>
              <path fill="#FFFFFF" d="M122.7,17.1c0-1.6,0.6-2.9,1.7-4c1.1-1.1,2.5-1.7,4.1-1.7c1.2,0,2.3,0.3,3.2,1v-0.9h2.7v9.7c0,1.7-0.5,3-1.5,3.9c-1,0.9-2.5,1.4-4.4,1.4c-1.7,0-3.3-0.4-4.6-1.1l1-2.3c1.3,0.6,2.5,0.9,3.7,0.9c0.8,0,1.6-0.2,2.2-0.7c0.7-0.4,1-1,1-1.7c-0.9,0.8-2,1.1-3.2,1.1c-1.6,0-3-0.5-4.1-1.6C123.3,20.1,122.7,18.7,122.7,17.1z M126.3,14.9c-0.6,0.6-1,1.4-1,2.2c0,0.9,0.3,1.6,1,2.2c0.6,0.6,1.4,1,2.3,1c0.9,0,1.6-0.3,2.3-1c0.6-0.6,1-1.4,1-2.2c0-0.9-0.3-1.6-1-2.2c-0.6-0.6-1.4-1-2.3-1C127.7,13.9,126.9,14.3,126.3,14.9z"/>
              <path fill="#FFFFFF" d="M135.5,17.1c0-1.6,0.6-2.9,1.7-4c1.1-1.1,2.5-1.7,4.1-1.7c1.7,0,3.1,0.6,4.2,1.7c1.1,1.1,1.6,2.5,1.6,4.2c0,0.2,0,0.4,0,0.7h-8.8c0.2,0.7,0.6,1.3,1.2,1.7s1.2,0.6,2.1,0.6c0.7,0,1.2-0.1,1.7-0.3c0.5-0.2,0.9-0.6,1.2-1.1l2.3,1.3c-1.2,1.8-2.9,2.7-5.2,2.7c-1.7,0-3.2-0.5-4.3-1.6C136,20.1,135.5,18.8,135.5,17.1z M138.3,15.9h5.9c-0.6-1.3-1.5-1.9-2.9-1.9c-0.6,0-1.2,0.2-1.8,0.5C139,14.8,138.6,15.3,138.3,15.9z"/>
            </g>
          </g>
        </svg>
      </div>
      <nav class="sidebar-nav">
        ${menuItems.map(item => `
          <a href="${item.href}" class="nav-item ${item.href === activePage ? 'active' : ''} ${!allowed.includes(item.href) ? 'hidden-by-role' : ''}" title="${item.label}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${item.icon}</svg>
            <span>${item.label}</span>
          </a>
        `).join('')}
      </nav>
    </div>
    <div class="sidebar-footer">
      <a href="index.html" class="nav-item" title="Site Institucional">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
        <span>Site Institucional</span>
      </a>
      <a href="login.html" class="nav-item" title="Sair (RF048)" onclick="showToast('Logoff efetuado com segurança.')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
        <span>Sair (Logoff)</span>
      </a>
    </div>
  `;
}

function initTopbarRoleSwitcher(pageTitle, activePage) {
  const topbar = document.getElementById('app-topbar');
  if (!topbar) return;
  const currentRole = getCurrentRole();
  const userInfo = ROLE_CONFIG[currentRole] || { userLabel: 'Usuário (Visitante)' };

  topbar.innerHTML = `
    <div class="topbar-title-group">
      <h1 style="font-size: 1.2rem;">${pageTitle}</h1>
    </div>
    <div class="topbar-right-group">
      <span style="font-size: 0.85rem; color: #556268; font-family: var(--font-body); text-align: right;">
        Bem-vindo(a),<br><strong style="color: var(--color-dark-slate);">${userInfo.userLabel}</strong>
      </span>
      <button class="notification-btn" title="Notificações" onclick="showToast('Nenhuma notificação nova no momento.')">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
        <span class="notification-badge-dot"></span>
      </button>
    </div>
  `;

  renderSidebar(activePage);
}

// Navegação interna por abas dentro de cada módulo
function initModuleTabs() {
  const tabs = document.querySelectorAll('.module-tab');
  const panels = document.querySelectorAll('.tab-panel');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const target = document.getElementById(tab.dataset.target);
      if (target) target.classList.add('active');
    });
  });
}

function openModal(id) {
  document.getElementById(id)?.classList.add('open');
}

function closeModal(id) {
  document.getElementById(id)?.classList.remove('open');
}

function formatBRL(val) {
  return Number(val || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}