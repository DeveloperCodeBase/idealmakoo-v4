import { NextResponse } from 'next/server';
import { db } from '@/db';
import { crmTickets } from '@/db/schema';

export async function POST(req: Request) {
  try {
    const { subject, kind } = await req.json();

    if (!subject) {
      return NextResponse.json({ error: 'Subject is required' }, { status: 400 });
    }

    const newTicket = await db.insert(crmTickets).values({
      subject,
      kind: kind || 'support_ticket',
      status: 'received',
      priority: kind === 'quality' ? 'high' : 'normal',
    }).returning();

    return NextResponse.json({ success: true, ticket: newTicket[0] });
  } catch (error) {
    console.error('Error creating CRM Ticket:', error);
    return NextResponse.json({ error: 'Failed to create ticket' }, { status: 500 });
  }
}
