export enum AuthorType {
  User = 'user',
  Assistant = 'assistant',
}

export interface MessageModel {
  id: number | null;
  chatId: number | null;
  author: AuthorType | null;
  content: string | null;
  timestamp: Date | null;
}
