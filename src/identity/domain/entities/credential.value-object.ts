export class Credential {
  readonly email: string;
  readonly hashedPassword: string;

  constructor(email: string, hashedPassword: string) {
    if (!email.includes('@')) throw new Error('Invalid email');
    if (!hashedPassword || hashedPassword.length < 10) {
      throw new Error('Weak password');
    }
    this.email = email;
    this.hashedPassword = hashedPassword;
  }

  comparePassword(rawPassword: string): boolean {
    // Simulación (usa bcrypt real en implementación)
    return rawPassword === this.hashedPassword;
  }
}
