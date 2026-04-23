export type Locale = 'ru' | 'en' | 'zh';

export const locales: Locale[] = ['ru', 'en', 'zh'];

type NavItem = { href: string; label: string };
type Service = { slug: string; title: string; text: string; bullets: string[] };
type CaseItem = { title: string; result: string; text: string };
type ContactItem = { title: string; text: string };

type Dictionary = {
  metaTitle: string;
  metaDescription: string;
  brandSub: string;
  nav: NavItem[];
  heroEyebrow: string;
  heroTitle: string;
  heroLead: string;
  ctaPrimary: string;
  ctaSecondary: string;
  statsTitle: string;
  statsLead: string;
  stats: { label: string; value: string; text: string }[];
  servicesTitle: string;
  servicesLead: string;
  services: Service[];
  featuresTitle: string;
  featuresLead: string;
  features: { title: string; text: string }[];
  casesTitle: string;
  casesLead: string;
  cases: CaseItem[];
  ctaBandTitle: string;
  ctaBandText: string;
  industriesTitle: string;
  industries: string[];
  contactsTitle: string;
  contactsLead: string;
  contacts: ContactItem[];
  footerText: string;
  breadcrumbs: { home: string; services: string; cases: string; contacts: string };
  pageIntroLabel: string;
  pages: Record<string, { title: string; lead: string; bodyTitle: string; body: string[]; bullets: string[] }>;
};

