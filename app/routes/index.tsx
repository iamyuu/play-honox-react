import { createRoute } from 'honox/factory';
import Counter from '../islands/counter';

export const POST = createRoute(async c => {
	const { name } = await c.req.parseBody<{ name: string }>();
	return c.redirect(`/?name=${name}`);
});

export default createRoute(c => {
	const name = c.req.query('name') ?? 'Hono';
	return c.render(
		<>
			<h1>Hello, {name}!</h1>
			<Counter />
			<form method='POST'>
				<input type='text' name='name' placeholder='name' />
				<input type='submit' />
			</form>
		</>,
	);
});
