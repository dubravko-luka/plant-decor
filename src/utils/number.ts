export function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

export const inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`);