import{_ as s,c as i,o as a,a1 as l}from"./chunks/framework.DTkdFrxJ.js";const C=JSON.parse('{"title":"core","description":"","frontmatter":{},"headers":[],"relativePath":"api/core/index.md","filePath":"api/core/index.md"}'),e={name:"api/core/index.md"},n=l(`<p><a href="./../modules.html">cell-collection</a> / core</p><h1 id="core" tabindex="-1">core <a class="header-anchor" href="#core" aria-label="Permalink to &quot;core&quot;">​</a></h1><p><code>cell-collection</code> core package.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { CellCollection, Cell } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;cell-collection&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> collection</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CellCollection</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> cell</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Cell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  index: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    row: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    col: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  size: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    width: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    height: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">collection.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cell);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(collection.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(collection.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">has</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span></code></pre></div><h2 id="index" tabindex="-1">Index <a class="header-anchor" href="#index" aria-label="Permalink to &quot;Index&quot;">​</a></h2><h3 id="enumerations" tabindex="-1">Enumerations <a class="header-anchor" href="#enumerations" aria-label="Permalink to &quot;Enumerations&quot;">​</a></h3><ul><li><a href="./enumerations/CellCollectionCacheKey.html">CellCollectionCacheKey</a></li></ul><h3 id="classes" tabindex="-1">Classes <a class="header-anchor" href="#classes" aria-label="Permalink to &quot;Classes&quot;">​</a></h3><ul><li><a href="./classes/AbstractCell.html">AbstractCell</a></li><li><a href="./classes/AbstractCellCollection.html">AbstractCellCollection</a></li><li><a href="./classes/Cell.html">Cell</a></li><li><a href="./classes/CellCollection.html">CellCollection</a></li></ul><h3 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h3><ul><li><a href="./interfaces/CellBounds.html">CellBounds</a></li><li><a href="./interfaces/CellIndex.html">CellIndex</a></li><li><a href="./interfaces/CellRange.html">CellRange</a></li><li><a href="./interfaces/CellSize.html">CellSize</a></li></ul><h3 id="type-aliases" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases" aria-label="Permalink to &quot;Type Aliases&quot;">​</a></h3><ul><li><a href="./type-aliases/CellCollectionCallback.html">CellCollectionCallback</a></li></ul>`,14),t=[n];function h(p,k,r,c,o,E){return a(),i("div",null,t)}const g=s(e,[["render",h]]);export{C as __pageData,g as default};
