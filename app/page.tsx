import CookieDisplay from "../components/CookieDisplay";
import { getCookie } from "../server/cookieAction";

/** Add your relevant code here for the issue to reproduce */
const Home = async () => {
	const cookie = await getCookie("cookieName");
	const cookieServer = await getCookie("cookieNameServer");

	return (
		<>
			<CookieDisplay
				cookie={{
					name: "cookieName",
					value: cookie,
				}}
				isClientComponent={true}
			/>
			<CookieDisplay
				cookie={{
					name: "cookieNameServer",
					value: cookieServer,
				}}
				isClientComponent={false}
			/>
		</>
	);
};
export default Home;
