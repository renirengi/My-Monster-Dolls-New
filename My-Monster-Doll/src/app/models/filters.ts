export interface IFilterConfig {
  name: TFilterName;
  title: string;
  type: 'list';
  options?: IFilterConfigOption[];
  range?: IFilterConfigRange[];
}

export interface IFilterConfigOption {
  value: string;
  text: string;
}

export interface IFilterConfigRange {
  value: number;
  placeholder: string;
  label: string;
}

export type TFilterName = 'type' | 'character' | 'year' | 'gender' | 'series' | 'exclusive';
