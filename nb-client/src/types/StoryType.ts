export interface StoryType {
  id: number;
  title: string;
  context: string;
  create_user: number;
  create_date: string;
  correction_date: string;
}

export interface StoryCommentType {
  id: number;
  context: string;
  create_id_user_st: number;
  comment_Story: number;
  create_date: string;
  correction_date: string;
  chgTemp: any;
  temp: boolean;
}
