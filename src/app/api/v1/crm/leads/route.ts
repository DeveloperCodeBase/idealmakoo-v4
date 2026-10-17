import { NextResponse } from 'next/server';
import { db } from '@/db';
import { crmLeads } from '@/db/schema';

export async function POST(req: Request) {
  try {
    const { contactName, contactEmail, contactPhone } = await req.json();

    if (!contactName) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }

    const newLead = await db.insert(crmLeads).values({
      contactName,
      contactEmail,
      contactPhone,
      status: 'new',
    }).returning();

    return NextResponse.json({ success: true, lead: newLead[0] });
  } catch (error) {
    console.error('Error creating CRM Lead:', error);
    return NextResponse.json({ error: 'Failed to create lead' }, { status: 500 });
  }
}
