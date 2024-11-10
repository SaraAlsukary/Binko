import{r as i,g as C,l as N,a as _,j as s}from"./index-CtvXqluj.js";import{B as j}from"./Button-4r5uCW9Q.js";import{S as $,a as b,b as w}from"./bookMarkGreen-DR0BKicp.js";import{S as L}from"./bookMarkWhite-DOvzquiJ.js";import{C as y}from"./Container-DAvUN3pv.js";const E="_chapterCont_1ja6t_1",S="_down_1ja6t_5",B="_buttn_1ja6t_10",M="_text_1ja6t_31",W={chapterCont:E,down:S,buttn:B,text:M},H="_up_1rsv0_1",f="_bookUp_1rsv0_9",G="_book_1rsv0_9",P="_ups_1rsv0_27",R="_photo_1rsv0_27",U="_text_1rsv0_41",F="_title_1rsv0_45",V="_arrow_1rsv0_53",A="_chapterList_1rsv0_64",D="_active_1rsv0_73",Z="_listMenu_1rsv0_94",q="_activeIcon_1rsv0_125",z="_icons_1rsv0_139",J="_icon_1rsv0_139",K={up:H,bookUp:f,book:G,ups:P,photo:R,text:U,title:F,arrow:V,chapterList:A,active:D,listMenu:Z,activeIcon:q,icons:z,icon:J},O=c=>i.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...c},i.createElement("g",{id:"SVGRepo_bgCarrier",strokeWidth:0}),i.createElement("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),i.createElement("g",{id:"SVGRepo_iconCarrier"},i.createElement("path",{d:"M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z",stroke:"#8afb81",strokeWidth:2}),i.createElement("path",{d:"M8 12H8.01",stroke:"#8afb81",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),i.createElement("path",{d:"M12 12H12.01",stroke:"#8afb81",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),i.createElement("path",{d:"M16 12H16.01",stroke:"#8afb81",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}))),{up:Q,text:T,bookUp:X,book:Y,listMenu:I,icon:u,activeIcon:k,active:m,icons:g,chapterList:ss,photo:es,title:ts,author:is,arrow:ns}=K,as=()=>{const c=C(),o=N(),{chapters:d,books:h}=_(e=>e),t=h.find(e=>e.id==o.id),p=parseInt(o.idChapter),v=d.map((e,x)=>s.jsx("li",{className:x===p?`${m}`:"",onClick:()=>c(`/Binko/books/${o.id}/${x}`),children:e.title},e.id)),l=()=>{var e=document.getElementById("list");e==null||e.classList.toggle(m)},{language:n}=_(e=>e.language),a=e=>{e.target.classList.toggle(m)};return s.jsxs(s.Fragment,{children:[s.jsx("div",{className:Q,children:s.jsxs("div",{className:X,children:[s.jsxs("div",{className:Y,children:[s.jsx("div",{onClick:()=>c(`/Binko/books/${t==null?void 0:t.id}`),className:es,children:s.jsx("img",{src:t==null?void 0:t.img,alt:""})}),s.jsxs("div",{onClick:()=>c(`/Binko/books/${t==null?void 0:t.id}`),className:T,children:[s.jsx("div",{className:ts,children:t==null?void 0:t.title}),s.jsxs("div",{className:is,children:[n==="English"?"Written By ":"كُتِب بواسطة "," ",s.jsx("span",{children:t==null?void 0:t.Author})]})]}),s.jsx("div",{onClick:()=>l(),className:ns,children:s.jsx(O,{style:{width:"30px"}})})]}),s.jsx("div",{className:I,children:s.jsxs("ul",{children:[s.jsxs("li",{onClick:e=>a(e),children:[s.jsxs("p",{children:[n==="English"?"Save":"حفظ"," "]}),s.jsxs("div",{className:g,children:[s.jsxs("div",{className:k,children:[s.jsx(L,{style:{width:"20px"}})," "]}),s.jsx("div",{className:u,children:s.jsx($,{style:{width:"20px"}})})]})]}),s.jsxs("li",{onClick:e=>a(e),children:[s.jsx("p",{children:n==="English"?"Like":"أعجبني"}),s.jsxs("div",{className:g,children:[s.jsxs("div",{className:k,children:[s.jsx(b,{style:{width:"20px"}})," "]}),s.jsx("div",{className:u,children:s.jsx(w,{style:{width:"20px"}})})]})]})]})})]})}),s.jsx("ul",{className:ss,id:"list",children:v})]})},{text:rs,down:cs,buttn:os,chapterCont:ls}=W,_s=()=>{const[c,o]=i.useState(!1),[d,h]=i.useState(!1),{chapters:t}=_(r=>r),{language:p}=_(r=>r.language),v=C(),l=N(),n=parseInt(l.idChapter),a=t[n],e=()=>{var r;n===0?h(!0):(o(!1),r=n-1,v(`/Binko/books/${l.id}/${r}`))},x=async()=>{var r;n===t.length-1?o(!0):(h(!1),r=n+1,v(`/Binko/books/${l.id}/${r}`))};return s.jsxs(y,{className:ls,children:[s.jsx(as,{}),s.jsxs("div",{className:cs,children:[s.jsxs("div",{className:rs,children:[s.jsx("h1",{children:a==null?void 0:a.title}),s.jsx("p",{children:a==null?void 0:a.content})]}),s.jsxs("div",{className:os,children:[s.jsx(j,{style:c?{display:"none"}:{display:"block"},disabled:c,onClick:()=>x(),children:p==="English"?"Next Chapter":"الفصل التالي"}),s.jsx(j,{style:d?{display:"none"}:{display:"block"},disabled:d,onClick:()=>e(),children:p==="English"?"Previous Chapter":"الفصل السابق"})]})]})]})};export{_s as default};
