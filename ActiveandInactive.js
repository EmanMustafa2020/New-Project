let tr_doms = document.querySelectorAll("tbody tr");
      
tr_doms.forEach((tr)=>{
    let td = tr.children[3];
    let status = tr.children[2];
    let td_inp = [td.children[0],td.children[2]];
    td_inp.forEach((inp)=>{
         inp.addEventListener("click",(e)=>{
            console.log("yes");
            status.innerHTML = e.target.value;
         });
    })
});