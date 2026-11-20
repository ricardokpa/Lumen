'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { COOKIE_NAME, authToken, verifyPassword } from './auth';

export async function unlock(
  _prev: { error: string },
  formData: FormData
): Promise<{ error: string }> {
  const input = String(formData.get('password') ?? '');

  if (!verifyPassword(input)) {
    return { error: 'Incorrect password' };
  }

  const store = await cookies();
  store.set(COOKIE_NAME, authToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/portfolio',
    maxAge: 60 * 60 * 24 * 7,
  });

  redirect('/portfolio');
}