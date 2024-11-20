/**
 * Represents an email object.
 */
export interface Email {
  id: string;
  subject: string;
  body: string;
  sender: string;
  recipient: string;
  timestamp: string;
}
