(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{Kyaj:function(t,n){var o=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],e={startBtn:document.querySelector('button[data-action="start"]'),stopBtn:document.querySelector('button[data-action="stop"]'),body:document.querySelector("body")},r=null,a=!1;e.startBtn.addEventListener("click",(function(){if(a)return void console.log("Функция изменения фонового цвета уже запущена! Ничего не делаю!");r=setInterval((function(){return e.body.style.backgroundColor=o[(t=0,n=o.length-1,Math.floor(Math.random()*(n-t+1)+t))];var t,n}),1e3),a=!0})),e.stopBtn.addEventListener("click",(function(){clearInterval(r),a=!1,console.log("setInterval stopped!")}))},L1EO:function(t,n,o){},QfWi:function(t,n,o){"use strict";o.r(n);o("L1EO"),o("Kyaj")}},[["QfWi",1]]]);
//# sourceMappingURL=main.e12369545075194d806e.js.map