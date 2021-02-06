import { Component } from '@angular/core';
import { EventHandlerService } from '../event-handler.service';
import { DrawingTools } from '../models';

@Component({
  selector: 'app-graphical-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class GraphicalToolbarComponent {
  DrawingTools = DrawingTools;
  selected = this.fabricService.selectedTool;

  constructor(private fabricService: EventHandlerService) {}

  async select(tool: DrawingTools) {
    this.fabricService.selectedTool = tool;
    this.selected = this.fabricService.selectedTool;
  }
  readFile(input){
    let inputImage = input.srcElement.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(inputImage);
    reader.onload = (event)=>{
      this.fabricService.createImage(
        reader.result as string,
      );
    }

  }
}

