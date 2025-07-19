import { z } from 'zod';

export const NAME_MAX_LENGTH = 100;
export const PASSWORD_MIN_LENGTH = 8;
export const PASSWORD_MAX_LENGTH = 128;

export const UserSchema = z.object({
  name: z.string()
          .trim()
          .min(1, { message: '名前は必須です' })
          .max(NAME_MAX_LENGTH, { message: `名前は${NAME_MAX_LENGTH}文字以下である必要があります` }),
  password: z.string()
              .trim()
              .min(PASSWORD_MIN_LENGTH, { message: `パスワードは${PASSWORD_MIN_LENGTH}文字以上である必要があります` })
              .max(PASSWORD_MAX_LENGTH, { message: `パスワードは${PASSWORD_MAX_LENGTH}文字以下である必要があります` }),
});

export type User = z.infer<typeof UserSchema>;
