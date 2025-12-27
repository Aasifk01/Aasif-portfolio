import fs from 'fs'
import path from 'path'

const contactPath = path.resolve('src/components/Contact.jsx')

async function checkConfig() {
  console.log('\n--- EmailJS Configuration Check ---')
  
  try {
    const content = fs.readFileSync(contactPath, 'utf8')
    
    // Check if EmailJS is imported
    const hasImport = content.includes("import emailjs from '@emailjs/browser'")
    console.log(`EmailJS Import: ${hasImport ? '✅ YES' : '❌ NO'}`)
    
    if (!hasImport) {
      console.log('\n❌ Error: EmailJS is not imported in Contact.jsx')
      console.log('Please follow the setup guide in EMAILJS_SETUP.md')
      return
    }

    // Check if credentials are configured
    const hasPlaceholderServiceId = content.includes("'YOUR_SERVICE_ID'")
    const hasPlaceholderTemplateId = content.includes("'YOUR_TEMPLATE_ID'")
    const hasPlaceholderPublicKey = content.includes("'YOUR_PUBLIC_KEY'")
    
    if (hasPlaceholderServiceId || hasPlaceholderTemplateId || hasPlaceholderPublicKey) {
      console.log('\n⚠️  WARNING: EmailJS credentials are not configured!')
      console.log('\nPlease update the following in Contact.jsx:')
      if (hasPlaceholderServiceId) console.log('  - Service ID (line ~29)')
      if (hasPlaceholderTemplateId) console.log('  - Template ID (line ~30)')
      if (hasPlaceholderPublicKey) console.log('  - Public Key (line ~31)')
      console.log('\n📖 See EMAILJS_SETUP.md for detailed setup instructions')
      return
    }

    console.log('Service ID: ✅ Configured')
    console.log('Template ID: ✅ Configured')
    console.log('Public Key: ✅ Configured')
    
    // Check if emailjs.send is being used
    const hasEmailJSSend = content.includes('emailjs.send(')
    console.log(`EmailJS Send Method: ${hasEmailJSSend ? '✅ YES' : '❌ NO'}`)

    console.log('\n✅ EmailJS is properly configured!')
    console.log('🚀 Your contact form should now work correctly.')
    console.log('\n💡 Test it by:')
    console.log('   1. Running: npm run dev')
    console.log('   2. Opening: http://localhost:5173')
    console.log('   3. Filling out the contact form')
    console.log('   4. Checking your email: aasifkhan3756@gmail.com')

  } catch (error) {
    console.error('❌ Error reading Contact.jsx:', error.message)
  }
}

checkConfig()
