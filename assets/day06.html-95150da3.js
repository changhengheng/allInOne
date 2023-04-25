import{_ as t,M as p,p as o,q as c,R as n,t as s,N as l,a1 as a}from"./framework-5866ffd3.js";const i={},u=a(`<h1 id="day06" tabindex="-1"><a class="header-anchor" href="#day06" aria-hidden="true">#</a> day06</h1><h2 id="过滤器-filter" tabindex="-1"><a class="header-anchor" href="#过滤器-filter" aria-hidden="true">#</a> 过滤器：filter</h2><p><code>Vue.filter()</code> 创建的过滤器都是全局的，组件内 <code>filters</code> 配置项创建的过滤器是局部的。</p><ol><li><p>创建全局过滤器</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// main.js</span>
<span class="token comment">// Vue.filter(&quot;过滤器名称&quot;,function(){})</span>
Vue<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token string">&quot;sub&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span>start<span class="token operator">=</span><span class="token number">10</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span>  value <span class="token operator">&gt;</span> start <span class="token operator">?</span> value<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>start<span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;...&quot;</span> <span class="token operator">:</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

Vue<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token string">&quot;atguigu&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span>name<span class="token operator">=</span><span class="token string">&quot;尚硅谷&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> name<span class="token operator">+</span><span class="token string">&quot;----&quot;</span><span class="token operator">+</span>value<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用过滤器</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{{item.title | sub(30) | atguigu(&quot;vue&quot;) }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>过滤器可以用在两个地方：<strong>双花括号插值和 <code>v-bind</code> 表达式</strong></li><li>可以串联使用，没有先后顺序，都会起作用</li><li>使用时可以传参</li><li>可以设定形参默认值</li><li>默认参数是使用过滤器的数据的值，且始终为第一个参数，位置不会改变，传递的过滤器参数会依次向后排列</li><li>当全局过滤器和局部过滤器重名时，会采用局部过滤器。</li></ul></li></ol><h2 id="插件-plugin" tabindex="-1"><a class="header-anchor" href="#插件-plugin" aria-hidden="true">#</a> 插件：plugin</h2><p>插件可以添加一些 Vue 本身没有的功能。</p><p>作用： 为 Vue 添加一些全局的功能</p><p>本质： 插件本质就是一个配置对象。内部有一个方法 install，当插件被调用时，install方法就会自动调用。接受一个参数，为Vue构造函数</p><p>插件可以添加以下功能：</p>`,9),r=n("li",null,[n("p",null,"创建全局 过滤器")],-1),d=n("li",null,[n("p",null,"创建全局 自定义指令")],-1),k=n("li",null,[n("p",null,"注册全局组件")],-1),v=n("li",null,[n("p",null,[s("为 Vue 构造函数添加一些属性和方法，通过把它们添加到 "),n("code",null,"Vue.prototype"),s(" 上实现")])],-1),m={href:"https://github.com/vuejs/vue-router",target:"_blank",rel:"noopener noreferrer"},h=a(`<p>创建插件：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/plugins/index.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Vue<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用插件：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// main.js</span>
<span class="token keyword">import</span> plugins <span class="token keyword">from</span> <span class="token string">&#39;./plugins&#39;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>plugins<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Vue.use(plugin)</p><ul><li><p>安装 Vue.js 插件。如果插件是一个对象，必须提供 <code>install</code> 方法。如果插件是一个函数，它会被作为 install 方法。install 方法调用时，会将 Vue 作为参数传入。</p><p>该方法需要在调用 <code>new Vue()</code> 之前被调用。</p><p>当 install 方法被同一个插件多次调用，插件将只会被安装一次。</p></li></ul></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Header <span class="token keyword">from</span> <span class="token string">&#39;@/components/Header&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 自定义全局过滤器</span>
        Vue<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token string">&quot;sub&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> value<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> num <span class="token operator">?</span> value<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;……&#39;</span> <span class="token operator">:</span> value
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token comment">// 自定义全局指令</span>
        Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;focus&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token function">inserted</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                el<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token comment">// 注册全局组件</span>
        Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;Header&quot;</span><span class="token punctuation">,</span> Header<span class="token punctuation">)</span>
        <span class="token comment">// 为Vue添加属性或方法(添加到原型对象上，vm和所有的vc都能访问)</span>
        <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>haha <span class="token operator">=</span> <span class="token string">&#39;hahahaha&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue和vuecomponent" tabindex="-1"><a class="header-anchor" href="#vue和vuecomponent" aria-hidden="true">#</a> Vue和VueComponent</h2><h2 id="localstorage和sessionstorage" tabindex="-1"><a class="header-anchor" href="#localstorage和sessionstorage" aria-hidden="true">#</a> LocalStorage和SessionStorage</h2><h2 id="axios" tabindex="-1"><a class="header-anchor" href="#axios" aria-hidden="true">#</a> axios</h2><p>添加为Vue的全局属性</p><h2 id="跨域问题" tabindex="-1"><a class="header-anchor" href="#跨域问题" aria-hidden="true">#</a> 跨域问题</h2><p>同源策略</p><p>请求可以发，服务器正常接收请求并返回响应，客户端会拦截请求，因为不同源，有风险。</p><p>配代理服务器：</p><p>代理服务器只能解决开发环境下的跨域问题，生产环境下的跨域问题需要配合后台去解决。</p><p>配置代理后，请求要往本地服务器发，本地服务器会转发到目标服务器。</p><hr><p>http和https</p><p>cookie和session</p><p>输入网址后发生了什么</p>`,20);function b(g,f){const e=p("ExternalLinkIcon");return o(),c("div",null,[u,n("ol",null,[r,d,k,v,n("li",null,[n("p",null,[s("一个库，提供自己的 API，如 "),n("a",m,[s("vue-router"),l(e)])])])]),h])}const _=t(i,[["render",b],["__file","day06.html.vue"]]);export{_ as default};
