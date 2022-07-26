export interface FreeType {
  id: number;
  title: string;
  context: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  img5: string;
  create_user: number;
  create_date: string;
  correction_date: string;
}

export interface FreeCommentType {
  id: number;
  context: string;
  create_id_user_fr: number;
  comment_NB: number;
  create_date: string;
  correction_date: string;
  chgTemp: any;
  temp: boolean;
}
