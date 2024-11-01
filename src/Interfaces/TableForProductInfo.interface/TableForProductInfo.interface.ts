export interface TableForProductInfoProps {
  title?: string;
  rows: RowData[];
  Stock?: boolean;
}

type RowData  = {
  name: string;
  Data: string;
};
