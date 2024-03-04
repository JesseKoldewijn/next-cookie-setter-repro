"use client";

type CookieSetProps = {
	serverActionFunc: (name: string, value: string) => void;
};

const CookieSet = ({ serverActionFunc }: CookieSetProps) => {
	return (
		<button
			onClick={(e) => {
				e.preventDefault();
				serverActionFunc("cookieName", new Date().toISOString());
			}}
			type="button"
		>
			Update using client
		</button>
	);
};

export default CookieSet;
