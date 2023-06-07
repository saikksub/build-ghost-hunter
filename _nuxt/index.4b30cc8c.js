import{k as C,o as n,b as r,e,u as d,a as k,p as l,w as j,t as m,h as u,A as p,l as h,f,F as x,q as g,c as w}from"./entry.76a0a7fb.js";import{_ as B}from"./nuxt-link.cc66bf0a.js";import{u as v}from"./assets.bfb135e7.js";import{g as b}from"./dummy.504bae29.js";const N={class:"relative w-full h-96 bg-gray-950 overflow-hidden"},A=["src"],D=e("div",{class:"absolute top-0 left-0 bottom-0 right-0 bg-black/50 flex flex-col items-center justify-center px-6"},[e("span",{class:"text-4xl text-white font-semibold text-center"}," Ghost's Digital Marketplace "),e("p",{class:"text-white text-base text-center"}," 2D elements, 3D models, textures, videos, animations and more. Ready to use in any project. ")],-1),M={__name:"Banner",setup(o){const a=C("https://cdnb.artstation.com/p/assets/images/images/021/668/299/4k/dzmitry-doryn-4.jpg");return(t,s)=>(n(),r("div",N,[e("img",{class:"w-full h-full object-cover",src:d(a),alt:""},null,8,A),D]))}},V={},q={width:"100%",height:"100%",viewBox:"0 0 48 48",fill:"currentColor"},F=e("path",{d:"M22.5,43.75L7.5,35.1C7.025,34.819 6.656,34.449 6.394,33.989C6.131,33.53 6,33.033 6,32.5L6,15.5C6,14.967 6.131,14.47 6.394,14.011C6.656,13.551 7.025,13.181 7.5,12.9L22.5,4.25C22.978,3.983 23.48,3.85 24.008,3.85C24.536,3.85 25.033,3.983 25.5,4.25L40.5,12.9C40.975,13.181 41.344,13.551 41.606,14.011C41.869,14.47 42,14.967 42,15.5L42,32.5C42,33.033 41.869,33.53 41.606,33.989C41.344,34.449 40.975,34.819 40.5,35.1L25.5,43.75C25.022,44.017 24.52,44.15 23.992,44.15C23.464,44.15 22.967,44.017 22.5,43.75ZM22.5,24.85L22.5,40.3L24,41.15L25.5,40.3L25.5,24.842L39,17L39,15.5L37.3,14.55L24,22.3L10.65,14.55L9,15.483L9,17.05L22.5,24.85Z"},null,-1),P=[F];function S(o,a){return n(),r("svg",q,P)}const y=k(V,[["render",S]]),W={class:"shadow bg-gray-700 rounded-md overflow-hidden hover:bg-gray-600 cursor-pointer"},Z={class:"aspect-video"},z=["src"],E={class:"w-full h-full p-3"},G={class:"text-lg font-medium"},O={class:"text-sm text-gray-400"},$={__name:"AssetCard",props:{asset:{type:Object,required:!0}},setup(o){return(a,t)=>{const s=B;return n(),r("div",W,[l(s,{to:"asset/"+o.asset.id},{default:j(()=>[e("div",Z,[e("img",{src:o.asset.thumbnail,class:"object-cover w-full h-full"},null,8,z)]),e("div",E,[e("h3",G,m(o.asset.name),1),e("p",O,m(o.asset.creator),1)])]),_:1},8,["to"])])}}},R={class:"relative flex justify-center py-2 px-6"},T={class:"w-full space-y-2 max-w-screen-2xl"},H={class:"inline-flex items-center gap-2 text-lg font-bold cursor-pointer hover:text-amber-500"},I={class:"grid w-full gap-6 max-w-screen-2xl",style:{"grid-template-columns":"repeat(auto-fill, minmax(300px, 1fr))"}},J=u({__name:"WhatsNew",setup(o){v();const a=p(()=>{let t=b();return t.sort((s,c)=>c.likes-s.likes),t=t.slice(0,4),t});return h(()=>{}),(t,s)=>{const c=y,_=$;return n(),r("div",R,[e("div",T,[e("div",null,[e("div",H,[l(c,{class:"w-6 h-6"}),f(" What's new ")])]),e("div",I,[(n(!0),r(x,null,g(d(a),(i,L)=>(n(),w(_,{key:i.id,asset:i},null,8,["asset"]))),128))])])])}}}),K={class:"relative flex justify-center py-2 px-6"},Q={class:"w-full space-y-2 max-w-screen-2xl"},U={class:"inline-flex items-center gap-2 text-lg font-bold cursor-pointer hover:text-amber-500"},X={class:"grid w-full gap-6 max-w-screen-2xl",style:{"grid-template-columns":"repeat(auto-fill, minmax(300px, 1fr))"}},Y=u({__name:"PopularContent",setup(o){v();const a=p(()=>{let t=b();return t.sort((s,c)=>c.likes-s.likes),t=t.slice(0,4),t});return h(()=>{}),(t,s)=>{const c=y,_=$;return n(),r("div",K,[e("div",Q,[e("div",null,[e("div",U,[l(c,{class:"w-6 h-6"}),f(" Popular ")])]),e("div",X,[(n(!0),r(x,null,g(d(a),(i,L)=>(n(),w(_,{key:i.id,asset:i},null,8,["asset"]))),128))])])])}}}),ee={class:"w-full h-full pb-12"},ce=u({__name:"index",setup(o){return(a,t)=>{const s=M,c=J,_=Y;return n(),r("div",ee,[l(s),l(c,{class:"mt-8"}),l(_,{class:"mt-8"})])}}});export{ce as default};
