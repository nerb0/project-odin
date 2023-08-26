const getRoute = (route: string) => `${import.meta.env.VITE_API_URL}/${route}`;

export async function corsFetch(route: string, options?: RequestInit) {
	return await fetch(getRoute(route), { ...options, mode: "cors" });
}
