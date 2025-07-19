import {
  UserSchema,
  NAME_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
  PASSWORD_MAX_LENGTH,
} from '@/schemas/userSchema';
import type { User } from '@/schemas/userSchema';

describe('UserSchemaのバリデーション', () => {
  const validate = (input: User) => UserSchema.safeParse(input);

  let name = 'Taro';
  let password = 'securePassword123';
  const createInput = (name: string, password: string): User => ({ name, password });

  it('正しいデータの場合、バリデーション成功。', () => {
    const input = createInput(name, password);
    const result = validate(input);

    expect(result.success).toBe(true);
  });

  describe('name のテスト', () => {
    it('空文字の name の場合、バリデーション失敗', () => {
      name = '';
      const input = createInput(name, password);
      const result = validate(input);

      expect(result.success).toBe(false);
    });

    it('空白文字のみの name は拒否する', () => {
      name = ' ';
      const input = createInput(name, password);
      const result = validate(input);

      expect(result.success).toBe(false);
    });

    it('長すぎる name は拒否する', () => {
      name = 'a'.repeat(NAME_MAX_LENGTH + 1);
      const input = createInput(name, password);
      const result = validate(input);

      expect(result.success).toBe(false);
    });
  });

  describe('password のテスト', () => {
    it('空文字の password は拒否する', () => {
      password = '';
      const input = createInput(name, password);
      const result = validate(input);

      expect(result.success).toBe(false);
    });

    it('空白文字のみの password は拒否する', () => {
      password = ' ';
      const input = createInput(name, password);
      const result = validate(input);

      expect(result.success).toBe(false);
    });

    it('短すぎる password は拒否する', () => {
      password = 'a'.repeat(PASSWORD_MIN_LENGTH - 1);
      const input = createInput(name, password);
      const result = validate(input);

      expect(result.success).toBe(false);
    });

    it('長すぎる password は拒否する', () => {
      password = 'a'.repeat(PASSWORD_MAX_LENGTH + 1);
      const input = createInput(name, password);
      const result = validate(input);

      expect(result.success).toBe(false);
    });
  });
});
