(this["webpackJsonpv-birthday"]=this["webpackJsonpv-birthday"]||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(8),a=c.n(r),l=c(4),i=c.n(l),j=(c(29),c(30),c(13)),b=c(3),d=(c(31),c(0)),o=function(e){var t=e.cell,c=e.cellIndex,n=e.rowIndex,s=e.handleClick;return Object(d.jsx)("div",{className:"board-cell",children:Object(d.jsx)("div",{className:"board-cell-light".concat(t?"":" off"),onClick:function(){return s(n,c)},children:"X"})})},h=function(e){var t=e.row,c=e.rowIndex,n=e.handleClick;return Object(d.jsx)("div",{className:"board-row",children:t.map((function(e,t){return Object(d.jsx)(o,{cell:e,rowIndex:c,cellIndex:t,handleClick:n},t)}))})},O=function(){var e=Object(n.useState)([[!1,!1,!1],[!1,!1,!1],[!1,!1,!1]]),t=Object(b.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(!1),a=Object(b.a)(r,2),l=a[0],o=a[1],O=function(e,t,c){e[t][c]=!e[t][c],t>0&&(e[t-1][c]=!e[t-1][c]),t<e.length-1&&(e[t+1][c]=!e[t+1][c]),c>0&&(e[t][c-1]=!e[t][c-1]),c<e[0].length-1&&(e[t][c+1]=!e[t][c+1])},u=Object(n.useCallback)((function(){for(var e=[[!1,!1,!1],[!1,!1,!1],[!1,!1,!1]],t=!1,c=0;c<3;c++)for(var n=0;n<3;n++){var r=1===Math.round(Math.random());!t&&r&&(t=!0),r&&(console.log(c,n),O(e,c,n))}t?s(e):u()}),[]),x=function(e,t){console.log(e,t);var n=Object(j.a)(c);O(n,e,t),n.every((function(e){return e.every((function(e){return!e}))}))&&o(!0),s(n)};return Object(n.useEffect)((function(){u()}),[u]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"board",children:c.map((function(e,t){return Object(d.jsx)(h,{row:e,rowIndex:t,handleClick:x},t)}))}),Object(d.jsx)("button",{type:"button",onClick:u,className:"wish-card__button",children:"\u0421\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0435\u0449\u0451"}),Object(d.jsx)(i.a,{className:"modal",overlayClassName:"modal-overlay",isOpen:l,onRequestClose:function(){return o(!1)},shouldCloseOnOverlayClick:!0,children:Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{className:"form-label",children:"\u0421\u0435\u043a\u0440\u0435\u0442\u043d\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"}),Object(d.jsx)("div",{className:"form-control",children:Object(d.jsx)("textarea",{id:"message",className:"form-control",name:"message",disabled:!0,value:"\u041e\u0436\u0438\u0434\u0430\u043d\u0438\u0435...\r\n\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043a\u043b\u044e\u0447\u0435\u0439 \u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u0438\u044f...\r\n\u0420\u0430\u0441\u0448\u0438\u0440\u043e\u0432\u043a\u0430 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f...\r\n...\r\n...\r\n\u041c\u043e\u043b\u043e\u0434\u0435\u0446! \r\n\u0412\u044b\u043a\u043b\u044e\u0447\u0438\u043b \u0432\u0441\u0435 \u043b\u0430\u043c\u043f\u043e\u0447\u043a\u0438.\r\n\u0412 \u043e\u0431\u0445\u043e\u0434 \u0410\u043b\u0438\u0441\u044b...\r\n\u0422\u0435\u043f\u0435\u0440\u044c \u0432 \u043a\u043e\u043c\u043d\u0430\u0442\u0435 \u0442\u0435\u043c\u043d\u043e \u0438 \u0443\u044e\u0442\u043d\u043e.\r\n\u0422\u0432\u043e\u044f \u043d\u0430\u0433\u0440\u0430\u0434\u0430 - \u0434\u0435\u043f\u0440\u0438\u0432\u0430\u0446\u0438\u044f \u0441\u043d\u0430! :p"})})]})})]})},u=(c(33),function(e){var t=e.children,c=e.task,s=e.buttonTitle,r=Object(n.useState)(!1),a=Object(b.a)(r,2),l=a[0],i=a[1];return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"wish-card ".concat(l?"flipped":""),children:Object(d.jsxs)("div",{className:"wish-card-inner",children:[Object(d.jsxs)("div",{className:"wish-card__side wish-card__front",children:[Object(d.jsx)("p",{className:"wish-card__task",children:c}),Object(d.jsx)("button",{type:"button",onClick:function(e){i((function(e){return!e}))},className:"wish-card__button",children:s})]}),Object(d.jsx)("div",{className:"wish-card__side wish-card__back",children:t})]})})})});var x=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{className:"App-header",children:Object(d.jsx)("div",{className:"cybr-wrapper",children:Object(d.jsxs)("p",{className:"cybr-btn",children:["Happy Birthday!",Object(d.jsx)("span",{children:"_"}),Object(d.jsx)("span",{className:"cybr-btn__glitch",children:"Happy Birthdev!_"}),Object(d.jsx)("span",{className:"cybr-btn__tag",children:"rA9"})]})})}),Object(d.jsxs)("main",{className:"main",children:[Object(d.jsx)("section",{children:Object(d.jsxs)(u,{task:"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u043d\u0430\u0433\u0440\u0430\u0434\u044b \u044d\u0442\u043e\u0439 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u043d\u0438\u0447\u0435\u0433\u043e \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e \u0434\u0435\u043b\u0430\u0442\u044c \u043d\u0435 \u043d\u0443\u0436\u043d\u043e.",buttonTitle:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c",children:[Object(d.jsx)("div",{className:"warzone-img"}),Object(d.jsxs)("div",{className:"warzone-img-overlay",children:["\u0417\u0434\u0435\u0441\u044c \u0432 \u0438\u0434\u0435\u0430\u043b\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u043b \u0431\u044b\u0442\u044c \u043a\u043b\u044e\u0447\u0438\u043a \u043e\u0442 Battle Pass. ",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"\u041d\u043e CoD - \u043f\u043e\u043c\u043e\u0439\u043a\u0430, Battle.net - \u043f\u043e\u043c\u043e\u0439\u043a\u0430, Blizzard - \u043f\u043e\u043c\u043e\u0439\u043a\u0430, PSN - \u043f\u043e\u043c\u043e\u0439\u043a\u0430. ",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"\u0416\u0438\u0437\u043d\u044c - \u0431\u043e\u043b\u044c."]})]})}),Object(d.jsx)("section",{children:Object(d.jsx)(u,{task:"\u0427\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043d\u0430\u0433\u0440\u0430\u0434\u0443 \u0432 \u044d\u0442\u043e\u0439 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0435 \u043f\u0440\u0438\u0434\u0435\u0442\u0441\u044f \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u043f\u043e\u0442\u0440\u0443\u0434\u0438\u0442\u044c\u0441\u044f \u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u043d\u0438\u0435.\r\n\u0426\u0435\u043b\u044c - \u043f\u043e\u0433\u0430\u0441\u0438\u0442\u044c \u0432\u0441\u0435 \u043b\u0430\u043c\u043f\u043e\u0447\u043a\u0438.",buttonTitle:"\u041f\u0440\u0438\u0441\u0442\u0443\u043f\u0438\u0442\u044c",children:Object(d.jsx)(O,{})})}),Object(d.jsx)("section",{children:Object(d.jsx)(u,{task:"\u042d\u0442\u043e \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0430 \u0441\u043e \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u043c\u0438 \u043f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f\u043c\u0438. \u041c\u043e\u0436\u043d\u043e \u0435\u0451 \u0434\u0430\u0436\u0435 \u043d\u0435 \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0442\u044c.",buttonTitle:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0432\u0441\u0435 \u0440\u0430\u0432\u043d\u043e",children:Object(d.jsxs)("div",{style:{padding:"20px",fontSize:"15px"},children:["#include('standart-\u0441ongrats')",Object(d.jsx)("br",{}),"#include('nonstandart-\u0441ongrats')",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"printAllCongrats();",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"\u0410 \u043d\u0438\u0447\u0435\u0433\u043e \u0438 \u043d\u0435 \u0432\u044b\u0432\u0435\u043b\u043e\u0441\u044c,",Object(d.jsx)("br",{})," \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u043f\u043b\u044e\u0441\u043e\u0432\u044b\u043c \u0438\u043c\u043f\u043e\u0440\u0442\u0430\u043c \u043d\u0435 \u043c\u0435\u0441\u0442\u043e \u0432 \u0432\u0435\u0431\u0435,",Object(d.jsx)("br",{})," \u043d\u043e \u0442\u0430\u043c \u043f\u0440\u0430\u0432\u0434\u0430 \u0431\u044b\u043b\u0438 \u0441\u0430\u043c\u044b\u0435-\u0441\u0430\u043c\u044b\u0435 \u043d\u0430\u0440\u044f\u0434\u043d\u044b\u0435 \u043f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f.",Object(d.jsx)("br",{})," \u0422\u0435\u043f\u0435\u0440\u044c \u0442\u044b \u043d\u0430 \u043e\u0434\u0438\u043d \u0434\u0435\u043d\u044c \u0431\u043b\u0438\u0436\u0435 \u043a \u0441\u043c\u0435\u0440\u0442\u0438 ^_^",Object(d.jsx)("br",{})," (\u043a\u0430\u043a \u0438 \u0432 \u043b\u044e\u0431\u043e\u0439 \u0434\u0440\u0443\u0433\u043e\u0439 \u0434\u0435\u043d\u044c)"]})})})]})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,35)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),r(e),a(e)}))};i.a.setAppElement("#root"),a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root")),m()}},[[34,1,2]]]);
//# sourceMappingURL=main.96cdd33b.chunk.js.map