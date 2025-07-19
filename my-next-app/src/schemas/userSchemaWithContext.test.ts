import { userSchemaWithContext } from '@/schemas/userSchemaWithContext';
import type { User } from '@/schemas/userSchema';

describe('userSchemaWithContextでの重複チェック', () => {
  const validate = (input: User) => userSchemaWithContext(users).safeParse(input);

  const createInput = (name: string): User => ({
    name,
    password: 'pass1234',
  });

  const userAlice: User = { name: 'Alice', password: 'secret123' };
  const userBob: User = { name: 'Bob', password: 'password456' };
  const users = [userAlice, userBob];

  it('未登録の name の場合、バリデーション成功。引数をそのまま返す。', () => {
    const name = 'Charlie';
    const input = createInput(name);
    const result = validate(input);

    expect(result.success).toBe(true);
    expect(result.data).toEqual(input);
  });

  it('既存ユーザーと同じ name の場合、バリデーション失敗。undefinedを返す', () => {
    const name = userAlice.name;
    const input = createInput(name);
    const result = validate(input);

    expect(result.success).toBe(false);
    expect(result.data).toEqual(undefined);
  });
});
