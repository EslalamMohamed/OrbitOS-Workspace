import React, { useEffect, useMemo, useState } from 'react';
import {
  Activity, ArrowDownRight, ArrowUpRight, Bell, CalendarDays, Check, CheckCheck,
  ChevronDown, ChevronLeft, ChevronRight, CircleHelp, Clock3, Command, CreditCard,
  Download, Ellipsis, FileText, Filter, FolderKanban, Globe2, Grid2X2, Home,
  LayoutDashboard, ListTodo, LogOut, Menu, MessageCircle, Moon, MoreHorizontal,
  Plus, Search, Settings, ShieldCheck, Sparkles, Sun, Target, TrendingUp, Users,
  Wallet, X, Zap, CheckCircle2, Circle, CircleDot, BriefcaseBusiness, PanelLeftClose
} from 'lucide-react';
import {
  Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis,
  BarChart, Bar
} from 'recharts';

const initialTasks = [
  { id: 1, title: 'Finalize onboarding flow', project: 'Website redesign', status: 'In progress', priority: 'High', due: 'Today', person: 'AM', color: '#8b7cff' },
  { id: 2, title: 'Review mobile responsive states', project: 'Orbit mobile app', status: 'To do', priority: 'Medium', due: 'Today', person: 'SK', color: '#27b8a7' },
  { id: 3, title: 'Prepare launch announcement', project: 'Marketing launch', status: 'Review', priority: 'High', due: 'Tomorrow', person: 'JD', color: '#ff9b63' },
  { id: 4, title: 'Update component documentation', project: 'Design system', status: 'Done', priority: 'Low', due: 'Oct 31', person: 'AM', color: '#8b7cff' },
  { id: 5, title: 'Connect analytics events', project: 'Orbit mobile app', status: 'In progress', priority: 'Medium', due: 'Nov 02', person: 'RL', color: '#5d9cff' },
  { id: 6, title: 'Collect stakeholder feedback', project: 'Website redesign', status: 'To do', priority: 'Low', due: 'Nov 04', person: 'SK', color: '#27b8a7' },
];
const projects = [
  { name: 'Website redesign', tag: 'Product design', progress: 76, tasks: '19/25 tasks', color: '#8b7cff', people: ['AM','SK','JD'] },
  { name: 'Orbit mobile app', tag: 'Development', progress: 48, tasks: '12/25 tasks', color: '#27b8a7', people: ['RL','AM','SK'] },
  { name: 'Marketing launch', tag: 'Marketing', progress: 88, tasks: '22/25 tasks', color: '#ff9b63', people: ['JD','RL'] },
  { name: 'Design system', tag: 'Design', progress: 64, tasks: '16/25 tasks', color: '#5d9cff', people: ['SK','AM'] },
];
const trend = [{day:'Mon',done:18,created:12},{day:'Tue',done:24,created:17},{day:'Wed',done:20,created:15},{day:'Thu',done:31,created:19},{day:'Fri',done:28,created:22},{day:'Sat',done:36,created:16},{day:'Sun',done:33,created:13}];
const copy = {
  en: {
    overview:'Overview', projects:'Projects', myTasks:'My tasks', calendar:'Calendar', clients:'Clients', reports:'Reports', invoices:'Invoices', settings:'Settings',
    workspace:'WORKSPACE', tools:'TOOLS', search:'Search anything...', upgrade:'Upgrade plan', dashboard:'Dashboard', welcome:'Welcome back, Eslam 👋',
    subtitle:'Here’s what’s happening with your workspace today.', newProject:'New project', export:'Export report', totalProjects:'Total projects', tasksDone:'Tasks completed', teamMembers:'Team members', revenue:'Revenue this month',
    fromLast:'vs. last month', activity:'Activity overview', thisWeek:'This week', completed:'Completed', created:'Created', myWork:'My work', viewAll:'View all',
    dueToday:'Due today', allTasks:'All tasks', task:'Task', project:'Project', status:'Status', priority:'Priority', dueDate:'Due date', assignee:'Assignee',
    inProgress:'In progress', todo:'To do', review:'Review', done:'Done', high:'High', medium:'Medium', low:'Low', projectProgress:'Project progress',
    team:'Your team', online:'online', upcoming:'Upcoming schedule', standup:'Team stand-up', designReview:'Design review', sprintPlanning:'Sprint planning',
    quickActions:'Quick actions', createTask:'Create task', inviteMember:'Invite teammate', createInvoice:'Create invoice', viewCalendar:'View calendar',
    notifications:'Notifications', markRead:'Mark all as read', noNotifications:'You’re all caught up!', newTask:'Create a task', taskName:'Task name', chooseProject:'Choose project',
    cancel:'Cancel', create:'Create task', taskCreated:'Task created successfully', projectCreated:'Project created successfully', projectName:'Project name', createProject:'Create project',
    language:'Language', appearance:'Appearance', light:'Light mode', dark:'Dark mode', profile:'My profile', help:'Help center', logout:'Log out',
    filter:'Filter', noResults:'No tasks match your search.', all:'All', thisMonth:'This month', performance:'Workspace performance', completion:'Completion rate',
    welcomeBack:'You’re making great progress. Keep the momentum going!', seeDetails:'See details', active:'Active', delayed:'Delayed', completedLabel:'Completed',
    clientPortal:'Client portal', recentActivity:'Recent activity', activity1:'Sarah updated Website redesign', activity2:'You completed a task', activity3:'New comment on Marketing launch',
    searchResults:'Search results', typeToSearch:'Type to search projects and tasks…', save:'Save changes', settingsSaved:'Settings saved', member:'Member', email:'Email address',
    emptyTitle:'Nothing here yet', emptyText:'Create something new to get started.', openMenu:'Open menu', close:'Close', today:'Today', week:'Week', month:'Month'
  },
  ar: {
    overview:'نظرة عامة', projects:'المشروعات', myTasks:'مهامي', calendar:'التقويم', clients:'العملاء', reports:'التقارير', invoices:'الفواتير', settings:'الإعدادات',
    workspace:'مساحة العمل', tools:'الأدوات', search:'ابحث عن أي شيء...', upgrade:'ترقية الخطة', dashboard:'لوحة التحكم', welcome:'أهلًا بعودتك يا إسلام 👋',
    subtitle:'إليك ملخص ما يحدث في مساحة عملك اليوم.', newProject:'مشروع جديد', export:'تصدير التقرير', totalProjects:'إجمالي المشروعات', tasksDone:'المهام المكتملة', teamMembers:'أعضاء الفريق', revenue:'إيرادات هذا الشهر',
    fromLast:'مقارنة بالشهر الماضي', activity:'نظرة عامة على النشاط', thisWeek:'هذا الأسبوع', completed:'مكتملة', created:'تم إنشاؤها', myWork:'مهامي', viewAll:'عرض الكل',
    dueToday:'مستحقة اليوم', allTasks:'كل المهام', task:'المهمة', project:'المشروع', status:'الحالة', priority:'الأولوية', dueDate:'موعد التسليم', assignee:'المسؤول',
    inProgress:'قيد التنفيذ', todo:'لم تبدأ', review:'مراجعة', done:'مكتملة', high:'عالية', medium:'متوسطة', low:'منخفضة', projectProgress:'تقدم المشروعات',
    team:'فريقك', online:'متصل', upcoming:'الجدول القادم', standup:'اجتماع الفريق', designReview:'مراجعة التصميم', sprintPlanning:'تخطيط السبرنت',
    quickActions:'إجراءات سريعة', createTask:'إنشاء مهمة', inviteMember:'دعوة عضو للفريق', createInvoice:'إنشاء فاتورة', viewCalendar:'عرض التقويم',
    notifications:'الإشعارات', markRead:'تحديد الكل كمقروء', noNotifications:'لا توجد إشعارات جديدة!', newTask:'إنشاء مهمة', taskName:'اسم المهمة', chooseProject:'اختر المشروع',
    cancel:'إلغاء', create:'إنشاء المهمة', taskCreated:'تم إنشاء المهمة بنجاح', projectCreated:'تم إنشاء المشروع بنجاح', projectName:'اسم المشروع', createProject:'إنشاء مشروع',
    language:'اللغة', appearance:'المظهر', light:'الوضع الفاتح', dark:'الوضع الداكن', profile:'ملفي الشخصي', help:'مركز المساعدة', logout:'تسجيل الخروج',
    filter:'تصفية', noResults:'لا توجد مهام مطابقة للبحث.', all:'الكل', thisMonth:'هذا الشهر', performance:'أداء مساحة العمل', completion:'معدل الإنجاز',
    welcomeBack:'أنت تحقق تقدمًا رائعًا. استمر بنفس الحماس!', seeDetails:'عرض التفاصيل', active:'نشط', delayed:'متأخر', completedLabel:'مكتمل',
    clientPortal:'بوابة العملاء', recentActivity:'النشاط الأخير', activity1:'سارة حدّثت مشروع إعادة تصميم الموقع', activity2:'أكملتَ مهمة', activity3:'تعليق جديد على مشروع التسويق',
    searchResults:'نتائج البحث', typeToSearch:'اكتب للبحث في المشروعات والمهام…', save:'حفظ التغييرات', settingsSaved:'تم حفظ الإعدادات', member:'عضو', email:'البريد الإلكتروني',
    emptyTitle:'لا يوجد محتوى بعد', emptyText:'أنشئ شيئًا جديدًا للبدء.', openMenu:'فتح القائمة', close:'إغلاق', today:'اليوم', week:'أسبوع', month:'شهر'
  }
};

