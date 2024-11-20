import { Email } from "./EmailModel";

export class EmailService {
  private emails: Email[] = [
    {
      id: "1",
      subject: "Welcome!",
      body: "Welcome to our platform.",
      sender: "no-reply@example.com",
      recipient: "user@example.com",
      timestamp: new Date().toISOString(),
    },
    {
      id: "2",
      subject: "Discount Offer",
      body: "Get 20% off your next purchase.",
      sender: "promo@example.com",
      recipient: "user@example.com",
      timestamp: new Date().toISOString(),
    },
  ];

  public async getEmails(): Promise<Email[]> {
    return this.emails;
  }
}
