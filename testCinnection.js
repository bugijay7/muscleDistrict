import { sql } from './config/db.js';

async function test() {
  try {
    const result = await sql`SELECT NOW()`;
    console.log('Connection successful:', result);
  } catch (error) {
    console.error('Connection error:', error);
  }
}

test();
