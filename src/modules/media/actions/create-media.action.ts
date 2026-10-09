"use server";

import { redirect } from "next/navigation";

export async function createMediaAction(formData: FormData) {
  redirect("/animes/1");
}
