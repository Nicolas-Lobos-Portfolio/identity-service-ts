export function generateRandomCode(): string {
  const code = Math.floor(
    100000000000 + Math.random() * 900000000000,
  ).toString();
  return code.replace(/(\d{4})(?=\d)/g, '$1-'); // Inserta guiones cada 4 dígitos
}
