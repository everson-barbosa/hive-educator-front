const MAX_NAME_INITIAL_LENGTH = 2

export class UserParser {
  static nameToInitials(name: string) {
    return name
            .split(' ')
            .filter(part => part.trim()) 
            .slice(0, MAX_NAME_INITIAL_LENGTH) 
            .map(part => part[0].toUpperCase()) 
            .join(''); 
  }
}