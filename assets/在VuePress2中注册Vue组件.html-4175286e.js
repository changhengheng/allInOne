import{_ as e,p as n,q as a,a1 as i}from"./framework-5866ffd3.js";const s={},r=i(`<h1 id="在vuepress2中注册vue组件" tabindex="-1"><a class="header-anchor" href="#在vuepress2中注册vue组件" aria-hidden="true">#</a> 在VuePress2中注册Vue组件</h1><h2 id="enhance" tabindex="-1"><a class="header-anchor" href="#enhance" aria-hidden="true">#</a> enhance</h2><p>enhance 函数既可以是同步的，也可以是异步的。它接收一个 Context 参数，包含以下属性：</p><p>app 是由 createApp 创建的 Vue 应用实例。 router 是由 createRouter 创建的路由实例。 siteData 是一个根据用户配置生成的 Ref 对象，包含 base, lang, title, description, head 和 locales。 enhance 函数会在客户端应用创建后被调用，你可以对 Vue 应用添加各种能力。</p><h2 id="注册-vue-组件" tabindex="-1"><a class="header-anchor" href="#注册-vue-组件" aria-hidden="true">#</a> 注册 Vue 组件</h2><p>你可以通过 app.component 方法来注册 Vue 全局组件：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>import { defineClientConfig } from &#39;@vuepress/client&#39;
import MyComponent from &#39;./MyComponent.vue&#39;

export default defineClientConfig({
  enhance({ app }) {
    app.component(&#39;MyComponent&#39;, MyComponent)
  },
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),d=[r];function t(c,o){return n(),a("div",null,d)}const l=e(s,[["render",t],["__file","在VuePress2中注册Vue组件.html.vue"]]);export{l as default};
