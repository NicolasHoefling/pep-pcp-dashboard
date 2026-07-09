function renderProductionLots(fila){

    const productionQueue=document.querySelector(".production-queue");

    let html="";

    fila.forEach(item=>{

        html+=`

        <div class="production-card">

            <div class="production-left">

                <div class="lote">

                    <small>Lote</small>

                    <h2>${item.lote}</h2>

                </div>

                <div>

                    <h5>${item.cliente}</h5>

                    <small>${item.po}</small>

                    <p>${item.metrosCubicos} m³ • ${item.caixasEmbaladas}/${item.qtdCaixas} caixas</p>

                    <small>Carregamento: ${formatDate(item.dataCarregamento)}</small>

                </div>

            </div>

            <div>

                <span
                    class="status"
                    style="background:${item.statusColor};color:white;">

                    ${item.status}

                </span>

            </div>

            <div class="production-right">

                <div class="progress">

                    <div
                        class="progress-bar"
                        style="width:${item.percentual}%">

                    </div>

                </div>

                <small>${item.percentual}%</small>

            </div>

        </div>

        `;

    });

    productionQueue.innerHTML=html;

}

function formatDate(date){

    if(!date) return "--";

    return new Date(date).toLocaleDateString("pt-BR");

}

function renderKPIs(kpis){

    console.log(kpis);

}