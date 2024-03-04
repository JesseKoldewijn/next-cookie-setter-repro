import { Suspense } from "react";
import { setCookie } from "../server/cookieAction";
import ClientSetCookie from "./ClientSetCookie";
import ServerSetCookie from "./ServerSetCookie";

const CookieDisplay = async ({
	cookie = { name: "cookieName", value: "not set yet" },
	isClientComponent,
}: {
	cookie?: {
		name: string;
		value: string;
	};
	isClientComponent: boolean;
}) => {
	return (
		<Suspense>
			<pre>
				{cookie.name}: {cookie.value}
			</pre>
			{isClientComponent ? (
				<ClientSetCookie serverActionFunc={setCookie} />
			) : (
				<ServerSetCookie />
			)}
		</Suspense>
	);
};

export default CookieDisplay;
