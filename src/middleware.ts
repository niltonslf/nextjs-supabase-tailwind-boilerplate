import {MiddlewareConfig, NextRequest, NextResponse} from 'next/server'

export async function middleware(request: NextRequest) {
  // let response = await updateAuthSession(request)
  // response = await verifyAuthSession(request, response)

  // return response

  return NextResponse.next()
}

export const config: MiddlewareConfig = {
  matcher: ['/admin/:path*', '/login/:path*'],
}
