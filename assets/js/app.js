const data = new Date();

document.getElementById("currentDate").innerHTML =
data.toLocaleDateString("pt-BR",{
    weekday:"long",
    day:"2-digit",
    month:"long",
    year:"numeric"
});

renderProductionLots();