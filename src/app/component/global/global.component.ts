import {Component, OnInit} from '@angular/core';
import {directus, Global} from "../../../../directus";
import {CommonModule} from "@angular/common";
import {readSingleton} from "@directus/sdk";

@Component({
  selector: 'app-global',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './global.component.html',
  styleUrl: './global.component.css'
})
export class GlobalComponent implements OnInit{
  global: Global;
  ngOnInit(): void {
    this.getGlobal();
  }

  async getGlobal(){
    // //@ts-ignore
    this.global = await directus
      .request<Global>(readSingleton("global"))
  }

}