import React, { useState } from "react";

const Component = () => {
	const [name] = useState("Marouane")
	return <h1>Hi {name}</h1>;
};

export { Component };
