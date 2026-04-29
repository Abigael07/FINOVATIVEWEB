// ─────────────────────────────────────────────────────────────────────────────
// EmailJS Configuration — Finovative Insights
// ─────────────────────────────────────────────────────────────────────────────
//
// HOW TO SET UP (5 minutes):
//
//  1. Create a free account at https://www.emailjs.com
//  2. Add an Email Service (Gmail / Outlook / custom SMTP) → copy the Service ID
//  3. Create TWO Email Templates:
//       • NOTIFY template  → sent to YOU when someone submits a form
//       • REPLY template   → sent to the CLIENT as an auto-reply
//     Each template uses {{variables}} — see the variable names below.
//  4. Go to Account → API Keys → copy your Public Key
//  5. Replace the placeholder strings below with your real values.
//
// NOTIFY template variables (available in both forms):
//   {{from_name}}     — submitter's name
//   {{from_email}}    — submitter's email
//   {{phone}}         — submitter's phone
//   {{service}}       — selected service / filing type
//   {{message}}       — extra notes/message
//   {{form_type}}     — "Enroll Now" or "Tax Filing"
//   {{tax_year}}      — tax year (Tax Filing only)
//   {{kra_pin}}       — KRA PIN (Tax Filing only)
//
// REPLY template variables (auto-reply to client):
//   {{to_name}}       — client's name
//   {{to_email}}      — client's email  ← set as "To Email" in the template
//   {{service}}       — service they requested
//   {{reply_to}}      — your business email (set as Reply-To)
//
// ─────────────────────────────────────────────────────────────────────────────

export const EMAILJS_CONFIG = {
  PUBLIC_KEY:       'YOUR_PUBLIC_KEY',        // Account → API Keys
  SERVICE_ID:       'YOUR_SERVICE_ID',        // Email Services tab
  NOTIFY_TEMPLATE:  'YOUR_NOTIFY_TEMPLATE_ID', // template sent to you
  REPLY_TEMPLATE:   'YOUR_REPLY_TEMPLATE_ID',  // auto-reply to client
};

// Your business email — shown as reply-to in client auto-replies
export const BUSINESS_EMAIL = 'info@finovativeinsights.com';