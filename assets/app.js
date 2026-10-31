(function(){
var root=document.documentElement;
var EN={
'skip':'Skip to content','nav.label':'Main','nav.about':'About','nav.features':'Features','nav.flow':'How it works','nav.arch':'Technology','nav.security':'Security',
'cta.demo':'Try the demo','newtab':'(opens in a new tab)',
'hero.h1a':'Spreadsheets that think','hero.h1b':'along with you',
'hero.p':'Import your Excel files, edit with formulas, see everything in dashboards and charts, ask the copilot for help and export a polished PDF. All in one editor, with your team.',
'hero.understand':'Learn about the project','hero.note':'The demo is free and runs in your browser.',
'sheet.tab1':'Sheet','sheet.tab2':'Chart','sheet.cap':'Editable example: sales by month','sheet.month':'Month','sheet.value':'Sales','sheet.total':'Total','sheet.best':'Best month',
'sheet.hint':'Example: change a number and watch the chart follow along, just like in PlanAI.',
'about.h2':'More than a spreadsheet: a way to see your data',
'about.p1':'PlanAI brings a spreadsheet editor, analysis views and a smart assistant together in one place.',
'about.p2':'No more editing in Excel, copying into a BI tool and asking another chat for help. Sheet, dashboard, chart and copilot sit side by side, and you switch between them with tabs, without closing anything.',
'about.t1':'Dashboard','about.t1p':'Key numbers and several charts together, in one complete report.',
'about.t2':'Chart','about.t2p':'One type at a time (bar, line or pie) to focus on what matters.',
'about.t3':'Branded PDF','about.t3p':'Both export PDFs with the PlanAI identity.',
'feat.h2':'Everything your spreadsheet needs, without losing the thread','feat.p':'Twelve features in three groups, for people who live in data.',
'g1':'Edit','g1p':'The spreadsheet itself, complete and fast.','g2':'Understand','g2p':'See what the numbers are telling you.','g3':'Share','g3p':'Work together and take results outside.',
'feat.editor':'Full editor','feat.editor.p':'Formulas, multiple sheets, freeze panes, formatting and smart actions, powered by Univer.',
'feat.tools':'One-click tools','feat.tools.p':'Organize, format, freeze the header and resize columns.',
'feat.wizard':'Creation wizard','feat.wizard.p':'Build sheets from guided templates and start with the structure ready.',
'feat.auto':'Autosave','feat.auto.p':'The editor saves on its own and shows when it is saved, changed or saving.',
'feat.dash':'Dashboard','feat.dash.p':'Key numbers, bar, line, pie and table: a full visual report from your data.',
'feat.chart':'Focused chart','feat.chart.p':'One type at a time. Switch at the top and export just that chart.',
'feat.ai':'Copilot','feat.ai.p':'An assistant that understands the sheet context and suggests actions.',
'feat.diag':'Diagnosis','feat.diag.p':'A quality score for your sheet, with practical tips to improve it.',
'feat.io':'Import and export','feat.io.p':'XLSX, CSV and PDF. Views export to PDF with the PlanAI logo.',
'feat.teams':'Teams','feat.teams.p':'Personal or team sheets, always clear about who owns each one.',
'feat.collab':'Comments and versions','feat.collab.p':'Share links, comment and go back to an earlier version when needed.',
'feat.tabs':'Free tabs','feat.tabs.p':'Switch between sheet, dashboard and chart without closing anything.',
'why.h2':'Simple for spreadsheet users. Serious for product builders.','why.p':'Two audiences, one platform, with the same visual identity all the way to the PDF.',
'why.user':'For analysts','why.dev':'For developers',
'why.l1':'Dashboard with key numbers and several charts','why.l2':'Single chart with the type you choose','why.l3':'PDF with the PlanAI logo','why.l4':'Copilot and quality diagnosis','why.l5':'Teams, comments and versions',
'why.l8':'Separate modules: editor, io, dashboard and copilot','why.l10':'Sessions, teams and local persistence',
'flow.h2':'From file to answer in four steps','flow.p':'A direct path, with tabs to go back whenever you want.',
'flow.1h':'Import','flow.1p':'Bring an XLSX or CSV, or start from a guided template.','flow.2h':'Edit','flow.2p':'Formulas, formatting and quick tools.',
'flow.3h':'Visualize','flow.3p':'A full dashboard or a focused chart.','flow.4h':'Export','flow.4p':'Branded PDF, Excel or CSV.',
'arch.h2':'Modern technology, in separate modules','arch.p':'Each part of the product lives in its own module, which keeps it easy to evolve.',
'arch.fe.h3':'Interface','arch.fe.p':'Next.js App Router, React 19, Tailwind 4 and shadcn/Base UI components, with a sage-green light and dark theme.',
'arch.sheets.h3':'Spreadsheet engine','arch.sheets.p':'Univer Sheets for real cell editing, selection, formulas and multiple tabs.',
'arch.viz.h3':'Views','arch.viz.p':'ECharts for dashboard and chart. PDFs made with jsPDF and PlanAI branding; spreadsheets with ExcelJS.',
'arch.ai.h3':'Copilot','arch.ai.p':'A local agent and Gemini integration to understand requests, suggest formulas and act on the sheet.',
'sec.h2':'Controlled access, data in your flow','sec.p':'Sessions, teams and clear ownership, without mixing what is yours with what belongs to the team.',
'sec.s1.h':'Sessions','sec.s1.p':'Login with a session and a header token for the app APIs.','sec.s2.h':'Teams','sec.s2.p':'Personal or team sheets with an explicit owner.',
'sec.s3.h':'Sharing','sec.s3.p':'Share links, comments and version history.','sec.s4.h':'Passwords','sec.s4.p':'Stored with bcrypt hashing, never in plain text.',
'sec.s5.h':'Storage','sec.s5.p':'Local JSON or Prisma, depending on the environment.','sec.s6.h':'Versions','sec.s6.p':'Snapshots to restore earlier states of a sheet.',
'cta.h2':'Ready to see your data from another angle?','cta.p':'Open the online demo and explore the sheet, dashboard, chart and copilot.',
'footer.copy':"© 2026 PlanAI. A Sudre's Codes project.",'footer.by':"Sudre's Codes on GitHub",'footer.demo':'Demo','footer.privacy':'Privacy','footer.home':'Back to home',
'nf.h1':'This page does not exist','nf.p':'The link may be broken or the page may have moved. Head back to the home page or open the demo.',
'pv.h1':'Privacy','pv.upd':'Last updated: October 31, 2026.',
'pv.h2a':'What this site collects','pv.pa':'Nothing. This page has no forms, no sign-up, no analytics, no ads and no tracking cookies. Fonts and images are served from the site itself, so no third party receives your visit.',
'pv.h2b':'What is stored on your device','pv.pb':'Only two preferences, in your browser’s local storage: the language (PT or EN) and the theme (light or dark). They never leave your device and you can clear them at any time in your browser settings. Because they are strictly necessary for features you choose, no consent banner is needed.',
'pv.h2c':'Hosting','pv.pc':'The site is hosted on GitHub Pages, which may keep technical access logs (such as IP address) for security, under GitHub’s own privacy policy.',
'pv.h2d':'The PlanAI demo','pv.pd':'The demo at planai.onrender.com is a separate app. If you create an account or upload spreadsheets there, that data is handled by the demo, not by this site.',
'pv.h2e':'Who is responsible and how to get in touch','pv.pe':"This site is a project by Sudre's Codes. For questions about privacy or your rights under Brazil’s data protection law (LGPD), reach out through the GitHub profile below."
};
var PT={};
function apply(lang){
  document.querySelectorAll('[data-i18n]').forEach(function(el){var k=el.dataset.i18n;if(!(k in PT))PT[k]=el.textContent;el.textContent=lang==='en'&&EN[k]?EN[k]:PT[k];});
  document.querySelectorAll('[data-i18n-attr]').forEach(function(el){var p=el.dataset.i18nAttr.split(':');var key='@'+p[1];if(!(key in PT))PT[key]=el.getAttribute(p[0]);el.setAttribute(p[0],lang==='en'&&EN[p[1]]?EN[p[1]]:PT[key]);});
  root.lang=lang==='en'?'en':'pt-BR';
  document.querySelectorAll('[data-lang]').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.lang===lang)});
  try{localStorage.setItem('planai-lang',lang)}catch(e){}
  setTheme(root.dataset.theme,true);burgerLabel();renderSheet();
}
function cur(){return root.lang==='en'?'en':'pt'}
function setTheme(t,silent){
  root.dataset.theme=t;var b=document.getElementById('themeBtn');
  var en=cur()==='en';
  if(b)b.setAttribute('aria-label',t==='dark'?(en?'Switch to light mode':'Ativar modo claro'):(en?'Switch to dark mode':'Ativar modo escuro'));
  var m=document.getElementById('themeColor');if(m)m.content=t==='dark'?'#0f1a15':'#f3f7f4';
  if(!silent)try{localStorage.setItem('planai-theme',t)}catch(e){}
}
var tb=document.getElementById('themeBtn');if(tb)tb.addEventListener('click',function(){setTheme(root.dataset.theme==='dark'?'light':'dark')});
document.querySelectorAll('[data-lang]').forEach(function(b){b.addEventListener('click',function(){apply(b.dataset.lang)})});
var burger=document.getElementById('burger'),menu=document.getElementById('menu');
function burgerLabel(){if(!burger)return;var o=burger.getAttribute('aria-expanded')==='true',en=cur()==='en';burger.setAttribute('aria-label',o?(en?'Close menu':'Fechar menu'):(en?'Open menu':'Abrir menu'))}
function closeMenu(){if(!burger)return;burger.setAttribute('aria-expanded','false');menu.classList.remove('open');burgerLabel()}
if(burger){burger.addEventListener('click',function(){var o=burger.getAttribute('aria-expanded')!=='true';burger.setAttribute('aria-expanded',o);menu.classList.toggle('open',o);burgerLabel();if(o)menu.querySelector('a').focus()});
  menu.addEventListener('click',function(e){if(e.target.closest('a'))closeMenu()});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&menu.classList.contains('open')){closeMenu();burger.focus()}});}
