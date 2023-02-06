const d =document;

export default function hamburguerMenu(panelBtn,panel,menuLink){


    d.addEventListener("click",(e)=>{
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
            d.querySelector(panel).classList.toggle("is-active");
            d.querySelector(panelBtn).classList.toggle("is-active");
        }

        if(e.target.matches(menuLink)){
            d.querySelector(panel).classList.remove("is-active");
            d.querySelector(panelBtn).classList.remove("is-active");
        }
        
    })


}  



export function codeInMarkdown(titulo,problema, file){

    
    let $template = d.getElementById("kata").content,
        $katas = d.querySelector(".katas"),
        $fragment = d.createDocumentFragment();

    fetch(`Katas/${file}`)
        .then(res => res.ok? res.text():Promise.reject(res))
        .then(text =>{
            let archivo = new showdown.Converter().makeHtml(text);
            $template.querySelector(".titulo").textContent = titulo;
            $template.querySelector(".problema").textContent = problema;
            $template.querySelector(".solucion").innerHTML = archivo;

            let $clone = d.importNode($template, true);
            $fragment.appendChild($clone);

            $katas.appendChild($fragment);

        })
        .catch(err=>{
            console.log(err)
        })
    
        
}
