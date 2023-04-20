import{_ as e,p as a,q as t,a1 as i}from"./framework-5866ffd3.js";const n={},r=i('<h1 id="table" tabindex="-1"><a class="header-anchor" href="#table" aria-hidden="true">#</a> Table</h1><h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h2><h3 id="table属性" tabindex="-1"><a class="header-anchor" href="#table属性" aria-hidden="true">#</a> Table属性</h3><p>dataSource：数据数组（数据源），object[] columns：表格列的配置描述，具体项见下表，ColumnsType[] pagination：分页器，参考 pagination 文档，设为 false 时不展示和进行分页，object | false rowKey：表格行 key 的取值，可以是字符串或一个函数</p><h3 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h3><p>Column:列描述数据对象，是 columns 中的一项，Column 使用相同的 API。</p><ul><li>align</li><li>width</li><li>title：列头显示文字，ReactNode | ({ sortOrder, sortColumn, filters }) =&gt; ReactNode</li><li>dataIndex：列数据在数据项中对应的路径，支持通过数组查询嵌套路径，string | string[]</li><li>key：React 需要的 key，如果已经设置了唯一的 dataIndex，可以忽略这个属性，string</li><li>render：生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，function(text, record, index) {}</li></ul><h3 id="forminstance属性" tabindex="-1"><a class="header-anchor" href="#forminstance属性" aria-hidden="true">#</a> FormInstance属性</h3><p>getFieldValue：获取对应字段名的值，(name: NamePath) =&gt; any getFieldsValue：获取一组字段名对应的值，会按照对应结构返回。默认返回现存字段值，当调用 getFieldsValue(true) 时返回所有值，(nameList?: NamePath[], filterFunc?: (meta: { touched: boolean, validating: boolean }) =&gt; boolean) =&gt; any</p><h2 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h2><h3 id="展示数据" tabindex="-1"><a class="header-anchor" href="#展示数据" aria-hidden="true">#</a> 展示数据</h3>',11),l=[r];function d(h,o){return a(),t("div",null,l)}const s=e(n,[["render",d],["__file","Table.html.vue"]]);export{s as default};
