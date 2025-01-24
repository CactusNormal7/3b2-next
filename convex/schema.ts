import { defineSchema, defineTable } from "convex/server";
  import { authTables } from "@convex-dev/auth/server";
  import { v } from "convex/values";

export default defineSchema({
  ...authTables,
  
  tasks: defineTable({
    isCompleted: v.boolean(),
    text: v.string(),
  }),
 
});
