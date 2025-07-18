import { z } from 'zod';

export const UserSchema = z.object({
  name: z.string()
          .trim()
          .min(1, { message: '名前は必須です' })
          .max(100, { message: '名前は100文字以下である必要があります' }),
  password: z.string()
              .trim()
              .min(8, { message: 'パスワードは8文字以上である必要があります' })
              .max(128, { message: 'パスワードは128文字以下である必要があります' }),
});

export type User = z.infer<typeof UserSchema>;
