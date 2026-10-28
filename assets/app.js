/* Inside LLM reading shell. All experiments remain in course.js. */
(() => {
  const esc = text => String(text).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  history.scrollRestoration = 'manual';
  const sourceSetView = setView;
  const sourceSetMode = setMode;
  const sourceProgress = renderProgress;
  let activeLesson = null;
  let activeTarget = 'home';
  let searchReturnFocus;
  $$('.view:not(#view-map) section.sec').forEach(section=>{
    $$('h3.step',section).forEach((h,i)=>{h.id ||= `${section.id}-step-${i+1}`;});
  });
  const dialog = $('#course-search');
  const desc = [
    ['区分程序、参数与运行时数据，读懂模型文件。','Separate programs, parameters, and runtime data. Read a model file.'],
    ['从向量与矩阵开始，亲手算出一个神经网络。','Start with vectors and matrices. Work through a tiny neural network.'],
    ['跟随文字变成 token、嵌入与上下文表示。','Follow text through tokens, embeddings, and contextual representations.'],
    ['拆开 Q、K、V，逐步观察信息如何聚合。','Unpack Q, K, and V. Watch information flow through attention.'],
    ['从损失与梯度，到一次次生成下一个 token。','From losses and gradients to generating the next token.'],
    ['把量化、KV 缓存、显存和推理延迟连接起来。','Connect quantization, KV caches, memory, and inference latency.'],
    ['跟踪一个请求的完整旅程，用综合练习检验理解。','Trace a request end to end and test your understanding.']
  ];
  function renderCards() {
    $('#path-cards').innerHTML = VIEWS.map(([v,zh,en,tz,te],i)=>{
      const ss=SECS.filter(s=>s[1]===v), n=ss.filter(s=>S.done[s[0]]).length;
      const next=ss.find(s=>!S.done[s[0]])||ss[0];
      return `<a class="path-card" href="#${next[0]}"><div class="path-top"><span class="path-no">${L(zh,en)}</span><span class="path-time">${ss.reduce((a,s)=>a+s[5],0)} MIN</span></div><h3>${L(tz,te)}</h3><p>${L(...desc[i])}</p><div class="path-bottom"><span>${n} / ${ss.length} ${L('已完成','completed')}</span><b>↗</b></div><div class="path-progress"><i style="width:${100*n/ss.length}%"></i></div></a>`;
    }).join('');
    const resume=SEC[S.lesson]?S.lesson:null;
    const next=SECS.find(s=>!S.done[s[0]])?.[0]||SECS[0][0];
    $('#start-learning').dataset.goto=resume||next;
    $('#start-learning').innerHTML=(resume?L('继续学习','Continue learning'):L('开始学习','Start learning'))+' <span aria-hidden="true">→</span>';
  }
  function renderRail(section) {
    if(!section||section.closest('#view-map')){$('#on-this-page').innerHTML='';return;}
    const headings=$$('h3.step',section);
    $('#on-this-page').innerHTML=`<h4>${L('本章内容','ON THIS PAGE')}</h4>`+headings.map((h,i)=>{
      h.id ||= `${section.id}-step-${i+1}`;
      return `<a href="#${h.id}">${h.innerHTML}</a>`;
    }).join('')+`<h4>${L('学习工具','LEARNING TOOLS')}</h4><a href="#" id="rail-gloss">${L('查阅术语表','Open glossary')} ↗</a>`;
    $('#rail-gloss').onclick=e=>{e.preventDefault();openGloss();$('#gSearch').focus();};
    const sources=section.closest('.view').querySelector('section[id^="src-"]');
    if(sources&&sources!==section)$('#on-this-page').insertAdjacentHTML('beforeend',`<a href="#${sources.id}">${L('本部分参考来源','Part references')} ↗</a>`);
  }
  function renderCrumbsAndPager(section) {
    const s=section&&SEC[section.id];
    if(!section||section.closest('#view-map')){$('#breadcrumbs').innerHTML='';$('#lesson-pager').innerHTML='';return;}
    const v=VIEWS.find(v=>v[0]===section.closest('.view').dataset.viewRoot);
    $('#breadcrumbs').innerHTML=`<a href="#home">${L('课程总览','Overview')}</a><span class="crumb-sep">/</span>${L(v[1],v[2])}<span class="crumb-sep">/</span>${s?s[2]:L('参考来源','Sources')}`;
    const source=section.closest('.view').querySelector('section[id^="src-"]');
    if(source&&source!==section)$('#breadcrumbs').insertAdjacentHTML('beforeend',`<span class="crumb-sep">/</span><a href="#${source.id}">${L('参考来源','References')}</a>`);
    let prev,next;
    if(s){const i=SECS.indexOf(s);prev=SECS[i-1];next=SECS[i+1];}
    else{prev=SECS.filter(s=>s[1]===v[0]).at(-1);}
    const item=(s,label)=>`<a href="#${s?s[0]:'home'}"><small>${label}</small>${s?`${s[2]} ${L(s[3],s[4])}`:L('课程总览','Course overview')}</a>`;
    $('#lesson-pager').innerHTML=item(prev,L('← 上一章','← Previous'))+item(next,next?L('下一章 →','Next →'):L('返回总览 →','Back to overview →'));
  }
  function setNavState(id) {
    $$('#toc [data-toc]').forEach(a=>{const current=a.dataset.toc===id;a.classList.toggle('cur',current);current?a.setAttribute('aria-current','page'):a.removeAttribute('aria-current');});
    $$('#toc .group-toggle').forEach(b=>b.setAttribute('aria-expanded',b.closest('.tp').classList.contains('open')));
    $('#toc').classList.remove('open');$('#navToggle').setAttribute('aria-expanded','false');
  }
  function route(id='home',push=true,scroll=true) {
    const el=document.getElementById(id);
    if(!el||!viewOf(id))return;
    const view=viewOf(id), section=el.closest('section.sec');
    activeTarget=id; activeLesson=view==='map'?null:section?.id;
    $$('.view:not(#view-map) section.sec').forEach(s=>s.hidden=s.id!==activeLesson);
    sourceSetView(view);
    if(activeLesson){S.lesson=activeLesson;save();}
    if(push&&location.hash!=='#'+id)history.pushState(null,'','#'+id);
    setNavState(activeLesson);renderRail(section);renderCrumbsAndPager(section);renderCards();
    $('#gloss').hidden=true;
    if(dialog.open)dialog.close();
    document.title=(activeLesson&&SEC[activeLesson]?(S.mode==='en'?SEC[activeLesson][4]:SEC[activeLesson][3])+' · ':'')+'Inside LLM';
    if(scroll){if(view==='map'&&id==='home')window.scrollTo(0,0);else el.scrollIntoView({block:'start'});}
    redrawAll();
  }
  // Existing handlers reference these bindings; preserve the original lab engine.
  go=id=>route(id);
  setView=(view,target)=>route(target||(view==='map'?'home':SECS.find(s=>s[1]===view)?.[0])||'home');
  setMode=(mode,keep=true)=>{sourceSetMode(mode,keep);renderCards();const section=document.getElementById(activeLesson);renderRail(section);renderCrumbsAndPager(section);updateSearch();};
  renderProgress=()=>{sourceProgress();renderCards();};
  // The original observer is designed for long pages. Routing now owns current chapter.
  io.disconnect();
  $$('#toc .tp').forEach(group=>{
    const button=document.createElement('button');button.type='button';button.className='group-toggle';button.textContent='›';
    button.setAttribute('aria-label','展开或收起章节 / Toggle chapters');button.setAttribute('aria-expanded',group.classList.contains('open'));
    const content=group.querySelector('.tps');content.id=`toc-${group.dataset.v}`;button.setAttribute('aria-controls',content.id);
    group.querySelector('h4').append(button);
    button.onclick=()=>{group.classList.toggle('open');button.setAttribute('aria-expanded',group.classList.contains('open'));};
  });
  $('#navToggle').setAttribute('aria-controls','toc');$('#navToggle').setAttribute('aria-expanded','false');
  $('#navToggle').onclick=()=>{$('#toc').classList.toggle('open');$('#navToggle').setAttribute('aria-expanded',$('#toc').classList.contains('open'));};
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){$('#toc').classList.remove('open');$('#navToggle').setAttribute('aria-expanded','false');}});
  $('#theme-toggle').onclick=()=>{const theme=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=theme;try{localStorage.setItem('inside-llm-theme',theme)}catch(e){};$('#theme-toggle').setAttribute('aria-pressed',theme==='dark');};
  $('#theme-toggle').setAttribute('aria-pressed',document.documentElement.dataset.theme==='dark');
  // Index source text once. Search input is rendered as text, never as HTML.
  const searchIndex=SECS.map(s=>({s,text:document.getElementById(s[0]).textContent.replace(/\s+/g,' ').toLowerCase()}));
  function updateSearch(){
    const q=$('#lesson-search').value.trim().toLowerCase();
    const matches=searchIndex.filter(({s,text})=>!q||text.includes(q)||(s[2]+' '+s[3]+' '+s[4]).toLowerCase().includes(q));
    matches.sort((a,b)=>Number((b.s[3]+' '+b.s[4]).toLowerCase().includes(q))-Number((a.s[3]+' '+a.s[4]).toLowerCase().includes(q)));
    $('#search-status').innerHTML=q?L(`找到 ${matches.length} 个学习单元`,`Found ${matches.length} lessons`):L('搜索章节名称或正文中的概念','Search lesson titles or concepts in the text');
    $('#search-results').innerHTML=matches.map(({s})=>`<a class="search-result" href="#${s[0]}"><strong>${s[2]} ${L(esc(s[3]),esc(s[4]))}</strong><small>${L(VIEWS.find(v=>v[0]===s[1])[1],VIEWS.find(v=>v[0]===s[1])[2])} · ${s[5]} min ${S.done[s[0]]?' · ✓':''}</small></a>`).join('')||`<p style="padding:20px">${L('没有找到匹配项，试试“注意力”或“KV”。','No matches. Try “attention” or “KV”.')}</p>`;
  }
  function openSearch(){searchReturnFocus=document.activeElement;updateSearch();dialog.showModal();$('#lesson-search').focus();}
  $('#search-open').onclick=openSearch;$('#search-close').onclick=()=>dialog.close();$('#lesson-search').oninput=updateSearch;
  $('#lesson-search').onkeydown=e=>{if(e.key==='ArrowDown'||e.key==='Enter'){e.preventDefault();const first=$('#search-results a');if(first){if(e.key==='Enter')first.click();else first.focus();}}};
  dialog.addEventListener('close',()=>searchReturnFocus?.focus());
  dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
  document.addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();dialog.open?dialog.close():openSearch();}});
  // Heading anchors and history work on file:// as well as GitHub Pages.
  window.addEventListener('popstate',()=>route(location.hash.slice(1)||'home',false));
  window.addEventListener('hashchange',()=>{const id=location.hash.slice(1)||'home';if(id!==activeTarget)route(id,false);});
  const topObserver=new ResizeObserver(()=>{document.documentElement.style.setProperty('--top',$('.top').offsetHeight+'px');});topObserver.observe($('.top'));
  // Persist immediately when leaving; debounced saves alone can lose the latest action.
  addEventListener('pagehide',()=>{try{localStorage.setItem(KEY,JSON.stringify(S));}catch(e){}});
  route(location.hash.slice(1)||'home',false);
  requestAnimationFrame(()=>{const target=document.getElementById(activeTarget);if(target)target.scrollIntoView({block:'start'});});
})();
