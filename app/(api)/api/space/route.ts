// app/api/save/route.ts

import { NextResponse } from 'next/server';

import { auth } from '@/app/(auth)/auth';
import { saveSpace } from '@/queries/queries';

export async function POST(request: Request) {
    try {
      const { name, icon } = await request.json();
    console.log("inside route.ts", name, icon);
      if (!name || !icon) {
        return new Response("Missing required fields", { status: 400 });
      }
  
      const session = await auth();
      if (!session || !session.user) {
        return new Response("Unauthorized", { status: 401 });
      }
  
      const userId = session.user.id
  
      if(!userId){
        return;
      }

      // Save the space to the database
      const savedSpace = await saveSpace({name, icon, userId});
  
      return new Response(JSON.stringify(savedSpace), {
        status: 201,
      });
    } catch (error) {
      console.error("Error occurred while saving space:", error);
      return new Response("An error occurred while processing your request", {
        status: 500,
      });
    }
  }

  