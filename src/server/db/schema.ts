import { desc, relations, sql } from "drizzle-orm";
import {
  index,
  integer,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `${name}`);

export const posts = createTable(
  "post",
  {
    id: serial("id").primaryKey(),
    imageUrl: varchar("image_url", { length: 256 }),
    userClerkId: varchar("user_clerk_id", { length: 256 }),
    title: varchar("name", { length: 256 }),
    description: varchar("description", { length: 1024 }),
    link: varchar("link", { length: 256 }),
    categoryId: integer("category_id"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date(),
    ),
  },
  (example) => ({
    nameIndex: index("title_idx").on(example.title),
  }),
);

export const postsRelations = relations(posts, ({ one }) => ({
  category: one(categories, {
    fields: [posts.categoryId],
    references: [categories.id],
  }),
}));

export const categories = createTable("category", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
    () => new Date(),
  ),
});

export const likedPost = createTable("liked", {
  id: serial("id").primaryKey(),
  post: integer("post"),
  user: varchar("user").references(() => users.clerkId),
});

export const likedPostRelations = relations(likedPost, ({ one }) => ({
  post: one(posts, {
    fields: [likedPost.post],
    references: [posts.id],
  }),
}));

export const users = createTable("user", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 256 }),
  clerkId: varchar("clerk_id", { length: 256 }).unique(),
  role: varchar("role", { length: 256, enum: ["admin", "user"] }).default(
    "user",
  ),
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
    () => new Date(),
  ),
});
