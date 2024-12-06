import { Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function Contact() {
  const [countryCode, setCountryCode] = useState("US");
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-2">Get in touch</h1>
        <p className="text-gray-600">
          Want to speak to someone about your startup? We'd love to chat!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First name</Label>
                <Input id="firstName" placeholder="First name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last name</Label>
                <Input id="lastName" placeholder="Last name" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@company.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone number</Label>
              <div className="flex gap-2">
                <Select value={countryCode} onValueChange={setCountryCode}>
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="US" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="US">US</SelectItem>
                    <SelectItem value="UK">UK</SelectItem>
                    <SelectItem value="CA">CA</SelectItem>
                    <SelectItem value="AU">AU</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="flex-1"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Leave us a message..."
                className="min-h-[150px]"
              />
            </div>

            <Button className="w-full">Send message</Button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-12">
          {/* Call Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Call us</h3>
            <p className="text-gray-600 mb-2">
              Call our team Mon-Fri from 9am to 5pm.
            </p>
            <div className="flex items-center gap-2 text-purple-600">
              <Phone className="w-4 h-4" />
              <a href="tel:+91 9004302155" className="hover:underline">
              +91 9004302155
              </a>
            </div>
          </div>

          {/* Chat with us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Chat with us</h3>
            <p className="text-gray-600 mb-4">
              Speak to our friendly team via live chat.
            </p>
            <div className="space-y-3">
              <Button className="w-7/12 justify-start">
                <Linkedin className="w-4 h-4 mr-2" />
                Connect on Linkedin
              </Button>
              <br />
              <Button className="w-7/12 justify-start">
                <Mail className="w-4 h-4 mr-2" />
                Shoot us an email
              </Button>
              <br />
              <Button className="w-7/12 justify-start">
                <Twitter className="w-4 h-4 mr-2" />
                Message us on Twitter
              </Button>
            </div>
          </div>

          {/* Visit Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Visit us</h3>
            <p className="text-gray-600 mb-2">
              Chat to us in person
            </p>
            <div className="flex items-start gap-2 text-purple-600">
              <MapPin className="w-4 h-4 mt-1" />
              <a
                href="https://maps.app.goo.gl/x2miRLr8rQtEMrzQA"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Mulgoan Dongri, Andheri East, Mumbai 400093
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
