<section className="py-section bg-white">
    <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row max-w-6xl mx-auto gap-10">
            {/* Form Column */}
            <div className="lg:w-7/12">
                <div
                    className={`transition-all duration-1000 delay-300 transform ${fadeIn ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                >
                    <Card className="luxury-card border-gold/20 p-1 overflow-visible">
                        <CardContent className="p-8 md:p-12 bg-white">
                            <div className="mb-10">
                                <h2 className="text-3xl font-playfair font-bold mb-4 text-black">
                                    Get in Touch
                                </h2>
                                <p className="text-black/70 font-lora">
                                    Complete the form below and we'll respond before 24
                                    hours with solutions crafted for your business needs.
                                </p>
                            </div>

                            <Form {...form}>
                                <form
                                    name="contact" // Add the name attribute for Netlify Forms
                                    netlify // Add the netlify attribute to enable Netlify Forms
                                    onSubmit={form.handleSubmit(onSubmit)} // Keep for client-side validation and UI
                                    className="space-y-8"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem className="space-y-3">
                                                    <FormLabel className="text-black/80 font-medium font-playfair">
                                                        Full Name
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="John Smith"
                                                            className="input-neon py-6 font-lora"
                                                            {...field}
                                                            name="name" // Ensure name attribute matches formSchema
                                                        />
                                                    </FormControl>
                                                    <FormMessage className="text-red-500" />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem className="space-y-3">
                                                    <FormLabel className="text-black/80 font-medium font-playfair">
                                                        Email Address
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="john@company.com"
                                                            className="input-neon py-6 font-lora"
                                                            {...field}
                                                            name="email" // Ensure name attribute matches formSchema
                                                        />
                                                    </FormControl>
                                                    <FormMessage className="text-red-500" />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <FormField
                                        control={form.control}
                                        name="company"
                                        render={({ field }) => (
                                            <FormItem className="space-y-3">
                                                <FormLabel className="text-black/80 font-medium font-playfair">
                                                    Company Name
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Your Company Ltd."
                                                        className="input-neon py-6 font-lora"
                                                        {...field}
                                                        name="company" // Ensure name attribute matches formSchema
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-red-500" />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem className="space-y-3">
                                                <FormLabel className="text-black/80 font-medium font-playfair">
                                                    Your Message
                                                </FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="Describe your procurement needs or challenges..."
                                                        rows={6}
                                                        className="input-neon resize-none font-lora"
                                                        {...field}
                                                        name="message" // Ensure name attribute matches formSchema
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-red-500" />
                                            </FormItem>
                                        )}
                                    />

                                    <div className="pt-4">
                                        <Button
                                            type="submit"
                                            className="btn-neon w-full py-6 text-lg font-playfair tracking-wide"
                                        >
                                            <Send size={18} className="mr-2" /> Submit Inquiry
                                        </Button>
                                    </div>
                                </form>
                            </Form>

                            {formSuccess && (
                                <div className="mt-8 animate-fadeIn">
                                    <Alert className="bg-gold/10 border border-gold/30 text-black rounded-none p-5">
                                        <div className="flex items-center">
                                            <CheckCircle className="h-5 w-5 text-gold mr-3" />
                                            <AlertDescription className="font-playfair font-medium text-base text-black">
                                                Your Inquiry Has Been Received—Expect Excellence
                                            </AlertDescription>
                                        </div>
                                    </Alert>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Contact Info Column */}
            <div className="lg:w-5/12">
                <div
                    className={`h-full transition-all duration-1000 delay-500 transform ${fadeIn ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                >
                    <div className="bg-navy text-white p-10 md:p-12 h-full border border-gold/30">
                        <h3 className="text-3xl font-playfair font-bold mb-10 text-black">
                            Contact Information
                        </h3>
                        <div className="space-y-8 mb-12">
                            <div className="flex items-start">
                                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mr-4 flex-shrink-0">
                                    <MapPin size={20} className="text-gold" />
                                </div>
                                <div>
                                    <h4 className="text-black font-playfair font-medium mb-1">
                                        Location
                                    </h4>
                                    <p className="text-black/80 font-lora">Pune, India</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mr-4 flex-shrink-0">
                                    <Phone size={20} className="text-gold" />
                                </div>
                                <div>
                                    <h4 className="text-black font-playfair font-medium mb-1">
                                        Phone
                                    </h4>
                                    <p className="text-black/80 font-lora">
                                        +91 84214-13992
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mr-4 flex-shrink-0">
                                    <Mail size={20} className="text-gold" />
                                </div>
                                <div>
                                    <h4 className="text-black font-playfair font-medium mb-1">
                                        Email
                                    </h4>
                                    <a
                                        href="mailto:happytohelp@admaiora.global"
                                        className="text-black/80 hover:text-gold transition-colors duration-300 font-lora"
                                    >
                                        happytohelp@admaiora.online
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mr-4 flex-shrink-0">
                                    <Twitter size={20} className="text-gold" />
                                </div>
                                <div>
                                    <h4 className="text-black font-playfair font-medium mb-1">
                                        Twitter
                                    </h4>
                                    <a
                                        href="https://x.com/AdMaioraGlobal"
                                        className="text-black/80 hover:text-gold transition-colors duration-300 font-lora"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Follow us on Twitter
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-gold/20 pt-8">
                            <h4 className="text-xl font-playfair font-bold mb-4 text-black">
                                Office Hours
                            </h4>
                            <div className="space-y-2 font-lora text-black/80">
                                <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                                <p>Saturday: 10:00 AM - 2:00 PM IST</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-20 text-center max-w-3xl mx-auto">
            <div
                className={`transition-all duration-1000 delay-700 transform ${fadeIn ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
                <div className="w-20 h-1 bg-gold mx-auto mb-8"></div>
                <h3 className="text-2xl font-playfair font-bold mb-4 text-black">
                    Our Service Promise
                </h3>
                <p className="text-black/70 font-lora leading-relaxed">
                    Ad Maiora is dedicated to providing unparalleled procurement
                    consulting services for Indian SMEs. We respond to all inquiries
                    within 24 hours and deliver tailored solutions with the highest
                    level of professionalism and confidentiality.
                </p>
            </div>
        </div>
    </div>

    {/* Embed your typeform with General embeds */}
    <div className="mt-10 text-center">
        <h2 className="text-2xl font-playfair font-bold mb-4 text-black">
            Or, connect with us directly via Typeform:
        </h2>
        <div className="max-w-md mx-auto">
            <div data-tf-live="01JT18XPPK08VZ658X3HXA0YSD"></div>
            <script src="//embed.typeform.com/next/embed.js"></script>
        </div>
    </div>
</section>
