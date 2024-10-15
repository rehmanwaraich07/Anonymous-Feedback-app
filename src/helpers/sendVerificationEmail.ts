import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "rehmanwaraich2023@gmail.com",
      subject: "Fast Feedback || Verification Email",
      react: VerificationEmail({ username, otp: verifyCode }),
    });

    return {
      success: true,
      message: "Verification Email send Successfully",
    };
  } catch (emailError) {
    console.error("Failed to Send Verification Email: ", emailError);
    return {
      success: false,
      message: "Failed to Send Verification Email",
    };
  }
}
