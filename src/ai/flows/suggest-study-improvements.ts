'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting study improvements based on student wellness data.
 *
 * - suggestStudyImprovements - An async function that triggers the study improvement suggestions.
 * - SuggestStudyImprovementsInput - The input type for the suggestStudyImprovements function.
 * - SuggestStudyImprovementsOutput - The return type for the suggestStudyimprovements function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestStudyImprovementsInputSchema = z.object({
  wellnessData: z
    .string()
    .describe(
      `Aggregated, anonymized data visualizations of member (student or employee) wellness trends.
Include key metrics such as Active Users, Crisis Alerts, Counselor Sessions, Recovery Rate and charts for Monthly Wellness Trends (Anxiety, Depression, Stress), Top Concerns, User Engagement, and Recovery Rates.`
    ),
});
export type SuggestStudyImprovementsInput = z.infer<typeof SuggestStudyImprovementsInputSchema>;

const SuggestStudyImprovementsOutputSchema = z.object({
  suggestions: z
    .string()
    .describe(
      'Actionable recommendations for the institution or organization to improve member well-being, based on the provided wellness data. Include suggestions related to ROI and attrition if data is available.'
    ),
});
export type SuggestStudyImprovementsOutput = z.infer<typeof SuggestStudyImprovementsOutputSchema>;

export async function suggestStudyImprovements(
  input: SuggestStudyImprovementsInput
): Promise<SuggestStudyImprovementsOutput> {
  return suggestStudyImprovementsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestStudyImprovementsPrompt',
  input: {schema: SuggestStudyImprovementsInputSchema},
  output: {schema: SuggestStudyImprovementsOutputSchema},
  prompt: `You are an administrator assistant for a university or a company.
You are provided with anonymized data about member (student or employee) wellness trends.
Based on this data, suggest actionable recommendations for the institution or organization to improve member well-being.

Data: {{{wellnessData}}}
`,
});

const suggestStudyImprovementsFlow = ai.defineFlow(
  {
    name: 'suggestStudyImprovementsFlow',
    inputSchema: SuggestStudyImprovementsInputSchema,
    outputSchema: SuggestStudyImprovementsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

    