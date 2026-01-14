import"./hoisted.enYHa_r8.js";const s=document.getElementById("contact-form"),i=document.getElementById("success-message");s?.addEventListener("submit",o=>{o.preventDefault();const e=new FormData(s),t=e.get("name"),n=e.get("email"),m=e.get("subject"),c=e.get("message"),a=`mailto:csh9609@gmail.com?subject=${encodeURIComponent(`[${m}] Message from ${t}`)}&body=${encodeURIComponent(`From: ${t} (${n})

${c}`)}`;window.location.href=a,i?.classList.remove("hidden")});
