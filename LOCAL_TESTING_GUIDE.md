# Local Testing Guide for GHL Integration

## Quick Start

### Prerequisites
- Node.js 18+ installed
- Environment variables set (see below)
- GHL account with API access

### 1. Install Dependencies
```bash
cd /Users/bobmcintosh/3dc-brain
npm install
```

### 2. Start Dev Server
```bash
npm run dev
```

**Output should show:**
```
▲ Next.js 16.2.2

  ▶ localhost:3000 (ready in xxx ms)
```

### 3. Test the Contact Form

#### Option A: Browser Testing (Recommended)
1. Open http://localhost:3000/contact
2. You should see the updated form with:
   - Full Name (text input)
   - Email Address (email input)
   - Phone Number (tel input) ← NEW
   - "Get Started" button
3. Fill in all fields:
   ```
   Name: John Doe
   Email: john.doe@example.com
   Phone: +1 (555) 123-4567
   ```
4. Click "Get Started"
5. You should see: **"Thanks! We'll be in touch soon."**
6. Form should clear

#### Option B: API Testing (curl)
```bash
# Test the API endpoint directly
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Smith",
    "email": "jane@example.com",
    "phone": "+1 (555) 987-6543"
  }'
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Contact created successfully",
  "contactId": "some-id-from-ghl"
}
```

#### Option C: Error Testing (Missing Phone)
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com"
  }'
```

**Expected Response:**
```json
{
  "error": "Missing required fields: name, email, and phone are required"
}
```

### 4. Verify in GHL

1. Log in to your GHL account
2. Go to **Contacts**
3. Look for your test contacts (the ones you just submitted)
4. Verify they appear with:
   - ✓ Full name populated
   - ✓ Email populated
   - ✓ Phone number populated
   - ✓ Tag: "3DC Brain Inquiry"

### 5. Check Browser Console

1. Open DevTools (F12 or Cmd+Option+I)
2. Go to **Console** tab
3. Submit form again
4. You should NOT see any errors
5. Network tab should show:
   - POST to `/api/contact`
   - Status: 200 (success)
   - Response: JSON with `success: true`

---

## Debugging Tips

### Issue: Form doesn't submit
**Check:**
1. All three fields are filled
2. Phone field is in valid format
3. Check browser console for errors (F12)
4. Verify `.env.local` exists with GHL credentials

### Issue: "Contact created successfully" but contact doesn't appear in GHL
**Possible causes:**
1. GHL API key expired → Request new key
2. Location ID wrong → Verify in `.env.local`
3. Contact limit reached in GHL → Check GHL plan
4. Check GHL's contact list for tag "3DC Brain Inquiry"

### Issue: Build Error
**Run:**
```bash
npm run build
```
Should complete with:
```
✓ Compiled successfully
✓ Generating static pages
```

### Issue: Dev server won't start
**Try:**
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

---

## Network Monitoring

### To see actual API calls:

1. Open DevTools → Network tab
2. In browser, submit form
3. Look for request to `/api/contact`
4. Click it, view:
   - **Request payload:** Your form data
   - **Response:** GHL contact creation response

### GHL API calls (if needed):

Enable verbose logging by adding to `lib/ghl.ts`:
```typescript
console.log('GHL Request:', {
  url: 'https://rest.gohighlevel.com/v1/contacts/',
  method: 'POST',
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
  body: JSON.stringify({...})
});
```

---

## Form Fields Verification

### Old Form (Removed)
- [x] Company (REMOVED)
- [x] Your Role (REMOVED)

### New Form (Active)
- [x] Full Name (required)
- [x] Email Address (required)
- [x] Phone Number (required) ← NEW

---

## File Locations

```
src/
├── components/EmailForm.tsx ← Updated form component
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts ← API endpoint
│   └── contact/
│       └── page.tsx ← Contact page using EmailForm
└── lib/
    └── ghl.ts ← GHL API client
    
.env.local ← Environment variables (GHL credentials)
```

---

## Environment Variables (.env.local)

Must exist in project root:
```
GHL_API_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
GHL_LOCATION_ID=0NmZi8dt10rkzz67YjpuN
```

**Do NOT commit this file** (already in .gitignore)

---

## Success Checklist

- [ ] npm install completes
- [ ] npm run dev starts without errors
- [ ] Contact page loads at localhost:3000/contact
- [ ] Form has Name, Email, Phone fields
- [ ] Form submits successfully
- [ ] Success message appears: "Thanks! We'll be in touch soon."
- [ ] Form clears after submit
- [ ] Contact appears in GHL within 10 seconds
- [ ] Contact has "3DC Brain Inquiry" tag
- [ ] Phone number is populated in GHL

---

## Next Steps After Testing

1. ✅ Test locally (this guide)
2. Push to GitHub: `git push origin main`
3. Deploy to Vercel (add env vars, re-deploy)
4. Test on live Vercel URL
5. Verify final GHL integration

---

## Quick Reference

| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |
| `Ctrl+C` | Stop dev server |

---

**Estimated time to test:** 5-10 minutes  
**Ready to deploy after successful testing:** ✓
