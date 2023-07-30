import { Button } from "@/components/shadcn/ui/button";
import { Input } from "@/components/shadcn/ui/input";
import { Label } from "@/components/shadcn/ui/label";
import { Textarea } from "@/components/shadcn/ui/textarea";

interface ContactFormProps {
onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function ContactForm({onSubmit}: ContactFormProps) {

  return(
    <form
          name="contact"
          autoComplete="on"
          method="POST"
          action="/contact/success"
          data-netlify="true"
          className="flex flex-col gap-3"
          onSubmit={onSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <Label htmlFor="name" className="label">
              Name:
            </Label>
            <Input
              className="input"
              type="text"
              name="name"
              id="name"
              required
              placeholder="Firstname Lastname"
            />
          </div>
          <div>
            <Label htmlFor="email" className="label">
              Email:
            </Label>
            <Input
              className="input"
              type="email"
              name="email"
              id="email"
              required
              placeholder="yourname@yoursite.com"
            />
          </div>
          <div>
            <Label htmlFor="subject" className="label">
              Subject:
            </Label>
            <Input
              className="input"
              type="text"
              name="subject"
              id="subject"
              placeholder="What do you want to talk about?"
            />
          </div>
          <div>
            <Label htmlFor="message" className="label">
              Your message:
            </Label>
            <Textarea
              className="textarea"
              id="message"
              name="message"
              required
              placeholder={`What do you want to say?`}
              spellCheck="true"
            />
          </div>
          <Button type="submit" className="self-start">
            Send
          </Button>
        </form>
  )
}