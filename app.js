function pesquisa() {

        let section = document.getElementById("resultados-pesquisa")
        let campoPesquisa = document.getElementById("campo-pesquisa").value

        if(campoPesquisa == ""){
            section.innerHTML = "<p> <strong> Nada encontrado! </strong></p>"
            return
        }

        campoPesquisa = campoPesquisa.toLowerCase()

            let resultados = "";
            let titulo = "";
            let descricao = "";
            let tags = "";


            // Para cada dado da lista dados.js, faça o processo para tds
            for(let dado of dados) {
                titulo = dado.titulo.toLowerCase()
                descricao = dado.descricao.toLowerCase()
                alimentacao = dado.alimentacao.toLowerCase()
                classe = dado.classe.toLowerCase()
                especie = dado.especie.toLowerCase()
                ocorrencia = dado.ocorrencia.toLowerCase()
                conservacao = dado.conservacao.toLowerCase()
                tags = dado.tags.toLowerCase()

                    if((titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa) 
                        || alimentacao.includes(campoPesquisa) || classe.includes(campoPesquisa) || especie.includes(campoPesquisa)
                        || ocorrencia.includes(campoPesquisa) || conservacao.includes(campoPesquisa))){
                        
                            resultados += `
                        <div class="item-resultado">
                                <h2>
                                    <a href="#" target="_blank">${dado.titulo}</a>
                                </h2>
                                <p class="descricao-meta">${dado.descricao}</p>
                                <p><strong>Alimentação:</strong> ${dado.alimentacao}</p>
                                <p><strong>Classe:</strong> ${dado.classe}</p>
                                <p><strong>Espécie:</strong> ${dado.especie}</p>
                                <p><strong>Ocorrência:</strong> ${dado.ocorrencia}</p>
                                <p><strong>Conservação:</strong> ${dado.conservacao}</p>
                                <a href=${dado.link} target="_blank"> <strong> Informações</strong></a>
                        </div>
                        `;
                    }
                    
        
                    
            } 

            if(!resultados){
                resultados = "<p> <strong> Busca inválida. Tente outra palavra. </strong></p>"
            }
            
            section.innerHTML = resultados

                

}