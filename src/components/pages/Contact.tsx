import { Linkedin, Mail, Twitter } from "lucide-react";
import { useState } from "react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
});

const handleChange = (e:any) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};
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
          <form className="space-y-6"
           action="https://formsubmit.co/partnership@growthmatrix.agency"  method="POST">
             <input
                type="hidden"
                name="_captcha"
                value="false" // Disables FormSubmit's captcha
            />
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First name</Label>
                <Input type="text"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                    placeholder="First name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last name</Label>
                
                <Input type="text"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                    placeholder="Last name" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
              id="email" 
              name="email" 
              type="email" 
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@company.com" />
            </div>

            {/* <div className="space-y-2">
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
            </div> */}

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Leave us a message..."
                value={formData.message}
                onChange={handleChange}
                required
                className="min-h-[150px]"
              />
            </div>

            <Button className="w-full">Send message</Button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-12">
          {/* Chat with us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Chat with us</h3>
            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/company/growthmatrixagency"
                className="text-white hover:text-purple-400 transition-colors duration-200"
              >
                <Button className="w-7/12 justify-start">
                  <Linkedin className="w-4 h-4 mr-2" />
                  Connect on Linkedin
                </Button>
              </a>
              <br />
              <a
                href="mailto:partnership@growthmatrix.agency"
                className="text-white hover:text-purple-400 transition-colors duration-200 mt-5"
              >
                <Button className="w-7/12 justify-start">
                  <Mail className="w-4 h-4 mr-2" />
                  Shoot us an email
                </Button>
              </a>
              <br />
              <a
                href="https://x.com/growthmatrixx"
                className="text-white hover:text-purple-400 transition-colors duration-200 mt-5"
              >
                <Button className="w-7/12 justify-start" onClick={() => navigate("/")}>
                  <Twitter className="w-4 h-4 mr-2" />
                  Message us on Twitter
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
