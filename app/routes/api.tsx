import { Hono } from 'hono';
import { object, string } from 'valibot';
import { vValidator } from '@hono/valibot-validator';

const app = new Hono();

const schema = object({
	name: string(),
});

const routes = app.get('/echo', vValidator('query', schema), c => {
	const { name } = c.req.valid('query');
	return c.json({ message: `Hello, ${name}! from API` });
});

export type AppType = typeof routes;

export default app;
