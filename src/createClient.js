import { createClient } from "@supabase/supabase-js";


export const supabase = createClient(
    "https://mndhsmqfecpnkcrtzauk.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1uZGhzbXFmZWNwbmtjcnR6YXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxOTkzMDMsImV4cCI6MjA1ODc3NTMwM30.9HQ3izD4cLXSiUYGwrjkUizHfsEECPLkrVXZC_lzL6s"
);