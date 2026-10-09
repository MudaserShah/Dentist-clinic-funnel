import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { practiceName, doctorName, email, phone, pmsSystem, operatories, monthlyMissedCalls, preferredSlot } = data;

    if (!practiceName || !email || !phone) {
      return NextResponse.json(
        { error: "Practice name, email, and phone number are required." },
        { status: 400 }
      );
    }

    // In a production setup, this stores to CRM / sends Slack alert / triggers Cal.com
    console.log("New Dental Voice AI Funnel Lead captured:", {
      practiceName,
      doctorName,
      email,
      phone,
      pmsSystem,
      operatories,
      monthlyMissedCalls,
      preferredSlot,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: `Strategy call successfully reserved for ${practiceName}. Our clinical onboarding director will send your confirmation link and bespoke dental script audit within 15 minutes.`,
      leadId: "DENT-" + Math.floor(100000 + Math.random() * 900000),
    });
  } catch (err: any) {
    return NextResponse.json({ error: "Failed to process booking request" }, { status: 500 });
  }
}
