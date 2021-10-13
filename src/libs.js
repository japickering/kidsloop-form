export function validateEmail(email) {
	const regex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return regex.test(String(email).toLowerCase());
}

export function login(email, password, setLoading) {
	fetch("https://my-json-server.typicode.com/kidsloop-test/accounts/sign-in", {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json;charset=utf-8",
		},
		body: JSON.stringify({ email: email, password: password }),
	})
		.then((response) => response.json())
		.then((result) => {
			// console.log(result);
			console.log("Welcome " + result.name + "!");
			setLoading(false);
		})
		.catch((err) => console.log(err));
}
