import { type UserWebhookEvent } from "@clerk/nextjs/server";

export async function POST(request: Request) {
  const payload: UserWebhookEvent = await request.json();

  switch (payload.type) {
    case "user.created":
      return Response.json({ message: "Hello User!" });

    case "user.deleted":
      console.log("User Updated");
      return Response.json({ message: "Bye User!" });

    case "user.updated":
      console.log("User Deleted");
      return Response.json({ message: "Welcome back user!" });

    default:
      console.log("Unknown User Event");
      return Response.json({ message: "UNKNOWN EVENT TYPE" });
  }
}

export async function GET() {
  return Response.json({ message: "Hello World!" });
}
