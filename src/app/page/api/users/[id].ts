
import { supabase } from "@/lib/supabase";
import { NextApiRequest, NextApiResponse } from "next";

expore default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "PUT") {
    // Handle GET request
    const { data, error } = await supabase.from("users").select("*").eq("id", id).single();
    const { name, email } = req.body;
    if (error) {

  }

  if ( req.method === "DELETE") {
    // Handle DELETE request
    const { error } = await supabase.from("users").delete().eq("id", id);
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    return res.status(204).end();
  }