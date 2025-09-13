'use server';

import {
  generateCulturallyRelevantResponse,
  type GenerateCulturallyRelevantResponseInput,
} from '@/ai/flows/generate-culturally-relevant-response';

import {
  suggestStudyImprovements,
  type SuggestStudyImprovementsInput,
} from '@/ai/flows/suggest-study-improvements';

import {
    roleplayChat,
    type RoleplayChatInput,
} from '@/ai/flows/roleplay-chat-flow';

export async function getCulturallyRelevantResponse(input: GenerateCulturallyRelevantResponseInput) {
    try {
        const result = await generateCulturallyRelevantResponse(input);
        return result;
    } catch (error) {
        console.error("Error in getCulturallyRelevantResponse:", error);
        return { error: 'Failed to get response from AI.' };
    }
}

export async function getStudyImprovementSuggestions(input: SuggestStudyImprovementsInput) {
    try {
        const result = await suggestStudyImprovements(input);
        return result;
    } catch (error) {
        console.error("Error in getStudyImprovementSuggestions:", error);
        return { error: 'Failed to get suggestions from AI.' };
    }
}

export async function getRoleplayChatResponse(input: RoleplayChatInput) {
    try {
        const result = await roleplayChat(input);
        return result;
    } catch (error) {
        console.error("Error in getRoleplayChatResponse:", error);
        return { error: 'Failed to get response from AI.' };
    }
}
