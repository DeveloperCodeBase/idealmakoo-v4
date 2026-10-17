import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const isSandbox = process.env.AI_PROVIDER_MODE !== 'live' && !process.env.OPENROUTER_API_KEY;

    if (isSandbox) {
      // Mock Response
      return NextResponse.json({
        response: "من دستیار هوشمند کارخانه ایده‌آل ماکو هستم. (حالت شبیه‌ساز محلی: اتصال به OpenRouter برقرار نیست)"
      });
    }

    // Connect to OpenRouter API
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'HTTP-Referer': process.env.PUBLIC_BASE_URL || 'http://localhost:3000',
        'X-Title': 'Ideal Makoo RAG Bot',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'openai/gpt-3.5-turbo', // Default cheap model for text
        messages: messages,
      }),
    });

    if (!response.ok) {
        return NextResponse.json({ error: 'AI Gateway Error' }, { status: 502 });
    }

    const data = await response.json();
    return NextResponse.json({ response: data.choices[0].message.content });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
