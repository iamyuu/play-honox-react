import { hc } from 'hono/client';
import type { AppType } from './routes/api';

export const client = hc<AppType>('/api');
