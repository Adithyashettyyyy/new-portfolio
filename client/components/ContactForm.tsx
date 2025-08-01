import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // TODO: Replace these with your actual EmailJS credentials from https://emailjs.com
      // 1. Create account at https://emailjs.com
      // 2. Add email service (Gmail/Outlook) and copy Service ID
      // 3. Create email template with variables: {{name}}, {{email}}, {{subject}}, {{message}}
      // 4. Copy Template ID and Public Key from account settings
      const serviceID = 'service_d42fda3'; // Your actual EmailJS Service ID
      const templateID = 'template_w8p0s6c'; // Your actual EmailJS Template ID
      const publicKey = 'VkNzR_DSWVnYfyYhW'; // Your actual EmailJS Public Key

      if (form.current) {
        await emailjs.sendForm(serviceID, templateID, form.current, publicKey);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto bg-card/80 border-2 border-border/60 hover:border-primary/40 transition-all duration-300 shadow-xl">
      <CardHeader className="text-center p-4 sm:p-6">
        <CardTitle className="flex items-center justify-center gap-2 text-lg sm:text-xl md:text-2xl">
          <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
          Send Me a Message
        </CardTitle>
        <CardDescription className="text-xs sm:text-sm md:text-base">
          I'd love to hear from you. Send me a message and I'll respond as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <form ref={form} onSubmit={sendEmail} className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-1 sm:space-y-2">
              <Label htmlFor="name" className="text-xs sm:text-sm">Name *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your full name"
                className="text-sm sm:text-base h-9 sm:h-10"
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-1 sm:space-y-2">
              <Label htmlFor="email" className="text-xs sm:text-sm">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                className="text-sm sm:text-base h-9 sm:h-10"
                required
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="space-y-1 sm:space-y-2">
            <Label htmlFor="subject" className="text-xs sm:text-sm">Subject *</Label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="What's this about?"
              className="text-sm sm:text-base h-9 sm:h-10"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-1 sm:space-y-2">
            <Label htmlFor="message" className="text-xs sm:text-sm">Message *</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell me about your project, question, or just say hello..."
              className="min-h-[100px] sm:min-h-[120px] md:min-h-[140px] text-sm sm:text-base"
              required
              disabled={isSubmitting}
            />
          </div>

          {submitStatus === 'success' && (
            <div className="flex items-start gap-2 p-2 sm:p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md text-green-800 dark:text-green-200">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0" />
              <span className="text-xs sm:text-sm">Message sent successfully! I'll get back to you soon.</span>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="flex items-start gap-2 p-2 sm:p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md text-red-800 dark:text-red-200">
              <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0" />
              <span className="text-xs sm:text-sm">Failed to send message. Please try again or contact me directly.</span>
            </div>
          )}

          <Button
            type="submit"
            size="lg"
            className="w-full text-sm sm:text-base py-2 sm:py-3"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-3 w-3 sm:h-4 sm:w-4 border-b-2 border-white mr-2"></div>
                <span className="text-xs sm:text-sm">Sending...</span>
              </>
            ) : (
              <>
                <Send className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm">Send Message</span>
              </>
            )}
          </Button>
        </form>

        <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-border text-center">
          <p className="text-xs sm:text-sm text-muted-foreground">
            You can also reach me directly at{' '}
            <a
              href="mailto:adithyashettyq2@gmail.com"
              className="text-primary hover:underline break-all"
            >
              adithyashettyq2@gmail.com
            </a>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
