import * as React from 'react';
import { client } from '../rpc-client';

export default function Component() {
	const [name, setName] = React.useState('');
	const [message, setMessage] = React.useState('no message');

	const fetchApi = async () => {
		const res = await client.echo.$get({
			query: {
				name,
			},
		});
		const data = await res.json();
		setMessage(data.message);
	};

	return (
		<fieldset>
			<input type='text' value={name} placeholder='Your Name' onChange={e => setName((e.target as HTMLInputElement).value)} />
			<button onClick={() => fetchApi()}>Send</button>
			<div>{message}</div>
		</fieldset>
	);
}
