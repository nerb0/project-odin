const API_URL = "http://localhost:3000";

const getRoute = (route: string) => `${API_URL}/${route}`;

export async function corsFetch(route: string, options?: RequestInit) {
	return await fetch(getRoute(route), { ...options, mode: "cors" });
}
