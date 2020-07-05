import {File} from './file';

export interface Folder {
  name: string;
  type: string;
  children: Array<Folder> | Array<File>;
}
