import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://cwuohrmmesrbjarbobzd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3dW9ocm1tZXNyYmphcmJvYnpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkyODA3ODQsImV4cCI6MjAyNDg1Njc4NH0.Qn2Gri1kXuXyNXctjls4Zh21NWd_NGbKOPxXmz85K_c";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
