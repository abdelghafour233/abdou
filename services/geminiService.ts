import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are an expert technical sales assistant for a high-performance industrial "Manual Fuel, Oil, and Fluid Transfer Pump".
The product details are:
- Type: Manual pump (hand-operated), highly efficient and durable.
- Performance: High speed transfer for a manual pump, safe transfer.
- Safety: Leak prevention technology, sealed pipes.
- Versatility: Works with fuel (diesel/petrol), oils, and other industrial fluids.
- Eco-friendly: Reduces waste/spills.
- Maintenance: Low maintenance, durable design.
- Target Audience: Industrial facilities, gas stations, oil workshops.

Your Role:
- Answer questions about the pump's capabilities, safety, and usage in Arabic.
- Be professional, persuasive, and helpful.
- If asked about price, say "Please fill out the order form below for a custom quote based on your quantity."
- Keep answers concise (under 3 sentences where possible).
- Respond ONLY in Arabic.
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return "عذراً، نظام الذكاء الاصطناعي غير متصل حالياً. يرجى المحاولة لاحقاً.";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "عذراً، لم أستطع فهم سؤالك. يرجى التواصل مع فريق المبيعات.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "واجهنا مشكلة تقنية بسيطة. يرجى المحاولة مرة أخرى.";
  }
};