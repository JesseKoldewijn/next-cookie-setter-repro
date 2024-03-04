"use client";

const ServerSetCookie = () => {
	const handleServerSetCookie = async () => {
		await fetch("/api/update-cookie", {
			method: "POST",
			body: JSON.stringify({
				name: "cookieNameServer",
				value: new Date().toISOString(),
			}),
		});
	};

	return (
		<button
			onClick={(e) => {
				e.preventDefault();
				handleServerSetCookie();
			}}
			type="button"
		>
			Update using client
		</button>
	);
};

export default ServerSetCookie;
