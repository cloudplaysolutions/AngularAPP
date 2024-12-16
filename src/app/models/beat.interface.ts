export interface Beat {
  _id: string;
  serial_number: number;
  title: string;
  key: string;
  tempo: number;
  tag: string[];
  preview: string;
  cover_picture: string;
  owner: string;
  play_count: number;
  created_by: {
    handle: string;
  };
  producer?: {
    store: {
      general: {
        name: string;
      };
    };
    is_verfied: boolean;
  };
  prices: {
    final_price: number;
    licence: string;
  }[];
} 