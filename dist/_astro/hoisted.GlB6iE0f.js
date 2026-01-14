import"./hoisted.enYHa_r8.js";const o=document.getElementById("contact-form"),d=document.getElementById("success-message");o?.addEventListener("submit",s=>{s.preventDefault();const e=new FormData(o),t=e.get("name"),n=e.get("email"),c=e.get("subject"),m=e.get("message"),a=`mailto:contact@sajuguide.com?subject=${encodeURIComponent(`[${c}] Message from ${t}`)}&body=${encodeURIComponent(`From: ${t} (${n})

${m}`)}`;window.location.href=a,d?.classList.remove("hidden")});
