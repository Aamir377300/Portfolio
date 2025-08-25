# Backend Integration Setup

This guide will help you set up the backend email service for your portfolio contact form.

## 🚀 Quick Start

### 1. Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd ../portfolio-backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   ```bash
   cp env.example .env
   ```

4. **Edit the `.env` file with your email credentials:**
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   RECIPIENT_EMAIL=your-email@gmail.com
   PORT=5000
   FRONTEND_URL=http://localhost:5173
   ```

### 2. Gmail Setup (Recommended)

1. **Enable 2-Factor Authentication:**
   - Go to your Google Account settings
   - Enable 2-Factor Authentication

2. **Generate App Password:**
   - Visit: https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Copy the 16-character password
   - Use this as your `EMAIL_PASS` in `.env`

### 3. Start Both Servers

#### Terminal 1 - Backend:
```bash
cd portfolio-backend
npm run dev
```

#### Terminal 2 - Frontend:
```bash
cd portfolio
npm run dev
```

## 📧 Email Configuration

### Gmail (Recommended)
```env
EMAIL_USER=your.email@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop  # 16-character app password
```

### Other Providers
Update `server.js` service configuration:

**Yahoo:**
```javascript
service: 'yahoo'
```

**Outlook/Hotmail:**
```javascript
service: 'outlook'
```

**Custom SMTP:**
```javascript
host: 'smtp.yourdomain.com',
port: 587,
secure: false,
```

## 🔧 Troubleshooting

### Backend Not Starting
- Check if port 5000 is available
- Verify `.env` file exists and has correct values
- Check Node.js version (requires Node 14+)

### Email Not Sending
- Verify Gmail App Password is correct
- Ensure 2FA is enabled for Gmail
- Check spam folder
- Verify `EMAIL_USER` and `RECIPIENT_EMAIL` are correct

### CORS Errors
- Ensure `FRONTEND_URL` in `.env` matches your frontend URL
- Check browser console for specific CORS errors

### Rate Limiting
- Default: 5 requests per 15 minutes per IP
- Wait 15 minutes or adjust in `server.js`

## 🧪 Testing

### Test Backend API:
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Subject",
    "message": "This is a test message."
  }'
```

### Test Health Endpoint:
```bash
curl http://localhost:5000/api/health
```

## 🌐 Production Deployment

### Environment Variables
```env
NODE_ENV=production
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
RECIPIENT_EMAIL=your-email@gmail.com
FRONTEND_URL=https://your-portfolio-domain.com
```

### Deployment Platforms
- **Heroku**: Add environment variables in dashboard
- **Railway**: Connect GitHub and set environment variables
- **DigitalOcean**: Use App Platform
- **AWS**: Use Elastic Beanstalk or Lambda

### Update Frontend URL
Update the fetch URL in `Contact.jsx` for production:
```javascript
const response = await fetch('https://your-backend-domain.com/api/contact', {
  // ... rest of the code
})
```

## 📦 Project Structure
```
portfolio-backend/
├── server.js          # Main server file
├── package.json       # Dependencies and scripts
├── .env              # Environment variables (create this)
├── env.example       # Environment template
└── README.md         # Backend documentation
```

## 🔒 Security Features

- ✅ Rate limiting (5 requests/15min)
- ✅ Input validation
- ✅ CORS protection
- ✅ Helmet security headers
- ✅ No sensitive data exposure
- ✅ Email address validation

## 📊 Status Indicators

The contact form now includes:
- **Loading state**: Spinner animation while sending
- **Success state**: Green confirmation message
- **Error state**: Red error message with details
- **Automatic reset**: Form clears on successful submission

## 🎨 Email Template

Emails are sent with a beautiful HTML template including:
- Professional gradient header
- Organized contact information
- Clean message formatting
- Timestamp and source identification
- Mobile-responsive design

## 📞 Support

If you encounter any issues:
1. Check the terminal for error messages
2. Verify all environment variables are set
3. Ensure both servers are running
4. Check the browser console for frontend errors
5. Test the backend API directly with curl

Your portfolio contact form is now fully functional with email delivery! 🎉
