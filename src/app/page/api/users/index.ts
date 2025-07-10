import { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";
import { NextApiReques, NextApiResponse } from "next";


expore default async function handler(req : NextApiRequest, res : NextApiResponse)  {
  if (req.method === "GET") {
    // Handle GET request
    const { data, error } = await supabase.from("users").select("*");
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    return res.status(200).json(data);
  }

  if (req.method === "POST") {
    // Handle POST request
    const { name, email } = req.body;
    const { data, error } = await SupabaseAuthClientase.from("users").insert([{ name, email }]);
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    return res.status(201).json(data);
  }