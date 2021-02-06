import { fabric } from 'fabric';
import { AuthService } from "../shared/services/auth.service";
import {
  CustomFabricLine,
  CustomFabricObject,
  CustomFabricPath,
  CustomFabricRect,
  CustomFabricImage,
  DrawingColours,
  DrawingThickness,
  FabricObjectType,
  Pointer,
} from './models';
import { v4 as uuid } from 'uuid';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FabricShapeService {
  constructor(
    public authService: AuthService,
  ) { }
  fillShape(object: CustomFabricObject, colour: DrawingColours) {
    switch (object.type) {
      case FabricObjectType.RECT:
        object.fill = this.setOpacity(colour, 0);
        break;
      case FabricObjectType.LINE:
      case FabricObjectType.PATH:
        object.stroke = colour;
        break;
    }
  }


  private setOpacity(colour: DrawingColours, to: number): string {
    const opacityOfRGBA = new RegExp('(\\d\\.\\d|\\d)\\)');
    return colour.replace(opacityOfRGBA, `${to})`);
  }


  // Creators
  createImage(
    canvas: fabric.Canvas,
    url: string,
  ): CustomFabricImage {
    fabric.Image.fromURL(url, function(oImg) {
      oImg.scale(0.5);
      canvas.add(oImg);
    }) as CustomFabricImage;
  }

  createRectangle(
    canvas: fabric.Canvas,
    thickness: DrawingThickness,
    colour: DrawingColours,
    pointer: Pointer,
  ): CustomFabricRect {
    const rect = new fabric.Rect({
      left: pointer.x,
      top: pointer.y,
      strokeWidth: thickness,
      stroke: colour,
      fill: this.setOpacity(DrawingColours.WHITE, 0),
      width: 0,
      height: 0,
      selectable: false,
      hasRotatingPoint: false,
    }) as CustomFabricRect;
    rect.id = uuid();
    canvas.add(rect);
    return rect;
  }

  createPath(
    canvas: fabric.Canvas,
    selectedThickness: DrawingThickness,
    selectedColour: DrawingColours,
    pointer: Pointer,
  ): CustomFabricPath {
    const path = new fabric.Path(`M ${pointer.x} ${pointer.y}`, {
      strokeWidth: selectedThickness,
      stroke: selectedColour,
      fill: '',
      selectable: false,
      hasRotatingPoint: false,
    }) as CustomFabricPath;
    path.id = uuid();
    canvas.add(path);
    return path;
  }

  createLine(
    canvas: fabric.Canvas,
    selectedThickness: DrawingThickness,
    selectedColour: DrawingColours,
    dashArray: number[],
    pointer: Pointer,
  ): CustomFabricLine {
    const line = new fabric.Line([pointer.x, pointer.y, pointer.x, pointer.y], {
      strokeWidth: selectedThickness,
      stroke: selectedColour,
      fill: this.setOpacity(DrawingColours.WHITE, 0),
      strokeDashArray: dashArray,
      selectable: false,
      hasRotatingPoint: false,
      selection: false,
    }) as CustomFabricLine;
    line.id = uuid();
    canvas.add(line);
    return line;
  }

  // Formers


  formRectangle(rect: CustomFabricRect, initPos: Pointer, pointer: Pointer) {
    rect.set({
      width: Math.abs(initPos.x - pointer.x),
      height: Math.abs(initPos.y - pointer.y),
    });
    rect.set({ left: Math.min(pointer.x, initPos.x) });
    rect.set({ top: Math.min(pointer.y, initPos.y) });
    rect.setCoords();
  }

  formPath(path: CustomFabricPath, pointer: Pointer) {
    const newLine = ['L', pointer.x, pointer.y];
    path.path.push(newLine as any);
  }

  formLine(line: CustomFabricLine, pointer: Pointer) {
    line.set({ x2: pointer.x, y2: pointer.y });
    line.setCoords();
  }


  // Finishers

  finishPath(canvas: fabric.Canvas, path: CustomFabricPath): CustomFabricPath {
    canvas.remove(path);
    const newPath = new fabric.Path(path.path, {
      strokeWidth: path.strokeWidth,
      stroke: path.stroke,
      fill: '',
      selectable: false,
      hasRotatingPoint: false,
    }) as CustomFabricPath;
    newPath.id = path.id;
    canvas.add(newPath);
    return newPath;
  }


  save(canvas: fabric.Canvas) {
    this.authService.SaveCanvas(JSON.stringify(canvas));
  }

  async load(canvas: fabric.Canvas) {
  let data = await this.authService.LoadCanvas();
  canvas.loadFromJSON(data);
  return data;
  }
}
