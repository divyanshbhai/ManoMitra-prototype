'use server';
/**
 * @fileOverview An AI agent that generates culturally relevant responses for mental health support.
 *
 * - generateCulturallyRelevantResponse - A function that generates culturally relevant responses for mental health support.
 * - GenerateCulturallyRelevantResponseInput - The input type for the generateCulturallyRelevantResponse function.
 * - GenerateCulturallyRelevantResponseOutput - The return type for the generateCulturallyRelevantResponse function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCulturallyRelevantResponseInputSchema = z.object({
  userInput: z.string().describe('The user input to be processed.'),
  userContext: z
    .string()
    .optional()
    .describe('Additional context about the user, if available. For example: "student" or "employee".'),
});

export type GenerateCulturallyRelevantResponseInput = z.infer<
  typeof GenerateCulturallyRelevantResponseInputSchema
>;

const GenerateCulturallyRelevantResponseOutputSchema = z.object({
  response: z.string().describe('The culturally relevant response.'),
  isCrisis: z
    .boolean()
    .describe(
      'Whether the user input indicates a crisis situation requiring immediate intervention.'
    ),
  helplineInfo: z
    .string()
    .optional()
    .describe(
      'Helpline information to display if a crisis is detected; should be blank otherwise.'
    ),
});

export type GenerateCulturallyRelevantResponseOutput = z.infer<
  typeof GenerateCulturallyRelevantResponseOutputSchema
>;

export async function generateCulturallyRelevantResponse(
  input: GenerateCulturallyRelevantResponseInput
): Promise<GenerateCulturallyRelevantResponseOutput> {
  return generateCulturallyRelevantResponseFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateCulturallyRelevantResponsePrompt',
  input: {schema: GenerateCulturallyRelevantResponseInputSchema},
  output: {schema: GenerateCulturallyRelevantResponseOutputSchema},
  prompt: `You are ManoMitra, a mental wellness companion designed to support Indian students and professionals. You are having a conversation with a user. The user's input is as follows:

  {{userInput}}

  {{#if userContext}}The user is a {{userContext}}.{{/if}}

  Your goal is to provide helpful, empathetic, and culturally relevant responses. Consider the unique challenges faced by people in India, such as academic or work pressure, societal expectations, and family dynamics. Incorporate Indian cultural contexts, idioms, and values into your responses where appropriate.

  In addition to providing support and guidance, you should also be able to detect crisis situations. If the user's input indicates that they are in immediate danger or distress, you should set the 'isCrisis' field to true and provide appropriate helpline information in the 'helplineInfo' field. Otherwise, the 'isCrisis' field should be set to false, and the 'helplineInfo' field should be blank.

  Here are some examples of crisis situations:

  - Suicidal thoughts or ideation
  - Self-harm or injury
  - Expressions of hopelessness or despair
  - Panic attacks or severe anxiety
  - Overdose or substance abuse

  If a crisis is detected, provide the following helpline information:

  "If you are in immediate danger, please call the Suicide Prevention India Foundation helpline at 022-27546669. You can also dial 100 for emergency assistance."

  Output your response in JSON format. The JSON should conform to the following schema:
  \`\`\`json
  {{output.schema}}
  \`\`\`
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

const generateCulturallyRelevantResponseFlow = ai.defineFlow(
  {
    name: 'generateCulturallyRelevantResponseFlow',
    inputSchema: GenerateCulturallyRelevantResponseInputSchema,
    outputSchema: GenerateCulturallyRelevantResponseOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
