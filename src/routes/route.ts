// this file format inside ./ is just like nextjs, i need to import my module in one enty point
// so inside a ./api/auth/[...folder] i want to import these routes

import {GET as callback} from './callback/[id]/route';
import {GET as signIn} from './signIn/route';
import {GET as signOut} from './signOut/route';
import {GET as message} from './message/route';
import {GET as error} from './error/route';
import {createEdgeRouter} from 'next-connect';
import {NextRequest} from "next/server";

interface RequestContext {
  params: {
    [key: string]: string[]
  }
}

const handler = createEdgeRouter<NextRequest, RequestContext>();

// Define your routes
handler.get('/api/auth/callback/:id', callback);
handler.get('/api/auth/signOut', signOut);
handler.get('/api/auth/signIn', signIn);
handler.get('/api/auth/message', message);
handler.get('/api/auth/error', error);

export async function GET(request: NextRequest, ctx: RequestContext) {
  console.log(request.nextUrl)
  return handler.run(request, ctx);
}