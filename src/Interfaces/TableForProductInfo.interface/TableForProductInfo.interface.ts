export interface TableForProductInfoProps {
  title?: string;
  rows: RowData[] ;
  Stock?: boolean;
}

export type RowData  = {
  name: string;
  Data: string | number;
};
