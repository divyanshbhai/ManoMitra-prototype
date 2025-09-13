import { config } from 'dotenv';

// Only load dotenv in development
if (process.env.NODE_ENV !== 'production') {
  config();
}

import '@/ai/flows/generate-culturally-relevant-response.ts';
import '@/ai/flows/suggest-study-improvements.ts';
import '@/ai/flows/roleplay-chat-flow.ts';
