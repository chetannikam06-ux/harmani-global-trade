# 📧 EmailJS Setup Guide - Direct Email to Your Inbox

## 🎯 What This Does

✅ **No More Mail App**: Form submissions won't open email applications  
✅ **Direct to Inbox**: Emails go straight to `erhardikmech1012@gmail.com`  
✅ **Professional Format**: Clean, formatted emails with all customer details  
✅ **Instant Feedback**: Users see success/error messages immediately  
✅ **Free Service**: 200 emails/month at no cost  

---

## 🚀 Step 1: Create EmailJS Account

1. Go to **[EmailJS.com](https://www.emailjs.com/)**
2. Click **"Sign Up"**
3. Use your Google account or create new account
4. Verify your email address

---

## 🔧 Step 2: Add Gmail Service

1. In EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Select **"Gmail"**
4. Click **"Connect Account"** and authorize with `erhardikmech1012@gmail.com`
5. **Copy the Service ID** (e.g., `service_abc123`) - you'll need this!

---

## 📝 Step 3: Create Email Template

1. Go to **"Email Templates"** in EmailJS dashboard
2. Click **"Create New Template"**
3. Set up the template exactly like this:

**Template Settings:**
- **Template Name**: `contact_form_harmani`

**Email Subject:**
```
New Business Inquiry from {{from_name}} - Harmani Global Trade
```

**Email Content:**
```
Hello,

You have received a new business inquiry through your website contact form.

CUSTOMER DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📝 Name: {{from_name}}
📧 Email: {{reply_to}}
📱 Phone: {{phone}}
🚢 Service Required: {{service}}

💬 MESSAGE:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Please respond to this inquiry promptly to maintain our excellent customer service standards.

You can reply directly to this email to contact the customer.

Best regards,
Harmani Global Trade Website System
```

4. **Save the template** and **copy the Template ID** (e.g., `template_xyz789`)

---

## 🔑 Step 4: Get Your Public Key

1. Go to **"Account"** in EmailJS dashboard  
2. Find **"Public Key"** (also called User ID)
3. **Copy this key** (e.g., `user_def456`)

---

## ⚙️ Step 5: Configure Your Website

You now have 3 important codes:
- **Public Key**: `user_def456` (example)
- **Service ID**: `service_abc123` (example) 
- **Template ID**: `template_xyz789` (example)

**Replace the placeholder values in your website:**

Open `assets/js/main.js` and find this section:
```javascript
const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY_HERE',    // Replace with your actual public key
  SERVICE_ID: 'YOUR_SERVICE_ID_HERE',    // Replace with your actual service ID
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID_HERE'   // Replace with your actual template ID
};
```

Replace with your actual values:
```javascript
const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'user_def456',        // Your actual public key
  SERVICE_ID: 'service_abc123',     // Your actual service ID  
  TEMPLATE_ID: 'template_xyz789'    // Your actual template ID
};
```

---

## 🧪 Step 6: Test Everything

1. **Save all files** and **commit changes** to GitHub
2. **Wait 2-3 minutes** for GitHub Pages to update
3. **Visit your website**: https://harmaniglobaltrade.com/contact.html
4. **Fill out the form** with test data
5. **Click "Send enquiry"**
6. **Check your Gmail inbox** for the email!

---

## 📧 Sample Email You'll Receive

```
Subject: New Business Inquiry from John Smith - Harmani Global Trade

Hello,

You have received a new business inquiry through your website contact form.

CUSTOMER DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📝 Name: John Smith
📧 Email: john.smith@company.com  
📱 Phone: +91 9876543210
🚢 Service Required: Export spices to UAE

💬 MESSAGE:
We are interested in importing premium Indian spices 
to UAE market. Please provide quotes for cardamom, 
turmeric, and red chili powder. Volume: 500kg monthly.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Please respond to this inquiry promptly to maintain our 
excellent customer service standards.

You can reply directly to this email to contact the customer.

Best regards,
Harmani Global Trade Website System
```

---

## ✅ What Happens After Setup

1. **Customer fills form** → No mail app opens
2. **Form shows "Sending..."** → Professional loading state  
3. **Email sent instantly** → Arrives in your Gmail inbox
4. **Success message shown** → Customer knows it worked
5. **Form clears automatically** → Ready for next inquiry

---

## 🔧 Need Help?

If something doesn't work:
1. Check browser console for errors (F12 → Console)
2. Verify all 3 keys are correctly replaced in the code
3. Ensure EmailJS service is connected to your Gmail
4. Check EmailJS dashboard for delivery status

---

## 🎉 Benefits

- ✅ **Professional Experience**: No more mail app redirects
- ✅ **Zero Missed Leads**: All inquiries go directly to your inbox  
- ✅ **Formatted Emails**: Clean, professional format every time
- ✅ **Instant Notifications**: Gmail notifications on your phone
- ✅ **Easy Replies**: Just hit reply to respond to customers
- ✅ **Free Forever**: 200 emails/month covers typical contact form usage

**Your contact form will now work like enterprise-level solutions!**