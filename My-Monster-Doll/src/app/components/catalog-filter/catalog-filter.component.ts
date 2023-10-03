import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatLegacySelectChange as MatSelectChange } from '@angular/material/legacy-select';
import { IFilterConfig } from 'src/app/models/filters';

@Component({
  selector: 'app-catalog-filter',
  templateUrl: './catalog-filter.component.html',
  styleUrls: ['./catalog-filter.component.scss']
})
export class CatalogFilterComponent implements OnInit {
  @Input() config!: IFilterConfig;
  @Output() change = new EventEmitter<{name: string, values: string[]}>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelectionChange(data: MatSelectChange) {
    this.change.emit({ name: this.config.name, values: data.value});
  }

}
