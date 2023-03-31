import{_ as p,M as o,p as c,q as i,R as n,t as e,N as t,a1 as s}from"./framework-5866ffd3.js";const l="/allInOne/assets/moreCommonLifecycles-10c903fd.jpg",u="/allInOne/assets/lessCommonLifecycles-93025209.jpg",d={},r=s(`<h2 id="react-fragment" tabindex="-1"><a class="header-anchor" href="#react-fragment" aria-hidden="true">#</a> React.Fragment</h2><p>React.Fragment是React内置组件，浏览器遇到时不解析不加载，可以当做虚拟DOM的根标签使用，避免页面中插入过多无意义的DIV标签</p><p>使用：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">React.Fragment</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">React.Fragment</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>简写：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="react生命周期-三大阶段" tabindex="-1"><a class="header-anchor" href="#react生命周期-三大阶段" aria-hidden="true">#</a> React生命周期（三大阶段）</h2><p>概念：组件从创建到销毁的一系列过程称为生命周期</p><p>这个过程中，会自动调用一些方法，称为生命周期钩子。</p><p>类式组件生命周期钩子里的this指向当前组件实例。</p>`,10),k={href:"https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/",target:"_blank",rel:"noopener noreferrer"},m=s('<p><img src="'+l+'" alt="React所有的生命周期钩子"><img src="'+u+'" alt="React常用的生命周期钩子"></p><p>生命周期钩子本质就是类式组件上的一些方法，以下是常用的一些钩子：</p><ol><li><p>componentDidMount 组件完成挂载</p><p>只执行一次（即组件只挂载一次），render会先于componentDidMount 执行一次（后续页面更新时会再次执行）</p><p>可以做的事：</p><ul><li>创建定时器</li><li>发送ajax请求</li><li>订阅频道</li><li>操作真实DOM</li></ul><p>主要是做初始化的一些工作</p></li><li><p>componentDidUpdate 组件完成更新</p><p>执行n次，每次数据更新页面都会重新渲染，就会重新执行这个钩子，每次调setState更新数据完成时都会触发</p><p>可以做的事：</p><ul><li>操作新DOM</li></ul></li><li><p>componentWillUnmount 组件将要卸载</p><p>只执行一次（组件只卸载一次）</p><p>可以做的事</p><ul><li>销毁定时器</li><li>取消订阅频道</li></ul><p>主要是做收尾性的工作</p></li><li><p>render也算生命周期钩子</p><p>执行1+n次，每次页面数据更新完成、页面重新渲染时触发</p><p>render中不能调setState（会产生死循环）</p></li></ol><p>生命周期钩子都是谁调的？</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>react的工作原理：只要虚拟DOM改了，就会卸载组件重新挂载</p></div><h2 id="moment-js-日期处理类库" tabindex="-1"><a class="header-anchor" href="#moment-js-日期处理类库" aria-hidden="true">#</a> moment.js 日期处理类库</h2>',6),v={href:"http://momentjs.cn/",target:"_blank",rel:"noopener noreferrer"},g=s(`<p>安装：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> moment <span class="token parameter variable">--save</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>引入（哪个组件用，哪个组件引入）：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> moment <span class="token keyword">from</span> <span class="token string">&#39;moment&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">let</span> time <span class="token operator">=</span> <span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">// 获取当前时间</span>
<span class="token keyword">let</span> time1 <span class="token operator">=</span> <span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;dddd, MMMM Do YYYY, h:mm:ss a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// format方法接收一个字符串定义时间显示格式</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>momentJS提供了一系列方法来操作时间，需要什么查官网即可</p><h2 id="函数式组件-hook" tabindex="-1"><a class="header-anchor" href="#函数式组件-hook" aria-hidden="true">#</a> 函数式组件 + hook</h2><p>hook的本质就是一个函数（是函数式组件提供的一些供你去调用的方法）</p><h2 id="usestate" tabindex="-1"><a class="header-anchor" href="#usestate" aria-hidden="true">#</a> useState</h2><p>该hook用于在函数式组件中存储状态（数据）。useState本质上是一个函数，返回值是一个数组，可以使用解构赋值简化使用：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">let</span> <span class="token punctuation">[</span>isRain<span class="token punctuation">,</span>updateData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解构拿到的第一个值是创建好的state数据，第二个值是用于更新这个数据的方法</p><p>使用useState时可以传递一个值（只能传一个值），该值会作为默认的初始值使用：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">let</span> <span class="token punctuation">[</span>isRain<span class="token punctuation">,</span>updateData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>更新数据使用解构得来的函数：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token function">updateData</span><span class="token punctuation">(</span><span class="token operator">!</span>isRain<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="useref" tabindex="-1"><a class="header-anchor" href="#useref" aria-hidden="true">#</a> useRef</h2><p>该hook用于在函数式组件中获取真实DOM对象，使用和类式组件的createRef()类似：</p><ol><li><p>创建容器</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">let</span> input <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>标记虚拟DOM</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>input<span class="token punctuation">}</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>获取真实DOM</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">let</span> value <span class="token operator">=</span> input<span class="token punctuation">.</span>current
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h2 id="useeffect" tabindex="-1"><a class="header-anchor" href="#useeffect" aria-hidden="true">#</a> useEffect</h2><p>作用：在函数式组件中模拟类式组件的生命周期钩子</p><p>参数是一个回调函数：</p><ol><li><p>直接写是在模拟挂载完和更新完两个钩子，因此挂载完和更新完都各会执行一次</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span> <span class="token punctuation">(</span><span class="token string">&#39;挂载完和更新完&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>可以调用多次</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span> <span class="token punctuation">(</span><span class="token string">&#39;挂载完和更新完&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span> <span class="token punctuation">(</span><span class="token string">&#39;挂载完&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>单独模拟挂载完（componentDidMount），再传第二个参数为一个空数组即可。数组的意思是监听哪个状态数据发生变化，空数组就是什么都不监听：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token comment">// 挂载完</span>
<span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span> <span class="token punctuation">(</span><span class="token string">&#39;挂载完&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>给数组传数据就是监听这个数据（单独模拟componentDidUpdate），当它发生变化就会调这个回调。可以同时监听多个数据。</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span> <span class="token punctuation">(</span><span class="token string">&#39;更新完&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>data<span class="token punctuation">,</span>otherData<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在useEffect中将一个函数作为返回值时，是在模拟componentWillUnmount</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token comment">// 将卸载</span>
<span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span> <span class="token punctuation">(</span><span class="token string">&#39;将卸载&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="综合练习-todolist" tabindex="-1"><a class="header-anchor" href="#综合练习-todolist" aria-hidden="true">#</a> 综合练习：toDoList</h2><p>搭基础架子渲染出来即可</p>`,26);function h(b,f){const a=o("ExternalLinkIcon");return c(),i("div",null,[r,n("p",null,[n("a",k,[e("生命周期钩子图示"),t(a)])]),m,n("p",null,[n("a",v,[e("官方链接"),t(a)])]),g])}const j=p(d,[["render",h],["__file","Day04.html.vue"]]);export{j as default};
