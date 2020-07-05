import { Component, OnInit } from '@angular/core';
import * as MtsData from '../mts-data/data.json';
import {Folder} from '../interfaces/folder';
import {File} from '../interfaces/file';
import { faFolder, faFile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'mts-data-tree',
  templateUrl: './mts-data-tree.component.html',
  styleUrls: ['./mts-data-tree.component.scss']
})
export class MtsDataTreeComponent {
  readonly mtsData = MtsData.tree;
  readonly faFolder = faFolder;
  readonly faFile = faFile;

  sortedNameAndTypeOfTreeData(treeItem: Array<Folder> | Array<File>): Folder[] | File[] {
    treeItem.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (nameA < nameB) {
        return - 1;
      }

      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });

    treeItem.sort((a, b) => {
      const dataTypeA = (a.type === 'folder') ? 0 : 1;
      const dataTypeB = (b.type === 'folder') ? 0 : 1;

      if (dataTypeA < dataTypeB) {
        return - 1;
      }

      if (dataTypeA > dataTypeB) {
        return 1;
      }

      return 0;
    });

    return treeItem;
  }

  toggleChild(event: MouseEvent): void {
    this.addHideClass(event.target);
  }

  addHideClass(target): void {
    target.classList.toggle('open');
    target.parentNode.querySelectorAll('.folder-toggler').forEach((toggler) => {
      if (toggler !== target) {
        toggler.classList.remove('open');
      }
    });
  }
}
