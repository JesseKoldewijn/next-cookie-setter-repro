import { cookies } from "next/headers";

export const POST = async (req: Request) => {
	const body = await req.json();

	const cookieStore = cookies();

	if (body.name && body.value) {
		const token = cookieStore.get(body.name);
		if (!token) {
			return new Response("Invalid request", { status: 400 });
		}

		const newCookieString = `${body.name}=${body.value}; path=/; max-age=3600000000; samesite=strict; secure=true; httponly=true;`;

		return new Response("Cookie updated", {
			status: 200,
			headers: { "Set-Cookie": newCookieString },
		});
	} else {
		return new Response("Invalid request", { status: 400 });
	}
};
