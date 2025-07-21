// import fs from 'fs';
// import { USERS_JSON_PATH } from '@/lib/paths'
import { UserSchema } from '@/schemas/userSchema';

export default function DashboardPage() {
  // const usersJson = fs.readFileSync(USERS_JSON_PATH, 'utf-8');
  // const users = JSON.parse(usersJson);

  const inputUser = { name: 'new user', password: 'password123' };
  const validatedUser = UserSchema.parse(inputUser);

  console.log(validatedUser);

  // users.push({ id: 101, name: 'new user' });

  return (
    <main className='p-4'>
      <h1 className='text-2xl font-bold'>ダッシュボード_changed</h1>
      <p className='mt-2'>ここに記録一覧などを表示していきます。</p>
    </main>
  );
}
