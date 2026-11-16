/* ==========================================================================
   NEXTSTAGE - DADOS INICIAIS & CONTROLE DE PERFIS DE ACESSO (RF001 - RF059)
   ========================================================================== */

const NextstageDB = {
  // Perfis de Acesso (RF001, RF051)
  perfis: [
    {
      codigo: 'PRF-01',
      descricao: 'Administrador',
      permissoes: ['cadastros', 'agenda', 'financeiro', 'relatorios', 'configuracoes', 'editar_financeiro', 'auditoria', 'personalizar_marca'],
      módulos: ['cadastros.html', 'agenda.html', 'financeiro.html', 'relatorios.html', 'configuracoes.html']
    },
    {
      codigo: 'PRF-02',
      descricao: 'Funcionário',
      permissoes: ['cadastros', 'agenda', 'financeiro', 'relatorios', 'config_backup'],
      módulos: ['cadastros.html', 'agenda.html', 'financeiro.html', 'relatorios.html', 'configuracoes.html']
    },
    {
      codigo: 'PRF-03',
      descricao: 'Cliente',
      permissoes: ['solicitar_orcamento', 'aprovar_orcamento', 'agenda_cliente'],
      módulos: ['agenda.html']
    },
    {
      codigo: 'PRF-04',
      descricao: 'Parceiro',
      permissoes: ['agenda_parceiro', 'disponibilidade'],
      módulos: ['agenda.html', 'cadastros.html']
    }
  ],

  // Usuários (RF002, RF016-RF021)
  usuarios: [
    { codigo: 'USR-001', login: 'joao.luiz', nome: 'João Luiz (Sócio Fundador)', perfil: 'Administrador', vinculo: 'FUNC-001 (Funcionário)', status: 'Ativo' },
    { codigo: 'USR-002', login: 'camila.prod', nome: 'Camila Andrade', perfil: 'Funcionário', vinculo: 'FUNC-003 (Funcionário)', status: 'Ativo' },
    { codigo: 'USR-003', login: 'mariana.cli', nome: 'Mariana Costa', perfil: 'Cliente', vinculo: 'CLI-001 (Cliente)', status: 'Ativo' },
    { codigo: 'USR-004', login: 'somluz.parceiro', nome: 'StageSound Áudio & Luz', perfil: 'Parceiro / Fornecedor', vinculo: 'PREST-001 (Prestador)', status: 'Ativo' }
  ],

  // Cadastros Gerais (RF003 - RF013)
  cadastros: [
    { codigo: 'FUNC-001', categoria: 'Funcionário', doc: '123.456.789-00', rgIe: '9.876.543-1', nome: 'João Luiz', email: 'joao@nextstage.com.br', telefones: '(41) 9 9999-9999 / (41) 3333-1001', endereco: 'Av. Batel, 1550 - Curitiba/PR', extra: 'Diretor Executivo' },
	{ codigo: 'FUNC-002', categoria: 'Funcionário', doc: '123.456.789-00', rgIe: '9.876.543-1', nome: 'Maria', email: 'maria@nextstage.com.br', telefones: '(41) 9 9999-9999 / (41) 3333-1001', endereco: 'Av. Batel, 1550 - Curitiba/PR', extra: 'Diretora Executivo' },
    { codigo: 'FUNC-003', categoria: 'Funcionário', doc: '234.567.890-11', rgIe: '8.765.432-2', nome: 'Camila Andrade', email: 'camila@nextstage.com.br', telefones: '(41) 9 9888-7766', endereco: 'Rua XV de Novembro, 800 - Curitiba/PR', extra: 'Produtora Sênior' },
    { codigo: 'CLI-001', categoria: 'Cliente', doc: '345.678.901-22', rgIe: '7.654.321-3', nome: 'Mariana Costa', email: 'mariana.costa@email.com', telefones: '(41) 9 9777-1122', endereco: 'Rua Padre Anchieta, 2100 - Curitiba/PR', extra: 'Casamento / Social' },
    { codigo: 'CLI-002', categoria: 'Cliente', doc: '12.345.678/0001-90', rgIe: '901.23456-78', nome: 'TechSul Inovação S.A.', email: 'eventos@techsul.com.br', telefones: '(41) 3022-4400 / (41) 9 9111-2233', endereco: 'Av. Cândido de Abreu, 500 - Curitiba/PR', extra: 'Corporativo' },
    { codigo: 'PREST-001', categoria: 'Prestador de Serviço', doc: '23.456.789/0001-10', rgIe: '902.34567-89', nome: 'StageSound Áudio & Iluminação', email: 'contato@stagesound.com.br', telefones: '(41) 3344-5566 / (41) 9 9654-3210', endereco: 'Rua Marechal Floriano, 1200 - Curitiba/PR', extra: 'Atuação: Sonorização e Iluminação Cênica' },
    { codigo: 'PREST-002', categoria: 'Prestador de Serviço', doc: '34.567.890/0001-20', rgIe: '903.45678-90', nome: 'Atelier Botânica & Cenografia', email: 'projetos@atelierbotanica.com.br', telefones: '(41) 9 9555-8899', endereco: 'Alameda Cabral, 420 - Curitiba/PR', extra: 'Atuação: Decoração e Paisagismo' },
    { codigo: 'FORN-001', categoria: 'Fornecedor', doc: '45.678.901/0001-30', rgIe: '904.56789-01', nome: 'Crystal Eventos Locação Ltda', email: 'comercial@crystaleventos.com.br', telefones: '(41) 3222-9900', endereco: 'Fat.: Av. das Torres, 3000 | Ret.: Galpão B - São José dos Pinhais/PR', extra: 'Mobiliário e Louças' },
    { codigo: 'LOC-001', categoria: 'Local de Realização', doc: '56.789.012/0001-40', rgIe: 'Isento', nome: 'Espaço Villa Batel', email: 'reservas@villabatel.com.br', telefones: '(41) 3015-8000', endereco: 'Rua Bispo Dom José, 2400 - Curitiba/PR', extra: 'Suporta: Casamento, Corporativo, Formatura | Cozinha Própria: Sim | Áudio: Sim' },
    { codigo: 'LOC-002', categoria: 'Local de Realização', doc: '67.890.123/0001-50', rgIe: 'Isento', nome: 'Centro de Convenções ExpoNext', email: 'agenda@exponext.com.br', telefones: '(41) 3099-7000', endereco: 'Rod. BR-277, Km 12 - Curitiba/PR', extra: 'Suporta: Congressos, Feiras, Shows | Cozinha Própria: Não | Áudio: Sim' },
    { codigo: 'SERV-001', categoria: 'Serviço', doc: '-', rgIe: '-', nome: 'Sonorização Line Array + Mesa Digital', email: '-', telefones: '-', endereco: 'Unidade: Diária', extra: 'Tipo: Áudio | Custo: R$ 2.800,00 | Margem: 35% | Venda: R$ 3.780,00 | Lucro: R$ 980,00' },
    { codigo: 'MAT-001', categoria: 'Material', doc: '-', rgIe: '-', nome: 'Cadeira Tiffany Cristal (Lote 100 un.)', email: '-', telefones: '-', endereco: 'Unidade: Lote | Prazo Disp.: 48h', extra: 'Custo: R$ 1.200,00 | Margem: 40% | Venda: R$ 1.680,00 | Lucro: R$ 480,00' },
    { codigo: 'CARD-001', categoria: 'Cardápio', doc: '-', rgIe: '-', nome: 'Menu Contemporâneo Gala', email: '-', telefones: '-', endereco: 'Etapa: Jantar Empratado', extra: 'Opções: Risoto de Funghi, Filé ao Poivre, Salmão Grelhado | Valor/Convidado: R$ 185,00' },
    { codigo: 'TPEV-001', categoria: 'Tipo de Evento', doc: '-', rgIe: '-', nome: 'Congresso & Convenção Corporativa', email: '-', telefones: '-', endereco: '-', extra: 'Obs.: Requer credenciamento, palco principal e coffee break' },
    { codigo: 'TPSV-001', categoria: 'Tipo de Serviço', doc: '-', rgIe: '-', nome: 'Produção Audiovisual & Transmissão', email: '-', telefones: '-', endereco: '-', extra: 'Obs.: Inclui técnico operador durante todo o evento' }
  ],

  // Disponibilidades & Vinculações (RF014, RF015, RF022-RF024)
  disponibilidades: [
    { tipo: 'Prestador', codigo: 'PREST-001', nome: 'StageSound Áudio & Iluminação', datas: '2026-11-20, 2026-11-21, 2026-11-28, 2026-12-05' },
    { tipo: 'Prestador', codigo: 'PREST-002', nome: 'Atelier Botânica & Cenografia', datas: '2026-11-18, 2026-11-21, 2026-12-12' },
    { tipo: 'Local', codigo: 'LOC-001', nome: 'Espaço Villa Batel', datas: '2026-11-21, 2026-11-28, 2026-12-05, 2026-12-19' },
    { tipo: 'Local', codigo: 'LOC-002', nome: 'Centro de Convenções ExpoNext', datas: '2026-11-19, 2026-11-25, 2026-12-10' }
  ],

  vinculacoes: [
    { tipo: 'Serviço x Prestador', origem: 'SERV-001 (Sonorização Line Array)', destino: 'PREST-001 (StageSound)', custo: 'R$ 2.800,00', dataRef: '15/10/2026' },
    { tipo: 'Material x Fornecedor', origem: 'MAT-001 (Cadeira Tiffany Cristal)', destino: 'FORN-001 (Crystal Eventos)', custo: 'R$ 1.200,00', dataRef: '02/11/2026' },
    { tipo: 'Cardápio x Local', origem: 'CARD-001 (Menu Contemporâneo Gala)', destino: 'LOC-001 (Espaço Villa Batel)', custo: 'R$ 185,00/conv.', dataRef: 'Homologado' }
  ],

  // Eventos & Orçamentos (RF028 - RF039)
  eventos: [
    {
      codigo: 'EVT-2026-01',
      nome: 'Summit TechSul 2026',
      cliente: 'TechSul Inovação S.A.',
      tipo: 'Corporativo',
      data: '2026-11-19',
      local: 'Centro de Convenções ExpoNext',
      convidados: 350,
      valorTotal: 84500.00,
      status: 'Aprovado',
      parceiros: ['StageSound Áudio & Iluminação', 'Crystal Eventos Locação Ltda'],
      etapas: {
        dados: 'Summit Anual de Tecnologia - 350 participantes',
        local: 'Centro de Convenções ExpoNext',
        decoracao: 'Cenografia Minimalista Corporativa',
        comida: 'Coffee Break + Coquetel Executivo',
        bebida: 'Pacote Open Bar Não Alcoólico + Espumante Brinde',
        fotoVideo: 'Cobertura 4K + Streaming ao Vivo',
        audio: 'Line Array + 4 Microfones Sem Fio',
        grafica: 'Crachás, Totens e Backdrop Palco'
      }
    },
    {
      codigo: 'EVT-2026-02',
      nome: 'Casamento Mariana & Rafael',
      cliente: 'Mariana Costa',
      tipo: 'Casamento',
      data: '2026-11-28',
      local: 'Espaço Villa Batel',
      convidados: 180,
      valorTotal: 62400.00,
      status: 'Aguardando Aprovação',
      parceiros: ['Atelier Botânica & Cenografia', 'StageSound Áudio & Iluminação'],
      etapas: {
        dados: 'Cerimônia e Recepção Noturna - 180 convidados',
        local: 'Espaço Villa Batel',
        decoracao: 'Arranjos Aéreos Brancos e Folhagens Nobres',
        comida: 'Menu Contemporâneo Gala (R$ 185/conv.)',
        bebida: 'Carta de Drinks Autorais + Vinho Tinto/Espumante',
        fotoVideo: 'Ensaio + Filme Cinematográfico + Drone',
        audio: 'Sonorização Cerimônia + Pista de Dança',
        grafica: 'Menu de Mesa, Lágrimas de Alegria e Convites'
      }
    },
    {
      codigo: 'EVT-2026-03',
      nome: 'Gala Beneficente Instituto Horizonte',
      cliente: 'Instituto Horizonte',
      tipo: 'Social / Gala',
      data: '2026-10-24',
      local: 'Espaço Villa Batel',
      convidados: 220,
      valorTotal: 71000.00,
      status: 'Realizado',
      parceiros: ['StageSound Áudio & Iluminação', 'Atelier Botânica & Cenografia', 'Crystal Eventos Locação Ltda'],
      etapas: {
        dados: 'Jantar Anual de Arrecadação - 220 convidados',
        local: 'Espaço Villa Batel',
        decoracao: 'Iluminação Cênica Azul Celeste & Arranjos Baixos',
        comida: 'Jantar Completo 3 Tempos',
        bebida: 'Serviço Completo de Bebidas',
        fotoVideo: 'Cobertura Fotográfica Imprensa',
        audio: 'Sonorização Ambiente e Leilão',
        grafica: 'Catálogo do Leilão e Placas de Mesa'
      }
    }
  ],

  // Categorias Financeiras (RF040)
  categoriasFinanceiras: [
    { codigo: 'CAT-01', descricao: 'Receitas de Eventos', pai: 'Raiz', cor: '#2E7D5B' },
    { codigo: 'CAT-01.1', descricao: 'Sinal / Entrada de Contrato', pai: 'Receitas de Eventos', cor: '#587584' },
    { codigo: 'CAT-02', descricao: 'Custos Operacionais', pai: 'Raiz', cor: '#B83A3A' },
    { codigo: 'CAT-02.1', descricao: 'Cachê Prestadores de Serviço', pai: 'Custos Operacionais', cor: '#B87D24' },
    { codigo: 'CAT-02.2', descricao: 'Locação de Espaço e Materiais', pai: 'Custos Operacionais', cor: '#313131' }
  ],

  // Lançamentos Financeiros (RF041 - RF044)
  financeiro: [
    { id: 'FIN-101', data: '2026-11-05', descricao: 'Entrada 50% - Summit TechSul 2026', evento: 'Summit TechSul 2026', categoria: 'Sinal / Entrada de Contrato', formaPagamento: 'PIX / Transferência', valorBruto: 42250.00, desconto: 0.00, acrescimo: 0.00, status: 'Pago', tipo: 'Receita', obs: 'Comprovante anexado' },
    { id: 'FIN-102', data: '2026-11-10', descricao: 'Reserva Sonorização Line Array - StageSound', evento: 'Summit TechSul 2026', categoria: 'Cachê Prestadores de Serviço', formaPagamento: 'Boleto Bancário', valorBruto: 5600.00, desconto: 200.00, acrescimo: 0.00, status: 'Pago', tipo: 'Despesa', obs: 'Desconto pontualidade' },
    { id: 'FIN-103', data: '2026-11-14', descricao: 'Sinal 30% - Casamento Mariana & Rafael', evento: 'Casamento Mariana & Rafael', categoria: 'Sinal / Entrada de Contrato', formaPagamento: 'Cartão de Crédito', valorBruto: 18720.00, desconto: 0.00, acrescimo: 350.00, status: 'Pendente', tipo: 'Receita', obs: 'Aguardando assinatura final do orçamento' },
    { id: 'FIN-104', data: '2026-10-26', descricao: 'Quitação Final - Gala Beneficente', evento: 'Gala Beneficente Instituto Horizonte', categoria: 'Receitas de Eventos', formaPagamento: 'Transferência TED', valorBruto: 71000.00, desconto: 0.00, acrescimo: 0.00, status: 'Pago', tipo: 'Receita', obs: 'Evento finalizado (RF038)' },
    { id: 'FIN-105', data: '2026-11-18', descricao: 'Locação Cadeiras e Louças - Crystal Eventos', evento: 'Casamento Mariana & Rafael', categoria: 'Locação de Espaço e Materiais', formaPagamento: 'Boleto Bancário', valorBruto: 4800.00, desconto: 0.00, acrescimo: 0.00, status: 'Agendado', tipo: 'Despesa', obs: 'Entrega 1 dia antes' }
  ],

  // Auditoria de Registros e Processos (RF057, RF058, RNF011, RNF012)
  auditorias: [
    { dataHora: '15/11/2026 14:22', usuario: 'joao.luiz', autorizador: 'joao.luiz', modulo: 'Financeiro', acao: 'Edição de Registro FIN-102 (Desconto R$ 200,00 aplicado)', tipo: 'Edição' },
    { dataHora: '15/11/2026 11:05', usuario: 'camila.prod', autorizador: 'Sistema', modulo: 'Agenda de Eventos', acao: 'Geração de Orçamento EVT-2026-02 enviado ao cliente', tipo: 'Processo' },
    { dataHora: '14/11/2026 18:40', usuario: 'Sistema (RNF005)', autorizador: 'Automático', modulo: 'Configurações', acao: 'Backup diário criptografado concluído com sucesso', tipo: 'Processo' },
    { dataHora: '13/11/2026 09:15', usuario: 'joao.luiz', autorizador: 'joao.luiz', modulo: 'Configurações', acao: 'Atualização de permissões do perfil PRF-02', tipo: 'Edição' }
  ]
};

// Persistência em SessionStorage para navegação fluida entre páginas HTML separadas
function getDB() {
  const saved = sessionStorage.getItem('nextstage_db_v1');
  if (saved) {
    return JSON.parse(saved);
  }
  sessionStorage.setItem('nextstage_db_v1', JSON.stringify(NextstageDB));
  return NextstageDB;
}

function saveDB(db) {
  sessionStorage.setItem('nextstage_db_v1', JSON.stringify(db));
}

function getCurrentRole() {
  return sessionStorage.getItem('nextstage_role') || 'Administrador';
}

function setCurrentRole(role) {
  sessionStorage.setItem('nextstage_role', role);
}
