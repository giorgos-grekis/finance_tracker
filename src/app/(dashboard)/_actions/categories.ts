"use server";

import prisma from "@/lib/db";
import {
  CreateCategorySchema,
  CreateCategorySchemaType,
} from "@/schema/categories";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function CreateCategory(form: CreateCategorySchemaType) {
  const parsedBaody = CreateCategorySchema.safeParse(form);

  if (!parsedBaody.success) {
    throw new Error("bad request");
  }

  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  const { name, icon, type } = parsedBaody.data;

  return await prisma.category.create({
    data: { userId: user.id, name, icon, type },
  });
}
