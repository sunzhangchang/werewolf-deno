const l=document.querySelector("#alert-mask"),t=document.querySelector("#alert"),n=t.querySelector("#alert-message"),c=t.querySelector("#alert-confirm");let e=[];c.onclick=()=>{t.style.display="none",l.style.display="none",e=e.slice(1),e.length>0&&(n.textContent=e[0],t.style.display="block",l.style.display="block")};function s(o){e.length===0&&(n.textContent=o),e.push(o),t.style.display="block",l.style.display="block"}function r(){c.click()}export{r as closeAlert,s as openAlert};
