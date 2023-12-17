import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

export async function POST(req) {
    // insert one
    try {
        const prisma = new PrismaClient();
        const body = await req.json();

        console.log(body)

        const result = await prisma.users.create({
            data: body
        })
        return NextResponse.json({ status: "success", data: result }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ status: "fail", error }, { status: 404 })
    }

}