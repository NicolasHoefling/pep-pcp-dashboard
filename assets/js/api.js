const API_URL = "http://localhost:3000";

async function getDashboard() {

    const response = await fetch(`${API_URL}/dashboard`);

    if (!response.ok) {
        throw new Error("Erro ao carregar Dashboard");
    }

    return await response.json();
}