/* sheet demo */
var data=[42,58,51,73,66,88],M={pt:['Jan','Fev','Mar','Abr','Mai','Jun'],en:['Jan','Feb','Mar','Apr','May','Jun']};
var rows=document.getElementById('rows');
function fmt(n){return n.toLocaleString(cur()==='en'?'en-US':'pt-BR')}
function renderSheet(){
  if(!rows)return;var L=M[cur()];
  if(!rows.children.length){
    data.forEach(function(v,i){var tr=document.createElement('tr');tr.innerHTML='<td class="m"></td><td><input inputmode="numeric" autocomplete="off" maxlength="4"></td>';
      var inp=tr.querySelector('input');inp.value=v;inp.addEventListener('input',function(){var n=parseInt(inp.value.replace(/\D/g,''),10);data[i]=isNaN(n)?0:Math.min(n,9999);update()});
      rows.appendChild(tr);
      document.getElementById('bars').appendChild(document.createElement('div'));
      document.getElementById('labels').appendChild(document.createElement('span'));});
  }
  Array.prototype.forEach.call(rows.children,function(tr,i){tr.cells[0].textContent=L[i];tr.querySelector('input').setAttribute('aria-label',(cur()==='en'?'Sales in ':'Vendas em ')+L[i])});
  Array.prototype.forEach.call(document.getElementById('labels').children,function(s,i){s.textContent=L[i]});
  update();
}
function update(){
  var max=Math.max.apply(null,data)||1,bi=data.indexOf(max);
  Array.prototype.forEach.call(document.getElementById('bars').children,function(b,i){b.style.setProperty('--v',Math.max(data[i]/max,.02));b.classList.toggle('top',i===bi)});
  document.getElementById('total').textContent=fmt(data.reduce(function(a,b){return a+b},0));
  document.getElementById('best').textContent=M[cur()][bi]+' ('+fmt(max)+')';
}
var saved='pt';try{saved=localStorage.getItem('planai-lang')||'pt'}catch(e){}
apply(saved==='en'?'en':'pt');
})();
