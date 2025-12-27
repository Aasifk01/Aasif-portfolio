# EmailJS Setup Guide

## Why EmailJS?
EmailJS is a reliable email service that works directly from the browser without needing a backend server. It's perfect for portfolio contact forms.

## Setup Steps

### 1. Create an EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (it's FREE - 200 emails/month)
3. Sign up with your email or Google account

### 2. Add an Email Service
1. After logging in, go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended):
   - **Gmail**: Click on Gmail
   - Enter your Gmail address: `aasifkhan3756@gmail.com`
   - Click **Connect Account** and authorize EmailJS
4. Copy the **Service ID** (something like `service_xxxxxxx`)

### 3. Create an Email Template
1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template content:

**Subject:**
```
New Contact Form Message from {{from_name}}
```

**Body:**
```
You have received a new message from your portfolio contact form.

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. Click **Save**
5. Copy the **Template ID** (something like `template_xxxxxxx`)

### 4. Get Your Public Key
1. Go to **Account** → **General** in the dashboard
2. Find your **Public Key** (something like `xxxxxxxxxxxxxxx`)
3. Copy it

### 5. Update Contact.jsx
Open `src/components/Contact.jsx` and replace these lines (around line 29-31):

```javascript
const serviceId = 'YOUR_SERVICE_ID'      // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID'    // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY'      // Replace with your Public Key
```

**Example:**
```javascript
const serviceId = 'service_abc123'
const templateId = 'template_xyz789'
const publicKey = 'abcdefghijklmnop'
```

### 6. Test Your Form
1. Save the file
2. Go to your portfolio: http://localhost:5173/
3. Scroll to the Contact section
4. Fill in the form and click "Send Message"
5. Check your email (`aasifkhan3756@gmail.com`) - you should receive the message!

## Troubleshooting

### Error: "Service ID is invalid"
- Double-check your Service ID from EmailJS dashboard
- Make sure there are no extra spaces

### Error: "Template ID is invalid"
- Verify your Template ID is correct
- Ensure the template is saved and active

### Not receiving emails?
- Check your spam folder
- Verify your Gmail is connected properly in EmailJS
- Check EmailJS dashboard for delivery status

### Rate Limit Exceeded
- Free plan allows 200 emails/month
- Upgrade to paid plan if needed

## Security Note
For production, consider using environment variables:
1. Create a `.env` file in your project root
2. Add your keys:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
3. Update Contact.jsx to use:
   ```javascript
   const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
   const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
   const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
   ```

## Support
- EmailJS Documentation: https://www.emailjs.com/docs/
- Need help? Check the EmailJS dashboard for detailed guides
