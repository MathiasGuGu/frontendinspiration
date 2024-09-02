ALTER TABLE "liked_post" RENAME TO "liked";--> statement-breakpoint
ALTER TABLE "liked" DROP CONSTRAINT "liked_post_post_post_id_fk";
--> statement-breakpoint
ALTER TABLE "liked" DROP CONSTRAINT "liked_post_user_user_clerk_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "liked" ADD CONSTRAINT "liked_post_post_id_fk" FOREIGN KEY ("post") REFERENCES "public"."post"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "liked" ADD CONSTRAINT "liked_user_user_clerk_id_fk" FOREIGN KEY ("user") REFERENCES "public"."user"("clerk_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