function Avatar({ initials, color, small=false }) {
  return <span className={`avatar ${small?'avatar-small':''}`} style={{'--avatar-color': color || '#e8e4ff'}}>{initials}</span>;
}
function Progress({ value, color }) {
  return <div className="progress-track"><span style={{width:`${value}%`,background:color}} /></div>;
}
function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem('orbit-language') || 'en');
  const [dark, setDark] = useState(() => localStorage.getItem('orbit-dark') === 'true');
  const [active, setActive] = useState('overview');
  const [tasks, setTasks] = useState(() => {
    try { return JSON.parse(localStorage.getItem('orbit-tasks')) || initialTasks; } catch { return initialTasks; }
  });
  const [query, setQuery] = useState('');
  const [modal, setModal] = useState('');
  const [toast, setToast] = useState('');
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [taskProject, setTaskProject] = useState(projects[0].name);
  const [taskPriority, setTaskPriority] = useState('Medium');
  const [newProjectName, setNewProjectName] = useState('');
  const [customProjects, setCustomProjects] = useState([]);
  const [filter, setFilter] = useState('All');
  const [settingsSaved, setSettingsSaved] = useState(false);
  const t = copy[language];
  const rtl = language === 'ar';
  const allProjects = [...projects, ...customProjects];

  useEffect(() => { localStorage.setItem('orbit-language', language); document.documentElement.lang = language; document.documentElement.dir = rtl ? 'rtl' : 'ltr'; }, [language, rtl]);
  useEffect(() => { localStorage.setItem('orbit-dark', String(dark)); }, [dark]);
  useEffect(() => { localStorage.setItem('orbit-tasks', JSON.stringify(tasks)); }, [tasks]);
  useEffect(() => { if (toast) { const timer = setTimeout(() => setToast(''), 2800); return () => clearTimeout(timer); } }, [toast]);

  const filteredTasks = useMemo(() => tasks.filter(task => {
    const matchesQuery = `${task.title} ${task.project} ${task.status} ${task.priority}`.toLowerCase().includes(query.toLowerCase());
    const matchesFilter = filter === 'All' || task.status === filter;
    return matchesQuery && matchesFilter;
  }), [tasks, query, filter]);

  const navGroups = [
    { label: t.workspace, items: [
      { id:'overview', label:t.overview, icon:LayoutDashboard },
      { id:'projects', label:t.projects, icon:FolderKanban, count:'4' },
      { id:'myTasks', label:t.myTasks, icon:ListTodo, count:String(tasks.filter(x=>x.status!=='Done').length) },
      { id:'calendar', label:t.calendar, icon:CalendarDays },
    ]},
    { label: t.tools, items: [
      { id:'clients', label:t.clients, icon:Users },
      { id:'reports', label:t.reports, icon:TrendingUp },
      { id:'invoices', label:t.invoices, icon:FileText },
    ]}
  ];
  const setPage = id => { setActive(id); setMobileOpen(false); setQuery(''); };
  const addTask = e => {
    e.preventDefault();
    if (!taskName.trim()) return;
    setTasks(prev => [{id:Date.now(),title:taskName.trim(),project:taskProject,status:'To do',priority:taskPriority,due:'Today',person:'ES',color:'#8b7cff'},...prev]);
    setTaskName(''); setModal(''); setToast(t.taskCreated); setActive('myTasks');
  };
  const addProject = e => {
    e.preventDefault();
    if (!newProjectName.trim()) return;
    setCustomProjects(prev => [...prev,{name:newProjectName.trim(),tag:'New project',progress:0,tasks:'0/0 tasks',color:'#8b7cff',people:['ES']}]);
    setNewProjectName(''); setModal(''); setToast(t.projectCreated); setActive('projects');
  };
  const toggleTask = id => setTasks(prev => prev.map(x => x.id===id ? {...x,status:x.status==='Done'?'To do':'Done'} : x));
  const navToTask = () => { setActive('myTasks'); setFilter('All'); };
  const statusLabel = status => ({'In progress':t.inProgress,'To do':t.todo,'Review':t.review,'Done':t.done}[status] || status);
  const priorityLabel = priority => ({High:t.high,Medium:t.medium,Low:t.low}[priority] || priority);

  const Header = () => <header className="topbar">
    <div className="topbar-left">
      <button className="icon-button mobile-menu" onClick={()=>setMobileOpen(!mobileOpen)} aria-label={t.openMenu}><Menu size={19}/></button>
      <div className="breadcrumb"><span>{t.workspace}</span><ChevronRight size={14}/><strong>{navGroups.flatMap(g=>g.items).find(i=>i.id===active)?.label || ({settings:t.settings,clients:t.clients,reports:t.reports,invoices:t.invoices}[active]) || t.dashboard}</strong></div>
    </div>
    <div className="topbar-actions">
      <label className="searchbox"><Search size={17}/><input value={query} onChange={e=>{setQuery(e.target.value); if(e.target.value) setActive('myTasks');}} placeholder={t.search}/><kbd>⌘ K</kbd></label>
      <button className="icon-button" onClick={()=>setDark(!dark)} aria-label="Toggle theme">{dark?<Sun size={18}/>:<Moon size={18}/>}</button>
      <div className="notification-wrap">
        <button className="icon-button notification-button" onClick={()=>setNotificationsOpen(!notificationsOpen)} aria-label={t.notifications}><Bell size={18}/><i/></button>
        {notificationsOpen && <div className="notification-popover"><div className="popover-head"><strong>{t.notifications}</strong><button onClick={()=>setNotificationsOpen(false)}><X size={16}/></button></div><div className="notification-item"><span className="notification-dot purple"/><div><b>New project update</b><p>Website redesign was updated</p><small>12 min ago</small></div></div><div className="notification-item"><span className="notification-dot green"/><div><b>Task completed</b><p>Sarah completed a design task</p><small>1 hour ago</small></div></div><button className="mark-read" onClick={()=>{setNotificationsOpen(false);setToast(t.noNotifications)}}>{t.markRead}</button></div>}
      </div>
      <div className="topbar-divider"/>
      <button className="profile-button" onClick={()=>setActive('settings')}><Avatar initials="ES" color="#e9e3ff"/><span className="profile-name"><b>Eslam Mohamed</b><small>Free workspace</small></span><ChevronDown size={15}/></button>
    </div>
  </header>;

  const Sidebar = () => <aside className={`sidebar ${mobileOpen?'sidebar-open':''}`}>
    <div className="brand"><div className="brand-mark"><OrbitLogo/></div><span>orbit<span className="brand-light">OS</span></span><button className="collapse-button" onClick={()=>setMobileOpen(false)}><PanelLeftClose size={17}/></button></div>
    <button className="workspace-switch"><span className="workspace-icon">N</span><span><b>Nexa Studio</b><small>Free plan</small></span><ChevronDown size={15}/></button>
    <nav>{navGroups.map(group=><div className="nav-group" key={group.label}><p className="nav-label">{group.label}</p>{group.items.map(item=><button key={item.id} onClick={()=>setPage(item.id)} className={`nav-item ${active===item.id?'active':''}`}><item.icon size={18}/><span>{item.label}</span>{item.count&&<small className="nav-count">{item.count}</small>}</button>)}</div>)}</nav>
    <div className="sidebar-spacer"/>
    <div className="upgrade-card"><div className="upgrade-icon"><Sparkles size={17}/></div><b>Unlock your team's potential</b><p>Get unlimited projects and powerful insights.</p><button onClick={()=>setToast('Plan comparison coming soon')}>{t.upgrade}<ArrowUpRight size={14}/></button><div className="upgrade-orb orb-one"/><div className="upgrade-orb orb-two"/></div>
    <button className={`nav-item ${active==='settings'?'active':''}`} onClick={()=>setPage('settings')}><Settings size={18}/><span>{t.settings}</span></button>
    <div className="sidebar-footer"><Avatar initials="ES" color="#e9e3ff"/><div><b>Eslam Mohamed</b><small>eslam@example.com</small></div><MoreHorizontal size={18}/></div>
  </aside>;

  const MetricCard = ({icon:Icon,label,value,change,color,down=false}) => <div className="metric-card"><div className="metric-top"><span className={`metric-icon ${color}`}><Icon size={18}/></span><button className="subtle-icon"><Ellipsis size={18}/></button></div><p className="metric-label">{label}</p><div className="metric-bottom"><strong>{value}</strong><span className={`metric-change ${down?'negative':''}`}>{down?<ArrowDownRight size={14}/>:<ArrowUpRight size={14}/>} {change}</span></div><small className="metric-caption">{t.fromLast}</small></div>;

  const TaskTable = ({items, compact=false}) => <div className={`task-table-wrap ${compact?'compact':''}`}><table className="task-table"><thead><tr><th>{t.task}</th><th>{t.project}</th><th>{t.status}</th><th>{t.priority}</th><th>{t.dueDate}</th><th></th></tr></thead><tbody>{items.map(task=><tr key={task.id}><td><button className={`task-check ${task.status==='Done'?'checked':''}`} onClick={()=>toggleTask(task.id)} aria-label="Toggle task">{task.status==='Done'?<Check size={12}/>:null}</button><span className={task.status==='Done'?'task-complete':''}>{task.title}</span></td><td><span className="project-cell"><i style={{background:allProjects.find(p=>p.name===task.project)?.color||task.color}}/>{task.project}</span></td><td><span className={`status-pill ${task.status.toLowerCase().replace(' ','-')}`}><i/>{statusLabel(task.status)}</span></td><td><span className={`priority ${task.priority.toLowerCase()}`}><span/>{priorityLabel(task.priority)}</span></td><td className="due-cell"><Clock3 size={13}/>{task.due}</td><td><button className="row-menu" onClick={()=>setToast('More task actions coming soon')}><MoreHorizontal size={17}/></button></td></tr>)}</tbody></table>{items.length===0&&<div className="no-results"><Search size={22}/><b>{t.noResults}</b></div>}</div>;

  const Overview = () => <><div className="welcome-row"><div><div className="eyebrow"><span className="live-dot"/> YOUR WORKSPACE AT A GLANCE</div><h1>{t.welcome}</h1><p>{t.subtitle}</p></div><div className="welcome-actions"><button className="button button-secondary" onClick={()=>setToast('Your report is ready to export')}><Download size={16}/>{t.export}</button><button className="button button-primary" onClick={()=>setModal('project')}><Plus size={17}/>{t.newProject}</button></div></div>
    <div className="metrics-grid"><MetricCard icon={FolderKanban} label={t.totalProjects} value="12" change="16.8%" color="purple"/><MetricCard icon={CheckCheck} label={t.tasksDone} value="284" change="12.4%" color="green"/><MetricCard icon={Users} label={t.teamMembers} value="18" change="8.2%" color="orange"/><MetricCard icon={Wallet} label={t.revenue} value="$24,580" change="6.1%" color="blue"/></div>
    <div className="main-grid"><section className="panel activity-panel"><div className="panel-heading"><div><h2>{t.activity}</h2><p>Track your team's progress over time</p></div><button className="select-button" onClick={()=>setToast('Showing this week')}>{t.thisWeek}<ChevronDown size={14}/></button></div><div className="chart-legend"><span><i className="legend-purple"/> {t.completed}</span><span><i className="legend-mint"/> {t.created}</span></div><div className="chart-container"><ResponsiveContainer width="100%" height="100%"><AreaChart data={trend} margin={{top:10,right:4,left:-22,bottom:0}}><defs><linearGradient id="doneGradient" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#8975f5" stopOpacity={0.22}/><stop offset="95%" stopColor="#8975f5" stopOpacity={0}/></linearGradient><linearGradient id="createdGradient" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#35c6ad" stopOpacity={0.16}/><stop offset="95%" stopColor="#35c6ad" stopOpacity={0}/></linearGradient></defs><CartesianGrid strokeDasharray="3 5" vertical={false} stroke="var(--border)"/><XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fontSize:11,fill:'var(--muted)'}} dy={9}/><YAxis axisLine={false} tickLine={false} tick={{fontSize:11,fill:'var(--muted)'}}/><Tooltip contentStyle={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:12,color:'var(--text)',fontSize:12}}/><Area type="monotone" dataKey="done" name={t.completed} stroke="#8975f5" strokeWidth={2.5} fill="url(#doneGradient)" activeDot={{r:5}}/><Area type="monotone" dataKey="created" name={t.created} stroke="#35c6ad" strokeWidth={2.5} fill="url(#createdGradient)" activeDot={{r:5}}/></AreaChart></ResponsiveContainer></div><div className="chart-footer"><div><span className="footer-icon"><TrendingUp size={15}/></span><span><b>+18.6%</b> productivity increase</span></div><button onClick={()=>setPage('reports')}>{t.seeDetails}<ArrowUpRight size={14}/></button></div></section>
    <section className="panel progress-panel"><div className="panel-heading"><div><h2>{t.projectProgress}</h2><p>Keep an eye on your active work</p></div><button className="dots-button" onClick={()=>setPage('projects')}><MoreHorizontal size={19}/></button></div><div className="project-progress-list">{projects.slice(0,4).map(p=><div className="project-progress" key={p.name}><div className="project-progress-top"><span className="project-symbol" style={{background:p.color+'20',color:p.color}}><FolderKanban size={17}/></span><div className="project-progress-name"><b>{p.name}</b><small>{p.tag}</small></div><strong>{p.progress}%</strong></div><Progress value={p.progress} color={p.color}/><div className="project-progress-bottom"><span>{p.tasks}</span><div className="avatar-stack">{p.people.map((x,i)=><Avatar key={x} initials={x} small color={['#e7e1ff','#d6f4ed','#ffe5d5'][i%3]}/>)}</div></div></div>)}</div><button className="panel-bottom-link" onClick={()=>setPage('projects')}>{t.viewAll} projects <ArrowUpRight size={14}/></button></section></div>
    <section className="panel tasks-panel"><div className="panel-heading"><div><h2>{t.myWork}</h2><p>Tasks that need your attention</p></div><div className="panel-actions"><button className="filter-button" onClick={()=>setFilter(filter==='All'?'In progress':'All')}><Filter size={15}/>{filter==='All'?t.filter:statusLabel(filter)}<ChevronDown size={14}/></button><button className="button button-primary button-small" onClick={()=>setModal('task')}><Plus size={15}/>{t.createTask}</button></div></div><TaskTable items={filteredTasks.slice(0,5)} compact/><button className="panel-bottom-link" onClick={navToTask}>{t.viewAll} tasks <ArrowUpRight size={14}/></button></section>
    <div className="bottom-grid"><section className="panel schedule-panel"><div className="panel-heading"><div><h2>{t.upcoming}</h2><p>Your next events and meetings</p></div><button className="dots-button" onClick={()=>setPage('calendar')}><MoreHorizontal size={19}/></button></div><div className="event-list"><div className="event"><div className="event-date"><b>29</b><small>OCT</small></div><div className="event-color purple-bg"/><div className="event-details"><b>{t.standup}</b><small><Clock3 size={12}/> 10:00 – 10:30 AM · Google Meet</small><div className="event-avatars"><Avatar initials="AM" small/><Avatar initials="SK" small/><Avatar initials="JD" small/></div></div><button className="row-menu"><MoreHorizontal size={17}/></button></div><div className="event"><div className="event-date"><b>29</b><small>OCT</small></div><div className="event-color mint-bg"/><div className="event-details"><b>{t.designReview}</b><small><Clock3 size={12}/> 1:30 – 2:00 PM · Design room</small><div className="event-avatars"><Avatar initials="RL" small/><Avatar initials="ES" small/></div></div><button className="row-menu"><MoreHorizontal size={17}/></button></div><div className="event"><div className="event-date"><b>30</b><small>OCT</small></div><div className="event-color orange-bg"/><div className="event-details"><b>{t.sprintPlanning}</b><small><Clock3 size={12}/> 11:00 – 12:00 PM · Google Meet</small><div className="event-avatars"><Avatar initials="AM" small/><Avatar initials="SK" small/><Avatar initials="JD" small/></div></div><button className="row-menu"><MoreHorizontal size={17}/></button></div></div><button className="panel-bottom-link" onClick={()=>setPage('calendar')}>{t.viewCalendar}<ArrowUpRight size={14}/></button></section>
    <section className="panel activity-feed"><div className="panel-heading"><div><h2>{t.recentActivity}</h2><p>Updates from your workspace</p></div><button className="dots-button"><MoreHorizontal size={19}/></button></div><div className="feed-list"><div className="feed-item"><Avatar initials="SK" color="#d9f4eb"/><div><p><b>Sarah Kim</b> updated <strong>Website redesign</strong></p><small>Changed the homepage layout</small><time>12 min ago</time></div></div><div className="feed-item"><Avatar initials="ES" color="#e9e3ff"/><div><p><b>You</b> completed a task</p><small>Update component documentation</small><time>1 hour ago</time></div></div><div className="feed-item"><Avatar initials="JD" color="#ffe7d8"/><div><p><b>Jordan Davis</b> added a comment</p><small>“Looks great, ready for review!”</small><time>3 hours ago</time></div></div></div><button className="panel-bottom-link" onClick={()=>setToast('You are viewing the latest activity')}>{t.viewAll} activity <ArrowUpRight size={14}/></button></section></div>
  </>;

  const ProjectsPage = () => <><PageTitle eyebrow="YOUR WORK, ORGANIZED" title={t.projects} subtitle="Plan, track, and deliver your team's best work." action={<button className="button button-primary" onClick={()=>setModal('project')}><Plus size={17}/>{t.newProject}</button>}/><div className="project-cards">{allProjects.map(p=><div className="project-card" key={p.name}><div className="project-card-head"><span className="project-symbol large" style={{background:p.color+'20',color:p.color}}><FolderKanban size={21}/></span><button className="dots-button" onClick={()=>setToast('Project actions coming soon')}><MoreHorizontal size={19}/></button></div><span className="project-tag">{p.tag}</span><h3>{p.name}</h3><p>Bring your team together and move this project forward.</p><div className="project-card-progress"><div><span>Progress</span><b>{p.progress}%</b></div><Progress value={p.progress} color={p.color}/></div><div className="project-card-foot"><span>{p.tasks}</span><div className="avatar-stack">{p.people.map((x,i)=><Avatar key={x+i} initials={x} small color={['#e7e1ff','#d6f4ed','#ffe5d5'][i%3]}/>)}</div></div></div>)}</div><section className="panel tasks-panel"><div className="panel-heading"><div><h2>{t.allTasks}</h2><p>All tasks across your projects</p></div><button className="filter-button" onClick={()=>setFilter(filter==='All'?'In progress':'All')}><Filter size={15}/>{filter==='All'?t.all:statusLabel(filter)}</button></div><TaskTable items={filteredTasks}/></section></>;

  const TasksPage = () => <><PageTitle eyebrow="STAY FOCUSED" title={t.myTasks} subtitle="A clear view of everything on your plate." action={<button className="button button-primary" onClick={()=>setModal('task')}><Plus size={17}/>{t.createTask}</button>}/><div className="task-summary-cards"><div><span className="summary-bullet purple-bullet"/><small>{t.todo}</small><b>{tasks.filter(x=>x.status==='To do').length}</b></div><div><span className="summary-bullet orange-bullet"/><small>{t.inProgress}</small><b>{tasks.filter(x=>x.status==='In progress').length}</b></div><div><span className="summary-bullet blue-bullet"/><small>{t.review}</small><b>{tasks.filter(x=>x.status==='Review').length}</b></div><div><span className="summary-bullet green-bullet"/><small>{t.done}</small><b>{tasks.filter(x=>x.status==='Done').length}</b></div></div><section className="panel tasks-panel"><div className="panel-heading"><div><h2>{t.allTasks}</h2><p>Click the checkbox to mark a task complete.</p></div><div className="panel-actions"><select className="native-select" value={filter} onChange={e=>setFilter(e.target.value)}><option value="All">{t.all}</option><option value="To do">{t.todo}</option><option value="In progress">{t.inProgress}</option><option value="Review">{t.review}</option><option value="Done">{t.done}</option></select><button className="button button-primary button-small" onClick={()=>setModal('task')}><Plus size={15}/>{t.createTask}</button></div></div><TaskTable items={filteredTasks}/></section></>;

  const PageTitle = ({eyebrow,title,subtitle,action}) => <div className="welcome-row page-title-row"><div><div className="eyebrow"><span className="live-dot"/>{eyebrow}</div><h1>{title}</h1><p>{subtitle}</p></div>{action}</div>;

  const SimplePage = ({id}) => {
    const data = {
      calendar:{icon:CalendarDays,title:t.calendar,sub:'Your schedule, meetings, and project milestones.',cards:[['29','OCT','Team stand-up','10:00 AM · Google Meet'],['29','OCT','Design review','1:30 PM · Design room'],['30','OCT','Sprint planning','11:00 AM · Google Meet'],['02','NOV','Client presentation','2:00 PM · Conference room']]},
      clients:{icon:Users,title:t.clients,sub:'Manage relationships and keep every client in the loop.',cards:[['AR','Apex Retail','hello@apexretail.com'],['NW','Northwind Studio','team@northwind.io'],['SC','Solis Creative','contact@solis.co'],['BL','Bluebird Labs','projects@bluebird.dev']]},
      reports:{icon:TrendingUp,title:t.reports,sub:'Understand your progress with workspace analytics.',cards:[['82%','Task completion','+12.4% compared to last month'],['94%','On-time delivery','+5.2% compared to last month'],['18','Active contributors','+3 new this month'],['4.8/5','Client satisfaction','Based on recent feedback']]},
      invoices:{icon:FileText,title:t.invoices,sub:'Keep track of payments, billing, and client invoices.',cards:[['INV-024','Apex Retail','$4,800 · Paid'],['INV-023','Northwind Studio','$2,400 · Pending'],['INV-022','Solis Creative','$1,750 · Paid'],['INV-021','Bluebird Labs','$3,200 · Overdue']]}
    };
    const d=data[id]||data.calendar; const Icon=d.icon;
    return <><PageTitle eyebrow="WORKSPACE TOOLS" title={d.title} subtitle={d.sub} action={<button className="button button-primary" onClick={()=>setToast(`${d.title} action started`)}><Plus size={17}/>{id==='clients'?'Add client':id==='invoices'?'New invoice':'Create new'}</button>}/><div className="simple-stats"><div className="panel simple-stat"><span className="metric-icon purple"><Icon size={18}/></span><small>Total {d.title.toLowerCase()}</small><strong>{id==='clients'?'24':id==='invoices'?'18':id==='reports'?'82%':'8'}</strong><span className="metric-change"><ArrowUpRight size={14}/> 12.8%</span></div><div className="panel simple-stat"><span className="metric-icon green"><CheckCircle2 size={18}/></span><small>{id==='invoices'?'Paid this month':'Completed this month'}</small><strong>{id==='clients'?'18':id==='invoices'?'$18,250':'76'}</strong><span className="metric-change"><ArrowUpRight size={14}/> 8.4%</span></div><div className="panel simple-stat"><span className="metric-icon orange"><Clock3 size={18}/></span><small>{id==='invoices'?'Awaiting payment':'Needs attention'}</small><strong>{id==='clients'?'3':id==='invoices'?'$4,100':'6'}</strong><span className="metric-change negative"><ArrowDownRight size={14}/> 2.1%</span></div></div><section className="panel simple-list-panel"><div className="panel-heading"><div><h2>{id==='calendar'?'Upcoming events':id==='clients'?'Your clients':id==='invoices'?'Recent invoices':'Key performance indicators'}</h2><p>Latest information from your workspace</p></div><button className="filter-button" onClick={()=>setToast('List filters opened')}><Filter size={15}/>{t.filter}</button></div><div className="simple-list">{d.cards.map((c,i)=><div className="simple-list-row" key={c[0]}><div className={`simple-list-icon color-${i%4}`}>{id==='clients'?<Users size={18}/>:id==='invoices'?<FileText size={18}/>:id==='reports'?<Activity size={18}/>:<CalendarDays size={18}/>}</div><div className="simple-list-main"><b>{id==='clients'?c[1]:id==='invoices'?c[0]:c[2]}</b><small>{id==='clients'?c[2]:id==='invoices'?c[1]:id==='reports'?c[2]:c[3]}</small></div><div className="simple-list-end"><b>{id==='clients'?c[0]:id==='invoices'?c[2]:id==='reports'?c[0]:`${c[0]} ${c[1]}`}</b><span className={`status-pill ${i===1?'review':i===3?'in-progress':'done'}`}><i/>{i===1?(id==='invoices'?'Pending':t.review):i===3?(id==='invoices'?'Overdue':t.inProgress):id==='invoices'?'Paid':t.completed}</span></div><button className="row-menu" onClick={()=>setToast('Item details coming soon')}><MoreHorizontal size={17}/></button></div>)}</div></section></>;
  };

  const SettingsPage = () => <><PageTitle eyebrow="MAKE IT YOURS" title={t.settings} subtitle="Manage your workspace preferences and account."/><div className="settings-layout"><div className="settings-tabs"><button className="settings-tab selected"><Settings size={17}/>General</button><button className="settings-tab"><ShieldCheck size={17}/>Security</button><button className="settings-tab"><Bell size={17}/>Notifications</button><button className="settings-tab"><CreditCard size={17}/>Billing</button></div><div className="settings-content"><section className="panel settings-panel"><div className="settings-section-head"><div><h2>Preferences</h2><p>Customize your OrbitOS experience.</p></div><span className="settings-head-icon"><Globe2 size={19}/></span></div><div className="setting-row"><div><b>{t.language}</b><small>Choose the language used across the workspace.</small></div><select className="native-select" value={language} onChange={e=>setLanguage(e.target.value)}><option value="en">English</option><option value="ar">العربية</option></select></div><div className="setting-row"><div><b>{t.appearance}</b><small>Choose how OrbitOS looks on your device.</small></div><div className="theme-options"><button className={!dark?'theme-option chosen':'theme-option'} onClick={()=>setDark(false)}><Sun size={15}/>{t.light}</button><button className={dark?'theme-option chosen':'theme-option'} onClick={()=>setDark(true)}><Moon size={15}/>{t.dark}</button></div></div><div className="setting-row"><div><b>Compact task list</b><small>Show more tasks with less vertical spacing.</small></div><button className="toggle-switch" onClick={e=>e.currentTarget.classList.toggle('on')}><span/></button></div><div className="setting-row"><div><b>Weekly summary</b><small>Get a weekly productivity summary.</small></div><button className="toggle-switch on" onClick={e=>e.currentTarget.classList.toggle('on')}><span/></button></div><div className="settings-actions"><button className="button button-primary" onClick={()=>{setSettingsSaved(true);setToast(t.settingsSaved);setTimeout(()=>setSettingsSaved(false),2200)}}>{settingsSaved?<Check size={16}/>:null}{t.save}</button></div></section><section className="panel profile-settings"><div className="settings-section-head"><div><h2>{t.profile}</h2><p>Your personal information.</p></div></div><div className="profile-edit"><Avatar initials="ES" color="#e9e3ff"/><div><b>Eslam Mohamed</b><small>Workspace administrator</small></div><button className="button button-secondary button-small" onClick={()=>setToast('Profile editor coming soon')}>Edit profile</button></div><div className="setting-row"><div><b>{t.email}</b><small>eslam@example.com</small></div><span className="verified"><CheckCircle2 size={14}/> Verified</span></div></section></div></div></>;

  return <div className={`app-shell ${dark?'dark':''}`}><Sidebar/><main className="main-area"><Header/><div className="page-content">{active==='overview'?<Overview/>:active==='projects'?<ProjectsPage/>:active==='myTasks'?<TasksPage/>:active==='settings'?<SettingsPage/>:<SimplePage id={active}/>}<footer className="app-footer"><span>© 2026 OrbitOS. Built for teams that move forward.</span><span><span className="footer-status"/> All systems operational <span className="footer-separator">·</span> v1.0.0</span></footer></div></main>
    {modal && <div className="modal-backdrop" onClick={()=>setModal('')}><div className="modal" onClick={e=>e.stopPropagation()}><div className="modal-header"><div className="modal-icon">{modal==='task'?<ListTodo size={20}/>:<FolderKanban size={20}/>}</div><div><h2>{modal==='task'?t.newTask:t.createProject}</h2><p>{modal==='task'?'Add a new item to your workflow.':'Bring your next big idea to life.'}</p></div><button className="icon-button" onClick={()=>setModal('')}><X size={18}/></button></div><form onSubmit={modal==='task'?addTask:addProject} className="modal-form"><label>{modal==='task'?t.taskName:t.projectName}<input autoFocus value={modal==='task'?taskName:newProjectName} onChange={e=>modal==='task'?setTaskName(e.target.value):setNewProjectName(e.target.value)} placeholder={modal==='task'?'e.g. Design the landing page':'e.g. Customer portal'} required/></label>{modal==='task'&&<><label>{t.chooseProject}<select value={taskProject} onChange={e=>setTaskProject(e.target.value)}>{allProjects.map(p=><option key={p.name}>{p.name}</option>)}</select></label><label>{t.priority}<select value={taskPriority} onChange={e=>setTaskPriority(e.target.value)}><option>Low</option><option>Medium</option><option>High</option></select></label></>}<div className="modal-actions"><button type="button" className="button button-secondary" onClick={()=>setModal('')}>{t.cancel}</button><button className="button button-primary" type="submit"><Plus size={16}/>{modal==='task'?t.create:t.createProject}</button></div></form></div></div>}
    {toast&&<div className="toast"><CheckCircle2 size={17}/><span>{toast}</span><button onClick={()=>setToast('')}><X size={15}/></button></div>}
  </div>;
}
function OrbitLogo(){return <svg viewBox="0 0 36 36" width="28" height="28" fill="none" aria-hidden="true"><circle cx="18" cy="18" r="5.5" fill="white"/><ellipse cx="18" cy="18" rx="14" ry="7.5" stroke="white" strokeWidth="2.2" transform="rotate(-38 18 18)"/><circle cx="28.7" cy="8.9" r="3" fill="#35D6B1"/></svg>}
export default App;
