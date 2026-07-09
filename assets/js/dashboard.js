async function loadDashboard() {

    try {

        const data = await getDashboard();

        renderKPIs(data.kpis);

        renderProductionLots(data.fila);
        document.getElementById("totalLots").textContent =
`${data.fila.length} pedidos`;

    } catch (error) {

        console.error("Erro:", error);

    }

}