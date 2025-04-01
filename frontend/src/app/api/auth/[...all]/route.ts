// Add this at the top of your API route file
export const dynamic = 'force-dynamic';

import { auth } from "@/lib/auth"; 
import { toNextJsHandler } from "better-auth/next-js";
 
export const { POST, GET } = toNextJsHandler(auth);