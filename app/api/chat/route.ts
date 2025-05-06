import { NextRequest, NextResponse } from "next/server";
import { model } from "@/lib/gemini";
import { GET as getResume } from "../train/route";

export async function POST(req: NextRequest) {
  const { question } = await req.json();
  const resumeResponse = await getResume();
  console.log("🚀 ~ POST ~ resumeResponse:", resumeResponse)
  const { resume } = await resumeResponse.json();

  console.log("🚀 ~ POST ~ resume:", resume)
  const prompt = `
You are a recruiter assistant bot. Use the following resume content to answer questions:

Resume:
${resume}

Question:
${question}
  `;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log("🚀 ~ POST ~ text:", text)

  return NextResponse.json({ answer: text });
}
