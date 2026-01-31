import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import fs from "fs";
import path from "path";

// توکن ادمین
const checkAdmin = (req: NextRequest) => {
  const token = req.headers.get("x-admin-token");
  return token === process.env.NEXT_PUBLIC_ADMIN_PASSWORD;
};

// ---------- GET /api/posts ----------
export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const category = url.searchParams.get("category"); // فیلتر بر اساس category

  const posts = await prisma.post.findMany({
    where: category ? { category } : {},
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(posts);
}

// ---------- POST /api/posts ----------
export async function POST(req: NextRequest) {
  if (!checkAdmin(req)) 
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const formData = await req.formData();
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const category = formData.get("category") as string;
  const imageFile = formData.get("image") as File | null;

  if (!title || !content)
    return NextResponse.json({ error: "title و content اجباری هستند" }, { status: 400 });

  let imagePath: string | null = null;
  if (imageFile && imageFile.name) {
    const buffer = Buffer.from(await imageFile.arrayBuffer());
    const fileName = Date.now() + "_" + imageFile.name;
    const filePath = path.join(process.cwd(), "public/images", fileName);
    fs.writeFileSync(filePath, buffer);
    imagePath = "/images/" + fileName;
  }

  const post = await prisma.post.create({
    data: {
      title,
      content,
      category: category || null,
      image: imagePath || null,
    },
  });

  return NextResponse.json(post, { status: 201 });
}

// ---------- PUT /api/posts?id=... ----------
export async function PUT(req: NextRequest) {
  if (!checkAdmin(req)) 
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const url = new URL(req.url);
  const id = url.searchParams.get("id");
  if (!id) 
    return NextResponse.json({ error: "Missing id" }, { status: 400 });

  const formData = await req.formData();
  const title = formData.get("title") as string
  const content = formData.get("content") as string;
  const category = formData.get("category") as string;
  const imageFile = formData.get("image") as File | null;

  let data: any = { title, content, category: category  };

  if (imageFile && imageFile.name) {
    const buffer = Buffer.from(await imageFile.arrayBuffer());
    const fileName = Date.now() + "_" + imageFile.name;
    const filePath = path.join(process.cwd(), "public/images", fileName);
    fs.writeFileSync(filePath, buffer);
    data.image = "/images/" + fileName;
  }

  const updatedPost = await prisma.post.update({
    where: { id: parseInt(id) },
    data,
  });

  return NextResponse.json(updatedPost);
}

// ---------- DELETE /api/posts?id=... ----------
export async function DELETE(req: NextRequest) {
  if (!checkAdmin(req)) 
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const url = new URL(req.url);
  const id = url.searchParams.get("id");
  if (!id) 
    return NextResponse.json({ error: "Missing id" }, { status: 400 });

  await prisma.post.delete({ where: { id: parseInt(id) } });

  return NextResponse.json({ message: "Deleted" });
}