export const dictionaries: Record<Locale, Dictionary> = {
  ru: {
    metaTitle: 'Metalw — технологическая оснастка и инженерные решения',
    metaDescription: 'Премиальный сайт промышленной компании: зажимная оснастка, стапели, модернизация, агрегатные станки.',
    brandSub: 'Industrial engineering systems',
    nav: [
      { href: '/ru', label: 'Главная' },
      { href: '/ru/services/tooling', label: 'Оснастка' },
      { href: '/ru/services/modernization', label: 'Модернизация' },
      { href: '/ru/cases', label: 'Кейсы' },
      { href: '/ru/contacts', label: 'Контакты' }
    ],
    heroEyebrow: 'Tech-industrial engineering',
    heroTitle: 'Технологическая оснастка и нестандартное оборудование для промышленных предприятий России',
    heroLead: 'Проектируем и реализуем инженерные решения, которые ускоряют производство: гидравлическая и механическая зажимная оснастка, стапели, кондукторы, модернизация участков и специальные станки.',
    ctaPrimary: 'Получить расчёт проекта',
    ctaSecondary: 'Отправить чертёж / ТЗ',
    statsTitle: 'Решения, рассчитанные на производственный результат',
    statsLead: 'Мы упаковали сайт как инженерный бренд для крупных предприятий: строгий стиль, конкретика, сильные направления и понятная проектная логика.',
    stats: [
      { label: 'Проекты', value: 'Сложные B2B', text: 'Под нестандартные производственные задачи.' },
      { label: 'Подход', value: 'Полный цикл', text: 'От технической задачи до внедрения решения.' },
      { label: 'Фокус', value: 'Крупные предприятия', text: 'Работаем на языке инженеров и производственников.' },
      { label: 'Результат', value: 'Точность и скорость', text: 'Снижение цикла, повторяемость, управляемость.' }
    ],
    servicesTitle: 'Ключевые направления',
    servicesLead: 'Структура сайта выстроена так, чтобы сразу показать компетенцию в дорогих и сложных промышленных проектах.',
    services: [
      {
        slug: 'tooling',
        title: 'Станочная зажимная оснастка',
        text: 'Гидравлические и механические системы фиксации деталей для токарных, фрезерных и специальных операций.',
        bullets: ['Гидравлические прижимы', 'Механические зажимные узлы', 'Оснастка под конкретную деталь']
      },
      {
        slug: 'jigs-fixtures',
        title: 'Стапели и кондукторы',
        text: 'Решения для сборки, сварки, контроля геометрии и стабильной повторяемости результата.',
        bullets: ['Сварочные кондукторы', 'Сборочные стапели', 'Контроль позиционирования']
      },
      {
        slug: 'modernization',
        title: 'Модернизация производства',
        text: 'Устраняем узкие места на участке и увеличиваем производительность без полной замены оборудования.',
        bullets: ['Повышение выпуска', 'Сокращение простоев', 'Интеграция в действующий процесс']
      },
      {
        slug: 'aggregate-machines',
        title: 'Агрегатные станки',
        text: 'Специализированные станочные решения для серийных операций, высокой точности и устойчивого цикла.',
        bullets: ['Спецстанки', 'Серийные операции', 'Повторяемый результат']
      }
    ],
    featuresTitle: 'Почему такой сайт работает',
    featuresLead: 'На промышленном рынке клиент покупает не красивую картинку, а чувство компетенции, масштаба и контроля.',
    features: [
      { title: 'Статусный визуал', text: 'Тёмная премиальная подача, похожая на современный industrial-tech бренд.' },
      { title: 'Понятная структура', text: 'Разделы под реальные направления: оснастка, модернизация, спецстанки, кейсы.' },
      { title: 'Готовность к развитию', text: 'Проект уже заложен под три языка, SEO и масштабирование разделов.' }
    ],
    casesTitle: 'Кейсы и ожидаемые результаты',
    casesLead: 'Ниже — примеры подачи кейсов. Дальше можно подставить ваши реальные проекты, цифры и отрасли.',
    cases: [
      { title: 'Механообработка', result: 'Снижение времени фиксации детали', text: 'Разработка зажимной оснастки для стабильной обработки и сокращения времени переналадки.' },
      { title: 'Сварочный участок', result: 'Рост повторяемости и снижение брака', text: 'Стапель и кондуктор под геометрию изделия с учётом реального производственного цикла.' },
      { title: 'Серийное производство', result: 'Стабильная операция на выделенном узле', text: 'Агрегатное решение под типовую операцию с упором на производительность участка.' }
    ],
    ctaBandTitle: 'Есть задача, которую не решает стандартное оборудование?',
    ctaBandText: 'Сайт уже готов как основа под сильный промышленный бренд. Можно сразу наполнять реальными кейсами, фото, документами и запускать.',
    industriesTitle: 'Отрасли',
    industries: ['Машиностроение', 'Металлообработка', 'Автокомпоненты', 'Приборостроение', 'Тяжёлая промышленность', 'Серийные производства'],
    contactsTitle: 'Контакты и начало проекта',
    contactsLead: 'Контактный раздел сделан как B2B-точка входа: быстро получить ТКП, отправить ТЗ или обсудить сложную производственную задачу.',
    contacts: [
      { title: 'Коммерческий запрос', text: 'sales@metalw.ru\nТехнико-коммерческие предложения и расчёт проектов.' },
      { title: 'Инженерный запрос', text: 'engineering@metalw.ru\nОбсуждение чертежей, ТЗ и технических ограничений.' },
      { title: 'Телефон', text: '+7 (900) 000-00-00\nРабота с предприятиями по всей России.' },
      { title: 'Форма заявки', text: 'На боевом сайте сюда подключается CRM-форма или отправка на email.' }
    ],
    footerText: 'Metalw — industrial engineering website concept on Next.js.',
    breadcrumbs: { home: 'Главная', services: 'Направления', cases: 'Кейсы', contacts: 'Контакты' },
    pageIntroLabel: 'Направление',
    pages: {
      tooling: {
        title: 'Станочная зажимная оснастка',
        lead: 'Гидравлические и механические системы фиксации деталей для точной, быстрой и повторяемой обработки.',
        bodyTitle: 'Что показывает эта страница',
        body: [
          'Раздел построен под ключевой продуктовый запрос крупных производств: нужна оснастка, которая сокращает цикл, обеспечивает стабильную геометрию и интегрируется в действующий техпроцесс.',
          'В боевой версии сюда можно добавить фото узлов, типовые решения, перечень материалов, отраслевые примеры и отдельные блоки под гидравлику, механику и нестандартные зажимы.'
        ],
        bullets: ['Гидравлические системы фиксации', 'Механические зажимные механизмы', 'Решения под конкретную деталь и операцию', 'Интеграция в существующие станки']
      },
      'jigs-fixtures': {
        title: 'Стапели и кондукторы',
        lead: 'Сборочные и сварочные решения, рассчитанные на повторяемость, геометрию и удобство серийной работы.',
        bodyTitle: 'Что показывает эта страница',
        body: [
          'Раздел демонстрирует компетенцию в оснастке для сборки и сварки, где особенно важны позиционирование, скорость установки и повторяемый результат.',
          'Здесь можно разместить отраслевые кейсы, примеры конструкций, типовые схемы базирования и блок о снижении брака на участке.'
        ],
        bullets: ['Сварочные кондукторы', 'Сборочные стапели', 'Контроль геометрии и базирования', 'Серийная повторяемость']
      },
      modernization: {
        title: 'Модернизация производства',
        lead: 'Инженерная доработка участков и оборудования для роста выпуска, сокращения простоев и устранения узких мест.',
        bodyTitle: 'Что показывает эта страница',
        body: [
          'Это продающий раздел для предприятий, которые не хотят менять весь парк оборудования, но готовы инвестировать в точечный рост эффективности.',
          'В боевом сайте здесь уместны карты до/после, фотографии узлов, экономический эффект и блок о поэтапной реализации без остановки производства.'
        ],
        bullets: ['Повышение производительности', 'Доработка существующих узлов', 'Снижение ручного труда', 'Устранение узких мест']
      },
      'aggregate-machines': {
        title: 'Агрегатные станки',
        lead: 'Специальные станочные решения для повторяемых операций, стабильного цикла и серийной эффективности.',
        bodyTitle: 'Что показывает эта страница',
        body: [
          'Раздел под дорогие комплексные проекты: специальные станки и агрегатные решения под конкретную операцию или узел.',
          'Сюда хорошо ложатся технические возможности, варианты компоновки, отраслевые примеры и блок по проектной реализации.'
        ],
        bullets: ['Спецстанки под операцию', 'Серийная производительность', 'Проектирование под цикл предприятия', 'Комплексная реализация']
      }
    }
  },
  en: {
    metaTitle: 'Metalw — industrial tooling and engineering systems',
    metaDescription: 'Premium industrial website for clamping fixtures, jigs, modernization and special-purpose machines.',
    brandSub: 'Industrial engineering systems',
    nav: [
      { href: '/en', label: 'Home' },
      { href: '/en/services/tooling', label: 'Tooling' },
      { href: '/en/services/modernization', label: 'Modernization' },
      { href: '/en/cases', label: 'Cases' },
      { href: '/en/contacts', label: 'Contacts' }
    ],
    heroEyebrow: 'Tech-industrial engineering',
    heroTitle: 'Industrial tooling and special-purpose equipment for large manufacturing companies',
    heroLead: 'We design and deliver engineering systems that improve production performance: hydraulic and mechanical clamping fixtures, jigs, welding fixtures, production line modernization and aggregate machine solutions.',
    ctaPrimary: 'Request project estimate',
    ctaSecondary: 'Send drawing / specification',
    statsTitle: 'Built to communicate industrial competence',
    statsLead: 'This version is intentionally structured as a premium engineering brand for large-scale B2B manufacturing clients.',
    stats: [
      { label: 'Projects', value: 'Complex B2B', text: 'Focused on non-standard production challenges.' },
      { label: 'Model', value: 'Full cycle', text: 'From task analysis to manufacturing and launch.' },
      { label: 'Market', value: 'Industrial buyers', text: 'Structured for engineers, production leaders and procurement.' },
      { label: 'Outcome', value: 'Precision and speed', text: 'Cycle-time reduction, repeatability and reliability.' }
    ],
    servicesTitle: 'Core capabilities',
    servicesLead: 'The site architecture is designed to support premium industrial positioning and clear service presentation.',
    services: [
      {
        slug: 'tooling',
        title: 'Machine clamping fixtures',
        text: 'Hydraulic and mechanical workholding systems for turning, milling and dedicated operations.',
        bullets: ['Hydraulic clamping units', 'Mechanical clamping assemblies', 'Solutions for specific parts']
      },
      {
        slug: 'jigs-fixtures',
        title: 'Jigs and fixtures',
        text: 'Assembly and welding fixtures designed for geometry control and repeatable output.',
        bullets: ['Welding fixtures', 'Assembly jigs', 'Positioning control']
      },
      {
        slug: 'modernization',
        title: 'Production modernization',
        text: 'Upgrades that remove bottlenecks and increase output without replacing the entire line.',
        bullets: ['Higher throughput', 'Reduced downtime', 'Integration into existing process']
      },
      {
        slug: 'aggregate-machines',
        title: 'Aggregate machines',
        text: 'Dedicated machine solutions for serial operations, accuracy and stable cycle performance.',
        bullets: ['Special-purpose machines', 'Serial operations', 'Repeatable output']
      }
    ],
    featuresTitle: 'Why this structure works',
    featuresLead: 'Industrial clients buy confidence, project control and competence. The site should signal exactly that.',
    features: [
      { title: 'Premium visual language', text: 'Dark industrial-tech presentation with clean, status-driven UI.' },
      { title: 'Clear information architecture', text: 'Separate sections for tooling, modernization, machine systems, cases and contacts.' },
      { title: 'Ready for scale', text: 'Three-language setup, SEO-friendly routes and room for future service expansion.' }
    ],
    casesTitle: 'Case presentation examples',
    casesLead: 'These are placeholder examples showing how your real project stories can be presented later.',
    cases: [
      { title: 'Machining', result: 'Reduced part clamping time', text: 'Fixture solution focused on faster setup and stable machining conditions.' },
      { title: 'Welding cell', result: 'Improved repeatability and lower scrap', text: 'Dedicated jig and fixture system matched to actual production geometry.' },
      { title: 'Serial operation', result: 'Stable cycle on a dedicated node', text: 'Aggregate concept designed around throughput and process stability.' }
    ],
    ctaBandTitle: 'Have a task that standard equipment cannot solve?',
    ctaBandText: 'This codebase is ready to become a full industrial corporate website with your real photos, projects, documents and lead forms.',
    industriesTitle: 'Industries',
    industries: ['Mechanical engineering', 'Metalworking', 'Automotive components', 'Instrumentation', 'Heavy industry', 'Serial manufacturing'],
    contactsTitle: 'Contacts and project start',
    contactsLead: 'The contact layer is positioned as a B2B entry point for RFQ, technical discussion and complex engineering inquiries.',
    contacts: [
      { title: 'Commercial inquiry', text: 'sales@metalw.ru\nProject estimates and commercial proposals.' },
      { title: 'Engineering inquiry', text: 'engineering@metalw.ru\nDrawings, specs and technical discussion.' },
      { title: 'Phone', text: '+7 (900) 000-00-00\nIndustrial projects across Russia.' },
      { title: 'Lead form', text: 'In production, replace this with CRM submission or email integration.' }
    ],
    footerText: 'Metalw — industrial engineering website concept on Next.js.',
    breadcrumbs: { home: 'Home', services: 'Services', cases: 'Cases', contacts: 'Contacts' },
    pageIntroLabel: 'Service',
    pages: {
      tooling: {
        title: 'Machine clamping fixtures',
        lead: 'Hydraulic and mechanical workholding systems for accurate, fast and repeatable machining.',
        bodyTitle: 'What this page is built to communicate',
        body: [
          'This section is structured around a high-value industrial need: tooling that shortens the cycle, ensures stable geometry and fits into an existing manufacturing process.',
          'In the production version, you can add photos, technical modules, examples by industry and separate blocks for hydraulic, mechanical and custom fixture design.'
        ],
        bullets: ['Hydraulic workholding systems', 'Mechanical clamping assemblies', 'Solutions for specific parts and operations', 'Integration into installed machines']
      },
      'jigs-fixtures': {
        title: 'Jigs and fixtures',
        lead: 'Assembly and welding solutions focused on positioning accuracy, repeatability and serial efficiency.',
        bodyTitle: 'What this page is built to communicate',
        body: [
          'This section presents your competence in assembly and welding fixtures where geometry, setup speed and repeatability matter most.',
          'It can later include sector-specific projects, structural examples, base positioning logic and a conversion-focused block about scrap reduction.'
        ],
        bullets: ['Welding fixtures', 'Assembly jigs', 'Geometry and base positioning control', 'Serial repeatability']
      },
      modernization: {
        title: 'Production modernization',
        lead: 'Engineering upgrades for better throughput, lower downtime and removal of process bottlenecks.',
        bodyTitle: 'What this page is built to communicate',
        body: [
          'This is a strong sales section for factories that are not replacing the full equipment park but are ready to invest in focused productivity gains.',
          'A live version should include before/after logic, node photos, economic impact and staged implementation details.'
        ],
        bullets: ['Higher productivity', 'Upgrade of installed units', 'Lower manual labor', 'Bottleneck removal']
      },
      'aggregate-machines': {
        title: 'Aggregate machines',
        lead: 'Dedicated machine systems for repeatable operations, stable cycle logic and serial manufacturing performance.',
        bodyTitle: 'What this page is built to communicate',
        body: [
          'This section is made for complex high-ticket projects: dedicated machinery and aggregate machine concepts for a specific operation or product node.',
          'It is a strong place for technical capabilities, layout options, sector examples and project execution logic.'
        ],
        bullets: ['Machine systems for specific operations', 'Serial throughput', 'Designed around customer cycle logic', 'Integrated project delivery']
      }
    }
  },
  zh: {
    metaTitle: 'Metalw — 工业工装与工程系统',
    metaDescription: '用于夹具、工装、产线改造和专用机床的高端工业网站。',
    brandSub: '工业工程系统',
    nav: [
      { href: '/zh', label: '首页' },
      { href: '/zh/services/tooling', label: '工装夹具' },
      { href: '/zh/services/modernization', label: '产线改造' },
      { href: '/zh/cases', label: '案例' },
      { href: '/zh/contacts', label: '联系' }
    ],
    heroEyebrow: '工业科技工程',
    heroTitle: '面向大型制造企业的工业工装与非标设备',
    heroLead: '我们设计并交付提升生产效率的工程系统：液压与机械夹紧工装、胎架与检具、产线改造以及专用机床解决方案。',
    ctaPrimary: '获取项目报价',
    ctaSecondary: '发送图纸 / 技术要求',
    statsTitle: '为工业信任感而设计',
    statsLead: '这个版本以高端工业品牌思路构建，适合大型B2B制造客户的沟通方式。',
    stats: [
      { label: '项目类型', value: '复杂B2B', text: '聚焦非标生产问题。' },
      { label: '执行模式', value: '全流程', text: '从任务分析到制造与导入。' },
      { label: '目标客户', value: '工业采购方', text: '面向工程、生产与采购负责人。' },
      { label: '结果导向', value: '精度与效率', text: '缩短节拍、提升重复性与稳定性。' }
    ],
    servicesTitle: '核心方向',
    servicesLead: '网站架构围绕高端工业定位而设计，能够清晰展示重点业务。',
    services: [
      {
        slug: 'tooling',
        title: '机床夹紧工装',
        text: '用于车削、铣削及专用工序的液压与机械夹紧系统。',
        bullets: ['液压夹紧单元', '机械夹紧机构', '面向具体零件的解决方案']
      },
      {
        slug: 'jigs-fixtures',
        title: '胎架与夹具',
        text: '用于装配与焊接的定位工装，强调几何控制与重复性。',
        bullets: ['焊接夹具', '装配胎架', '定位控制']
      },
      {
        slug: 'modernization',
        title: '生产改造',
        text: '在不整体更换设备的前提下消除瓶颈并提升产能。',
        bullets: ['提升产出', '减少停机', '融入现有工艺']
      },
      {
        slug: 'aggregate-machines',
        title: '专用组合机床',
        text: '面向批量工序、精度与稳定节拍的专用机床解决方案。',
        bullets: ['专用设备', '批量工序', '稳定重复输出']
      }
    ],
    featuresTitle: '为什么这种结构有效',
    featuresLead: '工业客户购买的是能力、控制感和可靠性。网站必须首先传达这些信息。',
    features: [
      { title: '高端视觉语言', text: '深色工业科技风格，简洁且具有品牌感。' },
      { title: '清晰信息架构', text: '按工装、改造、专机、案例和联系分区展示。' },
      { title: '便于扩展', text: '已支持三语言、SEO友好路由和未来扩展。' }
    ],
    casesTitle: '案例展示示例',
    casesLead: '以下为占位示例，后续可替换为真实项目、数据和行业案例。',
    cases: [
      { title: '机加工', result: '缩短零件装夹时间', text: '通过夹具方案提高换型效率并稳定加工条件。' },
      { title: '焊接工位', result: '提高重复性并降低不良', text: '根据真实几何要求设计胎架与夹具系统。' },
      { title: '批量工序', result: '建立稳定节拍', text: '围绕产能与工艺稳定性设计专用组合方案。' }
    ],
    ctaBandTitle: '是否有标准设备无法解决的任务？',
    ctaBandText: '这个代码项目已经可以作为正式工业官网的基础，只需补充真实照片、案例、文档和线索表单。',
    industriesTitle: '适用行业',
    industries: ['机械制造', '金属加工', '汽车零部件', '仪器制造', '重工业', '批量生产'],
    contactsTitle: '联系与项目启动',
    contactsLead: '联系页面被设计为B2B入口，用于报价、技术讨论和复杂工程需求沟通。',
    contacts: [
      { title: '商务咨询', text: 'sales@metalw.ru\n项目报价与商务方案。' },
      { title: '工程咨询', text: 'engineering@metalw.ru\n图纸、技术要求与工程讨论。' },
      { title: '电话', text: '+7 (900) 000-00-00\n面向俄罗斯工业项目。' },
      { title: '表单入口', text: '正式上线时可接入CRM表单或邮件提交。' }
    ],
    footerText: 'Metalw — 基于 Next.js 的工业网站概念版本。',
    breadcrumbs: { home: '首页', services: '业务方向', cases: '案例', contacts: '联系' },
    pageIntroLabel: '方向',
    pages: {
      tooling: {
        title: '机床夹紧工装',
        lead: '用于高精度、快速、可重复加工的液压与机械夹紧系统。',
        bodyTitle: '这个页面要传达什么',
        body: [
          '该页面围绕高价值工业需求构建：工装需要缩短节拍、保证几何稳定，并且能融入现有工艺流程。',
          '正式版本可补充真实照片、技术模块、行业示例以及液压、机械和非标夹具的分项内容。'
        ],
        bullets: ['液压夹紧系统', '机械夹紧机构', '面向具体零件和工序', '适配现有机床']
      },
      'jigs-fixtures': {
        title: '胎架与夹具',
        lead: '强调定位精度、重复性与批量效率的装配和焊接工装。',
        bodyTitle: '这个页面要传达什么',
        body: [
          '该页面用于展示你们在装配和焊接工装方面的能力，尤其适合强调几何、装夹速度和一致性。',
          '后续可加入行业案例、结构示例、基准定位逻辑以及降低不良率的价值表达。'
        ],
        bullets: ['焊接夹具', '装配胎架', '几何与基准控制', '批量重复性']
      },
      modernization: {
        title: '生产改造',
        lead: '通过工程改造提升产能、降低停机并消除工艺瓶颈。',
        bodyTitle: '这个页面要传达什么',
        body: [
          '这是一个很强的销售页面，适合那些不准备整体更换设备、但愿意投资于局部效率提升的工厂。',
          '正式版本可加入改造前后逻辑、节点照片、经济效果和分阶段实施说明。'
        ],
        bullets: ['提升生产效率', '改造现有单元', '降低人工参与', '消除瓶颈']
      },
      'aggregate-machines': {
        title: '专用组合机床',
        lead: '面向重复工序、稳定节拍和批量制造效率的专用设备方案。',
        bodyTitle: '这个页面要传达什么',
        body: [
          '该页面适用于高客单价的复杂项目：针对特定工序或部件的专用设备与组合机床方案。',
          '这里适合放技术能力、布局方案、行业示例和项目实施逻辑。'
        ],
        bullets: ['面向特定工序的专机', '批量产出能力', '围绕客户节拍设计', '一体化项目交付']
      }
    }
  }
};

export function getDictionary(locale: string) {
  return dictionaries[(locale as Locale) || 'ru'] ?? dictionaries.ru;
}
