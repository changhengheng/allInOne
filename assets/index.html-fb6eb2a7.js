import{_ as p,M as t,p as c,q as i,R as n,t as s,N as e,a1 as l}from"./framework-5866ffd3.js";const o={},u=n("h1",{id:"less",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#less","aria-hidden":"true"},"#"),s(" Less")],-1),d={href:"https://less.bootcss.com/",target:"_blank",rel:"noopener noreferrer"},r={href:"https://lesscss.org/",target:"_blank",rel:"noopener noreferrer"},v=l(`<div class="custom-container tip"><p class="custom-container-title">提示</p><p>所有代码除过官网复制过来的，都是在真实环境下通过编译的</p></div><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h2><p>两种注释：</p><p>编译前---&gt;</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token comment">// 该注释不会被编译到css文件中</span>
<span class="token comment">/*该注释会被编译到css文件中*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后---&gt;</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*该注释会被编译到css文件中*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><p>使用 <code>@变量名</code> 声明一个 less 变量。</p><h3 id="作为值的变量" tabindex="-1"><a class="header-anchor" href="#作为值的变量" aria-hidden="true">#</a> 作为值的变量</h3><p>变量最常见的场景是作为 CSS 的属性值来使用：</p><p><strong>编译前</strong></p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token comment">// Variables</span>
<span class="token variable">@link-color<span class="token punctuation">:</span></span> #428bca<span class="token punctuation">;</span> <span class="token comment">// sea blue</span>

<span class="token comment">// Usage</span>
<span class="token selector">a,
.link</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">@link-color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.widget</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token variable">@link-color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">a,
.link</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #428bca<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.widget</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #428bca<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="作为选择器的变量" tabindex="-1"><a class="header-anchor" href="#作为选择器的变量" aria-hidden="true">#</a> 作为选择器的变量</h3><p>使用方式： <code>@{变量名}</code></p><p><strong>编译前</strong></p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token comment">// Variables</span>
<span class="token variable">@my-selector<span class="token punctuation">:</span></span> banner<span class="token punctuation">;</span>

<span class="token comment">// Usage</span>
<span class="token selector">.@{my-selector}</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.banner</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="作为属性名的变量" tabindex="-1"><a class="header-anchor" href="#作为属性名的变量" aria-hidden="true">#</a> 作为属性名的变量</h3><p>使用方式： <code>@{变量名}</code></p><p><strong>编译前</strong></p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token comment">// 声明</span>
<span class="token variable">@bc<span class="token punctuation">:</span></span> background<span class="token operator">-</span>color<span class="token punctuation">;</span>

<span class="token comment">// 使用</span>
<span class="token selector">.con</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">@{bc}</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后</strong></p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.con</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="作为-url-的变量" tabindex="-1"><a class="header-anchor" href="#作为-url-的变量" aria-hidden="true">#</a> 作为 url 的变量</h3><p><strong>编译前</strong></p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token comment">// Variables</span>
<span class="token variable">@images<span class="token punctuation">:</span></span> <span class="token string">&quot;../img&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// Usage</span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #444<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;@{images}/white-sand.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #444<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;../img/white-sand.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="延迟加载" tabindex="-1"><a class="header-anchor" href="#延迟加载" aria-hidden="true">#</a> 延迟加载</h3><p>less 变量也有作用域，其实就是大括号。</p><p>一个变量在同一作用域内只能声明一次，重复声明时后声明的会覆盖先声明的。不同作用域可以声明同名变量，且在各自作用域内不会冲突。</p><p>less 变量采用<strong>延迟加载</strong>的方式，即会在当前作用域样式未加载之前先加载变量，而且是由内而外，先寻找作用域内的变量，如果没有再寻找作用域外的变量（即父级作用域，如果还没有就会逐级向上直至找到为止）。</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token comment">// 面试题</span>
<span class="token variable">@var<span class="token punctuation">:</span></span> 0<span class="token punctuation">;</span>

<span class="token selector">.class</span> <span class="token punctuation">{</span>
  <span class="token variable">@var<span class="token punctuation">:</span></span> 1<span class="token punctuation">;</span>

  <span class="token selector">.brass</span> <span class="token punctuation">{</span>
    <span class="token variable">@var<span class="token punctuation">:</span></span> 2<span class="token punctuation">;</span>
    <span class="token property">three</span><span class="token punctuation">:</span> <span class="token variable">@var</span><span class="token punctuation">;</span>
    <span class="token variable">@var<span class="token punctuation">:</span></span> 3<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token property">one</span><span class="token punctuation">:</span> <span class="token variable">@var</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>答案</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.class</span> <span class="token punctuation">{</span>
  <span class="token property">one</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.class .brass</span> <span class="token punctuation">{</span>
  <span class="token property">three</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="嵌套" tabindex="-1"><a class="header-anchor" href="#嵌套" aria-hidden="true">#</a> 嵌套</h2><p>嵌套规则允许在一个选择器中嵌套另一个选择器。</p><p>假设有这样的 CSS 代码：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">#header</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#header .navigation</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#header .logo</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用 Less 可以这样写：</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">#header</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
  <span class="token selector">.navigation</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.logo</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="父级引用" tabindex="-1"><a class="header-anchor" href="#父级引用" aria-hidden="true">#</a> 父级引用</h3><p>在嵌套的 less 样式中可以使用 <code>&amp;</code> 运算符来引用当前作用域的所有父级选择器。</p><p>内层选择器前面的 &amp; 符号表示对父选择器的引用。在一个内层选择器的前面，如果没有 &amp; 符号，则内层选择器会被解析为父选择器的后代；如果有 &amp; 符号，它就被解析为父元素本身。</p><p>最常用于以下两种情况：</p><ol><li>对现有选择器应用伪类:</li></ol><p><strong>编译前</strong></p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token selector">&amp;:hover</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">a:hover</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果没有&amp;，上面的示例内部的规则将被编译为<code>a :hover</code>，该规则匹配<code>&lt;a&gt;</code>标签内的所有后代元素并对其应用<code>:hover</code>伪类，这不是我们通常想要的结果。</p><ol start="2"><li>对现有选择器应用修改类</li></ol><p><strong>编译前</strong></p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.button</span> <span class="token punctuation">{</span>
  <span class="token selector">&amp;-ok</span> <span class="token punctuation">{</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;ok.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">&amp;-cancel</span> <span class="token punctuation">{</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;cancel.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">&amp;-custom</span> <span class="token punctuation">{</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;custom.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.button-ok</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;ok.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.button-cancel</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;cancel.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.button-custom</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;custom.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过引用父级，产生了不同的类名。</p><h3 id="重复出现的" tabindex="-1"><a class="header-anchor" href="#重复出现的" aria-hidden="true">#</a> 重复出现的&amp;</h3><p>&amp;在选择器中可能出现多次。这使得重复引用父选择器而不重复其名称成为可能。</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">link</span> <span class="token punctuation">{</span>
  <span class="token selector">&amp; + &amp;</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">&amp; &amp;</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">&amp;&amp;</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">&amp;,
  &amp;ish</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> cyan<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.link + .link</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.link .link</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.link.link</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.link,
.linkish</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> cyan<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="深入理解" tabindex="-1"><a class="header-anchor" href="#深入理解" aria-hidden="true">#</a> 深入理解</h3><p><code>&amp;</code> 运算符代表当前作用域的所有父级作用域的选择器（有可能不仅仅是父级，而是很多祖先选择器），这样编译后的 CSS 看起来更加清晰。</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.grand</span> <span class="token punctuation">{</span>
  <span class="token selector">.parent</span> <span class="token punctuation">{</span>
    <span class="token selector">&amp; &gt; &amp;</span> <span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">&amp; &amp;</span> <span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">&amp;&amp;</span> <span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">&amp;,
    &amp;ish</span> <span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> cyan<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.grand .parent &gt; .grand .parent</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.grand .parent .grand .parent</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.grand .parent.grand .parent</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.grand .parent,
.grand .parentish</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> cyan<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运算" tabindex="-1"><a class="header-anchor" href="#运算" aria-hidden="true">#</a> 运算</h2><p>任何数值，颜色，变量都可以运算。</p><p>如果可能的话，算术运算符在加、减或比较之前会进行单位换算。计算的结果以最左侧操作数的单位类型为准，如果第一个没有单位则顺位以第二个操作数的单位类型为准。如果单位换算无效或失去意义，则忽略单位。无效的单位换算例如：px 到 cm 或 rad 到 % 的转换。</p><p>因为 less 会自动推算单位，所以不需要每一个都加单位，但保证至少有一个加了单位。</p><p>运算符与数值之间要以空格分开，涉及优先级时以<code>()</code>进行优先级计算</p><p>less 运算遇到百分比单位，只能按照百分比计算，即百分比优先级最高。</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token comment">// 所有操作数被转换成相同的单位</span>
<span class="token variable">@conversion-1<span class="token punctuation">:</span></span> 5cm <span class="token operator">+</span> 10mm<span class="token punctuation">;</span> <span class="token comment">// 结果是 6cm</span>
<span class="token variable">@conversion-2<span class="token punctuation">:</span></span> 2 <span class="token operator">-</span> 3cm <span class="token operator">-</span> 5mm<span class="token punctuation">;</span> <span class="token comment">// 结果是 -1.5cm</span>

<span class="token comment">// conversion is impossible</span>
<span class="token variable">@incompatible-units<span class="token punctuation">:</span></span> 2 <span class="token operator">+</span> 5px <span class="token operator">-</span> 3cm<span class="token punctuation">;</span> <span class="token comment">// 结果是 4px</span>

<span class="token comment">// example with variables</span>
<span class="token variable">@base<span class="token punctuation">:</span></span> 5%<span class="token punctuation">;</span>
<span class="token variable">@filler<span class="token punctuation">:</span></span> <span class="token variable">@base</span> <span class="token operator">*</span> 2<span class="token punctuation">;</span> <span class="token comment">// 结果是 10%</span>
<span class="token variable">@other<span class="token punctuation">:</span></span> <span class="token variable">@base</span> <span class="token operator">+</span> <span class="token variable">@filler</span><span class="token punctuation">;</span> <span class="token comment">// 结果是 15%</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h2><p>Extend 是一个 Less 伪类，它将选择器与它引用的选择器进行合并，进而实现让一个选择器继承另一个选择器的样式。</p><p>继承有两种语法：</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token comment">// 继承方式一：</span>
<span class="token selector">当前选择器:extend(被继承的选择器)</span> <span class="token punctuation">{</span>

  声明块

<span class="token punctuation">}</span>

<span class="token comment">// 继承方式二：</span>
<span class="token selector">当前选择器</span> <span class="token punctuation">{</span>

  &amp;<span class="token punctuation">:</span><span class="token function">extend</span><span class="token punctuation">(</span>被继承的选择器<span class="token punctuation">)</span><span class="token punctuation">;</span>

  声明块

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例子：</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">nav ul</span> <span class="token punctuation">{</span>
  &amp;<span class="token punctuation">:</span><span class="token function">extend</span><span class="token punctuation">(</span>.inline<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.inline</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的规则集中，<code>:extend</code>（继承语法）会将“继承的选择器”（<code>nav ul</code>）应用到 <code>.inline</code> 类（被继承的选择器）出现的任何位置（即合并，这样<code>nav ul</code>就有了<code>.inline</code>类的样式）。声明块保持原样，但不引用 extend(因为 extend 不是 css)。</p><p><strong>编译后</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">nav ul</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.inline,
nav ul</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="混合-minxins" tabindex="-1"><a class="header-anchor" href="#混合-minxins" aria-hidden="true">#</a> 混合（Minxins）</h2><p>在 LESS 中我们可以定义一些通用的属性集为一个 class，然后在另一个规则中去调用这些属性。混合就是将一系列属性从一个规则引入到另一个规则中。</p><p>混合的定义：</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.混合名()</span><span class="token punctuation">{</span>
    属性的合集
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>混合的使用：</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code>.混合名<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>例子</strong></p><p>假设我们定义了一个 class 如下：</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.bordered</span> <span class="token punctuation">{</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> dotted 1px black<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> solid 2px black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在其它规则集中使用这些属性:</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">#menu a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #111<span class="token punctuation">;</span>
  <span class="token mixin-usage function">.bordered</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.post a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token mixin-usage function">.bordered</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.bordered</span> <span class="token punctuation">{</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> dotted 1px black<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> solid 2px black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#menu a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #111<span class="token punctuation">;</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> dotted 1px black<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> solid 2px black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.post a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> dotted 1px black<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> solid 2px black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>定义的混合（class）也被编译出来了，而且是可以识别的 CSS 语法。</p></div><p>定义混合和调用混合的时候可以不添加 <code>()</code>，但是为了方便区分混合和普通样式，也为了方便传参，一般我们要添加<code>()</code>。</p><p>不加小括号，则可以被编译出来；如果加上括号，则不能被编译出来，只能被调用。</p><p>同样是上面的例子，添加小括号后如下：</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token comment">// 定义</span>
<span class="token selector">.bordered()</span> <span class="token punctuation">{</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> dotted 1px black<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> solid 2px black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#menu a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #111<span class="token punctuation">;</span>
  <span class="token mixin-usage function">.bordered</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用</span>
<span class="token punctuation">}</span>

<span class="token selector">.post a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token mixin-usage function">.bordered</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">#menu a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #111<span class="token punctuation">;</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> dotted 1px black<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> solid 2px black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.post a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> dotted 1px black<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> solid 2px black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到添加小括号定义之后，混合（class）没有被编译出来。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>可选的括号在未来的版本中将被废弃，因此建议在定义和调用混合的视乎始终添加括号。</p></div><h3 id="带参数的混合" tabindex="-1"><a class="header-anchor" href="#带参数的混合" aria-hidden="true">#</a> 带参数的混合</h3><p>在声明混合的时候，可以在小括号中声明形参。形参由<code>@变量名</code>定义。 调用的时候可以传入实参：</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token comment">// 定义</span>
<span class="token selector">.border-radius(<span class="token variable">@radius</span>)</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-border-radius</span><span class="token punctuation">:</span> <span class="token variable">@radius</span><span class="token punctuation">;</span>
  <span class="token property">-moz-border-radius</span><span class="token punctuation">:</span> <span class="token variable">@radius</span><span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token variable">@radius</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#header</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.border-radius</span><span class="token punctuation">(</span>4px<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 传参并调用</span>
<span class="token punctuation">}</span>
<span class="token selector">.button</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.border-radius</span><span class="token punctuation">(</span>6px<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 传参并调用</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">#header</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
  <span class="token property">-moz-border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.button</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-border-radius</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
  <span class="token property">-moz-border-radius</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="形参默认值" tabindex="-1"><a class="header-anchor" href="#形参默认值" aria-hidden="true">#</a> 形参默认值</h3><p>可以直接在混合中定义形参的时候，给形参设置默认值，比如（@color: red）。 当使用混合的时候，如果有实参传递，则使用实参的值，否则使用形参的默认值。</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token comment">// 定义</span>
<span class="token selector">.border-radius(<span class="token variable">@radius</span>: 5px)</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-border-radius</span><span class="token punctuation">:</span> <span class="token variable">@radius</span><span class="token punctuation">;</span>
  <span class="token property">-moz-border-radius</span><span class="token punctuation">:</span> <span class="token variable">@radius</span><span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token variable">@radius</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#header</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.border-radius</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用，不传参，使用默认值</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">#header</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">-moz-border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="命名参数" tabindex="-1"><a class="header-anchor" href="#命名参数" aria-hidden="true">#</a> 命名参数</h3><p>在使用混合的时候，如果想要指定传递的实参对应哪一个形参，则可以对实参命名。任何参数都可以通过其名称引用，并且它们不必按任何特殊顺序：</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token comment">// 定义</span>
<span class="token selector">.mixin(<span class="token variable">@color</span>: black; <span class="token variable">@margin</span>: 10px; <span class="token variable">@padding</span>: 20px)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">@color</span><span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token variable">@margin</span><span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token variable">@padding</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.class1</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.mixin</span><span class="token punctuation">(</span><span class="token variable">@margin<span class="token punctuation">:</span></span> 20px<span class="token punctuation">;</span> <span class="token variable">@color<span class="token punctuation">:</span></span> #33acfe<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用</span>
<span class="token punctuation">}</span>
<span class="token selector">.class2</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.mixin</span><span class="token punctuation">(</span>#efca44<span class="token punctuation">;</span> <span class="token variable">@padding<span class="token punctuation">:</span></span> 40px<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.class1</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #33acfe<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.class2</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #efca44<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="arguments-变量" tabindex="-1"><a class="header-anchor" href="#arguments-变量" aria-hidden="true">#</a> @arguments 变量</h3><p><code>@arguments</code> 变量代表所有参数集合，不想单独处理每一个参数的话，可以利用<code>@arguments</code>代替</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.brass1(<span class="token variable">@a</span>:1560px, <span class="token variable">@b</span>: 560px)</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">@arguments</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">@arguments</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.con</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.brass1</span><span class="token punctuation">(</span><span class="token variable">@b<span class="token punctuation">:</span></span> 1000px<span class="token punctuation">,</span> <span class="token variable">@a<span class="token punctuation">:</span></span> 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.con</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 50px 1000px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 50px 1000px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模式匹配" tabindex="-1"><a class="header-anchor" href="#模式匹配" aria-hidden="true">#</a> 模式匹配</h3><p>在 Less 中尝试利用模式匹配替 if/else，其执行原理类似 switch/case。 因为一个混合可能有多种形式，所以 Less 提供了一种机制，允许根据参数的值来改变 mixin 的行为。</p><p>当进行模式匹配的时候，参数是 <code>@_</code> 的混合 是必选的，即调用这个混合的时候，参数是 <code>@_</code> 的混合的属性必然会被添加到调用混合的元素中去。</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.mine(<span class="token variable">@_</span>)</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.mine(color1)</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mine(color2)</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token comment">//模式匹配到相应的混合</span>
  <span class="token comment">//匹配的关系类似于 switch语句</span>
  .<span class="token function">mine</span><span class="token punctuation">(</span>color2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>和定义混合的区别在于，模式匹配的参数是不带@的，而混合的参数是带@的。</p></div><h3 id="重载" tabindex="-1"><a class="header-anchor" href="#重载" aria-hidden="true">#</a> 重载</h3><p>相同的混合可以根据调用的时候传入的实参个数选择匹配的混合内容，从而实现不同的行为。如果你使用带有一个参数的 mixin，例如.mixin(green);，那么所有带有一个强制参数的 mixin 的属性都将被使用：</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.mixin(<span class="token variable">@color</span>)</span> <span class="token punctuation">{</span>
  <span class="token property">color-1</span><span class="token punctuation">:</span> <span class="token variable">@color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.mixin(<span class="token variable">@color</span>, <span class="token variable">@padding</span>: 2)</span> <span class="token punctuation">{</span>
  <span class="token property">color-2</span><span class="token punctuation">:</span> <span class="token variable">@color</span><span class="token punctuation">;</span>
  <span class="token property">padding-2</span><span class="token punctuation">:</span> <span class="token variable">@padding</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.mixin(<span class="token variable">@color</span>, <span class="token variable">@padding</span>, <span class="token variable">@margin</span>: 2)</span> <span class="token punctuation">{</span>
  <span class="token property">color-3</span><span class="token punctuation">:</span> <span class="token variable">@color</span><span class="token punctuation">;</span>
  <span class="token property">padding-3</span><span class="token punctuation">:</span> <span class="token variable">@padding</span><span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token variable">@margin</span> <span class="token variable">@margin</span> <span class="token variable">@margin</span> <span class="token variable">@margin</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.some .selector div</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.mixin</span><span class="token punctuation">(</span>#008000<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.some .selector div</span> <span class="token punctuation">{</span>
  <span class="token property">color-1</span><span class="token punctuation">:</span> #008000<span class="token punctuation">;</span>
  <span class="token property">color-2</span><span class="token punctuation">:</span> #008000<span class="token punctuation">;</span>
  <span class="token property">padding-2</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="守卫-guards" tabindex="-1"><a class="header-anchor" href="#守卫-guards" aria-hidden="true">#</a> 守卫（Guards）</h2><p>根据判断条件选中 Mixin 的行为，类似于 JavaScript 的<code>if/else</code>，使用 <code>when</code> 语法时，Guards 允许我们使用 <code>&gt;,&gt;=,&lt;,&lt;=,=,</code>、关键字 true（只匹配关键字 true，非 true 不会匹配）、支持逻辑 <code>and,not ()</code>，同时我们可以使用“,”分割多个 Guards，其表示只要其中任意一个满足就为 true。</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.mixin(<span class="token variable">@q</span>)</span> <span class="token punctuation">{</span>
  <span class="token comment">//无守卫</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mixin(<span class="token variable">@q</span>) when(<span class="token variable">@q</span>&gt;10)</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mixin(<span class="token variable">@q</span>) when(<span class="token variable">@q</span>&lt;=10),
(<span class="token variable">@q</span>&gt;100)</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
  <span class="token mixin-usage function">.mixin</span><span class="token punctuation">(</span>99<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字符串插值" tabindex="-1"><a class="header-anchor" href="#字符串插值" aria-hidden="true">#</a> 字符串插值</h2><p>变量可以用类似 ruby 和 php 的方式嵌入到字符串中，通过 <code>@{name}</code> 这样的结构:</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token variable">@url<span class="token punctuation">:</span></span> <span class="token string">&quot;http://www.atguigu.com/images/pic_new/&quot;</span><span class="token punctuation">;</span>

<span class="token selector">.con</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;@{url}logo.png&quot;</span><span class="token punctuation">)</span></span> 0 0 no<span class="token operator">-</span>repeat<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件导入" tabindex="-1"><a class="header-anchor" href="#文件导入" aria-hidden="true">#</a> 文件导入</h2><p>导入 Less 文件：<code>@import “lib.less”</code>; 等价于<code>@import “lib”</code>（可以不带后缀）</p><p>导入 css 文件：<code>@import &quot;lib.css&quot;;</code></p><h2 id="转义" tabindex="-1"><a class="header-anchor" href="#转义" aria-hidden="true">#</a> 转义</h2><p>有时候，当需要引入无效的 CSS 语法或 Less 不能识别的字符，就需要使用转义字符。此时，就可以在字符串前面加一个~，并将需要转义的字符串放在 &quot;&quot; 中。</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token variable">@cc<span class="token punctuation">:</span></span> 3<span class="token punctuation">;</span>

<span class="token selector">.a</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> ~<span class="token string">&quot;@{cc}px&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,153);function k(m,b){const a=t("ExternalLinkIcon");return c(),i("div",null,[u,n("p",null,[n("a",d,[s("中文文档链接"),e(a)])]),n("p",null,[n("a",r,[s("英文文档链接"),e(a)])]),v])}const h=p(o,[["render",k],["__file","index.html.vue"]]);export{h as default};
