import { Controller, Get, Route, Tags } from "tsoa";
import { Email } from "./EmailModel";
import { EmailService } from "./EmailService";

@Route("emails") // Base route is /emails
@Tags("Email") // Adds a Swagger tag for better documentation organization
export class EmailController extends Controller {
  private emailService = new EmailService();

  /**
   * Retrieves a list of emails.
   */
  @Get("/")
  public async getEmails(): Promise<Email[]> {
    return this.emailService.getEmails();
  }
}
