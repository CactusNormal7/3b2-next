import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  tabs: defineTable({
    isCompleted: v.boolean(),
    text: v.string(),
    content : v.any(),
  }),

  users: defineTable({
    name: v.string(),
    externalId: v.string(),
  }).index("byExternalId", ["externalId"]),
});
