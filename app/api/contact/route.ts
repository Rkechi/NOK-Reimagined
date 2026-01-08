import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail, ContactFormData } from '@/lib/email';

export async function POST(request: NextRequest) {
    try {
        const body: ContactFormData = await request.json();

        // Validate required fields
        if (!body.name || !body.email || !body.interest || !body.message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(body.email)) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        // Check if SMTP credentials are configured
        if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
            console.error('SMTP credentials not configured');
            return NextResponse.json(
                { error: 'Email service not configured. Please contact administrator.' },
                { status: 500 }
            );
        }

        // Send email
        const result = await sendContactEmail(body);

        return NextResponse.json(
            {
                success: true,
                message: 'Thank you for contacting us! We will get back to you within 24 hours.',
                messageId: result.messageId,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Contact form submission error:', error);
        return NextResponse.json(
            {
                error: 'Failed to send message. Please try again later or contact us directly.',
            },
            { status: 500 }
        );
    }
}
