import { UserSchema } from '@/schemas/userSchema';
import type { User } from '@/schemas/userSchema';
import type { RefinementCtx } from 'zod';

// type Props = {
//   users: User[];
//   defaultValues?: User; // 更新時などに自分の名前を許容したい場合
// };

export const userSchemaWithContext = (users: User[]) =>
  UserSchema.transform((data: User, ctx: RefinementCtx) => {
    const isNameTaken = users.some((u) => u.name === data.name);

    if (isNameTaken) {
      ctx.addIssue({
        code: 'custom',
        path: ['name'],
        message: 'この名前は既に使われています',
      });
    }

    return data;
  });
