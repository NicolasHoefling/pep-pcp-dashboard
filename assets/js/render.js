function renderProductionLots(){

    const productionQueue = document.querySelector(".production-queue");

    productionQueue.innerHTML = "";

    productionLots.forEach(item=>{

        productionQueue.innerHTML += `

        <div class="production-card">

            <div class="production-left">

                <div class="lote">

                    <h2>${item.lote}</h2>

                    <small>Lote</small>

                </div>

                <div>

                    <h5>${item.cliente}</h5>

                    <p>${item.m3} m³ • ${item.caixas}/${item.caixasTotal} caixas</p>

                    <small>${item.carregamento}</small>

                </div>

            </div>

            <div>

                <span class="status production">

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

}