# 🔧 EmailJS Troubleshooting Guide

## Current Error: "Failed to send message. Please try again."

### Step 1: Check Browser Console for Detailed Error

1. Open your browser (http://localhost:5173)
2. Press **F12** to open Developer Tools
3. Go to the **Console** tab
4. Try submitting the form again
5. Look for error messages in red

### Common Errors and Solutions:

#### Error: "The public key is invalid"
**Solution:** Double-check your public key in EmailJS dashboard
- Go to Account → General → Public Key
- Make sure it matches: `cwWcaXjqDFAjB65NY`

#### Error: "Template ID is invalid" or "Template not found"
**Solution:** Verify your template exists and is active
- Go to Email Templates in EmailJS dashboard
- Make sure template `template_8gqt2m7` exists
- Click on it to edit and verify it's saved

#### Error: "Service ID is invalid"
**Solution:** Check your email service
- Go to Email Services in EmailJS dashboard
- Verify service `service_93saw3p` exists
- Make sure Gmail is connected and authorized

#### Error: "The user ID is invalid" or CORS error
**Solution:** EmailJS might need re-initialization
- This is already fixed in the latest code update
- Refresh your browser page

---

## Step 2: Verify EmailJS Template Configuration

Your template **MUST** have these exact variable names:

### Template Variables Required:
```
{{from_name}}   - Sender's name
{{from_email}}  - Sender's email
{{message}}     - The message content
{{to_name}}     - Your name (Aasif Khan)
```

### Correct Template Example:

**Subject:**
```
New Contact Form Message from {{from_name}}
```

**Body:**
```
Hello {{to_name}},

You have received a new message from your portfolio contact form.

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

### How to Fix Template:
1. Go to EmailJS Dashboard → Email Templates
2. Click on `template_8gqt2m7`
3. Make sure the variable names match EXACTLY (including the double curly braces)
4. Click **Save**
5. Try the form again

---

## Step 3: Verify Gmail Service Connection

1. Go to EmailJS Dashboard → Email Services
2. Click on your service (`service_93saw3p`)
3. Check if Gmail is properly connected
4. If not, click **Reconnect** and authorize again
5. Make sure the "From Email" is set to: `aasifkhan3756@gmail.com`

---

## Step 4: Check EmailJS Account Status

1. Go to EmailJS Dashboard
2. Check your account status (top right)
3. Verify you haven't exceeded the free tier limit (200 emails/month)
4. Make sure your account is active

---

## Step 5: Test with EmailJS Playground

1. Go to EmailJS Dashboard
2. Click on your template (`template_8gqt2m7`)
3. Click **Test** button
4. Fill in test values:
   - from_name: "Test User"
   - from_email: "test@example.com"
   - message: "This is a test"
   - to_name: "Aasif Khan"
5. Click **Send Test Email**
6. Check if you receive the email

If the test works, the issue is in the code. If it doesn't work, the issue is in EmailJS configuration.

---

## Step 6: Alternative - Use FormSubmit (Zero Config)

If EmailJS continues to have issues, we can switch to FormSubmit which requires ZERO configuration:

Just let me know and I'll update the code to use FormSubmit instead. It's simpler but has fewer features.

---

## Debug Checklist:

- [ ] Opened browser console (F12)
- [ ] Checked for error messages
- [ ] Verified template variable names match exactly
- [ ] Confirmed Gmail service is connected
- [ ] Tested template in EmailJS dashboard
- [ ] Checked account is active and within limits
- [ ] Refreshed browser page after code updates

---

## Next Steps:

1. **Open browser console** and try the form again
2. **Copy the exact error message** from the console
3. **Share the error** with me so I can provide a specific fix

OR

Tell me the result of the EmailJS template test (Step 5)
