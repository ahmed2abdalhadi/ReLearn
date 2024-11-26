// import { clerkMiddleware } from '@clerk/nextjs/server';

// // تعريف middleware باستخدام Clerk
// export default clerkMiddleware();

// // تكوين المسارات التي يتم تطبيق middleware عليها
// export const config = {
//   matcher: [
//     '/((?!_next/static|_next/image|favicon.ico).*)', // استثناء الموارد الثابتة
//   ],
// };
import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'], // استثناء الموارد الثابتة
};
