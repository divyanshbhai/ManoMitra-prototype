'use server';
/**
 * @fileOverview An AI agent that facilitates a role-playing chat with multiple characters.
 *
 * - roleplayChat - A function that handles the multi-character chat interaction.
 * - RoleplayChatInput - The input type for the roleplayChat function.
 * - RoleplayChatOutput - The return type for the roleplayChat function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RoleplayChatHistorySchema = z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.array(z.object({
        text: z.string(),
        role: z.string().optional().describe('The character speaking (e.g., Āchārya Kai, Mitra, Salah). Required if role is model.'),
    }))
}));
// Note: This type is not exported because it cannot be used on the client without the schema,
// which cannot be exported from a 'use server' file.
// The schema has been moved to the component that uses it.
export type RoleplayChatHistory = z.infer<typeof RoleplayChatHistorySchema>;

const RoleplayChatInputSchema = z.object({
  userInput: z.string().describe('The user input to be processed.'),
  history: RoleplayChatHistorySchema.describe("The history of the conversation so far."),
});

export type RoleplayChatInput = z.infer<typeof RoleplayChatInputSchema>;


const RoleplayChatOutputSchema = z.object({
  character: z.string().describe("The name of the character who is responding."),
  response: z.string().describe("The character's response."),
});

export type RoleplayChatOutput = z.infer<
  typeof RoleplayChatOutputSchema
>;

export async function roleplayChat(
  input: RoleplayChatInput
): Promise<RoleplayChatOutput> {
  return roleplayChatFlow(input);
}

const prompt = ai.definePrompt({
  name: 'roleplayChatPrompt',
  input: {schema: RoleplayChatInputSchema},
  output: {schema: RoleplayChatOutputSchema},
  prompt: `You are a helpful assistant that facilitates a role-playing conversation between a user and a team of three AI mental wellness guides. The user is seeking guidance and support.

  Your team consists of three distinct personas:
  - **Āchārya Kai (Elderly, Wise, Male):** Drawing from ancient Indian wisdom (Vedas, Upanishads, Yoga), he offers profound, philosophical guidance. He is calm, patient, and speaks thoughtfully.
  - **Mitra (Peer, Warm, Female):** A supportive and empathetic friend. She is relatable, understanding, and offers encouragement and practical, comforting advice. She often uses encouraging and friendly language.
  - **Salah (Pragmatic, Direct, Male):** A professional and logical problem-solver. He provides structured, actionable advice and helps the user break down problems into manageable steps.

  Based on the user's latest input and the conversation history, you must determine which ONE character is best suited to respond. Generate a response from that single character's perspective. Ensure the response is consistent with their defined persona.

  **Conversation History:**
  {{#each history}}
    **{{#each this.content}}{{this.role}}{{/each}}**: {{#each this.content}}{{this.text}}{{/each}}
  {{/each}}

  **User's Latest Input:**
  {{userInput}}

  Now, decide which character should respond and generate their response.
`,
  config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
});

const roleplayChatFlow = ai.defineFlow(
  {
    name: 'roleplayChatFlow',
    inputSchema: RoleplayChatInputSchema,
    outputSchema: RoleplayChatOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
