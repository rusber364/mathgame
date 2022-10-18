import { createClient } from '@supabase/supabase-js'
import { SUPABASE_URL, SUPABASE_KEY } from '../config/supabase.json'

export function initSupabase() {
  try {
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
    console.log(supabase)
  } catch (error) {
    console.error(error)
  }
}
