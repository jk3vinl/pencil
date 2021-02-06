import { fabric } from 'fabric';
import { FabricShapeService } from './shape.service';
import {
  CustomFabricLine,
  CustomFabricObject,
  CustomFabricPath,
  CustomFabricRect,
  CustomFabricImage,
  DrawingColours,
  DrawingThickness,
  DrawingTools,
  FabricObjectType,
  Pointer,
} from './models';
import { Injectable } from '@angular/core';

const RANGE_AROUND_CENTER = 20;

@Injectable()
export class EventHandlerService {
  public imageDataUrl: string;
  public canvas: fabric.Canvas;
  private _selectedTool: DrawingTools = DrawingTools.SELECT;
  private previousTop: number;
  private previousLeft: number;
  private previousScaleX: number;
  private previousScaleY: number;
  set selectedTool(t: DrawingTools) {
    this.canvas.discardActiveObject();
    this.canvas.renderAll();
    this._selectedTool = t;
    if (
      this._selectedTool === DrawingTools.SELECT ||
      this._selectedTool === DrawingTools.ERASER ||
      this._selectedTool === DrawingTools.FILL
    ) {
      this.objectsSelectable(true);
    } else {
      this.objectsSelectable(false);
    }
    if (this.selectedTool === DrawingTools.GARBAGE) {
      const background = this.canvas.backgroundImage;
      this.canvas.clear();
      this.canvas.setBackgroundImage(background, () => { });
    }
    if (this.selectedTool === DrawingTools.IMAGE) {
      var reader = new FileReader();
      reader.onloadend = (event)=>{
        var data = event.target.result;
        this.fabricShapeService.createImage(
          this.canvas,
          data as string,
        );
      }
    }
  }
  get selectedTool(): DrawingTools {
    return this._selectedTool;
  }
  _selectedColour: DrawingColours = DrawingColours.BLACK;
  set selectedColour(c: DrawingColours) {
    this._selectedColour = c;
    this.canvas.discardActiveObject();
    this.canvas.renderAll();
  }
  get selectedColour(): DrawingColours {
    return this._selectedColour;
  }
  selectedThickness: DrawingThickness = DrawingThickness.THIN;
  private _isMouseDown = false;
  private _elementUnderDrawing:
    | CustomFabricRect
    | CustomFabricPath
    | CustomFabricLine
    | CustomFabricImage;
  private _initPositionOfElement: Pointer;

  constructor(private fabricShapeService: FabricShapeService) { }

  createImage(url: string){
    this.fabricShapeService.createImage(
      this.canvas,
      url,
    )
  }

  save() {
    this.fabricShapeService.save(this.canvas);
  }

  async load() {
    let data = await this.fabricShapeService.load(this.canvas);
    return data;
  }

  addBGImageSrcToCanvas(): Promise<void> {
    if (!this.imageDataUrl) {
      return;
    }
    return new Promise<void>((resolve, reject) => {
      const img = new Image();
      img.onload = async () => {
        const f_img = new fabric.Image(img);
        this.canvas.setWidth(f_img.width);
        this.canvas.setHeight(f_img.height);
        this.canvas.setBackgroundImage(f_img, resolve);
      };
      img.onerror = () => {
        reject();
      };
      img.src = this.imageDataUrl;
    });
  }

  mouseDown(e: Event) {
    this._isMouseDown = true;
    const pointer = this.canvas.getPointer(e);
    this._initPositionOfElement = { x: pointer.x, y: pointer.y };

    switch (this._selectedTool) {
      case DrawingTools.RECTANGLE:
        this._elementUnderDrawing = this.fabricShapeService.createRectangle(
          this.canvas,
          this.selectedThickness,
          this._selectedColour,
          pointer,
        );
        break;
      case DrawingTools.PENCIL:
        this._elementUnderDrawing = this.fabricShapeService.createPath(
          this.canvas,
          this.selectedThickness,
          this._selectedColour,
          pointer,
        );
        break;
      case DrawingTools.LINE:
        this._elementUnderDrawing = this.fabricShapeService.createLine(
          this.canvas,
          this.selectedThickness,
          this._selectedColour,
          [5, 0],
          pointer,
        );
        break;
      case DrawingTools.DASHED_LINE:
        this._elementUnderDrawing = this.fabricShapeService.createLine(
          this.canvas,
          this.selectedThickness,
          this._selectedColour,
          [5, 5],
          pointer,
        );
        break;
    }
  }

  mouseMove(e: Event) {
    if (!this._isMouseDown) {
      return;
    }
    const pointer = this.canvas.getPointer(e);
    switch (this._selectedTool) {
      case DrawingTools.RECTANGLE:
        this.fabricShapeService.formRectangle(
          this._elementUnderDrawing as CustomFabricRect,
          this._initPositionOfElement,
          pointer,
        );
        break;
      case DrawingTools.PENCIL:
        this.fabricShapeService.formPath(this._elementUnderDrawing as CustomFabricPath, pointer);
        break;
      case DrawingTools.LINE:
      case DrawingTools.DASHED_LINE:
        this.fabricShapeService.formLine(this._elementUnderDrawing as CustomFabricLine, pointer);
        break;
    }
    this.canvas.renderAll();
  }

  mouseUp() {
    this._isMouseDown = false;
    if (this._selectedTool === DrawingTools.PENCIL) {
      this._elementUnderDrawing = this.fabricShapeService.finishPath(this.canvas, this
        ._elementUnderDrawing as CustomFabricPath);
    }
    if (this._selectedTool !== DrawingTools.SELECT) {
      this.canvas.renderAll();
    }
  }

  extendToObjectWithId(): void {
    fabric.Object.prototype.toObject = (function (toObject) {
      return function (this: CustomFabricObject) {
        return fabric.util.object.extend(toObject.call(this), {
          id: this.id,
        });
      };
    })(fabric.Object.prototype.toObject);
  }

  objectSelected(object: CustomFabricObject): void {
    this.previousLeft = object.left;
    this.previousTop = object.top;
    this.previousScaleX = object.scaleX;
    this.previousScaleY = object.scaleY;
    switch (this._selectedTool) {
      case DrawingTools.ERASER:
        this.canvas.remove(object);
        break;
      case DrawingTools.FILL:
        this.fabricShapeService.fillShape(object, this._selectedColour);
        break;
    }
  }

  objectMoving(id: string, type: FabricObjectType, newLeft: number, newTop: number) {
    const diffX = newLeft - this.previousLeft;
    const diffY = newTop - this.previousTop;
    this.previousLeft = newLeft;
    this.previousTop = newTop;
  }

  objectScaling(
    id: string,
    type: FabricObjectType,
    newScales: { x: number; y: number },
    newCoords: { left: number; top: number },
  ) {
    const scaleDiffX = newScales.x - this.previousScaleX;
    const scaleDiffY = newScales.y - this.previousScaleY;
    this.previousScaleX = newScales.x;
    this.previousScaleY = newScales.y;
    this.objectMoving(id, type, newCoords.left, newCoords.top);
  }

  private objectsSelectable(isSelectable: boolean) {
    this.canvas.forEachObject(obj => {
      obj.selectable = isSelectable;
    });
  }
}
