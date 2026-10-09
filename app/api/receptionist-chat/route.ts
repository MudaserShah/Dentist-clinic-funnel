import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const SYSTEM_INSTRUCTION = `You are "Sarah", a warm, poised, highly professional AI Dental Receptionist for "Apex Dental & Implant Studio".
Your role:
- Answer patient inquiries with natural conversational warmth and prompt efficiency.
- Triage dental symptoms (e.g. sharp throbbing toothache, chipped crown, bleeding gums, swollen jaw).
- Collect necessary information gently: patient name, preferred day/time, whether they are a new or existing patient, and their dental insurance provider (e.g. Delta Dental, MetLife, Cigna, Guardian, or self-pay membership plan).
- Provide reassurance without giving unlicensed medical diagnoses.
- Keep your answers concise, warm, natural for voice phone conversation (2-4 sentences max per turn). Do not use bullet points or asterisks, write naturally as spoken speech.`;

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json();

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      // Fallback response if GEMINI_API_KEY is not yet populated
      return NextResponse.json({
        reply: "Thank you for calling Apex Dental Studio! I can certainly get you scheduled with Dr. Thorne. Are you experiencing any discomfort right now, and would morning or afternoon work better for your visit?",
        source: "fallback",
      });
    }

    const ai = new GoogleGenAI({ apiKey });

    // Format previous messages for conversation context
    const conversationContents = [];
    if (Array.isArray(history) && history.length > 0) {
      for (const msg of history.slice(-6)) {
        conversationContents.push({
          role: msg.role === "assistant" ? "model" : "user",
          parts: [{ text: msg.text }],
        });
      }
    }

    conversationContents.push({
      role: "user",
      parts: [
        {
          text: `[Patient on the phone says]: "${message || "Hi, I have a sudden toothache and need an appointment."}"`,
        },
      ],
    });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: conversationContents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 250,
      },
    });

    const replyText =
      response.text ||
      "Thank you for calling Apex Dental! We have an emergency opening with Dr. Thorne today at 2:30 PM. Shall I reserve that for you?";

    return NextResponse.json({
      reply: replyText.trim(),
      source: "gemini",
    });
  } catch (error: any) {
    console.error("Dental Receptionist API Error:", error);
    return NextResponse.json(
      {
        reply:
          "Thank you for calling Apex Dental Studio! I can get you scheduled right away. Are you looking for a routine cleaning or is there any tooth pain we should prioritize for you?",
        source: "fallback",
        error: error?.message,
      },
      { status: 200 }
    );
  }
}
