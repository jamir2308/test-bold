
import { NextRequest, NextResponse } from 'next/server';


export async function GET(req: NextRequest) {

      try {
         const GET_INFORMATION = 'https://bold-fe-api.vercel.app/api';
         const res = await fetch(GET_INFORMATION, {
            headers: {
               'Content-Type': 'application/json',
            },
         });
         const response = await res.json();
         if (!res.ok) {
            return NextResponse.json({ error:  response}, { status: res.status });
         }
         return NextResponse.json(response.data);
      } catch (error: any) {
         console.error('API Request Error:', error);
         return NextResponse.json({ error }, { status: error?.response?.status });
      }
}