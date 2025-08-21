import { useState, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Youtube } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { ContactFormData } from '@/types';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    content: ['123 Artisan Lane, Woodcraft District', 'New Delhi, India 110001']
  },
  {
    icon: Phone,
    title: 'Phone',
    content: ['+91 98765 43210', '+91 11 2345 6789']
  },
  {
    icon: Mail,
    title: 'Email',
    content: ['info@artisanwoods.in', 'custom@artisanwoods.in']
  },
  {
    icon: Clock,
    title: 'Workshop Hours',
    content: ['Monday - Saturday: 9:00 AM - 7:00 PM', 'Sunday: 11:00 AM - 5:00 PM']
  }
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Phone, href: '#', label: 'WhatsApp' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });
  
  const { toast } = useToast();

  // Auto-fill quote request info if available
  useEffect(() => {
    const savedQuote = localStorage.getItem('quote-request');
    if (savedQuote) {
      try {
        const quote = JSON.parse(savedQuote);
        setFormData(prev => ({
          ...prev,
          inquiryType: 'quote-request',
          message: `Custom Project Quote Request:

Project Type: ${quote.projectType}
Wood Type: ${quote.woodType}  
Dimensions: ${quote.length} x ${quote.width} feet
Finish: ${quote.finishType}
Total Estimate: ₹${quote.totalEstimate?.toLocaleString('en-IN')}

${quote.description ? `Description: ${quote.description}` : ''}

Please contact me to discuss this custom project in detail.`
        }));
        
        // Clear the saved quote after using it
        localStorage.removeItem('quote-request');
      } catch (error) {
        console.log('Failed to parse saved quote');
      }
    }
  }, []);

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest('POST', '/api/inquiries', data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. We'll get back to you soon.",
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        inquiryType: '',
        message: ''
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  return (
    <section id="contact" className="py-20" style={{ background: 'linear-gradient(135deg, #1a1611 0%, #2d1f17 30%, #1f1711 100%)' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4" style={{ 
            color: '#f5deb3',
            textShadow: '0 2px 4px rgba(26, 22, 17, 0.6)'
          }}>
            Get In Touch
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#deb887' }}>
            Ready to start your custom woodwork project? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="font-playfair text-2xl text-white">
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-white">First Name *</Label>
                    <Input
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                      placeholder="First Name"
                      data-testid="first-name-input"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-white">Last Name *</Label>
                    <Input
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                      placeholder="Last Name"
                      data-testid="last-name-input"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-white">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    placeholder="Email Address"
                    data-testid="email-input"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-white">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    placeholder="Phone Number"
                    data-testid="phone-input"
                  />
                </div>
                
                <div>
                  <Label htmlFor="inquiryType" className="text-white">Inquiry Type</Label>
                  <Select
                    value={formData.inquiryType}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, inquiryType: value }))}
                  >
                    <SelectTrigger className="bg-white/20 border-white/30 text-white" data-testid="inquiry-type-select">
                      <SelectValue placeholder="Select Inquiry Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="custom-order">Custom Order</SelectItem>
                      <SelectItem value="product-inquiry">Product Inquiry</SelectItem>
                      <SelectItem value="quote-request">Quote Request</SelectItem>
                      <SelectItem value="general">General Information</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-white">Message *</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    placeholder="Tell us about your project or inquiry..."
                    data-testid="message-textarea"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-amber text-wood-dark hover:bg-amber-light"
                  data-testid="send-message-btn"
                >
                  {contactMutation.isPending ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div>
            <h3 className="font-playfair text-2xl font-semibold mb-6">
              Visit Our Workshop
            </h3>
            
            <div className="space-y-8 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-start gap-4" data-testid={`contact-info-${index}`}>
                    <div className="bg-amber/20 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-amber" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{info.title}</h4>
                      {info.content.map((line, lineIndex) => (
                        <p key={lineIndex} className="opacity-90">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-white/20 backdrop-blur-md p-3 rounded-lg hover:bg-white/30 transition-colors duration-200"
                    aria-label={social.label}
                    data-testid={`social-link-${index}`}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
