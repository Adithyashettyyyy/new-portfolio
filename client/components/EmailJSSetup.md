# EmailJS Setup Instructions

To make the contact form functional, you need to set up EmailJS with your email service.

## Steps:

1. **Create EmailJS Account**
   - Go to https://www.emailjs.com/
   - Sign up for a free account

2. **Add Email Service**
   - Connect your email provider (Gmail, Outlook, etc.)
   - Note the Service ID

3. **Create Email Template**
   - Create a new template
   - Use these template variables:
     - `{{name}}` - sender's name
     - `{{email}}` - sender's email
     - `{{subject}}` - message subject
     - `{{message}}` - message content
   - Note the Template ID

4. **Get Public Key**
   - Go to Account > API Keys
   - Copy your Public Key

5. **Update ContactForm.tsx**
   - Replace `service_your_service_id` with your Service ID
   - Replace `template_your_template_id` with your Template ID
   - Replace `your_public_key` with your Public Key

## Example Template:
```
Subject: New Contact Form Message: {{subject}}

From: {{name}} ({{email}})
Subject: {{subject}}

Message:
{{message}}

---
Sent via portfolio contact form
```
