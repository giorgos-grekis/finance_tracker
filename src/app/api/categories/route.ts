import prisma from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function GET(request:Request) {
    const user = await currentUser(); 
    
    if(!user) {
        redirect("/sign-in");
    }

    const { searchParams } = new URL(request.url);
    const paramType = searchParams.get("type");

    // With nullable(), we allow a user to call this API without passing a type parameter and if a type parameter is not defined we are not filter by type
    const validator = z.enum(["expense", "income"]).nullable();
    const queryParams = validator.safeParse(paramType);

    if (!queryParams.success) {
        return Response.json(queryParams.error, {
            status: 400
        })
    }

    const type = queryParams.data;
    const category = await prisma.category.findMany({
        where: {
            userId: user.id,
            // include type in the filters if it's defined 
            ...(type && {type}),
        },
        orderBy: {
            name: "asc", 
        }
    })

    return Response.json(category); 
}